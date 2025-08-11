import React from "react";
import type { Event } from "../types/models";
import EventCard from "../components/EventCard";

// PUBLIC_INTERFACE
export interface DashboardProps {
  events: Event[];
  onEdit: (arg0: Event) => void;
  onView: (arg0: Event) => void;
  onMenu: (arg0: Event) => void;
  onAttendees: (arg0: Event) => void;
  onDelete: (arg0: string) => void;
}

// PUBLIC_INTERFACE
const Dashboard: React.FC<DashboardProps> = ({
  events,
  onEdit,
  onView,
  onMenu,
  onAttendees,
  onDelete,
}) => {
  const now = new Date();
  const upcoming = events.filter((e) => new Date(e.datetime) >= now);
  const past = events.filter((e) => new Date(e.datetime) < now);

  return (
    <div className="dashboard">
      <section>
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {upcoming.length === 0 && <p>No upcoming events.</p>}
          {upcoming.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={onEdit}
              onView={onView}
              onMenu={onMenu}
              onAttendees={onAttendees}
              onDelete={onDelete}
            />
          ))}
        </div>
      </section>
      <section>
        <h2>Past Events</h2>
        <div className="event-list">
          {past.length === 0 && <p>No past events.</p>}
          {past.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={onEdit}
              onView={onView}
              onMenu={onMenu}
              onAttendees={onAttendees}
              onDelete={onDelete}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
