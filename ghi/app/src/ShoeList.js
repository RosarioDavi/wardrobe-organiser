import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';

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
    }
  }
  loadShoes();

function ShoeList(props) {
return (
    <table className="table table-striped">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Shoe Name</th>
            <th>Bin</th>
          </tr>
        </thead>
        <tbody>          
          {/* for (let attendee of props.attendees) {

            <tr>
              <td>{ attendee.name }</td>
              <td>{ attendee.conference }</td>
            </tr>
          }   */}
          {props.shoes.map(shoe => {
            return (
              <tr key={shoe.href}>
                <td>{ shoe.manufacturer }</td>
                <td>{ shoe.model_name }</td>
                <td>{ shoe.bin }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
);
}

export default ShoeList;