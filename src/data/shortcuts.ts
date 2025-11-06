import { type Node, type Edge } from "@xyflow/react";

export const shortcuts: Node[] = [
  {
    id: "player",
    type: "shortcut",
    position: { x: 100, y: 25 },
    data: {
      name: "player",
      icon: "note",
    },
  },
  {
    id: "docs",
    type: "shortcut",
    position: { x: 200, y: 150 },
    data: {
      name: "docs",
      icon: "file",
    },
  },
  {
    id: "imgs",
    type: "shortcut",
    position: { x: 100, y: 275 },
    data: {
      name: "imgs",
      icon: "camera",
    },
  },
  {
    id: "refs",
    type: "shortcut",
    position: { x: 200, y: 400 },
    data: {
      name: "refs",
      icon: "bookmark",
    },
  },
  {
    id: "biblinha",
    type: "shortcut",
    position: { x: 100, y: 525 },
    data: {
      name: "biblinha",
      icon: "bookopened",
    },
  },
];

export const shortcutsEdges: Edge[] = [
  {
    id: "player-docs",
    type: "straight-edge",
    source: "player",
    target: "docs",
    style: {
      stroke: "#000",
    },
  },
  {
    id: "docs-imgs",
    type: "straight-edge",
    source: "docs",
    target: "imgs",
    style: {
      stroke: "#000",
    },
  },
  {
    id: "imgs-refs",
    type: "straight-edge",
    source: "imgs",
    target: "refs",
    style: {
      stroke: "#000",
    },
  },
  {
    id: "refs-biblinha",
    type: "straight-edge",
    source: "refs",
    target: "biblinha",
    style: {
      stroke: "#000",
    },
  },
];
