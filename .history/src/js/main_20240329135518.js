function formatarNumero(input) {
  // Remove caracteres não numéricos
  let numero = input.value.replace(/\D/g, "");

  // Formata o número conforme desejado
  let formattedNumber = numero.replace(
    /^(\d{2})(\d{1})(\d{4})(\d{4})/,
    "($1) $2 $3-$4"
  );

  // Atualiza o valor do input com o número formatado
  input.value = formattedNumber;
}

flatpickr("#datepicker", {
  dateFormat: "d/m/Y",
});

document.getElementById("timepicker").addEventListener("input", function () {
  var inputValue = this.value;

  if (inputValue < "10:00" || inputValue > "20:30") {
    this.value = ""; // Limpa o valor se estiver fora do intervalo permitido
    alert("Por favor, selecione uma hora entre 10:00 e 20:30");
  }
});

const saveBtn = document.getElementById("saveBtn");
const datepicker = document.getElementById("datepicker");
const timepicker = document.getElementById("timepicker");

saveBtn.addEventListener("click", function () {
  const date = datepicker.value;
  const time = timepicker.value;
  alert(`Seu atendimento foi marcado para o dia ${date} às ${time} horas.`);
    window.location.href = "Home.html";

});
