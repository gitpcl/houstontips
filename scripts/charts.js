var ctx = document.getElementById('topLocations');
var topLocations = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Houston', 'The Woodlands', 'Katy', 'Sugarland', 'Cypress'],
        datasets: [{
            label: 'Interesses',
            data: [62, 1.4, 1, 1, 0.9],
            backgroundColor: [
                'rgba(239, 63, 38, .8)',
                'rgba(239, 63, 38, .6)',
                'rgba(239, 63, 38, .4)',
                'rgba(116, 209, 252, 0.6)',
                'rgba(116, 209, 252, 0.4)'
            ],
            borderColor: [
                'rgba(239, 63, 38, .8)',
                'rgba(116, 209, 252, 1)',
                'rgba(116, 209, 252, 0.8)',
                'rgba(116, 209, 252, 0.6)',
                'rgba(116, 209, 252, 0.4)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Top 5 Audience (%)'
        }
    }
    
});

var ctx = document.getElementById('audienceSplit');
var audienceSplit = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Friends, Family & Relationships', 'Restaurants, Food & Groceries', 'Toys, Children & Babies', 'Camera & Photography', 'Clothes, Shoes, Handbags & Accessories'],
        datasets: [{
            label: 'Interesses',
            data: [49.78, 43.79, 37.62, 34.44, 34.26],
            backgroundColor: [
                'rgba(239, 63, 38, .8)',
                'rgba(239, 63, 38, .6)',
                'rgba(239, 63, 38, .4)',
                'rgba(116, 209, 252, 0.6)',
                'rgba(116, 209, 252, 0.4)'
            ],
            borderColor: [
                'rgba(239, 63, 38, .8)',
                'rgba(116, 209, 252, 1)',
                'rgba(116, 209, 252, 0.8)',
                'rgba(116, 209, 252, 0.6)',
                'rgba(116, 209, 252, 0.4)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Top 5 Audience (%)'
        }
    }
    
});

var ctx = document.getElementById('genderSplit');
var genderSplit = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['13-17', '18-24', '25-34', '35-44', '45-64'],
        datasets: [{
            label: "Male",
            backgroundColor: "rgba(116, 209, 252, 1)",
            data: [.6,6.5,12.9,11.6,4.2]
        },{
            label: "Female",
            backgroundColor: "rgba(239, 63, 38, .8)",
            data: [1.4,13.1,26.4,12.4,4.5]
        }],
        borderWidth: 1
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
