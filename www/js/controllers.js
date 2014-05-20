angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {})

// Controller for the browse view
.controller('ListsCtrl', function($scope, listsService) {
  $scope.lists = listsService.get();
})
// Controller for the list view
.controller('ListCtrl', function($scope, $stateParams, listsService) {
  $scope.list = listsService.get($stateParams.listId);
})
// Menu Controller
.controller('MenuCtrl', function($scope, listsService) {
  $scope.lists = listsService;

  // Search to do lists
  $scope.search = function() {
    if ($scope.query)
      $scope.results = $scope.lists.find($scope.query);
    else
      $scope.clear();
  };
  // clear search
  $scope.clear = function() {
    $scope.query = null;
    $scope.results = null;
  };
});