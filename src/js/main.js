//Função para formatar o número de telefone
function formatarNumero(input) {
  let phoneNumber = input.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  input.value = phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"); // Formata no padrão (99) 99999-9999
}

flatpickr("#datepicker", {
  dateFormat: "d/m/Y",
  minDate: "today",
});

document.getElementById("timepicker").onchange = function () {
  var selectedTime = this.value;
  var selectedHour = parseInt(selectedTime.split(":")[0]);
  var selectedMinute = parseInt(selectedTime.split(":")[1]);

  if (
    selectedHour < 10 ||
    (selectedHour === 20 && selectedMinute > 30) ||
    selectedHour > 20
  ) {
    alert("Por favor, selecione um horário entre 10:00 am e 20:30 pm.");
    this.value = ""; // Limpar o valor do input
  }
};

// Event listener para salvar os dados quando o botão for clicado - agendamento.html
const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
  const date = document.getElementById("datepicker").value;
  const time = document.getElementById("timepicker").value;
  const nomeValue = document.getElementById("nome").value;
  const whatsappValue = document.getElementById("whatsapp").value;
  const tipo_cilio = document.querySelector("select[name='tipo_cilio']").value;
  const token = "7df8d57dae19e622b8d49ddfecc003d8d51b294a";

  alert(`Seu atendimento foi marcado para o dia ${date} às ${time} horas.`);

  fetch("https://4cordas.pythonanywhere.com/dados", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Connection: "keep-alive",
      Authorization: token,
    },
    body: JSON.stringify({
      nome: nomeValue,
      whatsapp: whatsappValue,
      dia: date,
      horario: time,
      tipo_cilio: tipo_cilio,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      // Navigate to the Lembrete.html page
      window.location.href = "Lembrete.html";
      // Wait for 7 seconds and then navigate to the Home.html page
      setTimeout(() => {
        window.location.href = "Home.html";
      }, 7000);
    })
    .catch((error) => console.error("Error:", error));
});

// Event listener para chamar a função formatarNumero quando o input de whatsapp é alterado - agendamento.html
const whatsapp = document.getElementById("whatsapp");
whatsapp.addEventListener("input", function () {
  formatarNumero(this);
});

document.addEventListener("DOMContentLoaded", function () {
  if (
    window.location.href === "https://allan-mecanico.github.io/Lash-Designer/"
  ) {
    const newUrl = "https://www.ketlyn-Lash-Designer.com";
    window.history.replaceState({}, document.title, newUrl);
  }
});
