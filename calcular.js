function calcular(valor, datos) {
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((api) => api.json())
    .then((datos) => {
      // console.log(datos);

      let total = 0;
      let valorhoy = 0;
      let peso = document.getElementById("valuepesos").value;

      for (let valor of datos) {
        if (valor.casa.nombre === "Dolar Oficial") {
          valorhoy = valor.casa.venta;
          valorhoy = valorhoy.replace(/,/g, ".");
          break;
        }
      }
      total = valorhoy * peso;

      document.getElementById("valordolar").value = total.toFixed(2);
    });
}
