import { useEffect, useState } from "react";
import PatientCard from "./PatientCard";
import { fetchPatients } from "./services/api";

function App() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  // Add Patient state
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Fetch data from API (SERVICE LAYER)
  useEffect(() => {
    fetchPatients().then(data => setPatients(data));
  }, []);

  // Add Patient
  const addPatient = () => {
    const newPatient = {
      name,
      age,
      heartRate: 70,
      temperature: 36.5
    };

    setPatients([...patients, newPatient]);

    setName("");
    setAge("");
  };

  // Search filter
  const filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Smart Health Kiosk</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", margin: "10px", width: "200px" }}
      />

      {/* ADD PATIENT */}
      <div style={{ margin: "10px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "5px", padding: "8px" }}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{ marginRight: "5px", padding: "8px" }}
        />

        <button
          onClick={addPatient}
          style={{
            padding: "8px 12px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Add
        </button>
      </div>

      {/* PATIENT LIST */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredPatients.length > 0 ? (
          filteredPatients.map((p, i) => (
            <PatientCard key={i} {...p} />
          ))
        ) : (
          <p>No patients found</p>
        )}
      </div>
    </div>
  );
}

export default App;