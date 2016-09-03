/* global angular */

angular.module('flapperNews')
.controller('NavCtrl', [
'$scope',
'Auth',
function($scope, Auth){
  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;
  
  // Expose current user if it exists.
  Auth.currentUser().then(function (user){
    $scope.user = user;
  });
  
  // Authentication event listeners.
  $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
  });
  
}]);