import React, { Component } from 'react';
// import { Doughnut, Bar, Line, Pie, Radar } from 'react-chartjs-2';

class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{
                labels:['Boston', 'worchester', 'springfield', 'lowell', 'cambridge','new bedford'],
                datasets:[
                    {
                        label:'population',
                        data:[
                            6175954,
                            1843045,
                            1545787,
                            1056597,
                            1024784,
                            85247
                        ],
                        backgroundColor:[
                            '#69848D',
                            '#DCDED9',
                            '#B3B1B3',
                            '#858D8A',
                            '#757A84',
                            '#DADBDB'
                        ] 
                    }
                ]
                
            }

        }
    }

    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    width={100}
	                height={50}
                    options={{
                        title:{
                            display: true,
                            text:'these are some cities',
                            fontSize:25
                        },
                        legend:{
                            display: true,
                            position:'right'
                        },
                    //    maintainAspectRatio: false
                    }}
                />
                this is Line Chart
            </div>
        )
    }
}

export default LineChart;
