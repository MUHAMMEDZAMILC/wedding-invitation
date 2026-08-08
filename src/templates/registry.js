// ─────────────────────────────────────────────────────────────
// TEMPLATE REGISTRY — add a new entry here to make a template
// selectable from the home grid. `component` renders the full
// invitation page; `thumbnail` renders its small preview card.
// ─────────────────────────────────────────────────────────────

import { lazy } from "react";
import Thumbnail1 from "./template1/Thumbnail";

const Template1 = lazy(() => import("./template1/Template1"));

const templates = [
  {
    id: "emerald-crescent",
    name: "Emerald Crescent",
    description: "Islamic-inspired design in emerald & gold with Qur'anic verses.",
    component: Template1,
    thumbnail: Thumbnail1,
    status: "ready",
  },
  {
    id: "coming-soon",
    name: "New Template",
    description: "Another design is on the way — check back soon.",
    component: null,
    thumbnail: null,
    status: "coming-soon",
  },
];

export default templates;

export function getTemplateById(id) {
  return templates.find((t) => t.id === id);
}
