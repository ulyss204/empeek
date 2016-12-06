angular.module('Commenter').controller('ItemCreateController',function($scope){
     
	$scope.block = {};

    $scope.addReview = function(product){
      product.number = 0;
      product.push($scope.block);
      
      $scope.block = {};
      //save to local storage
      var infoLocal = angular.toJson(product);
      localStorage.setItem("objectMain", infoLocal);
	  
    };
    $scope.remove = function(item) {
  		var index = $scope.items.indexOf(item);
  	
  		$scope.items.splice(index,1);
  		//save to local storage
  		var infoLocal = angular.toJson($scope.items);
        localStorage.setItem("objectMain", infoLocal);
	  
	};
});