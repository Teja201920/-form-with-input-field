import React, { useState } from "react";

function App() {
  // State to store input value
  const [name, setName] = useState("");

  // Handle input change
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Experiment 5: Form with onChange</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <h2>Welcome, {name}</h2>
    </div>
  );
}

export default App;
