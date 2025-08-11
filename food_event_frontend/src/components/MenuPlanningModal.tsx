import React, { useState } from "react";
import Modal from "./Modal";
import type { Event } from "../types/models";

// PUBLIC_INTERFACE
interface Props {
  open: boolean;
  onClose: () => void;
  event: Event;
}

// PUBLIC_INTERFACE
const MenuPlanningModal: React.FC<Props> = ({
  open,
  onClose,
  event,
}) => {
  const [menu, setMenu] = useState<string[]>(event.menu);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      setMenu([...menu, input.trim()]);
      setInput("");
    }
  };

  const handleRemove = (i: number) => {
    setMenu(menu.filter((_, idx) => idx !== i));
  };

  // Placeholder for backend update
  const handleSave = () => {
    // Save logic to API
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h2>Edit Menu</h2>
      <div className="modal-form-row">
        <input
          type="text"
          value={input}
          placeholder="Add menu item"
          onChange={e => setInput(e.target.value)}
        />
        <button className="btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul>
        {menu.length === 0 && <li>No items yet.</li>}
        {menu.map((item, idx) => (
          <li key={idx}>
            {item}
            <button className="btn-outline-danger btn-tiny" onClick={() => handleRemove(idx)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="modal-form-actions">
        <button className="btn-accent" onClick={handleSave}>Save</button>
        <button className="btn-secondary" onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default MenuPlanningModal;
