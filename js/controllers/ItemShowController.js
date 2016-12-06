angular.module('Commenter').controller('ItemShowController',['$scope',function($scope){

	var retInfo = angular.fromJson(localStorage.getItem("objectMain"));
	$scope.items = retInfo;
	
	
	$scope.tab = 0;

	$scope.isSet = function(checkTab) {
	return $scope.tab === checkTab;

	};

	$scope.setTab = function(activeTab) {
		
	$scope.tab = activeTab;

};
    
}]);