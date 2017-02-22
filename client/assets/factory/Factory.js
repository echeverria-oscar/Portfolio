Myapp.factory('Factory',['$http', function($http){

  var factory = {};

  factory.contactMe = function(contact, callback){
    $http({
      method: "Post",
      url: "/contact",
      data: contact
    }).then(function(returned_data){
      // console.log(returned_data.data);
      callback(returned_data.data);
    })
  }

  return factory;
}])
