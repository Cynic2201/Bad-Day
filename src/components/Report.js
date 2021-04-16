import Checkbox from "./Checkbox";

const DISASTERS = ["Natural", "Disease", "Crime", "Accident"];

const handleCheckboxSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    //function to organize what data to present
};

const handleProfileSave = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    //function to organize what data to present
};

const createCheckbox = disaster => (
    <>
    <Checkbox
        label={disaster}
        key={disaster}
    />
    <br />
    </>
);

const createCheckboxes = () => DISASTERS.map(this.createCheckbox);

const Report = () => {
    return (
        <>
            <form className="alignForm" id="profileForm">
                <div className="leftDiv">
                    <label>Select Profile</label><br />
                    <label>Profile Name: </label><br />
                    <label>Age: </label><br />
                    <label>Location: </label><br />
                </div>
                <div className="rightDiv">
                    <select id="selectProfile">

                    </select><br />
                    <input type="text" /><br />
                    <input type="text" /><br />
                    <input type="text" placeholder="location" /><br />
                    <input type="button" placeholder="Find My Location" /><br />
                    <input type="submit" id="centerButton" value="Save Profile" />
                </div>
            </form>
            <form className="alignForm" id="statsForm">
                <div class="leftDiv">
                    <label>Natural Disasters :</label><br />
                    <label>Diseases and Illnesses :</label><br />
                    <label>Crimes :</label><br />
                    <label>Vehicle Accidents :</label><br />
                    <label>Unnatural Disasters :</label><br />
                </div>
                <div className="rightDiv">
                    {this.createCheckboxes()}
                    <button type="submit">Get Stats</button>
                </div>
            </form>
            <div className="reportBody">

            </div>
            <div className="bottomBar" />
        </>
    )
}

export default Report