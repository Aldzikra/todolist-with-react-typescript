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
            <button className="btn-save" onClick={() => saveEdit(index)}>Simpan</button>
            </>
        ) : (
            <>
            <span style={{ textDecoration: plan.done ? "line-through" : "none" }}>
                {plan.text}
            </span>
            <button className="btn-edit"onClick={() => startEdit(index)}>Edit</button>
            <button className="btn-del"onClick={() => deleteTask(index)}>Hapus</button>
            </>
        )}
        </li>
    )
}

export default PlanItem;