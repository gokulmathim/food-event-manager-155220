import React from "react";
import type { Event } from "../types/models";

// PUBLIC_INTERFACE
export interface EventCardProps {
  event: Event;
  onEdit: (arg0: Event) => void;
  onView: (arg0: Event) => void;
  onMenu: (arg0: Event) => void;
  onAttendees: (arg0: Event) => void;
  onDelete: (arg0: string) => void;
}

// PUBLIC_INTERFACE
const EventCard: React.FC<EventCardProps> = ({
  event,
  onEdit,
  onView,
  onMenu,
  onAttendees,
  onDelete,
}) => (
  <div className="event-card">
    <div className="event-main">
      <h3 className="event-title">{event.title}</h3>
      <div className="event-meta">
        <span>{new Date(event.datetime).toLocaleString()}</span>
        <span>{event.location}</span>
      </div>
      <p className="event-description">{event.description}</p>
      <div className="event-actions">
        <button className="btn-primary" onClick={() => onView(event)}>Details</button>
        <button className="btn-secondary" onClick={() => onMenu(event)}>Menu</button>
        <button className="btn-secondary" onClick={() => onAttendees(event)}>Attendees</button>
        <button className="btn-accent" onClick={() => onEdit(event)}>Edit</button>
        <button className="btn-outline-danger" onClick={() => onDelete(event.id)}>Delete</button>
      </div>
    </div>
  </div>
);

export default EventCard;
