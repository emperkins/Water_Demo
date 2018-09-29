import {PolarArea} from 'vue-chartjs'

export default {
    extends: PolarArea,
    mounted() {
// Overwriting base render method with actual data.
        this.renderChart({
            labels: ['Hot Water', 'Cold Water', 'Incoming Water', 'Mixed'],
            datasets: [
                {
                    label: 'Water Score',
                    //backgroundColor: 'rgba(179,181,198,0.2)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [1.6, 4.4, 5.1, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)'
                    ]
                }
            ]
        })
    }
}
