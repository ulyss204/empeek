(function(){
	var app = angular.module('Commenter', []);

	app.controller('ItemShowController',function(){
		this.items = info;
	});
	app.directive('mainItem', function() {
  		return {
    		restrict: "E",
    		templateUrl: 'templates/directives/main-item.html'
  		};
	});
	var info = [{
		name:'Default',
		number: 10
	}];
})();