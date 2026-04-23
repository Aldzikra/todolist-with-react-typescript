import { useState } from "react"; // Fitur React, biar bisa nyimpen data yang berubah ubah 

//
type Plan = {
  text: string;
  done: boolean;
};

function App(){
  // 
  const [plans, setPlans] = useState<Plan[]> ([
    {text: "Belajar React", done: false},
    {text: "Kerjain Matdas", done: false},
    {text: "Riset CodeLabs", done: false}
  ]);

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

  //
  const toggleDone = (index: number) => {
// const (count,setCount) = useState(0)
// <h1>Hello World
//<button onClick="useState(count + 1)">Tambah
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
        <button onClick={addTasks}>Tambah</button>
      </div>
      
      <ul>
        {plans
          .sort((a,b) => Number(a.done) - Number(b.done))
          .map((plan, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={plan.done}
              onChange={() => toggleDone(index)}
            />
            <span
              style={{
                textDecoration: plan.done ? "line-through" : "none"
              }}
            >
              {plan.text} 
            </span>
            <button onClick={() => deleteTask(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;


// {plans
//   .sort((a, b) => Number(a.done) - Number(b.done) )
//   .map((plan, index) => .sort(a,b) (
//      
//    ))}