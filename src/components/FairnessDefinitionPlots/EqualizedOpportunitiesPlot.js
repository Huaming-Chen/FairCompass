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

class EqualizedOpportunitiesPlot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            favOutcome: "",

        };
        this.loadData = this.loadData.bind(this);
    }

    componentWillMount() {
        this.loadData();
    }


    loadData = (favOutcome) => {
        console.log("calculating equalised opportunities now!")
        console.log(favOutcome)
        let temp = [];
        if (favOutcome == 0) {
            for (var s of this.props.activeGroups) {
                let name = s.vals.join(" ");
                temp.push({
                    name: name,
                    for: s.metrics.for,
                    size: s.insts.length
                })
            }
            temp = temp.sort((a,b) => a.for - b.for); // b - a for reverse sort
        }
        else {
            for (var s of this.props.activeGroups) {
                let name = s.vals.join(" ");
                temp.push({
                    name: name,
                    fdr: s.metrics.fdr,
                    size: s.insts.length
                })
            }
            temp = temp.sort((a,b) => parseFloat(a.fdr) - parseFloat(b.fdr)); // b - a for reverse sort
        }
        this.setState({data: temp});
    }

    selectFavOutcome = (e) => {
        if (e.target.value === "") {
            return;
        }
        this.setState({favOutcome: e.target.value})
        this.loadData(e.target.value);
    }


    render () {        
        return(
            <div>
            <Typography>
            Please select the class that represents the favourable outcome:
            </Typography>
            <Select
                value={this.state.favOutcome}
                onChange={this.selectFavOutcome}>
                <MenuItem value=""></MenuItem>
                <MenuItem value={1}>Positive (1)</MenuItem>
                <MenuItem value={0}>Negative (0)</MenuItem>
            </Select>
            <ResponsiveContainer width="95%" height={400}>
            {this.props.activeGroups &&
                <BarChart data={this.state.data} margin={{
                top: 30,
                right: 5,
                left: 5,
                bottom: 5,
            }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval={0} height={120} tick={{ angle: 90, textAnchor: 'start'}}/>
                <YAxis/>
                <Tooltip content={<CustomTooltip payload={this.state.data} />} 
                wrapperStyle={{ backgroundColor: "white", 
                paddingLeft: "5px", 
                paddingRight: "5px",
                boxShadow: '0 3px 14px rgb(0 0 0 / 40%)',
                textAlign: 'left'}}/>
                <Legend />
                {this.state.favOutcome == 0 && (<Bar dataKey="for" fill="#8884d8"/>)} 
                {this.state.favOutcome == 1 && (<Bar dataKey="fdr" fill="#8884d8"/>)} 
            </BarChart>
            }
            
        </ResponsiveContainer>
            </div>
        
        )

        
    }        
    
}

export default EqualizedOpportunitiesPlot;
