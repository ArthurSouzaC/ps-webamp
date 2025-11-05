import { type Node, type Edge } from "@xyflow/react";

export const shortcuts: Node[] = [
  {
    id: "play",
    type: "shortcut",
    position: { x: 100, y: 50 },
    data: {
      name: "play",
      icon: "note",
    },
  },
  {
    id: "docs",
    type: "shortcut",
    position: { x: 200, y: 175 },
    data: {
      name: "docs",
      icon: "file",
    },
  },
  {
    id: "imgs",
    type: "shortcut",
    position: { x: 100, y: 300 },
    data: {
      name: "imgs",
      icon: "camera",
    },
  },
  {
    id: "refs",
    type: "shortcut",
    position: { x: 200, y: 425 },
    data: {
      name: "refs",
      icon: "bookmark",
    },
  },
  {
    id: "biblinha",
    type: "shortcut",
    position: { x: 100, y: 550 },
    data: {
      name: "biblinha",
      icon: "bookopened",
    },
  },
];

export const shortcutsEdges: Edge[] = [
  {
    id: "play-docs",
    type: "straight-edge",
    source: "play",
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
