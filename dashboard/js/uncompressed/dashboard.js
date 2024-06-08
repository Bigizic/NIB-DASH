/**
 * dashboardCalendar - redners calender on dashboard
*/

(function($){		
	$.fn.createCalendar = function(options) {    
    // ==== Default options ====
    const settings = $.extend({
      backgroundColor: 'lightseagreen',
      leftBackgroundColor: 'yellow',
      currentDayColor: 'purple',
      eventText: 'this is an event',
    }, options);
    
    const state = {
      backgroundColor: settings.backgroundColor,
      leftBackgroundColor: settings.leftBackgroundColor,
      currentDayColor: settings.currentDayColor,
      eventText: settings.eventText,
    };
    
    // ==== Define methods for getting and setting styles ====
    const methods = {
      setBackgroundColor: function(newColor=null) {
        state.backgroundColor = newColor;
        $(document).ready(function() {
          $(this).find('.calendar_background').css('background', state.backgroundColor);
        });
      },
      getBackgroundColor: function() {
        return state.backgroundColor;
      },

      // ==== left background methods ====
      setLeftBackgroundColor: function(newColor=null) {
        state.leftBackgroundColor = newColor;
        $(document).ready(function() {
          $(this).find('.calendar-left').css('background', state.leftBackgroundColor);
        });
      },
      getLeftBackgroundColor: function() {
        return state.leftBackgroundColor;
      },

      // ==== current day color ====
      setCurrentDayColor: function(newColor=null) {
        state.currentDayColor = newColor;
        $(document).ready(function() {
          $(this).find('.current_calender_background').css('background', state.currentDayColor);
        });
      },
      getCurrentDayColor: function() {
        return state.currentDayColor;
      },

      // ==== current event text details ====
      setEventText: function(text) {
        state.eventText = text;
        $(document).ready(function() {
          $(this).find('.current_event_details').text(state.eventText);
        })
      },
      getEventText: function() {
        return state.eventText;
      }

    };
    
    // ===== Attach the methods to the element ====
    this.data('createCalendar', methods);

    const calendarHTML = `
    <div class="c-container">
      <div class="calendar_background">
        <div class="calendar-base">
          <div class="year"></div>
            <div class="months">
              <span class="month-hover">Jan</span>
              <span class="month-hover">Feb</span> 
              <span class="month-hover">Mar</span> 
              <span class="month-hover">Apr</span>
              <span class="month-hover">May</span>
              <span class="month-hover">Jun</span>
              <span class="month-hover">Jul</span> 
              <span class="month-hover">Aug</span> 
              <span class="month-hover">Sep</span> 
              <span class="month-hover">Oct</span> 
              <span class="month-hover">Nov</span> 
              <span class="month-hover">Dec</span>
            </div>
  
          <div class="days">
            <div class="mon">
              <p>MON</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
            <div class="tue">
              <p>TUE</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
            <div class="wed">
              <p>WED</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
            <div class="thu">
              <p>THU</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
            <div class="fri">
              <p>FRI</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
            <div class="sat">
              <p>SAT</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
            <div class="sun">
              <p>SUN</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
          </div>
        </div>
      </div>
      <div class="calendar-left">

          <div style="padding: 30px 0px 0px 0px; text-align: center;" class="num-date-and-day">
          <div class="num-date"></div>
          <div class="day"></div>
      </div>
      <div class="current-events">Current Events
        <br/>
        <ul>
          <li class="current_event_details" style="font-size: 10px; margin-left: -12px;">This is an event</li>
        </ul>
      </div>
    </div>
  </div>`

  /**
   * Logic
   */
  $(document).ready(function() {
    /**
     * dashboardCalendar - creates calendar by calling Date() method and parsing date results to suite a calendar structure
     * Return: null
     */
    const dashboardCalendar = () => {
      const currentDate = new Date();  // gets current date
      const dateString = currentDate.toDateString().split(' ');  // converts current date to a list of date values as strings
      const month = dateString[1];  // get month from list of date values
      const alphaDay = dateString[0];  // gets day in alphabet from list of date values e.g "Wed"

      const daysOfTheWeek = {
        MON: 'MONDAY',
        TUE: 'TUESDAY',
        WED: 'WEDNESDAY',
        THU: 'THURSDAY',
        FRI: 'FRIDAY',
        SAT: 'SATURDAY',
        SUN: 'SUNDAY'
      }; // declare days of the week by their abbrevation and full text

      // ==== add text to year html ====
      $('.year').text(currentDate.getFullYear());

      // ==== checks if alphaDay to uppercase i.e "WED" exists in days of the week dictionary ====
      if (daysOfTheWeek.hasOwnProperty(alphaDay.toUpperCase())) {
        // ==== add the full abbrevation of alphaDay to the .day class of parent background-left i.e "WEDNESDAY" ====
        $('.day').text(daysOfTheWeek[alphaDay.toUpperCase()]).css('font-weight', '600');
      }

      // === checks if the currentDate Day i.e "5" is lesser than 10 to center it correctly in the div and add currentDate Day to num-date ====
      if (currentDate.getDay() < 10) {
        $('.num-date').text(currentDate.getDate());
      }

      // ==== iterate through each .days div, collect className <p> text i.e either MON, TUE, WED, THUR and check if it's equal to alphaDay to upperCase ====
      $('.days div').each(function () {
        const thisClsName = $(this)['0'].className;
        if ($(`.${thisClsName} p`).text().trim() === alphaDay.toUpperCase()) {
          // ==== if yes we got the current day and change the current day color to black and make it bold ====
          $(this).css('color', 'black').css('font-weight', '600');
        }
      });

      // ==== check every month and perform prev action ====
      $('.month-hover').each(function () {
        if ($(this).text().trim() === month) {
          $(this).css('color', 'black').css('font-weight', '600');
        }
      });
    
      // === creates dates and days of the week for current month
      const newYear = currentDate.getFullYear();  // e.g 2024
      const newMonth = currentDate.getMonth();  // e.g 5
      const currentNewDate = new Date(newYear, newMonth, 1);  // result "Date Sat Jun 01 2024 00:00:00 GMT+0100 (British Summer Time)"
      const newAlphaDate = currentNewDate.toDateString().split(' ')[0].toUpperCase(); // e.g SAT
      const numberOfDaysInCurrentMonth = new Date(newYear, newMonth + 1, 0).getDate(); // e.g 30
    
      const dates = [];
    
      const daysOfTheWeekList = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
      let currentDay = $.inArray(newAlphaDate, daysOfTheWeekList);  // get current day by checking if new alphabet date is in days of the week list

      // ==== for loop to iterate between numbers of days in the current month ====
      for (let i = 1; i <= numberOfDaysInCurrentMonth; i++) {
        dates.push({ [daysOfTheWeekList[currentDay]]: i });  // appends something like this { MON: 0 } to dates List
        currentDay = (currentDay + 1) % 7;  // change current day
      }

      // ==== iterate through dates list and perform operations on the dictionary in the list ====
      $.each(dates, function (index, dict) {
        // ==== get key and value from dictionary ====
        $.each(dict, function (key, value) {
          $('.days div').each(function (e) {
            const thisClsName = $(this)['0'].className;
            if ($(`.${thisClsName} p`).text().trim() === key) {
              if (value === currentDate.getDate()) { // old current date from line 320
                $($(`.${thisClsName} ul`)).append(`<li style="position: relative; padding: 16.5px 8px;" class="current_calender_date"> ${value}
                <span class="current_calender_background"></span></li>`);
              } else {
                $($(`.${thisClsName} ul`)).append(`<li style="padding: 16.5px 8px;"> ${value} </li>`);
              }
            }
          });
        });
      });
    // ==== change font-size-adjust for font 7 ====
    if ($('body').css('font-family') === 'font7') {
      $('body').css('font-size-adjust', '0.4')
    }
    }
    dashboardCalendar();

  });
  
  return $(this).html(calendarHTML);
  }
})(jQuery);
