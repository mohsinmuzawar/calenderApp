(function(){
  'use strict';
     angular.module('calenderApp', ['ngMaterial', 'calender'])
              .config(function($mdThemingProvider){
                    
                    // setting material theme colors
                    $mdThemingProvider.theme('default')
                          .primaryPalette('brown')
                          .accentPalette('red');
              });

})();