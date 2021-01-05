var ctx = document.getElementById('topLocations');
var topLocations = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Houston', 'The Woodlands', 'Cypress', 'Spring', 'Katy'],
        datasets: [{
            label: 'Interesses',
            data: [59.7, 1.9, 1.4, 0.9, 0.9],
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
        labels: ['13-17', '18-24', '25-34', '35-44', '45-64','55-64','65+'],
        datasets: [{
            label: "Male",
            backgroundColor: "rgba(116, 209, 252, 1)",
            data: [.7,10.9,42.6,29.6,11.2,3.2,1.8]
        },{
            label: "Female",
            backgroundColor: "rgba(239, 63, 38, .8)",
            data: [0.4,8.4,40.6,30.8,13.3,4.4,2.1]
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
