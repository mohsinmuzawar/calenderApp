(function(){
  'use strict';

  angular.module('calender')
         .service('calenderService',CalenderService);

  /**
   * Calender DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns 
   * @constructor
   */
  
  
    //*************************************************************************************
    // Holiday List reference http://www.goachamber.org/html/joomdocs/GG1213-34-SII-OG.pdf
    //************************************************************************************
  function CalenderService(){
    this.selectedDay = null;
    
    this.holidaysList = [ 
      { name : "Eid-Milad-Un-Nabi" ,month : 1, date: 25 , dateId : 25 },
      { name : "Republic Day" ,month : 1 ,date: 26 , dateId : 26},
      { name : "Mahashivratri" ,month :3, date: 10, dateId : 69 },
      { name : "Holi" ,month :3, date: 27, dateId : 88 },
      { name : "Good Friday" ,month : 3 ,date: 29, dateId : 86 },
      { name : "Gudi Padva" ,month : 4 ,date: 11, dateId : 101},
      { name : "Dr. Ambedkar Jayanti" ,month : 4 ,date: 14, dateId : 104},
      { name : "May Day" ,month : 5 ,date: 1, dateId : 121},
      { name : "Eid-Ul-Fitr*" ,month : 8 ,date: 9, dateId : 221},
      { name : "Independence Day" ,month : 8 ,date: 15, dateId : 227},
      { name : "Ganesh Chaturthi" ,month : 9 ,date: 9, dateId : 252},
      { name : "Ganesh Chaturthi" ,month : 9 ,date: 10, dateId : 253},
      { name : "Gandhi Jayanti" ,month : 10 ,date: 2, dateId : 275},
      { name : "Dussehra (Vijaya Dashmi)" ,month : 10 ,date: 13, dateId : 286},
      { name : "Eid-Ul-Zuha (Bakri Id)*" ,month : 10 ,date: 14, dateId : 287},
      { name : "Diwali" ,month : 11 ,date: 2, dateId : 306},
      { name : "Feast of St. Francis Xavier" ,month : 12 ,date: 3, dateId : 337},
      { name : "Goa Liberation Day" ,month : 12 ,date: 19, dateId : 353},
      { name : "Christmas" ,month : 12, date: 25, dateId : 358}
    ];
    
    this.getAllHolidays = function() {
      return this.holidaysList;
    }
   this.getHolidaysDetails =function(id) {
     var flag = true;
     var day = null;
      angular.forEach(this.holidaysList,function (data) {
        if(flag) {
           if(data.dateId == id){
              day = data;
              flag= false;
          }
        }
       
      });
      this.selectedDay = day;
      return day;
    }
  }

})();
