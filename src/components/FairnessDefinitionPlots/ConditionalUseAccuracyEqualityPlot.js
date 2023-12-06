import React, { Component } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis,Tooltip, Legend,ResponsiveContainer, Scatter, ScatterChart} from 'recharts';


class ConditionalUseAccuracyEqualityPlot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            ppvData: [],
            npvData: []
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
                ppv: s.metrics.prec,
                npv: s.metrics.npv
            })
        }
        console.log(temp);
        this.setState({data: temp});
        this.setState({ppvData: temp.sort((a,b) => a.ppv - b.ppv)});
        this.setState({npvData: temp.sort((a,b) => a.npv - b.npv)});
    }

    render () {
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                <h3>
                Positive Predictive Value (PPV) Chart
                </h3>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart data={this.state.ppvData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={0} height={200} tick={{ angle: 90, textAnchor: 'start'}}/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="ppv" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
                <h3>
                Negative Predictive Value (NPV) Chart
                </h3>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart data={this.state.npvData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={0} height={200} tick={{ angle: 90, textAnchor: 'start'}}/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="npv" fill="#70BB68" />
                    </BarChart>
                </ResponsiveContainer>
                <h3>
                PPV against NPV Chart
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
                        <XAxis dataKey="ppv" type="number" label={{ value: 'ppv', position: 'insideBottomRight', offset: 0 }} />
                        <YAxis dataKey="npv" type="number" label={{ value: 'npv', angle: -90, position: 'insideLeft' }}/>
                        <Tooltip cursor={{ strokeDasharray: '3 3' }}/>
                        <Legend />
                        <Scatter name="ppv and npv" data={this.state.data} fill="#BA5EFE" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
            
        );
    }
    
}

export default ConditionalUseAccuracyEqualityPlot; 