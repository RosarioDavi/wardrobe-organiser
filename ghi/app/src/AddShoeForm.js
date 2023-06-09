import React from 'react';

class CreateShoeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      manufacturer: '',
      model_name: '',
      color: '',
      bins: []
    };
    this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleBinChange = this.handleBinChange.bind(this);
    this.handleSubmitChange = this.handleSubmitChange.bind(this);
  }

  async handleSubmitChange (event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.bins;

    const locationUrl = 'http://localhost:8080/api/shoes/';
    const fetchConfig = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
    },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
    const newLocation = await response.json();
    
    const cleared = {
        manufacturer: '',
        model_name: '',
        color: '',
        bin: '',
    };
    this.setState(cleared);
    }

  }

  handleManufacturerChange(event) {
    const value = event.target.value;
    this.setState({manufacturer: value})
  }

  handleModelChange(event) {
    const value = event.target.value;
    this.setState({model_name: value})
  }

  handleColorChange(event) {
    const value = event.target.value;
    this.setState({color: value})
  }

  handleBinChange(event) {
    const value = event.target.value;
    this.setState({bin:value})
  }


  async componentDidMount() {
    const url = 'http://localhost:8100/api/bins';

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({bins: data.bins})
    }
  }

    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Add a Shoe</h1>
                <form onSubmit={this.handleSubmitChange} id="add-shoe-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handleManufacturerChange} value={this.state.manufacturer} placeholder="Manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control" />
                    <label htmlFor="manufacturer">Manufacturer</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleModelChange} value={this.state.model_name} placeholder="Model Name" required type="text" name="model_name" id="model_name" className="form-control" />
                    <label htmlFor="model_name">Model Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleColorChange} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                    <label htmlFor="color">Color</label>
                  </div>
                  <div className="mb-3">
                    <select onChange={this.handleBinChange} value={this.state.bin} required id="bin" name="bin" className="form-select">
                      <option value="">Choose a Bin</option>
                      {this.state.bins.map(bin => {
                            return (
                            <option key={bin.href} value={bin.href}>
                                {bin.closet_name}
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
export default CreateShoeForm;