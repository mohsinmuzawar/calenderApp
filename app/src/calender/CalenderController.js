(function(){

  angular
       .module('calender')
       .controller('CalenderController', 
          CalenderController
       );

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function CalenderController( calenderService, $mdDialog, $mdBottomSheet, $timeout, $log ) {
    var self = this;

    
    var date = new Date(2013, 0, 1);
    var done = false;
    self.calender = [];
    var month = [];
    var month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var currentMonth = 0;
    var id = 1;
    var holidayFlag = false;
   
    self.onDayClick = function (id,ev) {
      var temp = calenderService.getHolidaysDetails(id);
      if(temp)
        $mdDialog.show({
          controller: function HolidayDetailsController($scope, $mdDialog,holiday) {
              $scope.date = new Date(2013, holiday.month-1, holiday.date);
              $scope.holiday = holiday;
              $scope.cancel = function() {
                $mdDialog.cancel();
              };
          },
          templateUrl: './src/calender/view/holidayDetails.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: true,
          locals: { holiday: temp }
        });
    };
    while (!done) {
    // show whatever markup you want for each day  
      month.push({
              id : id,
              holidayInfo : calenderService.getHolidaysDetails(id),
              date : date.getDate(),
              month : date.getMonth()
            });
      id++;
        // go to the next day  
      date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);   
      // end the loop if it is another year  
      if(currentMonth != date.getMonth()){
        
        self.calender.push({
          img : "./assets/images/" +month_names[currentMonth].toLowerCase()+".jpg",
          month : month_names[currentMonth],
          days : month});
          currentMonth ++;
        month = [];
      }
      if (date.getFullYear() > 2013) {    done = true;  }
    }
    console.log(self.calender);
  }
  function HolidayDetailsController($scope, $mdDialog,holiday) {
    $scope.date = new Date(2013, holiday.month-1, holiday.date);
    $scope.holiday = holiday;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
}
  
  

})();
