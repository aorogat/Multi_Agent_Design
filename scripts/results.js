// Chart data and configurations
const chartData = {
    latency: {
        labels: ['Best Design', 'Average', 'Worst Design'],
        datasets: [{
            label: 'Latency Multiplier',
            data: [1.3, 30, 117],
            backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
            borderColor: ['#059669', '#d97706', '#dc2626'],
            borderWidth: 2
        }]
    },
    memory: {
        labels: ['Best Design', 'Average', 'Worst Design'],
        datasets: [{
            label: 'Memory Score (%)',
            data: [23.8, 15, 6.1],
            backgroundColor: ['#3b82f6', '#8b5cf6', '#ec4899'],
            borderColor: ['#2563eb', '#7c3aed', '#db2777'],
            borderWidth: 2
        }]
    },
    planning: {
        labels: ['Best Design', 'Baseline', 'Worst Design'],
        datasets: [{
            label: 'Accuracy Change (%)',
            data: [15, 0, -30],
            backgroundColor: ['#10b981', '#6b7280', '#ef4444'],
            borderColor: ['#059669', '#4b5563', '#dc2626'],
            borderWidth: 2
        }]
    },
    coordination: {
        labels: ['Best Topology', 'Average', 'Worst Topology'],
        datasets: [{
            label: 'Success Rate (%)',
            data: [92, 60, 28],
            backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
            borderColor: ['#059669', '#d97706', '#dc2626'],
            borderWidth: 2
        }]
    }
};

// Initialize charts
let latencyChart, memoryChart, planningChart, coordinationChart, dynamicChart;

document.addEventListener('DOMContentLoaded', function() {
    // Latency Chart
    const latencyCtx = document.getElementById('latencyChart');
    latencyChart = new Chart(latencyCtx, {
        type: 'bar',
        data: chartData.latency,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + '× direct LLM latency';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Latency Multiplier'
                    }
                }
            }
        }
    });

    // Memory Chart
    const memoryCtx = document.getElementById('memoryChart');
    memoryChart = new Chart(memoryCtx, {
        type: 'bar',
        data: chartData.memory,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + '% memory score';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 30,
                    title: {
                        display: true,
                        text: 'Memory Score (%)'
                    }
                }
            }
        }
    });

    // Planning Chart
    const planningCtx = document.getElementById('planningChart');
    planningChart = new Chart(planningCtx, {
        type: 'bar',
        data: chartData.planning,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.y;
                            return (value > 0 ? '+' : '') + value + '% accuracy change';
                        }
                    }
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Accuracy Change (%)'
                    }
                }
            }
        }
    });

    // Coordination Chart
    const coordinationCtx = document.getElementById('coordinationChart');
    coordinationChart = new Chart(coordinationCtx, {
        type: 'bar',
        data: chartData.coordination,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + '% success rate';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Success Rate (%)'
                    }
                }
            }
        }
    });

    // Dynamic Chart
    const dynamicCtx = document.getElementById('dynamicChart');
    dynamicChart = new Chart(dynamicCtx, {
        type: 'bar',
        data: chartData.orchestration,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Dimension selector
    const dimensionSelect = document.getElementById('dimensionSelect');
    dimensionSelect.addEventListener('change', function() {
        const dimension = this.value;
        updateDynamicChart(dimension);
    });

    // Initialize with orchestration
    updateDynamicChart('orchestration');
});

function updateDynamicChart(dimension) {
    const dataMap = {
        orchestration: {
            labels: ['Parallel Execution', 'Sequential', 'Over-synchronized'],
            datasets: [{
                label: 'Latency (×)',
                data: [1.3, 15, 117],
                backgroundColor: '#3b82f6'
            }]
        },
        memory: {
            labels: ['Shared Memory', 'Isolated', 'No Indexing'],
            datasets: [{
                label: 'Memory Score (%)',
                data: [23.8, 12, 6.1],
                backgroundColor: '#8b5cf6'
            }]
        },
        planning: {
            labels: ['Iterative', 'One-shot', 'Rigid Interface'],
            datasets: [{
                label: 'Accuracy Change (%)',
                data: [15, 0, -30],
                backgroundColor: '#10b981'
            }]
        },
        specialization: {
            labels: ['Role-based', 'Generic', 'Poor Routing'],
            datasets: [{
                label: 'F1 Score Gain',
                data: [58, 10, 0],
                backgroundColor: '#f59e0b'
            }]
        },
        coordination: {
            labels: ['Efficient Topology', 'Average', 'Isolated Clusters'],
            datasets: [{
                label: 'Success Rate (%)',
                data: [92, 60, 28],
                backgroundColor: '#ec4899'
            }]
        }
    };

    dynamicChart.data = dataMap[dimension];
    dynamicChart.update();
}

