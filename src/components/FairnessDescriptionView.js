import React, { Component, useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./styles/styles.css";

import EqualSelectionParityPlot from "./FairnessDefinitionPlots/EqualSelectionParityPlot";
import DemographicParityPlot from "./FairnessDefinitionPlots/DemographicParityPlot";
import ConditionalStatisticalParityPlot from "./FairnessDefinitionPlots/ConditionalStatisticalParityPlot";
import ConditionalUseAccuracyEqualityPlot from "./FairnessDefinitionPlots/ConditionalUseAccuracyEqualityPlot";
import PredictiveParityPlot from "./FairnessDefinitionPlots/PredictiveParityPlot";
import BalancePositivePlot from "./FairnessDefinitionPlots/BalancePositivePlot";
import BalanceNegativePlot from "./FairnessDefinitionPlots/BalanceNegativePlot";
import CalibrationPlot from "./FairnessDefinitionPlots/CalibrationPlot";
import EqualizedOddsPlot from "./FairnessDefinitionPlots/EqualizedOddsPlot";
import EqualizedOpportunitiesPlot from "./FairnessDefinitionPlots/EqualizedOpportunitiesPlot";
import PredictiveEqualityPlot from "./FairnessDefinitionPlots/PredictiveEqualityPlot";

class FairnessDescriptionView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            showSimilar: false,
            neighbors: [],
            sort: "acc",
            data: [],
        };
    }

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };


    render() {
        var activeGroups = this.props.activeGroups
        console.log(this.props.activeGroups);

        // Demographic parity
        if (activeGroups.length >= 2) {
            let first = activeGroups[0]
            let second = activeGroups[1]

            console.log(first.metrics.n)
            console.log(second.metrics.n)
        }
        return (
                <Card style={{height: "100%", overflow: "auto"}}
                    >
                    <CardContent>
                    {this.props.activeCard === "start" && (
                        <div>
                            <h2>Start</h2>
                            <Typography paragraph={true}>
                            Before you can strive for fairness you need to define it. <i>The Fair Compass</i> helps you settle the relevant ethical questions in your given context and leads you to the most appropriate fairness definition for your application.
                            </Typography>
                            <Typography paragraph={true}>
                            Click on the elements in the diagram for further explanations and useful examples.
                            </Typography>
                        </div>
                            
                    )}
                    {this.props.activeCard === "policy" && (
                        <div>
                            <h2>Policy</h2>
                            <Typography paragraph={true}>
                            Does the environment where you intend to deploy the application impose anti-discrimination policies? Those may stem from law, regulation or internal organisational guidelines.
                            </Typography>
                            <Typography paragraph={true}>
                            For example, the <a href="https://www.lemonde.fr/en/opinion/article/2022/07/03/workplace-equality-it-is-essential-that-states-have-the-means-to-enforce-the-law_5988828_23.html#:~:text=When%20it%20adopted%20the%20Cop%C3%A9,as%20of%20January%201%2C%202017." target="_blank" rel="noopener noreferrer">"Copé-Zimmermann"</a> law requires the boards of all stock exchange listed or state-owned companies in France to consist of at least 40% of women.
                            </Typography>
                        </div>
                    )}
                    {this.props.activeCard === "equalBase" && (
                        <div>
                            <h2>Equal base rates</h2>
                            <Typography paragraph={true}>
                            The base rate is the proportion of actual positives or actual negatives over the entire population. Such a base rate can be equal across sub groups, or it can be different. If you notice varying base rates in your data, you have to decide if you want the fairness definition to reflect this discrepancy or not. The former is the case when you assume a causal relationship between the group membership and the base rate and you would like your fairness definition to take this into account. The latter would be appropriate if you have no rational reason per se to believe that the groups perform differently but rather attribute the data collection process or other data related reasons for the different base rates. Yet another reason to chose equal rates as basis, even though the data suggest otherwise, is when the discrepancy is considered to originate from historical discrimination. If the fairness definition should include to make up for such social injustice in the past, assuming equal base rates helps to push the underprivileged group.
                            </Typography>
                            <Typography paragraph={true}>
                            In a medical scenario, the base rates for women and men to suffer from diabetes are equal, while 99% of breast cancer occurs in women. A fair diagnostic application should acknowledge this discrepancy. In a college admission scenario, however, different base rates in admission exams across different ethnic groups could be attributed to unequal opportunities. If the declared objective of the fairness definition is to correct such social injustice, choosing equal base rates can be a suitable approach.
                            </Typography>
                        </div>  
                    )} 
                    {this.props.activeCard === "groundTruth" && (
                        <div>
                            <h2>Ground truth</h2>
                            <Typography paragraph={true}>
                            Machine learning algorithms are trained by example. The assumption is that the labels of the training data are correct, they constitute the supposed ground truth. Depending on the data set, this can be guaranteed, for example when the labels result from objective measurements or describe indisputable facts. However, when labels represent historical human decisions, they may as well contain human bias. As the labels serve as reference to estimate the model's accuracy but also to satisfy a fairness metric when this one is conditioning on the label, the availability of a reliable ground truth makes a significant difference.
                            </Typography>
                            <Typography paragraph={true}>
                            In a medical scenario, it is possible to conclusively clarify if a tumour is benign or malignant by taking a biopsy and performing a laboratory examination. Hence, the ground truth is available. In an image recognition application which helps classify animals, humans can make training data of good quality available by manually labelling the different species. When predicting recidivism, the ground truth is not immediately available since a possible new criminal offence would take place in the future and may not even be caught.
                            </Typography>
                        </div>
                    )}      
                    {this.props.activeCard === "typeOfRep" && (
                        <div>
                            <h2>Type of representation</h2>
                            <Typography paragraph={true}>
                            When your ideal notion of fairness is rather about representation than distribution, you need to specify the desired type of representation: equal numbers, regardless of the sizes of the subgroups; or proportional equality.
                            </Typography>
                            <Typography paragraph={true}>
                            Let's assume a recruitment scenario, for example, where ten women and two men applied for a job. Inviting two women and two men for an interview would satisfy gender fairness based on equal numbers. For proportional equality, it would be necessary to invite five women and one man.
                            </Typography>
                        </div>         
                    )}      
                    {this.props.activeCard === "labelBias" && (
                        <div>
                            <h2>Label bias</h2>
                            <Typography paragraph={true}>
                            When no ground truth exists and the available labels are based on decisions which were inferred by humans, they may contain human bias. As the labels serve as reference to estimate the model's accuracy but also to satisfy a fairness metric when this one is based on classification rates, it is crucial to mitigate this potential source of bias.
                            </Typography>
                            <Typography paragraph={true}>
                            For example, if software is to learn to describe photos with words, then humans generate the training data by tagging sample images. This task allows for a certain degree of creative freedom, for example in the selection of objects or their description. Especially if this activity is performed by only a small group of people, the training data may include human bias.
                            </Typography>
                        </div>   
                    )}      
                    {this.props.activeCard === "explainingVariables" && (
                        <div>
                            <h2>Explaining variables</h2>
                            <Typography paragraph={true}>
                            Your data may contain variables which are considered legitimate sources of discrepancy. If some kind of inequality between the groups can be shown to stem from those variables, this sort of discrimination can be considered explainable and accepted.
                            </Typography>
                            <Typography paragraph={true}>
                            Let's suppose salary ranges are to be estimated for job applicants. However, the training data show that one group works fewer hours on average than the other. In this case, a variable working_hours could serve as explaining variable.
                            </Typography>
                        </div>        
                    )} 
                    {this.props.activeCard === "evaluationMetric" && (
                        <div>
                            <h2>Precision or Recall</h2>
                            <Typography paragraph={true}>
                            Striking the right balance between precision and recall is a well-known problem in machine learning. Precision describes the fraction of positively predicted instances which were actually positive. Recall is the fraction of actual positive instances which were correctly identified as such. Here, we evaluate which of both metrics is more sensitive to fairness in the given use case. When the consequences of a positive prediction have a negative, punitive impact on the individual, the emphasis with respect to fairness is often on precision. When the result is rather beneficial in the sense that the individuals are provided help they would otherwise forgo, fairness is often more sensitive to recall.
                            </Typography>
                            <Typography paragraph={true}>
                            In a fraud detection scenario where insurance claims are to be investigated it could be considered fair to limit the number of wrongly suspected cases and therefore maximise precision at equally high level for all subgroups. In a loan approval scenario, the focus regarding fairness could be on recall, that is, approving an equally high level of loans to creditworthy applicants across all groups.
                            </Typography>
                        </div>  
                    )}
                    {this.props.activeCard === "outputType" && (
                        <div>
                            <h2>Output type</h2>
                            <Typography paragraph={true}>
                            A score is a continuous value, often between 0 and 1, which can represent the probability for the positive class. Is the output a label instead, the result is an unambiguous decision for one of the classes.
                            </Typography>
                            <Typography paragraph={true}>
                            For example in a loan approval scenario, a score is often preferred because the value of the score leaves the "human in the loop" some room for interpretation. However, when the result is automatically processed, for example in an online marketing scenario, the class label may be the preferred output type.
                            </Typography>
                        </div>
                    )}
                    {this.props.activeCard === "errorTypes" && (
                        <div>
                            <h2>Error types</h2>
                            <Typography paragraph={true}>
                            The different error types to take into account are the false positive and the false negative rate. Depending on the use case, one error type may be more sensitive to fairness than the other.</Typography>
                            <Typography paragraph={true}>
                            In an online marketing scenario where a job offer is supposed to be shown to men and women of relevant profiles, differences in false positive rates (showing the ad to people who are not eligible) across the groups may be acceptable as long as the fractions of people with relevant profiles are equal. On the other hand, in a face recognition application both error types should be equally low for all sorts of skin types.
                            </Typography>
                        </div>
                    )}
                    {this.props.activeCard === "demographicParity" && (
                        <div>
                            <h2>Demographic Parity</h2>
                            <Typography paragraph={true}>
                                The goal of Demographic Parity that the favourable outcome should be assigned to each subgroup of a sensitive class at equal rates. 
                                <a href='https://arxiv.org/abs/1104.3913' target="_blank" rel="noopener noreferrer">[Dwork2016]</a>
                            </Typography>
                            <Typography paragraph={true}>
                            Check out available <a href='https://axa-rev-research.github.io/fairness-compass/src/main/library/#demographic-parity' target="_blank" rel="noopener noreferrer">mitigation algorithms for Demographic parity</a> in the Fairness Library.
                            </Typography>
                        
                        </div>
                    )}
                    {this.props.activeCard === "conditionalStatisticalParity" && (
                        <div>
                            <h2>Conditional statistical parity</h2>
                            <Typography paragraph={true}>
                            This definition extends demographic parity by allowing a set of legitimate factors to affect the prediction. 
                            The definition is satisfied if members in both subgroups have equal probabilities of being assigned to the favourable outcome while controlling for a set of legitimate attributes.
                            </Typography>
                            <Typography paragraph={true}>
                            Check out available <a href='https://axa-rev-research.github.io/fairness-compass/src/main/library/#conditional-statistical-parity' target="_blank" rel="noopener noreferrer">mitigation algorithms for Conditional statistical parity</a> in the Fairness Library.
                            </Typography>
                        </div>
                    )}
                    {this.props.activeCard === "conditionalUseAccuracyEquality" && (
                        <div>
                            <h2>Conditional Use Accuracy Equality</h2>
                            <Typography paragraph={true}>
                            This fairness definition conditions on the algorithm’s predicted outcome, not
                            on the actual outcome <a href="https://arxiv.org/abs/1703.09207" target="_blank" rel="noopener noreferrer">[Berk2016]</a>. In statistical terms this means that the precision or positive
                            predictive value (PPV) and the negative predictive value (NPV) across both
                            groups should be equal.
                            </Typography>
                            <Typography paragraph={true}>
                            In a fraud detection scenario, the objective of this fairness definition is
                            that for the claims which were predicted as fraud, the proportion of correct
                            predictions should be equal across all groups. Likewise, for the claims which
                            were predicted as legitimate, the proportion of correct predictions should be the
                            same.
                            </Typography>
                        </div>    
                    )}
                    {this.props.activeCard === "equalSelectionParity" && (
                        <div>
                            <h2>Equal Selection Parity</h2>
                            <Typography paragraph={true}>
                            While demographic parity seeks to obtain equal rates of a positive outcome, 
                            proportional towards the group size, the objective of equal selection parity is 
                            to have equal absolute numbers of favourable outcomes across the groups, independent of their group sizes <a href='https://arxiv.org/abs/1811.05577' target="_blank" rel="noopener noreferrer">[Saleiro2018]</a>.
                            </Typography>
                            <Typography paragraph={true}>
                            In a fraud detection scenario, this fairness definition would be satisfied if the exact same number of cases were to be identified as legitimate from
                            both groups, even when one group had filed more cases than the other.
                            </Typography>
                        </div> 
                    )}
                    {this.props.activeCard === "predictiveParity" && (
                        <div>
                            <h2>Predictive parity</h2>
                            <Typography paragraph={true}>
                            Predictive parity is a relaxed version of conditional use accuracy equality which only conditions on the positive predicted outcome <a href="https://www.liebertpub.com/doi/10.1089/big.2016.0047" target="_blank" rel="noopener noreferrer">[Chouldechova2016]</a>. Hence, this fairness definition is already satisfied when only the positive predictive value (PPV) is equal for both groups.
                            </Typography>
                        </div>  
                    )}
                    {(this.props.activeCard === "balancePos" || this.props.activeCard === "balanceNeg")  && (
                        <div>
                            <h2>Balance</h2>
                            <Typography paragraph={true}>
                            All previous fairness notions which aim at satisfying separation took binary
                            outputs as a basis. The balance definition uses the predicted probability score
                            instead and compares the average score for both groups per class. This approach
                            seeks to avoid steadily lower outcomes in one group, which might go unnoticed in
                            the binary case, and instead achieve balanced scores for both groups. Depending
                            on the objective it is possible to balance for the positive or negative class. <a href="https://arxiv.org/abs/1609.05807" target="_blank" rel="noopener noreferrer">[Kleinberg2016]</a>
                            </Typography>
                        </div>
                    )}
                    {this.props.activeCard === "calibration" && (
                        <div>
                            <h2>Calibration</h2>
                            <Typography paragraph={true}>
                            The objective of this fairness definition is equal positive and negative predictive values for all sensitive groups. Such calibration across subgroups corresponds to equal probabilities of correct (or incorrect) classification and can therefore be achieved by aligning false discovery and false omission rates. <a href="https://pubmed.ncbi.nlm.nih.gov/23907781/" target="_blank" rel="noopener noreferrer">[Crowson2016]</a>
                            </Typography>
                        </div>    
                    )}
                    {this.props.activeCard === "equalizedOdds" && (
                        <div>
                            <h2>Equalized odds</h2>
                            <Typography paragraph={true}>
                            This fairness definition aims at equal true positive and true negative rates. <a href="https://arxiv.org/abs/1610.02413" target="_blank" rel="noopener noreferrer">[Hardt2016]</a>
                            </Typography>
                            <Typography paragraph={true}>
                            Check out available <a href="https://axa-rev-research.github.io/fairness-compass/src/main/library/#equalized-odds" target="_blank" rel="noopener noreferrer">mitigation algorithms for Equalized odds</a> in the Fairness Library.
                            </Typography>
                        </div>
                    )}
                    {this.props.activeCard === "equalizedOpportunities" && (
                        <div>
                            <h2>Equalized opportunities</h2>
                            <Typography paragraph={true}>
                            This is a relaxed version of Equalized Odds where only the error rates for the favourable outcome are required to be equal. <a href="https://arxiv.org/abs/1610.02413" target="_blank" rel="noopener noreferrer">[Hardt2016]</a>
                            </Typography>
                            <Typography paragraph={true}>
                            Check out available <a href="https://axa-rev-research.github.io/fairness-compass/src/main/library/#equalized-opportunities" target="_blank" rel="noopener noreferrer">mitigation algorithms for Equalized opportunities</a> in the Fairness Library.
                            </Typography>
                        </div>
                    )}
                    {this.props.activeCard === "predictiveEquality" && (
                        <div>
                            <h2>Predictive equality</h2>
                            <Typography paragraph={true}>
                            Another relaxation of equalised odds is predictive equality. Here, only the error
                            rates for the negative outcome are required to be equal <a href="https://dl.acm.org/doi/10.1145/3097983.3098095" target="_blank" rel="noopener noreferrer">[Corbett-Davies2018]</a>.
                            </Typography>
                            <Typography paragraph={true}>
                            In a fraud detection scenario, predictive equality is satisfied when men and women can
                            expect their legitimate claims to get classified as legitimate at equal rates. The
                            error rates for fraudulent claims may differ between the subgroups for this fairness definition.
                            </Typography>
                        </div>
                    )}
                    <h3>Selected Subgroup:</h3>
                    <Typography paragraph={true}>
                        Your current active subgroups were generated with the following features: 
                    </Typography>
                    {this.props.activeGroups.length > 0 && (this.props.activeGroups[0].feats.map((f) => (
                        <Typography>
                            {f}
                        </Typography>
                    )))
                    }                    
                    {this.props.activeCard === "equalSelectionParity" && (
                        <EqualSelectionParityPlot activeGroups={this.props.activeGroups}/>
                    )}
                    {this.props.activeCard === "demographicParity" && (
                        <DemographicParityPlot activeGroups={this.props.activeGroups}/>
                    )}
                    {this.props.activeCard === "conditionalStatisticalParity" && (
                        <ConditionalStatisticalParityPlot activeGroups={this.props.activeGroups}/>
                    )}
                    {this.props.activeCard === "conditionalUseAccuracyEquality" && (
                        <ConditionalUseAccuracyEqualityPlot activeGroups={this.props.activeGroups}/>
                    )}
                    {this.props.activeCard === "predictiveParity" && (
                        <PredictiveParityPlot activeGroups={this.props.activeGroups}/>
                    )}
                    {this.props.activeCard === "balancePos" && (
                        <BalancePositivePlot activeGroups={this.props.activeGroups}/>
                    )}
                    {this.props.activeCard === "balanceNeg" && (
                        <BalanceNegativePlot activeGroups={this.props.activeGroups}/>
                    )}
                    {this.props.activeCard === "calibration" && (
                        <CalibrationPlot activeGroups={this.props.activeGroups}/>
                    )}
                    {this.props.activeCard === "equalizedOdds" && (
                        <EqualizedOddsPlot activeGroups={this.props.activeGroups}/>
                    )}
                    {this.props.activeCard === "equalizedOpportunities" && (
                        <EqualizedOpportunitiesPlot activeGroups={this.props.activeGroups}/>
                    )}
                    {this.props.activeCard === "predictiveEquality" && (
                        <PredictiveEqualityPlot activeGroups={this.props.activeGroups}/>
                    )}
                    </CardContent>

                </Card>
        );
    }
}

export default FairnessDescriptionView;
