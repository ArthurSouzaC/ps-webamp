import type { Edge, Node } from "@xyflow/react";

export const docsNodes: Node[] = [
  {
    id: "carta_aos_ouvintes",
    type: "text-node",
    position: { x: 0, y: 0 },
    data: {
      name: "carta_aos_ouvintes.txt",
    },
  },
  {
    id: "esperanca",
    type: "text-node",
    position: { x: 100, y: 80 },
    data: {
      name: "esperanca.txt",
    },
  },
  {
    id: "fuga",
    type: "text-node",
    position: { x: 200, y: 160 },
    data: {
      name: "fuga.txt",
    },
  },
  {
    id: "o_verde",
    type: "text-node",
    position: { x: 100, y: 240 },
    data: {
      name: "o_verde.txt",
    },
  },
];

export const imgsNodes: Node[] = [
  {
    id: "caseira",
    type: "text-node",
    position: { x: 0, y: 10 },
    data: {
      name: "producao_caseira_da_casa.png",
    },
  },
  {
    id: "uli6",
    type: "text-node",
    position: { x: 50, y: 80 },
    data: {
      name: "uly6.png",
    },
  },
  {
    id: "vitral",
    type: "text-node",
    position: { x: 110, y: 130 },
    data: {
      name: "vitral_literal.png",
    },
  },
    {
    id: "paulim",
    type: "text-node",
    position: { x: 20, y: 200 },
    data: {
      name: "pra_vc_paulin.gif",
    },
  },
    {
    id: "redentor",
    type: "text-node",
    position: { x: 190, y: 260 },
    data: {
      name: "redentor-01.gif",
    },
  },
];

export const docsEdges: Edge[] = [
  {
    id: "carta_aos_ouvintes-esperanca",
    type: "straight-edge",
    source: "carta_aos_ouvintes",
    target: "esperanca",
    style: {
      stroke: "#000",
    },
  },
  {
    id: "esperanca-fuga",
    type: "straight-edge",
    source: "esperanca",
    target: "fuga",
    style: {
      stroke: "#000",
    },
  },
  {
    id: "fuga-o_verde",
    type: "straight-edge",
    source: "fuga",
    target: "o_verde",
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
  {
    id: "vitral-paulin",
    type: "straight-edge",
    source: "vitral",
    target: "paulim",
    style: {
      stroke: "#000",
    },
  },
   {
    id: "paulin-redentor",
    type: "straight-edge",
    source: "paulim",
    target: "redentor",
    style: {
      stroke: "#000",
    },
  },
];
