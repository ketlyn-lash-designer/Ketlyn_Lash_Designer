const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementsByClassName("close")[0];


openModal.addEventListener("click", function () {
  modal.style.display = "block";
  const calendarEl = document.getElementById("calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    // Configurações do calendário
  });
  calendar.render();
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Adicione aqui a lógica para adicionar o calendário no modal
