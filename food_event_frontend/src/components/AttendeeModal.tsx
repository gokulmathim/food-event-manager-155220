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
const AttendeeModal: React.FC<Props> = ({
  open,
  onClose,
  event,
}) => {
  const [attendees, setAttendees] = useState<string[]>(event.attendees);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() && !attendees.includes(input.trim())) {
      setAttendees([...attendees, input.trim()]);
      setInput("");
    }
  };

  const handleRemove = (i: number) => {
    setAttendees(attendees.filter((_, idx) => idx !== i));
  };

  // Placeholder for backend update
  const handleSave = () => {
    // Save logic to API
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h2>Manage Attendees</h2>
      <div className="modal-form-row">
        <input
          type="text"
          value={input}
          placeholder="Invite attendee (email/name)"
          onChange={e => setInput(e.target.value)}
        />
        <button className="btn-primary" onClick={handleAdd}>
          Invite
        </button>
      </div>
      <ul>
        {attendees.length === 0 && <li>No attendees yet.</li>}
        {attendees.map((att, idx) => (
          <li key={idx}>
            {att}
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

export default AttendeeModal;
