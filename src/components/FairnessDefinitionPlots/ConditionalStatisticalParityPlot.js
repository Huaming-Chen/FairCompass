import React, { Component } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis,Tooltip, Legend,ResponsiveContainer, Scatter, ScatterChart, ZAxis} from 'recharts';
import Typography from "@material-ui/core/Typography";
import {Select, MenuItem} from "@material-ui/core";
const barColors = ["#1f77b4", "#ff7f0e", "#2ca02c"]

const CustomTooltip= ({ active, payload, label, bars }) => {
    if (active && payload && payload.length) {
      return (
        <div>
            <p>{payload[0].payload.name}</p>
            {payload.map((pld, index) => (
                <div>
                    <p style={{ color: pld.fill }}>{pld.name}: {pld.value}</p>
                    <p style={{ color: pld.fill }}>size: {pld.payload[bars[index]].size}</p>
                </div>
            ))}
        </div>
      );
    }
  
    return null;
  };

class ConditionalStatisticalParityPlot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            favOutcome: "",
            sensitiveFeature: "",
            bars: []
        };
        this.loadData = this.loadData.bind(this);
    }

    loadData = (favOutcome, sensitiveFeature) => {
        console.log("calculating conditional statistical parity now!")
        let temp = [];
        let results = [];

        if (favOutcome == 0) {
            for (var s of this.props.activeGroups) {
                let name = s.vals.join(" ");
                console.log(name);
                let index = s.feats.indexOf(sensitiveFeature)
                let sf = s.vals[index]

                let nonSensitiveVals = s.vals.slice();
                nonSensitiveVals.splice(index, 1)

                temp.push({
                    name: name,
                    nonSensitiveFeatures: nonSensitiveVals.join(" "),
                    nr: s.metrics.n,
                    size: s.insts.length,
                    sensitiveFeature: sf,
                })
            }
            let sorted_arr = temp.sort((a,b) => a.nonSensitiveFeatures.localeCompare(b.nonSensitiveFeatures));
            console.log(sorted_arr);
            let prevNsf = null;
            let tempResultItem = {}
            let tempBars = new Set()
            for (let i = 0; i < sorted_arr.length; i++) {
                tempBars.add(sorted_arr[i].sensitiveFeature)
                if (prevNsf != sorted_arr[i].nonSensitiveFeatures) {
                    if (Object.keys(tempResultItem).length != 0) {
                        console.log(tempResultItem)
                        results.push(Object.assign({}, tempResultItem))
                    }
                    prevNsf = sorted_arr[i].nonSensitiveFeatures
                    tempResultItem = {
                        name: sorted_arr[i].nonSensitiveFeatures,
                        [sorted_arr[i].sensitiveFeature]: {
                            nr: sorted_arr[i].nr,
                            size: sorted_arr[i].size
                        },
                    }
                }
                else {
                    tempResultItem[sorted_arr[i].sensitiveFeature] = {
                        nr: sorted_arr[i].nr,
                        size: sorted_arr[i].size
                    }
                }
            }
            if (Object.keys(tempResultItem).length != 0) {
                console.log(tempResultItem)
                results.push(Object.assign({}, tempResultItem))
            }
            this.setState({bars: Array.from(tempBars.values())})
        }
        else {
            for (var s of this.props.activeGroups) {
                let name = s.vals.join(" ");
                console.log(name);
                let index = s.feats.indexOf(sensitiveFeature)
                let sf = s.vals[index]

                let nonSensitiveVals = s.vals.slice();
                nonSensitiveVals.splice(index, 1)

                temp.push({
                    name: name,
                    nonSensitiveFeatures: nonSensitiveVals.join(" "),
                    pr: s.metrics.p,
                    size: s.insts.length,
                    sensitiveFeature: sf,
                })
            }
            let sorted_arr = temp.sort((a,b) => a.nonSensitiveFeatures.localeCompare(b.nonSensitiveFeatures));
            console.log(sorted_arr);
            let prevNsf = null;
            let tempResultItem = {}
            let tempBars = new Set()
            for (let i = 0; i < sorted_arr.length; i++) {
                tempBars.add(sorted_arr[i].sensitiveFeature)
                if (prevNsf != sorted_arr[i].nonSensitiveFeatures) {
                    if (Object.keys(tempResultItem).length != 0) {
                        console.log(tempResultItem)
                        results.push(Object.assign({}, tempResultItem))
                    }
                    prevNsf = sorted_arr[i].nonSensitiveFeatures
                    tempResultItem = {
                        name: sorted_arr[i].nonSensitiveFeatures,
                        [sorted_arr[i].sensitiveFeature]: {
                            pr: sorted_arr[i].pr,
                            size: sorted_arr[i].size
                        },
                    }
                }
                else {
                    tempResultItem[sorted_arr[i].sensitiveFeature] = {
                        pr: sorted_arr[i].pr,
                        size: sorted_arr[i].size
                    }
                }
            }
            if (Object.keys(tempResultItem).length != 0) {
                console.log(tempResultItem)
                results.push(Object.assign({}, tempResultItem))
            }
            this.setState({bars: Array.from(tempBars.values())})
        }
        console.log(temp);
        
        console.log(results)

        this.setState({data: results});
    }

    selectFavOutcome = (e) => {
        if (e.target.value === "") {
            return;
        }
        this.setState({favOutcome: e.target.value})
        if (this.props.activeGroups && this.state.sensitiveFeature != "") {
            this.loadData(e.target.value, this.state.sensitiveFeature);
        }
        
    }

    selectSensitiveFeature = (e) => {
        if (e.target.value === "") {
            return;
        }
        this.setState({sensitiveFeature: e.target.value})
        if (this.props.activeGroups && this.state.favOutcome != "") {
            this.loadData(this.state.favOutcome, e.target.value);
        }
    }

    render() {
        return (
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
            <Typography>
            Please select the sensitive feature in your active subgroups:
            </Typography>
            <Select
                value={this.state.sensitiveFeature}
                onChange={this.selectSensitiveFeature}>
                <MenuItem value=""></MenuItem>
                { this.props.activeGroups.length > 0 && this.props.activeGroups[0].feats.map((f) => (
                    <MenuItem value={f}>{f}</MenuItem>
                ))
                }
                </Select>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart data={this.state.data} margin={{
                    top: 30,
                    right: 5,
                    left: 5,
                    bottom: 5,
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" interval={0} height={150} tick={{ angle: 90, textAnchor: 'start'}}/>
                    <YAxis/>
                    <Tooltip content={<CustomTooltip payload={this.state.data} bars={this.state.bars}/>} 
                        wrapperStyle={{ backgroundColor: "white", 
                        paddingLeft: "5px", 
                        paddingRight: "5px",
                        boxShadow: '0 3px 14px rgb(0 0 0 / 40%)',
                        textAlign: 'left'}}/>
                    <Legend/>
                    {this.state.favOutcome == 0 && this.state.bars.map((bar, index) => 
                        <Bar dataKey={`${bar}.nr`} fill={barColors[index%barColors.length]}/>
                    )}
                    {this.state.favOutcome == 1 && this.state.bars.map((bar, index) => 
                        <Bar dataKey={`${bar}.pr`} fill={barColors[index%barColors.length]}/>
                    )}
                </BarChart>
                
            </ResponsiveContainer>
            </div>
        )
    }
}

export default ConditionalStatisticalParityPlot;
