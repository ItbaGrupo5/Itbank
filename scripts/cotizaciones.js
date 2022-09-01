let dolares = [
  "dolarblue",
  "dolaroficial",
  "dolarturista",
  "dolarbolsa",
  "dolarsoja",
  "dolarccl",
];
// Modifica los precios de cada dolar.

function updatePrices(dolar, data) {
  const sell = document.getElementById(`${dolar}-venta`);
  const buy = document.getElementById(`${dolar}-compra`);
  const actualizacion = document.getElementById(`${dolar}-actualizacion`);
  sell.innerText = data.casa.venta;
  buy.innerText = data.casa.compra;
  actualizacion.innerText = fecha;
}

//Encuentra y retorna el objeto de cada dolar por el valor de la propiedad nombre.

function findDataOfDolar(dolar, data) {
  let dolarStr =
    "Dolar " +
    dolar.split("dolar")[1].charAt(0).toUpperCase() +
    dolar.split("dolar")[1].slice(1);
  if (dolar === "dolarccl") {
    return data.find((x) => x.casa.nombre === "Dolar Contado con Liqui");
  } else if (dolar === "dolarturista") {
    return data.find((x) => x.casa.nombre === "Dolar turista");
  }
  return data.find((x) => x.casa.nombre === dolarStr);
}

fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
  .then((resp) => resp.json())
  .then(function (data) {
    fecha = data[8].casa.fecha;
    dolares.forEach((dolar) =>
      updatePrices(dolar, findDataOfDolar(dolar, data))
    );
  })
  .catch((err) => console.log("Solicitud Fallida!", err));
