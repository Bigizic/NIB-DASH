/**
 * dashboardCalendar - redners calender on dashboard
*/

const $ = window.$;

$(document).ready(function () {
  'use strict';

  // dashboard calendar rendering
  function dashboardCalendar () {
    const currentDate = new Date();
    const dateString = currentDate.toDateString().split(' ');
    const month = dateString[1];
    const alphaDay = dateString[0];
    $('.year').text(currentDate.getFullYear());
    const daysOfTheWeek = {
      MON: 'MONDAY',
      TUE: 'TUESDAY',
      WED: 'WEDNESDAY',
      THU: 'THURSDAY',
      FRI: 'FRIDAY',
      SAT: 'SATURDAY',
      SUN: 'SUNDAY'
    };
    if (daysOfTheWeek.hasOwnProperty(alphaDay.toUpperCase())) {
      $('.day').text(daysOfTheWeek[alphaDay.toUpperCase()]).css('font-weight', '600');
    }

    if (currentDate.getDay() < 10) {
      $('.num-date').text(currentDate.getDate());
    }

    $('.days div').each(function () {
      const thisClsName = $(this)['0'].className;
      if ($(`.${thisClsName} p`).text().trim() === alphaDay.toUpperCase()) {
        $(this).css('color', 'black').css('font-weight', '600');
      }
    });

    $('.month-hover').each(function () {
      if ($(this).text().trim() === month) {
        $(this).css('color', 'black').css('font-weight', '600');
      }
    });

    // creating dates and days of the week for current month
    const newYear = currentDate.getFullYear();
    const newMonth = currentDate.getMonth();
    const currentNewDate = new Date(newYear, newMonth, 1);
    const newAlphaDate = currentNewDate.toDateString().split(' ')[0].toUpperCase();
    const numberOfDaysInCurrentMonth = new Date(newYear, newMonth + 1, 0).getDate();

    const dates = [];

    const daysOfTheWeekList = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let currentDay = $.inArray(newAlphaDate, daysOfTheWeekList);

    for (let i = 1; i <= numberOfDaysInCurrentMonth; i++) {
      dates.push({ [daysOfTheWeekList[currentDay]]: i });
      currentDay = (currentDay + 1) % 7;
    }

    $.each(dates, function (index, dict) {
      $.each(dict, function (key, value) {
        $('.days div').each(function (e) {
          const thisClsName = $(this)['0'].className;
          if ($(`.${thisClsName} p`).text().trim() === key) {
            if (value === currentDate.getDate()) { // old current date from line 320
              $($(`.${thisClsName} ul`)).append(`<li style="padding: 16.5px 8px;" class="current_calender_date"> ${value} </li>`);
            } else {
              $($(`.${thisClsName} ul`)).append(`<li style="padding: 16.5px 8px;"> ${value} </li>`);
            }
          }
        });
      });
    });
  }
  dashboardCalendar();
