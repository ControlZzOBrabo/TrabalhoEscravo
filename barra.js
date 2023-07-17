let ctx = document.getElementById('grafico_barras')

// Configuração do gráfico 

// Chart.defaults.backgroundColor = '#abd8f5'
Chart.defaults.borderColor = 'black'
Chart.defaults.color = '#black'
Chart.defaults.font.size = 26
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'


// https://www.chartjs.org/docs/latest/general/colors.html

const labels = ['parda','preta','branca']

const data = {
    labels,
    datasets: [{
        data: [75, 14, 11],
        label: 'vitimas por raça',
        backgroundColor: 'darkblue',
        borderColor: '#fff',
        borderWidth: 3
    }],
}

const config = {
    type: 'bar',
    data,
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        color: 'black',
        pointBackgroundColor: 'black',
        pointBorderColor: 'black',
      },
}

const graph = new Chart(ctx, config)


