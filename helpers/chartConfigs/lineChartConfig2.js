const originalData = [
    { month: "Apr", count: 50 },
    { month: "May", count: 40 },
    { month: "Jun", count: 300 },
    { month: "Jul", count: 220 },
    { month: "Aug", count: 500 },
    { month: "Sep", count: 250 },
    { month: "Oct", count: 400 },
    { month: "Nov", count: 230 },
    { month: "Dec", count: 500 },
];

export const lineChartData = {
    labels: originalData.map((d) => d.month),
    datasets: [
        {
            label: "desktop apps",
            tension: 0,
            pointRadius: 3,
            borderWidth: 2,
            borderColor: "#fff",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            data: originalData.map((d) => d.count),
            maxBarThickness: 6,
        },
    ],
};

export const lineChartOptions = {
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
                },
                ticks: {
                    display: true,
                    padding: 10,
                    color: "#fff",
                    font: {
                        size: 11,
                        style: "normal",
                        lineHeight: 2,
                    },
                },
            },
            x: {
                grid: {
                    drawBorder: false,
                    display: false,
                    drawOnChartArea: false,
                    drawTicks: false,
                    borderDash: [5, 5],
                },
                ticks: {
                    display: true,
                    color: "#fff",
                    padding: 20,
                    font: {
                        size: 11,
                        style: "normal",
                        lineHeight: 2,
                    },
                },
            },
        },
    },
};
