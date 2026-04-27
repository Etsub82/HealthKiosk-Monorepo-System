function PatientCard({ name, age, heartRate, temperature }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px",
      width: "220px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      backgroundColor: "#f9f9f9"
    }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Heart Rate: {heartRate} bpm</p>
      <p>Temperature: {temperature}°C</p>
    </div>
  );
}

export default PatientCard;