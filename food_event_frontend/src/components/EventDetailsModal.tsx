import React from "react";
import Modal from "./Modal";
import type { Event } from "../types/models";

// PUBLIC_INTERFACE
interface Props {
  open: boolean;
  onClose: () => void;
  event: Event;
}

// PUBLIC_INTERFACE
const EventDetailsModal: React.FC<Props> = ({ open, onClose, event }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <h2>{event.title}</h2>
      <div className="event-detail-row">
        <b>Date & Time:</b> {new Date(event.datetime).toLocaleString()}
      </div>
      <div className="event-detail-row">
        <b>Location:</b> {event.location}
      </div>
      <div className="event-detail-row">
        <b>Description:</b> <span>{event.description}</span>
      </div>
      <div className="event-detail-row">
        <b>Menu Items:</b>
        <ul>
          {event.menu.length === 0 ? (
            <li>No menu items.</li>
          ) : (
            event.menu.map((m, i) => <li key={i}>{m}</li>)
          )}
        </ul>
      </div>
      <div className="event-detail-row">
        <b>Attendees:</b>
        <ul>
          {event.attendees.length === 0 ? (
            <li>No attendees.</li>
          ) : (
            event.attendees.map((a, i) => <li key={i}>{a}</li>)
          )}
        </ul>
      </div>
      <button className="btn-secondary" onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

export default EventDetailsModal;
