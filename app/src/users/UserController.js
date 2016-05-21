(function(){

  angular
       .module('users')
       .controller('UserController', 
          UserController
       );

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function UserController( userService, $mdDialog, $mdBottomSheet, $timeout, $log ) {
    var self = this;

    
    var date = new Date(2013, 0, 1);
    var done = false;
    self.year2013 = [];
    var month = [];
    var month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var currentMonth = 0;
    var id = 1;
    var holidayFlag = false;
    self.onDayClick = function (id,ev) {
      
        $mdDialog.show({
          controller: DialogController,
          templateUrl: './src/users/view/holidayDetails.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: true,
          locals: { holiday: userService.getHolidaysDetails(id) },
        });
    };
    while (!done) {
    // show whatever markup you want for each day  
      month.push({
              id : id,
              holidayInfo : userService.getHolidaysDetails(id),
              date : date.getDate(),
              month : date.getMonth()
            });
      id++;
        // go to the next day  
      date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);   
      // end the loop if it is another year  
      if(currentMonth != date.getMonth()){
        
        self.year2013.push({
          img : "./assets/images/" +month_names[currentMonth].toLowerCase()+".jpg",
          month : month_names[currentMonth],
          days : month});
          currentMonth ++;
        month = [];
      }
      if (date.getFullYear() > 2013) {    done = true;  }
    }
    console.log(self.year2013);
     
   

  }
  function DialogController($scope, $mdDialog,holiday) {
    console.log(holiday);
    $scope.date = new Date(2013, holiday.month-1, holiday.date);
    $scope.holiday = holiday;
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
  
  

})();
