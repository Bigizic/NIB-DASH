/**
 * render.js
 * Make a call to jquery function here
 * 
 */
$(document).ready(function() {
    let calendar = $('.dashboard_render').createCalendar().data('createCalendar');
    calendar.setBackgroundColor('');
    calendar.setLeftBackgroundColor('');
    calendar.setCurrentDayColor('');
    calendar.setEventText('Event one today'); // sets custom event
})
