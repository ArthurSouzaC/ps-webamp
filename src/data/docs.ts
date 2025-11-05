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
