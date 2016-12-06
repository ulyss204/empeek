angular.module('Commenter').directive('mainItem', function() {
    return {
      restrict: "E",
      scope:{
        name:'=',
        number:'='
      },
      templateUrl: 'templates/directives/main-item.html'
    };
});