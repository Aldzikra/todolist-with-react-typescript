import Button from "../atoms/Button";

type Plan = {
    text : string;
    done : boolean;
};

type PlanItemProps = {
    // tipe data yang dipakai
    plan: Plan;       // tipe Plan
    index: number;      // angka
    editingIndex: number | null; // angka atau null
    editText: string   // teks
    setEditText: (value: string) => void;  // function
    toggleDone: (index: number) => void;   // function
    startEdit: (index: number) => void;   // function
    saveEdit: (index: number) => void;    // function
    deleteTask: (index: number) => void;   // function
};

function PlanItem({ plan, index, editingIndex, editText, setEditText, toggleDone, startEdit, saveEdit, deleteTask }: PlanItemProps) {
    return (
        <li key={index}>
        <input
            type="checkbox"
            checked={plan.done}
            onChange={() => toggleDone(index)}
        />

        {editingIndex === index ? (
            <>
            <input
                type="text"
                value={editText}    
                onChange={(e) => setEditText(e.target.value)}
            />
            <Button 
               label="Simpan"
               className="btn-save"
               onClick={() => saveEdit(index)} 
            />
            </>
        ) : (
            <>
            <span style={{ textDecoration: plan.done ? "line-through" : "none" }}>
                {plan.text}
            </span>
            <Button 
               label="Edit"
               className="btn-edit"
               onClick={() => startEdit} 
            />

            <Button 
               label="Hapus"
               className="btn-del"
               onClick={() => deleteTask} 
            />
            </>
        )}
        </li>
    )
}

export default PlanItem;