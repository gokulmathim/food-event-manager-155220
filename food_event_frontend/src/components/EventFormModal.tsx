import React, { useState } from "react";
import Modal from "./Modal";
import type { Event } from "../types/models";

// PUBLIC_INTERFACE
export interface EventFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (arg0: Event) => void;
  event?: Event;
}

// PUBLIC_INTERFACE
const EventFormModal: React.FC<EventFormModalProps> = ({
  open,
  onClose,
  onSubmit,
  event,
}) => {
  const [form, setForm] = useState<Event>(
    event || {
      id: "",
      title: "",
      description: "",
      datetime: "",
      location: "",
      menu: [],
      attendees: [],
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.datetime || !form.location) return;
    onSubmit(form);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <form className="modal-form" onSubmit={handleSubmit}>
        <h2>{event ? "Edit Event" : "Create Event"}</h2>
        <input
          name="title"
          type="text"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          name="datetime"
          type="datetime-local"
          value={form.datetime}
          onChange={handleChange}
          required
        />
        <input
          name="location"
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <div className="modal-form-actions">
          <button className="btn-primary" type="submit">
            {event ? "Save Changes" : "Create"}
          </button>
          <button className="btn-secondary" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EventFormModal;
