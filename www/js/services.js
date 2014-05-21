// ----------------------------------------
// The List Service
// ----------------------------------------
angular.module('swipeToDo.services', [])
  .factory('listsService', [

    function() {

      var service = {};

      service.lists = [{
        title: 'To Dos',
        items: toDos,
        id: 0
      }, {
        title: 'Things To Buy',
        items: toBuy,
        id: 1
      }, {
        title: 'Reminders',
        items: reminders,
        id: 2
      }];

      service.add = function(list) {
        service.lists.push(list);
      };

      service.get = function(id) {
        if (!id)
          return service.lists;
        else {
          id = parseInt(id);
          for (var i = service.lists.length - 1; i >= 0; i--) {
            if (service.lists[i].id === id) {
              return service.lists[i];
            }
          };
        }
      };

      service.find = function(query) {
        var items = [];
        angular.forEach(service.lists, function(list) {
          Array.prototype.push.apply(items, list.items);
        });
        return _.filter(items, function(item) {
          return item.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
      };

      return service;
    }
  ]);


// ----------------------------------------
// Mock Data
// ----------------------------------------
// Things to do
var toDos = [{
  title: 'Build a real backend',
  done: false,
  id: 0
}, {
  title: 'Write tests',
  done: false,
  id: 1
}, {
  title: 'Design a logo',
  done: false,
  id: 2
}, {
  title: 'Add more animations',
  done: false,
  id: 3
}, {
  title: 'Actually implement edit item',
  done: false,
  id: 4
}, {
  title: 'Add a back button',
  done: false,
  id: 5
}];

// Reminder
var reminders = [{
  title: 'Take out trash',
  done: false,
  id: 0
}, {
  title: 'Pick up dry-cleaning',
  done: false,
  id: 1
}, {
  title: 'Pay bills',
  done: false,
  id: 2
}, {
  title: 'Lunch with someone',
  done: false,
  id: 2
}];


// Things to buy
var toBuy = [{
  title: 'CD',
  done: false,
  id: 0
}, {
  title: 'boom box',
  done: false,
  id: 1
}, {
  title: 'quilt',
  done: false,
  id: 2
}, {
  title: 'stockings',
  done: false,
  id: 3
}, {
  title: 'card',
  done: false,
  id: 4
}, {
  title: 'tooth pick',
  done: false,
  id: 5
}, {
  title: 'shawl',
  done: false,
  id: 6
}, {
  title: 'speakers',
  done: false,
  id: 7
}, {
  title: 'key chain',
  done: false,
  id: 8
}, {
  title: 'cork',
  done: false,
  id: 9
}, {
  title: 'helmet',
  done: false,
  id: 10
}, {
  title: 'mouse pad',
  done: false,
  id: 11
}, {
  title: 'zipper',
  done: false,
  id: 12
}, {
  title: 'glasses',
  done: false,
  id: 13
}, {
  title: 'lamp shade',
  done: false,
  id: 14
}, {
  title: 'sketch pad',
  done: false,
  id: 15
}, {
  title: 'gage',
  done: false,
  id: 16
}, {
  title: 'plastic fork',
  done: false,
  id: 17
}, {
  title: 'flag',
  done: false,
  id: 18
}, {
  title: 'clay pot',
  done: false,
  id: 19
}, {
  title: 'check book',
  done: false,
  id: 20
}, {
  title: 'seat belt',
  done: false,
  id: 21
}, {
  title: '#2 pencil',
  done: false,
  id: 22
}, {
  title: 'fake flowers',
  done: false,
  id: 23
}, {
  title: 'sticky note',
  done: false,
  id: 24
}, {
  title: 'hair tie',
  done: false,
  id: 25
}, {
  title: 'credit card',
  done: false,
  id: 26
}, {
  title: 'sun glasses',
  done: false,
  id: 27
}];