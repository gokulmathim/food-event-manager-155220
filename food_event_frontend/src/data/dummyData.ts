import type { Event } from "../types/models";

export const dummyEvents: Event[] = [
  {
    id: "1",
    title: "Team Lunch",
    description: "Lunch with the project team.",
    datetime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString().slice(0,16),
    location: "Downtown Cafe",
    menu: ["Sandwiches", "Salad", "Coffee"],
    attendees: ["Alice", "Bob"],
  },
  {
    id: "2",
    title: "Pizza Night",
    description: "Casual pizza event for friends.",
    datetime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().slice(0,16),
    location: "Italiano Pizzeria",
    menu: ["Pizza", "Soda", "Ice Cream"],
    attendees: ["Charlie", "Dana"],
  },
];
