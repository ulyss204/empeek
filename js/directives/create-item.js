angular.module('Commenter').directive('main-item', function($scope) {
  return {
    
    restrict: 'E',
    scope: {
      name:'=',
      number:'='
    },
    templateUrl: '/templates/directives/main-item.html'
    
  };
});