angular.module('starter.controllers', [])
// ----------------------------------------
// Controller for the browse view
// ----------------------------------------
.controller('ListsCtrl', function($scope, listsService, $state) {
  $scope.lists = listsService.get();
  // New List
  $scope.newList = {
    items: []
  };
  // New item for list
  $scope.newItem = {};
  // Add an item to the new list
  $scope.addItem = function() {
    $scope.newList.items.push({
      title: $scope.newItem.title,
      done: false,
      id: $scope.newList.items.length || 0
    });
    $scope.newItem.title = null;
  };
  // Save new list
  $scope.save = function() {
    $scope.newList.id = $scope.lists.length || 0;
    listsService.add($scope.newList);
    $state.go('app.lists');
  };
})
// ----------------------------------------
// Controller for the list view
// ----------------------------------------
.controller('ListCtrl', function($scope, $stateParams, listsService) {
  $scope.list = listsService.get($stateParams.listId);
  // Delete an item
  $scope.delete = function(index) {
    console.log('dsfds')
    $scope.list.items.splice(index, 1);
  };
  $scope.edit = function(index) {
    console.log('dsfds')
  };
})
// ----------------------------------------
// Menu Controller
// ----------------------------------------
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