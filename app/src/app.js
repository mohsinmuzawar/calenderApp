(function(){
  'use strict';
     angular.module('starterApp', ['ngMaterial', 'calender'])
              .config(function($mdThemingProvider){
                    $mdThemingProvider.theme('default')
                          .primaryPalette('brown')
                          .accentPalette('red');
              });

})();