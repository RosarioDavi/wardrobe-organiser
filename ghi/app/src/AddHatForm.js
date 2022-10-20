import React from 'react';

class CreateHatForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style_name : "",
            fabric : "",
            color : "",
            locations : []
        };
        this.handlestyleNameChange=this.handlestyleNameChange.bind(this);
        this.handleColorChange=this.handleColorChange.bind(this);
        this.handleFabricChange=this.handleFabricChange.bind(this);
        this.handleLocationChange=this.handleLocationChange.bind(this);
        this.handleSubmitChange=this.handleSubmitChange.bind(this);
    }
    

async handleSubmitChange(event){
    event.preventDefault();
    const data = {...this.state};
    const locationUrl = 'http://localhost:8090/api/hats/';
    delete data.locations;
    const fetchConfig = {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
        },
        };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok){
        const newLocation = await response.json()

        const cleared = {
            style_name : "",
            fabric : "",
            color : "",
            location : ""

        };
        this.setState(cleared)
    }
    }

    handlestyleNameChange(event) {
        const value = event.target.value;
        this.setState({style_name: value})
      }

    handleColorChange(event){
        const value = event.target.value;
        this.setState({color: value})
    }

    handleFabricChange(event){
        const value = event.target.value;
        this.setState({fabric: value})
    }

    handleLocationChange(event){
        const value= event.target.value;
        this.setState({location: value})
    }
    

 async componentDidMount(){
    const url = 'http://localhost:8100/api/locations/'
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        this.setState({locations: data.locations});
    }
 }  
    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Add a Hat</h1>
                <form onSubmit={this.handleSubmitChange} id="add-hat-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handlestyleNameChange} value={this.state.style_name} placeholder="style_name" required type="text" name="style_name" id="style_name" className="form-control" />
                    <label htmlFor="style_name">Style Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleFabricChange} value={this.state.fabric} placeholder="fabric" required type="text" name="fabric" id="fabric" className="form-control" />
                    <label htmlFor="fabric">Fabric</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleColorChange} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                    <label htmlFor="color">Color</label>
                  </div>
                  <div className="mb-3">
                    <select onChange={this.handleLocationChange} value={this.state.location} required id="location" name="location" className="form-select">
                      <option value="">Location</option>
                      {this.state.locations.map(location => {
                            return (
                            <option key={location.id} value={location.id}>
                                {location.closet_name}
                            </option>
                            );
                        })}
                    </select>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        );
    }
}
export default CreateHatForm;




