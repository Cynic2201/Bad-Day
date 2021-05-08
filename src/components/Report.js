import React, { Component } from "react";
import Checkbox from "./Checkbox";
import axios from "axios"

const url = "http://localhost:3000/Report";

var display;
var serverInfo;
var response;
var disaster = "Cancer";

let sendData = () => {
    axios.post(url, disaster)
       .then(res => console.log(res.data))
       .catch(err => console.log("errrrooo"))
    }
    sendData();

class Report extends Component {

    constructor(props) {
        super()
        this.state = {
            stateUS:'',
            disaster:'',
         
        }
        this.changestateUS = this.changestateUS.bind(this)
        this.changedisaster = this.changedisaster.bind(this)
        this.onSubmitform = this.onSubmitform.bind(this)
      }

      changestateUS(event){
        this.setState({
            stateUS:event.target.value
        })
    }
  
      changedisaster(event){
        this.setState({
            disaster:event.target.value
        })
    }
        
    

    onSubmitform(event){
        event.preventDefault()
        
        const registerd = {
            
            stateUS:this.state.stateUS,
            disaster:this.state.disaster,
            
        }
      }

      componentDidMount() {
        fetch("http://localhost:5000/")
          .then(res => res.json())
          .then(
            (result) => {
                serverInfo = result
                console.log(serverInfo + "     hello wurld");
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

      createInfo() {
        var disasterInfo = "0.0044695030193568205, 0.1541750764061035, 0.03002108992956433,"+
        "0.04835971896595137, 0.015648322292572604, 0.03316189018269106, 0.011353448779634597,"+
        "0.1711596940521418, 0.04614774521797976, nan, ";
        //This method will slice part of the string and shove it into the info variable
        var info = disasterInfo.slice(0, disasterInfo.indexOf(','));
        //Edit the disasterInfo string so that the sliced bit is taken off
        disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        //Remove commas
        info.replaceAll(',','');
        //repeat until all 10 stats have been taken

        var info1 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        info1.replaceAll(',','');
        
        var info2 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        info2.replaceAll(',','');

        var info3 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        info3.replaceAll(',','');

        var info4 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        info4.replaceAll(',','');

        var info5 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        info5.replaceAll(',','');

        var info6 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        info6.replaceAll(',','');

        var info7 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        info7.replaceAll(',','');

        var info8 = disasterInfo.slice(0, disasterInfo.indexOf(','));
        disasterInfo = disasterInfo.slice(disasterInfo.indexOf(',')+1);
        info8.replaceAll(',','');

        display = <div>
        <p>Disaster: Sepsis || Percent chance of death: {info}</p><br />
        <p>Disaster: Cancer || Percent chance of death: {info1}</p><br />
        <p>Disaster: Diabetes || Percent chance of death: {info2}</p><br />
        <p>Disaster: Alzheimers || Percent chance of death: {info3}</p><br />
        <p>Disaster: Flu || Percent chance of death: {info4}</p><br />
        <p>Disaster: CLRD || Percent chance of death: {info5}</p><br />
        <p>Disaster: Kidney Disease || Percent chance of death: {info6}</p><br />
        <p>Disaster: Heart Disease || Percent chance of death: {info7}</p><br />
        <p>Disaster: Stroke || Percent chance of death: {info8}</p><br />
         </div>;
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

    
    render() {
        return (
            <> 
            <h2 class="title">John Doe</h2>
                <form className="alignForm">
                    <div className="leftDiv">
                        <label>Profile Name :</label><br/>
                        <label>Age :</label><br/>
                        <label>State :</label><br/>
                        <label>Disaster :</label>
                    </div>
                    <div className="rightDiv">
                        <select id="selectProfile">
                            <option>John Doe</option>
                        </select><br/>
                        <input type="text" placeholder="name"/><br/>
                        <input type="text" placeholder="age"/><br/>
                        <input type="text" placeholder="state"/><br/>
                        <select id="selectDisaster">
                            <option>Sepsis</option>
                            <option>Cancer</option>
                            <option>Diabetes</option>
                            <option>Alzheimers</option>
                            <option>Flu</option>
                            <option>CLRD</option>
                            <option>Kidney Disease</option>
                            <option>Heart Disease</option>
                            <option>Stroke</option>
                            <option>Covid</option>
                        </select><br />
                        <input type="submit" id="centerButton" value="Submit" onClick = {this.createInfo()} />
                    </div>
                </form>
                <form className="alignForm">
                    <div class="leftDiv2">
                        <label>Natural Disasters :</label><br />
                        <label>Diseases and Illnesses :</label><br />
                    </div>
                    <div className="rightDiv2" >
                        <input type="radio" value="Natural" name="gender"/><br/>
                        <input type="radio" value="Disease" name="gender"/>
                    </div>
                </form>
                <body className="reportBody">
                        <label class="info">
                        {display}
                        </label><br />
                </body>
                <div className="bottomBar" />

            </>
        )
    }
}

export default Report;