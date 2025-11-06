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

export const imgsNodes: Node[] = [
  {
    id: "caseira",
    type: "text-node",
    position: { x: 0, y: 50 },
    data: {
      name: "producao_caseira_da_casa.png",
    },
  },
  {
    id: "uli6",
    type: "text-node",
    position: { x: 100, y: 130 },
    data: {
      name: "uly6.png",
    },
  },
  {
    id: "vitral",
    type: "text-node",
    position: { x: 200, y: 210 },
    data: {
      name: "vitral_literal.png",
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
