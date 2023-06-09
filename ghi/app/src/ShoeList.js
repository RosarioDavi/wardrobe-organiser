import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';

class ShoeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoes: []
        }
    }

    async delete(id) {
        await fetch(`http://localhost:8080/api/shoes/${id}` , {
            method: 'DELETE',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(() => {
            let updatedshoes = [...this.state.shoes].filter(i => i.id !== id);
            this.setState({shoes : updatedshoes});
        });
    }

    async loadShoes() {
        const response = await fetch('http://localhost:8080/api/shoes/');
        if (response.ok) {
          const data = await response.json();
          this.setState({shoes : data.shoes})
        } else {
          console.error(response);
        }
      }

    async componentDidMount() {
        this.loadShoes()
    }
    
    render () {
        return (
            <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Manufacturer</th>
                    <th>Shoe Name</th>
                    <th>Bin</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>          
                  {this.state.shoes.map(shoe => {
                    return (
                      <tr key={shoe.id}>
                        <td>{ shoe.manufacturer }</td>
                        <td><a link = "">{ shoe.model_name }</a></td>
                        <td>{ shoe.bin }</td>
                        <button onClick={() => this.delete(shoe.id)}> Delete </button>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
        );
    }
}

// async function loadShoes() {
//     const response = await fetch('http://localhost:8080/api/shoes/');
//     if (response.ok) {
//       const data = await response.json();
//       const root = ReactDOM.createRoot(document.getElementById('root'));
//       root.render(
//         <React.StrictMode>
//           <App shoes={data.shoes} />
//         </React.StrictMode>
//       );
//     } else {
//       console.error(response);
//     }
//   }
//   loadShoes();

// function ShoeList(props) {
// return (
//     <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Manufacturer</th>
//             <th>Shoe Name</th>
//             <th>Bin</th>
//           </tr>
//         </thead>
//         <tbody>          
//           {props.shoes.map(shoe => {
//             return (
//               <tr key={shoe.href}>
//                 <td>{ shoe.manufacturer }</td>
//                 <td>{ shoe.model_name }</td>
//                 <td>{ shoe.bin }</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
// );
// }

export default ShoeList;