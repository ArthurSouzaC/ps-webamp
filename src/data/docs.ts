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
    position: { x: 50, y: 80 },
    data: {
      name: "poema.txt",
    },
  },
];

export const imgsNodes: Node[] = [
  {
    id: "caseira",
    type: "text-node",
    position: { x: 0, y: 0 },
    data: {
      name: "producao_caseira_da_casa.gif",
    },
  },
  {
    id: "uli6",
    type: "text-node",
    position: { x: 70, y: 80 },
    data: {
      name: "uly6.gif",
    },
  },
  {
    id: "vitral",
    type: "text-node",
    position: { x: 100, y: 130 },
    data: {
      name: "vitral_literal.gif",
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
];

export const imgsEdges: Edge[] = [
  {
    id: "caseira-uli6",
    type: "straight-edge",
    source: "caseira",
    target: "uli6",
    style: {
      stroke: "#000",
    },
  },
  {
    id: "uli6-vitral",
    type: "straight-edge",
    source: "uli6",
    target: "vitral",
    style: {
      stroke: "#000",
    },
  },
];