Myapp.controller('controller', ['$location', '$scope','Factory', function(controller, $scope, Factory, $location){


  $scope.contactMe = function(){
    Factory.contactMe($scope.contact)
    $scope.contact = null
    $scope.message = "Your message was sent. Thank you.";
  }


  }]);
