import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import EventFormModal from "./components/EventFormModal";
import EventDetailsModal from "./components/EventDetailsModal";
import MenuPlanningModal from "./components/MenuPlanningModal";
import AttendeeModal from "./components/AttendeeModal";
import SearchBar from "./components/SearchBar";
import type { Event } from "./types/models";
import { dummyEvents } from "./data/dummyData";
import "./styles/app.css";

// PUBLIC_INTERFACE
function App() {
  const [modal, setModal] = useState<null | "create" | "edit" | "details" | "menu" | "attendees">(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [events, setEvents] = useState<Event[]>(dummyEvents);
  const [search, setSearch] = useState("");

  // PUBLIC_INTERFACE
  const openModal = (type: typeof modal, event?: Event) => {
    setSelectedEvent(event || null);
    setModal(type);
  };

  // Filter events based on search input
  const filteredEvents = events.filter(
    (e) =>
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase())
  );

  // Simulated handlers, to be replaced with API calls later
  const handleSaveEvent = (ev: Event) => {
    if (ev.id) {
      setEvents(events.map(e => (e.id === ev.id ? ev : e)));
    } else {
      setEvents([...events, { ...ev, id: Date.now().toString() }]);
    }
    setModal(null);
  };

  // PUBLIC_INTERFACE
  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter(e => e.id !== id));
    setModal(null);
  };

  return (
    <div className="app-root">
      <Sidebar />
      <main className="main-content">
        <div className="toolbar">
          <SearchBar search={search} onSearch={setSearch} />
          <button className="btn-accent" onClick={() => openModal("create")}>
            + New Event
          </button>
        </div>
        <Dashboard
          events={filteredEvents}
          onEdit={ev => openModal("edit", ev)}
          onView={ev => openModal("details", ev)}
          onMenu={ev => openModal("menu", ev)}
          onAttendees={ev => openModal("attendees", ev)}
          onDelete={handleDeleteEvent}
        />
      </main>
      {modal === "create" && (
        <EventFormModal
          open
          onClose={() => setModal(null)}
          onSubmit={handleSaveEvent}
        />
      )}
      {modal === "edit" && selectedEvent && (
        <EventFormModal
          open
          onClose={() => setModal(null)}
          onSubmit={handleSaveEvent}
          event={selectedEvent}
        />
      )}
      {modal === "details" && selectedEvent && (
        <EventDetailsModal
          open
          onClose={() => setModal(null)}
          event={selectedEvent}
        />
      )}
      {modal === "menu" && selectedEvent && (
        <MenuPlanningModal
          open
          onClose={() => setModal(null)}
          event={selectedEvent}
        />
      )}
      {modal === "attendees" && selectedEvent && (
        <AttendeeModal
          open
          onClose={() => setModal(null)}
          event={selectedEvent}
        />
      )}
    </div>
  );
}

export default App;
