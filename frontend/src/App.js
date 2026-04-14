import { useEffect, useState } from "react";

function App() {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/patient")
      .then(res => res.json())
      .then(data => setPatient(data));
  }, []);

  return (
    <div>
      <h1>Smart Health Kiosk</h1>

      {patient ? (
        <div>
          <p>Name: {patient.name}</p>
          <p>Age: {patient.age}</p>
          <p>Heart Rate: {patient.heartRate} bpm</p>
          <p>Temperature: {patient.temperature}°C</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;