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
                        <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit sit amet augue porta posuere nec eu velit. Vivamus ultrices, ante eu consequat dictum, odio ipsum viverra augue, nec euismod orci nisl vitae turpis. In ornare hendrerit sem ac congue. Pellentesque pellentesque urna nec elit tempor pellentesque. Nam hendrerit nisi id leo dictum rutrum sed quis mi. Etiam ac mi eu purus feugiat accumsan. Curabitur dignissim lacus a elementum varius. Aliquam vel orci lectus. Nullam a nunc turpis. Fusce at aliquam ligula. Aliquam accumsan ultrices sapien convallis ultricies. Quisque ultrices ipsum fermentum, vestibulum eros sed, luctus mauris. Ut ac ullamcorper tortor, eget malesuada purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</label><br />
                </body>
                <div className="bottomBar" />
            </>
        )
    }
}

export default Report;