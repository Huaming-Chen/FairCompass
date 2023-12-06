import React, { useState,Component } from "react";
import FirstTab from "./FirstTab";
import FairCompass from "./FairCompass";
import { withStyles } from "@material-ui/core/styles";
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
import Toolbar from '@material-ui/core/Toolbar';
import PlotView from "./PlotView";

const styles = {
    viewTabs: {
        marginTop: 65,
        width: "100%"
      }
}


class ViewTabs extends Component   { 
    constructor(props) {
        super(props);
        
        this.state = {
          page: 0,
          showSimilar: false,
          neighbors: [],
          sort: "acc",
          activeTab: "tab1"
        };
    }
    


    handleTab1 = () => {
        // update the state to tab1
        this.setState({ activeTab: "tab1" })
    };
    handleTab2 = () => {
        // update the state to tab2
        this.setState({ activeTab: "tab2" })
    };
        
    render() {
        let classes = this.props.classes;
        var activeGroups = this.props.activeGroups


        return (
          <div className={classes.viewTabs} >
            <AppBar position="static">
                <Toolbar>
                    <Tab label="Feature Drawer" className={this.state.activeTab === "tab1" ? "active" : ""} onClick={this.handleTab1}/>
                    <Tab label="Fair Compass" className={this.state.activeTab === "tab2" ? "active" : ""} onClick={this.handleTab2}/>
                </Toolbar>
            </AppBar>
            <div className="outlet">
                {this.state.activeTab === "tab1" ? <FirstTab/> : <FairCompass activeGroups={activeGroups}/>}
            </div>
          </div>
        );
    }

    
    
};
export default withStyles(styles)(ViewTabs);