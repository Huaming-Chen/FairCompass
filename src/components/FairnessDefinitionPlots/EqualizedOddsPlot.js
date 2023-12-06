import React, { Component } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis,Tooltip, Legend,ResponsiveContainer, Scatter, ScatterChart} from 'recharts';


class EqualizedOddsPlot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            tpData: [],
            tnData: []
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
                tp: s.metrics.tp,
                tn: s.metrics.tn
            })
        }
        console.log(temp);
        this.setState({data: temp});
        this.setState({tpData: temp.sort((a,b) => a.tp - b.tp)});
        this.setState({tnData: temp.sort((a,b) => a.tn - b.tn)});
    }

    render () {
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                <h3>
                True Positive Rate (TPR) Chart
                </h3>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart data={this.state.tpData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={0} height={200} tick={{ angle: 90, textAnchor: 'start'}}/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="tp" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
                <h3>
                True Negative Rate (TNR) Chart
                </h3>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart data={this.state.tnData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={0} height={200} tick={{ angle: 90, textAnchor: 'start'}}/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="tn" fill="#70BB68" />
                    </BarChart>
                </ResponsiveContainer>
                <h3>
                TPR against TNR Chart
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
                        <XAxis dataKey="tp" type="number" label={{ value: 'tp', position: 'insideBottomRight', offset: 0 }} />
                        <YAxis dataKey="tn" type="number" label={{ value: 'tn', angle: -90, position: 'insideLeft' }}/>
                        <Tooltip cursor={{ strokeDasharray: '3 3' }}/>
                        <Legend />
                        <Scatter name="tp and tn" data={this.state.data} fill="#BA5EFE" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
            
        );
    }
    
}

export default EqualizedOddsPlot; 