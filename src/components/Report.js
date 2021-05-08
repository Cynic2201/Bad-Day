import React, { Component } from "react";
import Checkbox from "./Checkbox";
import axios from "axios"

const url = "http://localhost:3000/Report";

var display;
var response;
var disaster = "Cancer";

axios.post('/',function(req,res){
    sendData(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

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

        axios.get('http://localhost:5000/app/info')
        .then(response => console.log(response.data))

        window.location= '/'
        //console.log(registerd)
      }
      componentDidMount() {
        fetch("http://localhost:5000/")
          .then(res => res.json())
          .then(
            (result) => {
                display = result
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

    
    render() {
        return (
            <> 
            <h2 class="title">John Doe</h2>
                <form className="alignForm" onSubmit = {this.onSubmit}>
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
                        <input type="text" placeholder="state" onChange = {this.changestateUS}/><br/>
                        <select id="selectDisaster" onChange = {this.changedisaster}>
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
                        <input type="submit" id="centerButton" value="Save Profile" />
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