import React, { Component } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis,Tooltip, Legend,ResponsiveContainer, Scatter, ScatterChart, ZAxis} from 'recharts';
import Typography from "@material-ui/core/Typography";
import {Select, MenuItem} from "@material-ui/core";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div>
            {payload.map((pld) => (
                <div>
                    <p>{pld.payload.name}</p>
                    <p style={{ color: pld.fill }}>{pld.name}: {pld.value}</p>
                    <p>size: {pld.payload.size}</p>
                </div>
            ))}
        </div>
      );
    }
  
    return null;
  };

class BalanceNegativePlot extends Component {
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
        console.log("calculating balance for the negative class now!")
        let temp = [];
        for (var s of this.props.activeGroups) {
            let name = s.vals.join(" ");
            temp.push({
                name: name,
                nppscore: s.metrics.nppscore,
                size: s.insts.length
            })
        }
        temp = temp.sort((a,b) => a.nppscore - b.nppscore); // b - a for reverse sort
       
        this.setState({data: temp});
    }



    render () {        
        return(
            <div>
                <h3>
                Average Negative Predicted Probability Score Chart
                </h3>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart data={this.state.data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={0} height={200} tick={{ angle: 90, textAnchor: 'start'}}/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="nppscore" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        
        )

        
    }        
    
}

export default BalanceNegativePlot;
