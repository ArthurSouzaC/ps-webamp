import type { Edge, Node } from "@xyflow/react";

export const docsNodes: Node[] = [
  {
    id: "esperanca",
    type: "text-node",
    position: { x: 0, y: 0 },
    data: {
      name: "esperança.txt",
    },
  },
  {
    id: "poema",
    type: "text-node",
    position: { x: 100, y: 80 },
    data: {
      name: "poema.txt",
    },
  },
  {
    id: "carta1",
    type: "text-node",
    position: { x: 200, y: 160 },
    data: {
      name: "carta_#01.txt",
    },
  },
  {
    id: "carta2",
    type: "text-node",
    position: { x: 100, y: 240 },
    data: {
      name: "carta_#02.txt",
    },
  },
];

export const docsEdges: Edge[] = [
  {
    id: "esperanca-poema",
    type: "straight-edge",
    source: "esperanca",
    target: "poema",
    style: {
      stroke: "#000",
    },
  },
  {
    id: "poema-carta1",
    type: "straight-edge",
    source: "poema",
    target: "carta1",
    style: {
      stroke: "#000",
    },
  },
  {
    id: "carta1-carta2",
    type: "straight-edge",
    source: "carta1",
    target: "carta2",
    style: {
      stroke: "#000",
    },
  },
];
