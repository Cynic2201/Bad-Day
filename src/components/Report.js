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
                    <input type="checkbox" name="checkNatural" value="checkNatural" /><br />
                    <input type="checkbox" name="checkDisease" value="checkDisease" /><br />
                    <input type="checkbox" name="checkCrime" value="checkCrime" /><br />
                    <input type="checkbox" name="checkAccident" value="checkAccident" /><br />
                    <input type="checkbox" name="checkUnnatural" value="checkUnnatural" /><br />
                    <input type="submit" value="Get Stats" />
                </div>
            </form>
            <div className="reportBody">

            </div>
            <div className="bottomBar" />
        </>
    )
}

export default Report