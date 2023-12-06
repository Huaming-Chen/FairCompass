import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import SplitPane, { Pane } from "react-split-pane";
import FairnessDescriptionView from "./FairnessDescriptionView";

const styles = {
    shiftLeft: {
        marginLeft: "0px",
        display: "flex",
        flexDirection: "inline",
    },
    shiftRight: {
        marginLeft: 360,
        display: "flex",
        flexDirection: "inline",
    },
};

class FairCompassTree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeCard: "start",
            viewport: undefined,
        };
        this.viewportChange = (viewport) => this.setState({ viewport });
    }

    start = () => {
        this.setState({ activeCard: "start" });
    };

    policy = () => {
        this.setState({ activeCard: "policy" });
    };

    equalBase = () => {
        this.setState({ activeCard: "equalBase" });
    };

    groundTruth = () => {
        this.setState({ activeCard: "groundTruth" });
    };

    typeOfRep = () => {
        this.setState({ activeCard: "typeOfRep" });
    };

    labelBias = () => {
        this.setState({ activeCard: "labelBias" });
    };

    explainingVariables = () => {
        this.setState({ activeCard: "explainingVariables" });
    };

    evaluationMetric = () => {
        this.setState({ activeCard: "evaluationMetric" });
    };

    outputType = () => {
        this.setState({ activeCard: "outputType" });
    };

    errorTypes = () => {
        this.setState({ activeCard: "errorTypes" });
    };

    equalSelectionParity = () => {
        this.setState({ activeCard: "equalSelectionParity" });
    };

    demographicParity = () => {
        this.setState({ activeCard: "demographicParity" });
    };

    conditionalStatisticalParity = () => {
        this.setState({ activeCard: "conditionalStatisticalParity" });
    };

    conditionalUseAccuracyEquality = () => {
        this.setState({ activeCard: "conditionalUseAccuracyEquality" });
    };

    predictiveParity = () => {
        this.setState({ activeCard: "predictiveParity" });
    };

    balancePos = () => {
        this.setState({ activeCard: "balancePos" });
    };

    balanceNeg = () => {
        this.setState({ activeCard: "balanceNeg" });
    };

    calibration = () => {
        this.setState({ activeCard: "calibration" });
    };

    equalizedOdds = () => {
        this.setState({ activeCard: "equalizedOdds" });
    };

    equalizedOpportunities = () => {
        this.setState({ activeCard: "equalizedOpportunities" });
    };

    predictiveEquality = () => {
        this.setState({ activeCard: "predictiveEquality" });
    };

    closePopUp = () => {
        this.setState({ activeCard: "" });
    };

    // Event handler callback for zoom in
    handleZoomIn() {
        // Fetching current height and width
        const height = this.imgRef.current.clientHeight;
        const width = this.imgRef.current.clientWidth;

        // Increase dimension(Zooming)
        this.setState({
            height: height + 10,
            width: width + 10,
        });
    }

    // Event handler callback zoom out
    handleZoomOut() {
        // Assigning original height and width
        this.setState({
            height: this.initialHeight,
            width: this.initialWidth,
        });
    }

    render() {
        let classes = this.props.classes;
        return (
            <SplitPane split='vertical' height={window.innerHeight} minSize={100} maxSize={-100} defaultSize={"50%"} style={{ overflowX: "hidden", overflowY: "hidden" }} className={this.props.openFeatureDrawer ? classes.shiftRight : classes.shiftLeft}>
                <div style={{ position: "absolute", height: window.innerHeight, width: "100%", overflow: "auto" }}>
                    <div style={{ height: "1500px", width: "100%", minWidth: "800px" }}>
                        <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='100%' height='1500px' viewBox='-10 -10 1400 2200'>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M553.99 959v111.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m553.99 1075.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 999,
                                            marginLeft: 554,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Yes"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={554} y={1002} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Yes"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M674 390H361v680.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m361 1075.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 391,
                                            marginLeft: 600,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Yes"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={600} y={394} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Yes"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M774 390h196v73.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m970 468.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 391,
                                            marginLeft: 847,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"No"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={847} y={394} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"No"}
                                </text>
                            </switch>
                            <rect onClick={this.equalSelectionParity} width={"140"} height={30} x={128} y={1077} fill='#f5f5f5' stroke='#666' pointerEvents='all' rx={4.5} ry={4.5} />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.equalSelectionParity} x={198} y={1095} fill='#333' fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Equal selection parity"}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <text x={198} y={1125} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Independence: \u0176 \u22A5 A"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M550 299h174v34.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m724 338.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 299,
                                            marginLeft: 625,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"No"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={625} y={302} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"No"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M335 730h26v340.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m361 1075.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 830,
                                            marginLeft: 362,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Proportional"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={362} y={833} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Proportional"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M235 730h-37v340.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m198 1075.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 831,
                                            marginLeft: 199,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Equal numbers"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={199} y={834} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Equal numbers"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M716 1210H295v73.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m295 1288.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1210,
                                            marginLeft: 584,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Precision"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={584} y={1213} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Precision"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M816 1210h154v73.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m970 1288.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1211,
                                            marginLeft: 886,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Recall"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={886} y={1214} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Recall"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M1030 658h184v62.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m1214 725.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 659,
                                            marginLeft: 1109,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Succeeded"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={1109} y={662} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Succeeded"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M910 658H554v194.64' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m554 857.89-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 659,
                                            marginLeft: 826,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Failed"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={826} y={662} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Failed"}
                                </text>
                            </switch>
                            <path fill='#fff' stroke='#000' d='M910 628h120v60H910z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 118,
                                            height: 1,
                                            paddingTop: 658,
                                            marginLeft: 911,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal",
                                                }}>
                                                {"Label annotation"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={970} y={661} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Label annotation"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M706 777H554l-.01 75.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m553.99 857.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 778,
                                            marginLeft: 647,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Failed"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={647} y={781} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Failed"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M766 807v346.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m766 1158.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 885,
                                            marginLeft: 767,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Succeeded"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={767} y={888} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Succeeded"}
                                </text>
                            </switch>
                            <path fill='#fff' stroke='#000' d='M706 747h120v60H706z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 118,
                                            height: 1,
                                            paddingTop: 777,
                                            marginLeft: 707,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal",
                                                }}>
                                                {"Label correction"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={766} y={780} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Label correction"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M920 1340H788v383.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m788 1728.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1342,
                                            marginLeft: 858,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Class label"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={858} y={1345} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Class label"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M1020 1340h104v63.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m1124 1408.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1341,
                                            marginLeft: 1061,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Score"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={1061} y={1344} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Score"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M838 1780h222v143.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m1060 1928.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1870,
                                            marginLeft: 1061,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"False positive"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={1061} y={1873} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"False positive"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M738 1780H542.5v143.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m542.5 1928.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1871,
                                            marginLeft: 543,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"False negative"}
                                                <br
                                                    style={{
                                                        fontSize: 11,
                                                    }}
                                                />
                                                {"+ False positive"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={543} y={1874} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"False negative..."}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M788 1830v93.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m788 1928.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1871,
                                            marginLeft: 790,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"False negative"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={790} y={1874} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"False negative"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M1074 1460h-50v153.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m1024 1618.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1545,
                                            marginLeft: 1026,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Positive class"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={1026} y={1549} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Positive class"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M1174 1460h76v153.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m1250 1618.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1542,
                                            marginLeft: 1247,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Negative class"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={1247} y={1545} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Negative class"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M394 1460h-65v153.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m329 1618.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1544,
                                            marginLeft: 330,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"False negative + False positive"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={330} y={1547} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"False negative + False positive"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M494 1460h105v153.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m599 1618.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1541,
                                            marginLeft: 613,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"False positive"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={613} y={1544} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"False positive"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M450 299H285v374.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m285 678.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 300,
                                            marginLeft: 374,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Yes"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={374} y={303} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Yes"}
                                </text>
                            </switch>
                            <path onClick={this.policy} fill='#fff' stroke='#000' strokeMiterlimit={10} d='m500 349-50-50 50-50 50 50Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.policy} x={500} y={302} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Policy?"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M724 440v80H554v332.64' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m554 857.89-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 471,
                                            marginLeft: 725,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"No, but should be"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={725} y={474} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"No, but should be"}
                                </text>
                            </switch>
                            <path onClick={this.equalBase} fill='#fff' stroke='#000' strokeMiterlimit={10} d='m724 340 50 50-50 50-50-50Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.equalBase} x={724} y={393} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    <tspan x='724' y='390'>
                                        Equal base
                                    </tspan>
                                    <tspan x='724' y='405'>
                                        rates?
                                    </tspan>
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M970 570v51.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m970 626.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 592,
                                            marginLeft: 971,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Eventually"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={971} y={595} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Eventually"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M1020 520h328v500H766v133.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m766 1158.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 521,
                                            marginLeft: 1148,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Yes"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={1148} y={524} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Yes"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M920 520H554v332.64' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m554 857.89-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 521,
                                            marginLeft: 828,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"No"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={828} y={524} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"No"}
                                </text>
                            </switch>
                            <path onClick={this.groundTruth} fill='#fff' stroke='#000' strokeMiterlimit={10} d='m970 470 50 50-50 50-50-50Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.groundTruth} x={970} y={523} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    <tspan x='970' y='520'>
                                        Ground truth
                                    </tspan>
                                    <tspan x='970' y='535'>
                                        available?
                                    </tspan>
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M1164 777H832.37' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m827.12 777 7-3.5-1.75 3.5 1.75 3.5Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 778,
                                            marginLeft: 1095,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Yes"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={1095} y={781} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Yes"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M1214 827v193H766v133.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m766 1158.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 895,
                                            marginLeft: 1215,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"No"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={1215} y={898} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"No"}
                                </text>
                            </switch>
                            <path onClick={this.labelBias} fill='#fff' stroke='#000' strokeMiterlimit={10} d='m1214 727 50 50-50 50-50-50Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.labelBias} x={1214} y={780} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Label bias?"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M503.99 909H361v161.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m361 1075.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 910,
                                            marginLeft: 453,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"No"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={453} y={913} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"No"}
                                </text>
                            </switch>
                            <path onClick={this.explainingVariables} fill='#fff' stroke='#000' strokeMiterlimit={10} d='m553.99 859 50 50-50 50-50-50Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.explainingVariables} x={554} y={912} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    <tspan x={554} y={910}>
                                        Explaining
                                    </tspan>
                                    <tspan x={554} y={925}>
                                        variables?
                                    </tspan>
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M345 1340h99v63.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m444 1408.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1341,
                                            marginLeft: 395,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Class label"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={395} y={1344} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Class label"}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M245 1340h-78v583.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m167 1928.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1343,
                                            marginLeft: 208,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    backgroundColor: "#fff",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Score"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={208} y={1346} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Score"}
                                </text>
                            </switch>
                            <path onClick={this.outputType} fill='#fff' stroke='#000' strokeMiterlimit={10} d='m295 1290 50 50-50 50-50-50Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.outputType} x={295} y={1343} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Output type?"}
                                </text>
                            </switch>
                            <path onClick={this.outputType} fill='#fff' stroke='#000' strokeMiterlimit={10} d='m970 1290 50 50-50 50-50-50Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.outputType} x={970} y={1343} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Output type?"}
                                </text>
                            </switch>
                            <path onClick={this.evaluationMetric} fill='#fff' stroke='#000' strokeMiterlimit={10} d='m766 1160 50 50-50 50-50-50Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.evaluationMetric} x={766} y={1195} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    <tspan x={766} y={1195}>
                                        Evaluation
                                    </tspan>
                                    <tspan x={766} y={1210}>
                                        metric most
                                    </tspan>
                                    <tspan x={766} y={1225}>
                                        sensitive to
                                    </tspan>
                                    <tspan x={766} y={1240}>
                                        fairness?
                                    </tspan>
                                </text>
                            </switch>
                            <path onClick={this.errorTypes} fill='#fff' stroke='#000' strokeMiterlimit={10} d='m444 1410 50 50-50 50-50-50Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.errorTypes} x={444} y={1450} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    <tspan x={444} y={1450}>
                                        Error types
                                    </tspan>
                                    <tspan x={444} y={1465}>
                                        most sensitive
                                    </tspan>
                                    <tspan x={444} y={1480}>
                                        to fairness?
                                    </tspan>
                                </text>
                            </switch>
                            <path onClick={this.errorTypes} fill='#fff' stroke='#000' strokeMiterlimit={10} d='m788 1730 50 50-50 50-50-50Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.errorTypes} x={788} y={1770} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    <tspan x={788} y={1770}>
                                        Error types
                                    </tspan>
                                    <tspan x={788} y={1785}>
                                        most sensitive
                                    </tspan>
                                    <tspan x={788} y={1800}>
                                        to fairness?
                                    </tspan>
                                </text>
                            </switch>
                            <path fill='#fff' stroke='#000' strokeMiterlimit={10} d='m1124 1410 50 50-50 50-50-50Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 98,
                                            height: 1,
                                            paddingTop: 1460,
                                            marginLeft: 1075,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal",
                                                }}>
                                                <font
                                                    style={{
                                                        fontSize: 11,
                                                    }}>
                                                    {"Which class is"}
                                                    <br />
                                                    {"more sensitive"}
                                                    <br />
                                                    {"to fairness?"}
                                                </font>
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={1124} y={1463} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Which class is..."}
                                </text>
                            </switch>
                            <path fill='none' stroke='#000' strokeMiterlimit={10} d='M500 183v59.63' pointerEvents='stroke' />
                            <path stroke='#000' strokeMiterlimit={10} d='m500 247.88-3.5-7 3.5 1.75 3.5-1.75Z' pointerEvents='all' />
                            <path onClick={this.start} fill='#fff' stroke='#000' d='M450 143h100v40H450z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.start} x={500} y={166} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"START"}
                                </text>
                            </switch>
                            <rect onClick={this.predictiveEquality} width={190} height={30} x={965} y={1930} fill='#f5f5f5' stroke='#666' pointerEvents='all' rx={4.5} ry={4.5} />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.predictiveEquality} x={1060} y={1948} fill='#333' fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Predictive equality"}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <text x={1060} y={1978} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"P(\u0176=1 | Y=0, A=0) = P(\u0176=1 | Y=0, A=1)"}
                                </text>
                            </switch>
                            <rect onClick={this.predictiveParity} width={230} height={30} x={484} y={1620} fill='#f5f5f5' stroke='#666' pointerEvents='all' rx={4.5} ry={4.5} />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.predictiveParity} x={599} y={1638} fill='#333' fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Predictive parity"}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <text x={599} y={1668} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"P(Y=1 | \u0176=1, A=0) = P(Y=1 | \u0176=1, A=1)"}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <text x={361} y={1125} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"P(\u0176\xA0| A=0) = P(\u0176\xA0| A=1)"}
                                </text>
                            </switch>
                            <rect onClick={this.demographicParity} width={150} height={30} x={286} y={1077} fill='#f5f5f5' stroke='#666' pointerEvents='all' rx={4.5} ry={4.5} />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 148,
                                            height: 1,
                                            paddingTop: 1092,
                                            marginLeft: 287,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "#333",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "none",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal",
                                                }}>
                                                <b
                                                    style={{
                                                        fontSize: 11,
                                                    }}>
                                                    {"Demographic parity"}
                                                </b>
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={361} y={1095} fill='#333' fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Demographic parity"}
                                </text>
                            </switch>
                            <rect onClick={this.conditionalStatisticalParity} width={200} height={30} x={453.99} y={1077} fill='#f5f5f5' stroke='#666' pointerEvents='all' rx={4.5} ry={4.5} />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.conditionalStatisticalParity} x={554} y={1095} fill='#333' fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Conditional statistical parity"}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <text x={554} y={1125} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"P(\u0176=1 | E=e, A=0) = P(\u0176=1 | E=e, A=1)\n"}
                                </text>
                            </switch>
                            <rect onClick={this.balanceNeg} width={180} height={30} x={1160} y={1620} fill='#f5f5f5' stroke='#666' pointerEvents='all' rx={4.5} ry={4.5} />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.balanceNeg} x={1250} y={1638} fill='#333' fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Balance for negative class"}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <text x={1250} y={1668} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"E[S | Y=0, A=0] = E[S | Y=0, A=1]"}
                                </text>
                            </switch>
                            <rect onClick={this.balancePos} width={170} height={30} x={939} y={1620} fill='#f5f5f5' stroke='#666' pointerEvents='all' rx={4.5} ry={4.5} />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.balancePos} x={1024} y={1638} fill='#333' fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Balance for positive class"}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <text x={1025} y={1668} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"E[S | Y=1, A=0] = E[S | Y=1, A=1]\n"}
                                </text>
                            </switch>
                            <rect onClick={this.equalizedOdds} width={177} height={30} x={454} y={1930} fill='#f5f5f5' stroke='#666' pointerEvents='all' rx={4.5} ry={4.5} />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.equalizedOdds} x={543} y={1948} fill='#333' fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Equalized odds"}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <text x={542} y={1978} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"P(\u0176=1 | Y=y, A=0) = P(\u0176=1 | Y=y, A=1) \u2200 y \u2208 {0,1}"}
                                </text>
                            </switch>
                            <rect onClick={this.equalizedOpportunities} width={180} height={30} x={698} y={1930} fill='#f5f5f5' stroke='#666' pointerEvents='all' rx={4.5} ry={4.5} />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.equalizedOpportunities} x={788} y={1948} fill='#333' fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Equalized opportunities"}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <text x={788} y={1978} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"P(\u0176=1 | Y=1, A=0) = P(\u0176=1 | Y=1, A=1)"}
                                </text>
                            </switch>
                            <rect onClick={this.calibration} width={160} height={30} x={87} y={1930} fill='#f5f5f5' stroke='#666' pointerEvents='all' rx={4.5} ry={4.5} />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.calibration} x={167} y={1948} fill='#333' fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Calibration\n"}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <text x={164} y={1978} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"P(Y=1 | S=s, A=0) = P(Y=1 | S=s, A=1) \u2200 s \u2208 [0,1]\n"}
                                </text>
                            </switch>
                            <path onClick={this.typeOfRep} fill='#fff' stroke='#000' strokeMiterlimit={10} d='m285 680 50 50-50 50-50-50Z' pointerEvents='all' />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.typeOfRep} x={285} y={733} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    <tspan x='285' y='725'>
                                        Type of
                                    </tspan>
                                    <tspan x='285' y='740'>
                                        representation?
                                    </tspan>
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <text x={329} y={1668} fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"P(Y=y | \u0176=y, A=0) = P(Y=y | \u0176=y, A=1) \u2200 y \u2208 {0,1}"}
                                </text>
                            </switch>
                            <rect onClick={this.conditionalUseAccuracyEquality} width={230} height={30} x={208.99} y={1620} fill='#f5f5f5' stroke='#666' pointerEvents='all' rx={4.5} ry={4.5} />
                            <switch transform='translate(-.5 -.5)'>
                                <text onClick={this.conditionalUseAccuracyEquality} x={324} y={1638} fill='#333' fontFamily='Helvetica' fontSize={11} textAnchor='middle'>
                                    {"Conditional use accuracy equality"}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 55,
                                            marginLeft: 279,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "none",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                <font
                                                    style={{
                                                        fontSize: 48,
                                                    }}>
                                                    {/* <b>
                                                        <font color='#01aec5'>{"FAIR"}</font>
                                                        {"COMPASS"}
                                                    </b> */}
                                                </font>
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={279} y={59} fontFamily='Helvetica' fontSize={12} textAnchor='middle'>
                                    {"FAIR COMPASS"}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe flex-start",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 298,
                                            marginLeft: 1246,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "none",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Action node"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={1246} y={302} fontFamily='Helvetica' fontSize={12}>
                                    {"Action\r\n                    node"}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe flex-start",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 172,
                                            marginLeft: 1246,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "none",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Decision node"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={1246} y={175} fontFamily='Helvetica' fontSize={12}>
                                    {"Decision\r\n                    node"}
                                </text>
                            </switch>
                            <rect width={90} height={30} x={1125} y={219} fill='#f5f5f5' stroke='#666' pointerEvents='none' rx={4.5} ry={4.5} />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe flex-start",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 234,
                                            marginLeft: 1246,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "none",
                                                    whiteSpace: "nowrap",
                                                }}>
                                                {"Fairness definition"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={1246} y={238} fontFamily='Helvetica' fontSize={12}>
                                    {"Fairness\r\n                    definition"}
                                </text>
                            </switch>
                            <path fill='#fff' stroke='#000' strokeMiterlimit={10} d='m1170 143 28.5 28.5L1170 200l-28.5-28.5Z' pointerEvents='none' />
                            <path fill='#fff' stroke='#000' d='M1133.5 283.4h73v29h-73z' pointerEvents='none' />
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 67,
                                            marginLeft: 556,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "none",
                                                    whiteSpace: "nowrap",
                                                }}>
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={556} y={71} fontFamily='Helvetica' fontSize={12} textAnchor='middle'>
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe flex-start",
                                            width: 309,
                                            height: 1,
                                            paddingTop: 2150,
                                            marginLeft: 250,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 14,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "none",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal",
                                                }}>
                                                {"Decision tree based on B. Ruf and M. Detyniecki,"}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={250} y={2154} fontFamily='Helvetica' fontSize={14}>
                                    {"Decision\r\n                    tree based on B. Ruf and M. Detynie..."}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe flex-start",
                                            width: 262,
                                            height: 1,
                                            paddingTop: 2150,
                                            marginLeft: 561,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 14,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "none",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal",
                                                }}>
                                                <a href='https://arxiv.org/abs/2102.08453' target='_blank' rel='noopener noreferrer'>
                                                    {'"Towards the Right Kind of Fairness in\r\n                                    AI"'}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={561} y={2154} fontFamily='Helvetica' fontSize={14}>
                                    {'"Towards\r\n                    the Right Kind of Fairness in...'}
                                </text>
                            </switch>
                            <switch transform='translate(-.5 -.5)'>
                                <foreignObject
                                    width='100%'
                                    height='100%'
                                    pointerEvents='none'
                                    requiredFeatures='http://www.w3.org/TR/SVG11/feature#Extensibility'
                                    style={{
                                        overflow: "visible",
                                        textAlign: "left",
                                    }}>
                                    <div
                                        xmlns='http://www.w3.org/1999/xhtml'
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe flex-start",
                                            width: 239,
                                            height: 1,
                                            paddingTop: 2150,
                                            marginLeft: 822,
                                        }}>
                                        <div
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                            }}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 14,
                                                    fontFamily: "Helvetica",
                                                    color: "#000",
                                                    lineHeight: 1.2,
                                                    pointerEvents: "none",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal",
                                                }}>
                                                {", ECML/PKDD 2021 (Industry Track)."}
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                                <text x={822} y={2154} fontFamily='Helvetica' fontSize={14}>
                                    {",\r\n                    ECML/PKDD 2021 (Industry Track)."}
                                </text>
                            </switch>
                            <switch>
                                <a href='/#' xlinkHref='https://www.diagrams.net/doc/faq/svg-export-text-problems' target='_blank' transform='translate(0 -5)'>
                                    <text x='50%' y='100%' fontSize={10} textAnchor='middle'>
                                        {"Viewer does not support full SVG 1.1"}
                                    </text>
                                </a>
                            </switch>
                        </svg>
                    </div>
                </div>
                <FairnessDescriptionView style={{ overflowY: "scroll" }} activeGroups={this.props.activeGroups} activeCard={this.state.activeCard} />
            </SplitPane>
        );
    }
}

export default withStyles(styles)(FairCompassTree);
