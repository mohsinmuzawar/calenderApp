(function(){

  angular
       .module('calender')
       .controller('CalenderController', 
          CalenderController
       );

  /**
   * Main Controller for the Calender App
   * @param calenderService
   * @param $mdDialog
   */
  function CalenderController( calenderService, $mdDialog ) {
    var self = this;

    
    var date = new Date(2013, 0, 1);
    var done = false;
    self.calender = [];
    var month = [];
    var month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var currentMonth = 0;
    var dayId = 1;
    self.monthList = month_names;
    self.selectedMonth = 0;
    self.onDayClick = function (dayId,ev) {
      
      
      var holiday = calenderService.getHolidaysDetails(dayId);
      
      // if the selected day is a holiday show Details Popup
      if(holiday)
        $mdDialog.show({
          controller: function ($scope, $mdDialog,holiday) {
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
          locals: { holiday: holiday }
        });
    };
    self.changeMonth = function (flag) {
      if(flag ==1 && self.selectedMonth <11 ){
        self.selectedMonth++;
      }else if(flag == 0 && self.selectedMonth != 0 ){
        self.selectedMonth--;
      }
    }
    while (!done) {
    // push each day into the the month array
      month.push({
              id : dayId,
              holidayInfo : calenderService.getHolidaysDetails(dayId),
              date : date.getDate(),
              month : date.getMonth()
            });
      dayId++;
        // go to the next day  
      date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);   
      
      //push into the month array into calender object array if month changes
      if(currentMonth != date.getMonth()){
                
        self.calender.push({
          img : "./assets/images/" +month_names[currentMonth].toLowerCase()+".jpg",
          name : month_names[currentMonth],
          days : month});
          currentMonth ++;
        month = [];
      }
      // end the loop if it is another year  
      if (date.getFullYear() > 2013) {    done = true;  }
    }
  }
})();
