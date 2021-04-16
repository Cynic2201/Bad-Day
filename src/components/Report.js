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
                        <label>Crimes :</label><br />
                        <label>Vehicle Accidents :</label><br />
                    </div>
                    <div className="rightDiv2">
                        {this.createCheckboxes()}
                        <button type="submit">Get Stats</button>
                    </div>
                </form>
                <body className="reportBody">
                        <label class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit sit amet augue porta posuere nec eu velit. Vivamus ultrices, ante eu consequat dictum, odio ipsum viverra augue, nec euismod orci nisl vitae turpis. In ornare hendrerit sem ac congue. Pellentesque pellentesque urna nec elit tempor pellentesque. Nam hendrerit nisi id leo dictum rutrum sed quis mi. Etiam ac mi eu purus feugiat accumsan. Curabitur dignissim lacus a elementum varius. Aliquam vel orci lectus. Nullam a nunc turpis. Fusce at aliquam ligula. Aliquam accumsan ultrices sapien convallis ultricies. Quisque ultrices ipsum fermentum, vestibulum eros sed, luctus mauris. Ut ac ullamcorper tortor, eget malesuada purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Sed gravida at ante a condimentum. Ut luctus mi ac erat hendrerit lobortis. Sed vel tortor eu risus sodales sagittis. Aenean porttitor dolor non lectus convallis, et porttitor elit molestie. Nulla felis urna, molestie auctor mi quis, lobortis tempor ligula. Praesent lacinia tincidunt libero, non bibendum nunc interdum a. Sed elementum nisl in euismod venenatis. Nunc venenatis purus ut quam porta mollis. Phasellus lobortis mi lacus, eu molestie justo feugiat sed. Etiam pretium dui ac sodales fringilla. Ut lobortis neque quis dolor lacinia vestibulum. Morbi auctor, magna id ornare dapibus, lorem purus tempor tortor, non iaculis nisl nulla et sem. Pellentesque lobortis est in rutrum interdum. Vestibulum nec sem semper, mollis turpis id, sollicitudin dolor. Phasellus ultricies sem et massa commodo lobortis accumsan et urna.

Ut bibendum mauris id nisl finibus, ac pulvinar ex tempor. Nulla facilisi. Donec vulputate augue eget elit accumsan, non rutrum lorem feugiat. Fusce id varius nisi. Aenean lobortis semper metus, in porttitor ipsum bibendum eu. Morbi vel sodales urna. Praesent fermentum vitae urna at bibendum. Proin non vehicula ligula.

Aenean volutpat interdum justo, id lobortis erat hendrerit quis. Cras tempus dignissim porta. Aenean tristique posuere neque sed bibendum. Nunc consectetur ipsum at ipsum fringilla, et pretium libero bibendum. Etiam metus massa, vulputate eget augue quis, ornare tempor tortor. Cras facilisis aliquam auctor. Curabitur tortor lorem, facilisis non leo ullamcorper, dignissim rhoncus neque.

Nulla lobortis tortor ac tellus suscipit, sed elementum ante malesuada. Morbi fringilla sollicitudin neque in lacinia. Fusce non enim ac leo facilisis facilisis in a nibh. Nulla rhoncus ultrices porttitor. Nullam rutrum vehicula mi. Curabitur id diam suscipit, tristique sapien a, consequat tellus. Nunc in sapien ac nunc iaculis lobortis ut sit amet est. Pellentesque fermentum, sapien sed accumsan accumsan, augue augue aliquet arcu, mollis molestie nisi enim vitae nunc. Maecenas pharetra ligula sed elit cursus, nec rutrum quam imperdiet. Quisque metus nibh, maximus quis consectetur et, molestie sed orci. Pellentesque feugiat tortor vel massa blandit, eu tempor velit tempus. Cras vehicula justo vitae odio sodales aliquet. Sed nec scelerisque lorem, ut ullamcorper magna. Suspendisse feugiat nec eros eget ultricies. Pellentesque ornare nibh leo, porttitor feugiat lorem gravida eget. Nunc luctus velit ac diam fermentum luctus.

</label><br />
                </body>
                <div className="bottomBar" />
            </>
        )
    }
}

export default Report;