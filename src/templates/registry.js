// ─────────────────────────────────────────────────────────────
// TEMPLATE REGISTRY — add a new entry here to make a template
// selectable from the home grid. `component` renders the full
// invitation page; `thumbnail` renders its small preview card.
// ─────────────────────────────────────────────────────────────

import { lazy } from "react";
import Thumbnail1 from "./template1/Thumbnail";
import Thumbnail2 from "./template2/Thumbnail";
import Thumbnail3 from "./template3/Thumbnail";
import Thumbnail4 from "./template4/Thumbnail";

const Template1 = lazy(() => import("./template1/Template1"));
const Template2 = lazy(() => import("./template2/Template2"));
const Template3 = lazy(() => import("./template3/Template3"));
const Template4 = lazy(() => import("./template4/Template4"));

export const RELIGIONS = [
  { id: "muslim", label: "Muslim" },
  { id: "hindu", label: "Hindu" },
  { id: "christian", label: "Christian" },
];

const templates = [
  {
    id: "emerald-crescent",
    name: "Emerald Crescent",
    description: "Islamic-inspired design in emerald & gold with Qur'anic verses.",
    component: Template1,
    thumbnail: Thumbnail1,
    religion: "muslim",
    status: "ready",
  },
  {
    id: "gold-frame",
    name: "Gold Frame",
    description: "A simple Muslim invitation — white background, gold borders, square frames.",
    component: Template2,
    thumbnail: Thumbnail2,
    religion: "muslim",
    status: "ready",
  },
  {
    id: "golden-mandala",
    name: "Golden Mandala",
    description: "A simple Hindu invitation — cream background, gold mandala accents & Ganesha invocation.",
    component: Template3,
    thumbnail: Thumbnail3,
    religion: "hindu",
    status: "ready",
  },
  {
    id: "olive-grove",
    name: "Olive Grove",
    description: "A simple Christian invitation — cream & olive tones, full-bleed photos, wedding-day timeline.",
    component: Template4,
    thumbnail: Thumbnail4,
    religion: "christian",
    status: "ready",
  },
  {
    id: "coming-soon",
    name: "New Template",
    description: "Another design is on the way — check back soon.",
    component: null,
    thumbnail: null,
    religion: null,
    status: "coming-soon",
  },
];

export default templates;

export function getTemplateById(id) {
  return templates.find((t) => t.id === id);
}
