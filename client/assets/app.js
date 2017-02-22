var Myapp = angular.module('Myapp', ['ngRoute']);

Myapp.config(function ($httpProvider, $routeProvider) {

$routeProvider
.when('/',{
  templateUrl: 'index.html',
    controller: 'controller',

})

.otherwise({
    redirectTo: '/'
  });

  });
