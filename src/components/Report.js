import React, { Component } from "react";
import Checkbox from "./Checkbox";

const DISASTERS = ["Natural", "Disease", "Crime", "Accident"];



class Report extends Component {
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
    render() {
        return (
            <> 
                <form className="alignForm">
                    <div className="leftDiv">
                        <label>Select Profile :</label><br />
                        <label>Profile Name :</label><br />
                        <label>Age :</label><br />
                        <label>Location :</label><br />
                    </div>
                    <div className="rightDiv">
                        <select id="selectProfile">

                        </select><br />
                        <input type="text" placeholder="name" /><br />
                        <input type="text" placeholder="age" /><br />
                        <input type="text" placeholder="location" /><br />
                        <input type="submit" id="centerButton" value="Save Profile" />
                    </div>
                </form>
                <form className="alignForm">
                    <div class="leftDiv">
                        <label>Natural Disasters :</label><br />
                        <label>Diseases and Illnesses :</label><br />
                        <label>Crimes :</label><br />
                        <label>Vehicle Accidents :</label><br />
                    </div>
                    <div className="rightDiv">
                        {this.createCheckboxes()}
                        <button type="submit">Get Stats</button>
                    </div>
                </form>
                <body className="reportBody">
                    
                </body>
                <div className="bottomBar" />
            </>
        )
    }
}

export default Report;