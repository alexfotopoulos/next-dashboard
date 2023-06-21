const originalData = [
    { day: "M", count: 50 },
    { day: "T", count: 20 },
    { day: "W", count: 10 },
    { day: "T", count: 20 },
    { day: "F", count: 50 },
    { day: "S", count: 10 },
    { day: "S", count: 40 },
];

export const barChartData = {
    labels: originalData.map((d) => d.day),
    datasets: [
        {
            label: "sales",
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            data: originalData.map((d) => d.count),
            maxBarThickness: 6,
        },
    ],
};

export const barChartOptions = {
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        interaction: {
            intersect: false,
            mode: "index",
        },
        scales: {
            y: {
                grid: {
                    drawBorder: false,
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: false,
                    borderDash: [5, 5],
                    color: "rgba(255, 255, 255, .2)",
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 500,
                    beginAtZero: true,
                    padding: 10,
                    font: {
                        size: 14,
                        weight: 300,
                        style: "normal",
                        lineHeight: 2,
                    },
                    color: "#fff",
                },
            },
            x: {
                grid: {
                    drawBorder: false,
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: false,
                    borderDash: [5, 5],
                    color: "rgba(255, 255, 255, .2)",
                },
                ticks: {
                    display: true,
                    color: "#f8f9fa",
                    padding: 10,
                    font: {
                        size: 14,
                        weight: 300,
                        style: "normal",
                        lineHeight: 2,
                    },
                },
            },
        },
    },
};
