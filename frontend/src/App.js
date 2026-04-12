import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/patient")
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  return (
    <div>
      <h1>Smart Health Kiosk</h1>

      {data ? (
        <p>{data.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;