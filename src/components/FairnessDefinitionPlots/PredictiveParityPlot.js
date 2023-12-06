import React, { Component } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis,Tooltip, Legend,ResponsiveContainer, Scatter, ScatterChart} from 'recharts';


class PredictiveParityPlot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
        this.loadData = this.loadData.bind(this);
    }

    componentWillMount() {
        this.loadData();
    }


    loadData = () => {
        console.log("calculating predictive parity now!")
        let temp = [];
        for (var s of this.props.activeGroups) {
            let name = s.vals.join(" ");
            console.log(name);
            temp.push({
                name: name,
                ppv: s.metrics.prec
            })
        }
        temp = temp.sort((a,b) => a.ppv - b.ppv); // b - a for reverse sort
        this.setState({data: temp})
    }


    render () {
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>   
                <h3>
                Positive Predictive Value (PPV) Chart
                </h3>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart data={this.state.data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={0} height={200} tick={{ angle: 90, textAnchor: 'start'}}/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="ppv" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
    
}

export default PredictiveParityPlot; 