
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Replace 'your_json_link' with the actual JSON link
    fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json')
      .then(response => response.json())
      .then(data => setTableData(data.appointments))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
console.log(tableData);
  return (
    <div className='table-container'>
      <h2>Patient Table</h2>
      <table>
        <thead>
          <tr>
            <th>Patients</th>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Injury</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td><div>
                <p>{row.patient_name}</p>
                <p>{row.mobile_number}</p>
                </div>
                </td>
              <td>{row.appointment_date}</td>
              <td>{row.appointment_time}</td>
              <td>{row.doctor}</td>
              <td>{row.injury}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
