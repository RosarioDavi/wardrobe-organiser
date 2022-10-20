import React from 'react';
import './index.css';


class HatsList extends React.Component{
    constructor(props){
     super(props);
     this.state={
        hats : []
     }
    }
    async loadHats() {
        const response = await fetch('http://localhost:8090/api/hats/');
        if (response.ok) {
          const data = await response.json();
          this.setState({hats:data.hats})
        } else {
          console.error(response);
        }
      }

      async componentDidMount(){
        this.loadHats()

      }
      render(){
        return(
            <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Location</th>
                  </tr>
                </thead>
            <tbody>
                {this.state.hats.map(hat => {
                  return (
                      <tr key = {hat.id}>
                        <td>{ hat.style_name }</td>
                        <td>{ hat.color }</td>
                        <td>{hat.location}</td>
                      </tr>
                    );
                  })}
        
            </tbody>
              </table>
        
        
          );
        }
      }

export default HatsList;