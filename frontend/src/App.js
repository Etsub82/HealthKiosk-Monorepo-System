import { useEffect, useState } from "react";
import PatientCard from "./PatientCard";

function App() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  // NEW FORM STATE
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/patients")
      .then(res => res.json())
      .then(data => setPatients(data))
      .catch(err => console.error(err));
  }, []);

  // ADD PATIENT FUNCTION
  const addPatient = () => {
    const newPatient = {
      name,
      age,
      heartRate: 70,
      temperature: 36.5
    };

    setPatients([...patients, newPatient]);

    // clear input
    setName("");
    setAge("");
  };

  const filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Smart Health Kiosk</h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ➕ ADD PATIENT */}
      <h3>Add Patient</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={addPatient}>Add</button>

      {/* 📋 DISPLAY */}
      {filteredPatients.length > 0 ? (
        filteredPatients.map((p, i) => (
          <PatientCard key={i} {...p} />
        ))
      ) : (
        <p>No patients found</p>
      )}
    </div>
  );
}

export default App;