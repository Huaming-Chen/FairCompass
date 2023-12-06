import React, { Component } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis,Tooltip, Legend,ResponsiveContainer, Scatter, ScatterChart} from 'recharts';


class CalibrationPlot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            fdrData: [],
            forData: []
        };
        this.loadData = this.loadData.bind(this);
    }

    componentWillMount() {
        this.loadData();
    }

    loadData = () => {
        console.log("calculating conditional use accuracy equality now!")
        console.log(this.props.activeGroups)
        let temp = [];
        for (var s of this.props.activeGroups) {
            let name = s.vals.join(" ");
            console.log(name);
            temp.push({
                name: name,
                fdr: s.metrics.fdr,
                for: s.metrics.for
            })
        }
        console.log(temp);
        this.setState({data: temp});
        this.setState({fdrData: temp.sort((a,b) => a.fdr - b.fdr)});
        this.setState({forData: temp.sort((a,b) => a.for - b.for)});
    }

    render () {
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                <h3>
                False Discovery Rate (FDR) Chart
                </h3>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart data={this.state.fdrData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={0} height={200} tick={{ angle: 90, textAnchor: 'start'}}/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="fdr" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
                <h3>
                False Omission Rate (FOR) Chart
                </h3>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart data={this.state.forData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={0} height={200} tick={{ angle: 90, textAnchor: 'start'}}/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="for" fill="#70BB68" />
                    </BarChart>
                </ResponsiveContainer>
                <h3>
                FDR against FOR Chart
                </h3>
                <ResponsiveContainer width="95%" height={400}>
                    <ScatterChart
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 10,
                            left: 10,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="fdr" type="number" label={{ value: 'fdr', position: 'insideBottomRight', offset: 0 }} />
                        <YAxis dataKey="for" type="number" label={{ value: 'for', angle: -90, position: 'insideLeft' }}/>
                        <Tooltip cursor={{ strokeDasharray: '3 3' }}/>
                        <Legend />
                        <Scatter name="fdr and for" data={this.state.data} fill="#BA5EFE" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
            
        );
    }
    
}

export default CalibrationPlot; 