angular.module('Commenter').controller('ItemCreateComment',function($scope){
	
     
	$scope.block = {};

    $scope.addComment = function(product){
      
    	if(!product.texts){
        product.texts = [];
      };
    	var comment = product.texts;
      comment.push($scope.block);
      product.number = comment.length;
      $scope.block = {};
      console.log(product);
      var infoLocal = angular.toJson($scope.items);
      localStorage.setItem("objectMain", infoLocal);
	    console.log(localStorage.getItem("objectMain"));
    };
});