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

  alert(`Seu atendimento foi marcado para o dia ${date} às ${time} horas.`);

  fetch("http://4cordas.pythonanywhere.com/dados", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": "394",
      Connection: "keep-alive",
      Vary: "Accept-Encoding",
      "Access-Control-Allow-Origin": "*",
      "X-Clacks-Overhead": "GNU Terry Pratchett",
      Server: "PythonAnywhere",
    },
    body: JSON.stringify({
      nome: nomeValue,
      whatsapp: whatsappValue,
      dia: date,
      horario: time,
      tipo_cilio,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      // Navega para a página Lembrete.html
      window.location.href = "Lembrete.html";
      // Aguarda 7 segundos e depois navega para a página Home.html
      setTimeout(() => {
        window.location.href = "Home.html";
      }, 7000);
    });
});

// Event listener para chamar a função formatarNumero quando o input de whatsapp é alterado - agendamento.html
const whatsapp = document.getElementById("whatsapp"); // Adicione esta linha para selecionar o input do WhatsApp corretamente
whatsapp.addEventListener("input", function () {
  formatarNumero(this);
});
