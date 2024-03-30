document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: "dayGridMonth",
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  },
  events: [
    {
      title: "Evento 1",
      start: "2021-09-01",
    },
    {
      title: "Evento 2",
      start: "2021-09-05",
    },
  ],
});

  calendar.render();
});
