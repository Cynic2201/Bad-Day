import axios from "axios";
import React, { Component } from "react";
import Checkbox from "./Checkbox";

// const express = require('express');

const DISASTERS = ["Natural", "Disease"];

var disasterInfo;
var giraffe;

class Report extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

      componentDidMount() {
        fetch("http://localhost:5000/data")
          .then(res => res.json())
          .then(
            (result) => {
                disasterInfo = result
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      

      
    handleCheckboxSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        //function to organize what data to present
    };

    handleProfileSave = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        //function to organize what data to present
    };

    handleProfileSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        //function to organize what data to present
    };

    createCheckbox = disaster => (
        <>
            <Checkbox
                label={disaster}
                key={disaster}
            />
            <br />
        </>
    );

    createCheckboxes = () => DISASTERS.map(this.createCheckbox);
    
    display = () => fetch("http://localhost:5000/data").then(res => res.text()).then(text => console.log(text));

    render() {
        return (
            <> 

            <h2 class="title">John Doe</h2>
                <form className="alignForm">
                    <div className="leftDiv">
                        <label>Select Profile :</label><br/>
                        <label>Profile Name :</label><br/>
                        <label>Age :</label><br/>
                        <label>State :</label><br/>
                    </div>
                    <div className="rightDiv">
                        <select id="selectProfile">
                            <option>John Doe</option>
                        </select><br/>
                        <input type="text" placeholder="name" id="Disaster"/><br/>
                        <input type="text" placeholder="age"/><br/>
                        <input type="text" placeholder="state" id="State"/><br/>
                        <input type="submit" id="centerButton" value="Save Profile" />
                    </div>
                </form>
                <form className="alignForm">
                    <div class="leftDiv2">
                        <label>Natural Disasters :</label><br />
                        <label>Diseases and Illnesses :</label><br />
                    </div>
                    <div className="rightDiv2">
                        {this.createCheckboxes()}
                        <button onClick={() => this.sss()}>Get Stats</button> 
                    </div>
                </form>
                <body className="reportBody" id = "why">
                        <label class="info">
                        {disasterInfo}
                        </label><br />
                </body>
                <div className="bottomBar"/>

            </>
        ) 
    }

    sss(){
        // console.log("test: " + disasterInfo)
        // document.getElementById('Disaster').value = disasterInfo;

        // var info = disasterInfo.slice(0, disasterInfo.indexOf(','));
        // //Edit the disasterInfo string so that the sliced bit is taken off
        // disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        // //Remove commas
        // info.replaceAll(',','');
        



        //repeat until all 10 stats have been taken
        // var info1 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        // disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        // info1.replaceAll(',','');
        
        // var info2 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        // disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        // info2.replaceAll(',','');
        // info3 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        // disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        // info3.replaceAll(',','');
        // var info4 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        // disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        // info4.replaceAll(',','');
        // var info5 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        // disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        // info5.replaceAll(',','');
        // var info6 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        // disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        // info6.replaceAll(',','');
        // var info7 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        // disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        // info7.replaceAll(',','');
        // var info8 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        // disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        // info8.replaceAll(',','');
        // var info9 = disasterInfo.slice(0, 1);
        // disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        // info9.replaceAll(',','');


        // giraffe = <div>
        // <p>Disaster: Sepsis. Chance of death: {info}</p><br />
        // <p>Disaster: Cancer. Chance of death: {info1}</p><br />
        // <p>Disaster: Diabetes. Chance of death: {info2}</p><br />
        // <p>Disaster: Alzheimers. Chance of death: {info3}</p><br />
        // <p>Disaster: Flu. Chance of death: {info4}</p><br />
        // <p>Disaster: CLRD. Chance of death: {info5}</p><br />
        // <p>Disaster: Kidney Disease. Chance of death: {info6}</p><br />
        // <p>Disaster: Heart Disease. Chance of death: {info7}</p><br />
        // <p>Disaster: Stroke. Chance of death: {info8}</p><br />
        // <p>Disaster: Covid. Chance of death: {info9}</p><br />
        //  </div>;

    }
}

export default Report;