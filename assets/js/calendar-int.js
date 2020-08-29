document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid' ],
    defaultDate: '2019-04-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2019-04-01'
      },
      {
        title: 'Long Event',
        start: '2019-04-07',
        end: '2019-04-10'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2019-04-09T16:00:00'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2019-04-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2019-04-11',
        end: '2019-04-13'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2019-04-28'
      }
    ]
  });

  calendar.render();
});

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl2 = document.getElementById('calendar2');

  var calendar2 = new FullCalendar.Calendar(calendarEl2, {
    plugins: [ 'interaction', 'dayGrid' ],
    defaultDate: '2019-04-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2019-04-01'
      },
      {
        title: 'Long Event',
        start: '2019-04-07',
        end: '2019-04-10'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2019-04-09T16:00:00'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2019-04-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2019-04-11',
        end: '2019-04-13'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2019-04-28'
      }
    ]
  });

  calendar2.render();
});