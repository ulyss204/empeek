angular.module('Commenter').directive('mainComment', function() {
    return {
      restrict: "E",
      scope:{
        txt:'=',
        avatar:'='
        },
      templateUrl: 'templates/directives/main-comment.html'
    };
});