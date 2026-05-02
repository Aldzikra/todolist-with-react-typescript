import { useState, useEffect } from "react"; // Library dari React, biar bisa nyimpen data yang berubah ubah 
import PlanItem from "../components/molecules/PlanItem";  // implementasi atomic design, import component dari molucules
import Button from "../components/atoms/Button";

// deklarasi tipe data yang dipake dalam variabel Plan
type Plan = {
  text: string;
  done: boolean;
};

function App(){

  // Deklarasi useState untuk data plan/task   
  const [plans, setPlans] = useState<Plan[]>(() => {
    const saved = localStorage.getItem("plans")
    return saved ? JSON.parse(saved) : []
  })

  // Deklarasi useState untuk variabel inputan berupa string
  const [input, setInput] = useState("");

  // inisialisasi variabel untuk status task
  const totalTask = plans.length
  const taskSelesai = plans.filter((plan) => plan.done === true).length
  const taskBelum = plans.filter((plan) => plan.done === false).length
  
  // fungsi menambahkan task
  const addTasks = () => {
    if (input.trim() == "") return;

    setPlans([...plans, {text: input, done: false}]);
    setInput("");
  };

  // fungsi menghapus task, menggunakan parameter index sebagai penanda task yang akan dihapus 
  const deleteTask = (index: number) => {
    setPlans(plans.filter((_, i) => i !== index))
  } 

  //  menyimpan indeks task yang sedang diedit
  const [editingIndex, setEditingIndex] = useState< number |null>(null)

  // inisialisasi tipe data yang akan digunakan untuk fungsi mengedit task
  const [editText, setEditText] = useState("")

  // fungsi mengedit task yang sudah ditambahkan
  const startEdit = (index: number) => {
    setEditingIndex(index)
    setEditText(plans[index].text)
  }
 
  // fungsi menyimpan task 
  const saveEdit = (index: number) => {
    const updatedPlans= [...plans]
    updatedPlans[index].text = editText
    setPlans(updatedPlans)
    setEditingIndex(null)
    setEditText("")
  }

  // fungsi mengupdate task berdasarkan task yang selesai
  const toggleDone = (index: number) => {
    const updatedPlans = [...plans];
    updatedPlans[index].done = !updatedPlans[index].done;
    setPlans(updatedPlans);
  };

  // menyimpan data task 
  useEffect(() => {
      localStorage.setItem("plans", JSON.stringify(plans))
  }, [plans])

  return(
    <div className="container"> 
      <h1>My Planning App</h1>
      <div className="stat-cards">
        <div className="stat-card">  
          <p className="stat-label">Total</p>
          <p className="stat-number">{totalTask}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Belum</p>
          <p className="stat-number">{taskBelum}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Selesai</p>
          <p className="stat-number">{taskSelesai}</p>
        </div>
      </div>
      <div className="input-group">
        <input
          type="text"
          placeholder="Masukkan Rencanamu ...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          label="Tambah"
          className="btn-add"
          onClick={addTasks}
        />
      </div>
      
      <ul>
        {plans.length === 0 ? (
          <p>Belum ada task, Tambahkan Sekarang</p>
        ) : (
          plans
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
        ))
      )} 
      </ul>
    </div>
  )
}

export default App;