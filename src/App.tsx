import { useState } from "react"; // Library dari React, biar bisa nyimpen data yang berubah ubah 
import PlanItem from "./PlanItem";

// deklarasi tipe data yang dipake dalam variabel Plan
type Plan = {
  text: string;
  done: boolean;
};

function App(){
  // 
  const [plans, setPlans] = useState<Plan[]> ([]);

  //
  const [input, setInput] = useState("");

  //
  const addTasks = () => {
    if (input.trim() == "") return;

    setPlans([...plans, {text: input, done: false}]);
    setInput("");
  };

  const deleteTask = (index: number) => {
    setPlans(plans.filter((_, i) => i !== index))
  } 

  const [editingIndex, setEditingIndex] = useState< number |null>(null)

  const [editText, setEditText] = useState("")

  const startEdit = (index: number) => {
    setEditingIndex(index)
    setEditText(plans[index].text)
  }

  const saveEdit = (index: number) => {
    const updatedPlans= [...plans]
    updatedPlans[index].text = editText
    setPlans(updatedPlans)
    setEditingIndex(null)
    setEditText("")
  }

  //
  const toggleDone = (index: number) => {
    const updatedPlans = [...plans];
    updatedPlans[index].done = !updatedPlans[index].done;
    setPlans(updatedPlans);
  };

  //
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
        <button className="btn-add" onClick={addTasks}>Tambah</button>
      </div>
      
      <ul>
        {plans
          .sort((a,b) => Number(a.done) - Number(b.done))
          .map((plan, index) => (
          <PlanItem
            key={index}
            plan={plan}
            index={index}
            editingIndex={editingIndex}
            editText={editText}
            setEditText={setEditText}
            toggleDone={toggleDone}
            startEdit={startEdit}
            saveEdit={saveEdit}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  )
}

export default App;