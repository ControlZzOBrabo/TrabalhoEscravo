let ctx = document.getElementById('grafico_linha')

// Configuração do gráfico 

// Chart.defaults.backgroundColor = '#abd8f5'
Chart.defaults.borderColor = '#fff'
Chart.defaults.color = '#fff'
Chart.defaults.font.size = 26
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'


// https://www.chartjs.org/docs/latest/general/colors.html

const labels = ['Operador de motoserra','Agropecuário','Pecuária','Operador de Salina','Servente de Obras']

const data = {
    labels,
    datasets: [{
        data: [14, 9, 7, 6, 4],
        label: 'Atividades mais exercidas pelos trabalhadores resgatados',
        fill: false,
        backgroundColor: '',
        borderColor: 'white',
        borderWidth: 2,
        tension: 0.2
    }],
}

const config = {
    type: 'line',
    data,
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        color: 'white',
        pointBackgroundColor: 'black',
        pointBorderColor: 'black',
      },
}

const graph = new Chart(ctx, config)



