(function(){
  'use strict';
     angular.module('calenderApp', ['ngMaterial', 'calender'])
              .config(function($mdThemingProvider){
                    $mdThemingProvider.theme('default')
                          .primaryPalette('brown')
                          .accentPalette('red');
              });

})();