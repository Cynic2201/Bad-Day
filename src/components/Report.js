import React, { Component } from "react";
import Checkbox from "./Checkbox";

const DISASTERS = ["Natural", "Disease"];

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
        fetch("http://localhost:5000/")
          .then(res => res.json())
          .then(
            (result) => {
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
    
    display = () => fetch("http://localhost:5000/").then(res => res.text()).then(text => console.log(text));

    render() {
        return (
            <> 
            <h2 class="title">John Doe</h2>
                <form className="alignForm">
                    <div className="leftDiv">
                        <label>Select Profile :</label><br/>
                        <label>Profile Name :</label><br/>
                        <label>Age :</label><br/>
                        <label>Location :</label><br/>
                    </div>
                    <div className="rightDiv">
                        <select id="selectProfile">
                            <option>John Doe</option>
                        </select><br/>
                        <input type="text" placeholder="name"/><br/>
                        <input type="text" placeholder="age"/><br/>
                        <input type="text" placeholder="location"/><br/>
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
                        <button type="submit">Get Stats</button>
                    </div>
                </form>
                <body className="reportBody">
                        <label class="info">
                        {this.display()}
                        </label><br />
                </body>
                <div className="bottomBar" />
            </>
        )
    }
}

export default Report;