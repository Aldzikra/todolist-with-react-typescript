import { useState } from "react";

function App(){
  const [plans, setPlans] = useState<string[]> ([
  "Belajar React",
  "Kerjain Tugas",
  "Rapat UKM"
]);
  const [input, setInput] = useState("");

  const addTasks = () => {
    if (input.trim() == "") return;

    setPlans([...plans, input]);
    setInput("")
  }
  return(
    <div className="container">
      <h1>My Planning App</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Masukkan Rencanamu ...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTasks}>Tambah</button>
      </div>
      
      <ul>
        {plans.map((plan, index) => (
          <li key={index}>{plan}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;