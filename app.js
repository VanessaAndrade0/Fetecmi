let totalInversion = 0;
let totalGasto = 0;
let totalGanancia = 0;

const inversionInput = document.getElementById("inversion");
const gastoInput = document.getElementById("gasto");
const gananciaInput = document.getElementById("ganancia");

const totalInversionText = document.getElementById("totalInversion");
const totalGastoText = document.getElementById("totalGasto");
const totalGananciaText = document.getElementById("totalGanancia");
const porcentajeGananciaText = document.getElementById("porcentajeGanancia");

const ctx = document.getElementById("grafica").getContext("2d");
const grafica = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Inversión', 'Gasto', 'Ganancia'],
        datasets: [{
            label: 'Finanzas Tecmi',
            data: [0, 0, 0],
            backgroundColor: ['#FF6384', '#36A2EB', '#4CAF50']
        }]
    },
    options: {
        responsive: true
    }
});

function agregarDatos() {
    let inversion = parseFloat(inversionInput.value) || 0;
    let gasto = parseFloat(gastoInput.value) || 0;
    let ganancia = parseFloat(gananciaInput.value) || 0;

    totalInversion += inversion;
    totalGasto += gasto;
    totalGanancia += ganancia;

    totalInversionText.innerText = totalInversion;
    totalGastoText.innerText = totalGasto;
    totalGananciaText.innerText = totalGanancia;

    let porcentajeGanancia = totalGanancia === 0 ? 0 : ((totalGanancia - totalInversion - totalGasto) / totalInversion) * 100;
    porcentajeGananciaText.innerText = porcentajeGanancia.toFixed(2) + "%";

    actualizarGrafica();
    limpiarInputs();
}

function actualizarGrafica() {
    grafica.data.datasets[0].data = [totalInversion, totalGasto, totalGanancia];
    grafica.update();
}

function limpiarInputs() {
    inversionInput.value = '';
    gastoInput.value = '';
    gananciaInput.value = '';
}
