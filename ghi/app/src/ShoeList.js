import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';

<<<<<<< HEAD
async function loadShoes() {
    const response = await fetch('http://localhost:8080/api/shoes/');
    if (response.ok) {
      const data = await response.json();
      // const root = ReactDOM.createRoot(document.getElementById('root'));
      // root.render(
      //   <React.StrictMode>
      //     <App shoes={data.shoes} />
      //   </React.StrictMode>
      // );
    } else {
      console.error(response);
=======
class ShoeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoes: []
        }
>>>>>>> refs/remotes/origin/main
    }

    async delete(id) {
        this
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
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>          
                  {this.state.shoes.map(shoe => {
                    return (
                      <tr key={shoe.id}>
                        <td>{ shoe.manufacturer }</td>
                        <td>{ shoe.model_name }</td>
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