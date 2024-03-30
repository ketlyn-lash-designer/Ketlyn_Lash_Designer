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


document.addEventListener("DOMContentLoaded", function () {
  const datepickerInput = document.getElementById("datepicker");
  const timepickerInput = document.getElementById("timepicker");

  // Configuração do plugin Tempus Dominus para o datepicker
  $(datepickerInput).datetimepicker({
    format: "L",
    locale: "pt-br",
  });

  // Configuração do plugin Tempus Dominus para o timepicker
  $(timepickerInput).datetimepicker({
    format: "LT",
    locale: "pt-br",
    enabledHours: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  });

  datepickerInput.addEventListener("click", function () {
    $(datepickerInput).datetimepicker("show");
  });
});
