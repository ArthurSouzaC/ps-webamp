import { useCallback, useState } from "react";
import {
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlow,
  StraightEdge,
  type Node,
  type Edge,
  type NodeChange,
  type EdgeChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Shortcut } from "../components/ui/shortcut";
import { Window } from "../components/windows/nodes-window";
import { Directory } from "../components/windows/directory-window";
import { Text } from "../components/windows/text-window";
import { textItens } from "../constants";

export const Main = () => {
  const [openedWindows, setOpenedWindows] = useState<string[]>([]);

  const onClickShortcut = (id: string) => {
    const isAlreadyOpened = openedWindows.includes(id);

    if (!isAlreadyOpened) {
      setOpenedWindows([...openedWindows, id]);
    }
  };

  const onCloseWindow = (id: string) => {
    setOpenedWindows(openedWindows.filter((windowId) => windowId !== id));
  };

  const initialNodes: Node[] = [
    {
      id: "play",
      type: "shortcut",
      position: { x: 0, y: 0 },
      data: {
        name: "play",
        icon: "note",
        onClick: onClickShortcut,
      },
    },
    {
      id: "docs",
      type: "shortcut",
      position: { x: 100, y: 150 },
      data: {
        name: "docs",
        icon: "file",
        onClick: onClickShortcut,
      },
    },
    {
      id: "imgs",
      type: "shortcut",
      position: { x: 0, y: 300 },
      data: {
        name: "imgs",
        icon: "camera",
        onClick: onClickShortcut,
      },
    },
    {
      id: "refs",
      type: "shortcut",
      position: { x: 100, y: 450 },
      data: {
        name: "refs",
        icon: "bookmark",
        onClick: onClickShortcut,
      },
    },
    {
      id: "biblinha",
      type: "shortcut",
      position: { x: 0, y: 600 },
      data: {
        name: "biblinha",
        icon: "bookopened",
        onClick: onClickShortcut,
      },
    },
  ];

  const [nodes, setNodes] = useState<Node[]>(initialNodes);

  const initialEdges: Edge[] = [
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

  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );

  const nodeTypes = {
    shortcut: Shortcut,
  };

  const edgeTypes = {
    "straight-edge": StraightEdge,
  };

  return (
    <section className="w-full h-full bg-main">
      <ReactFlow
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        maxZoom={1}
        minZoom={1}
        panOnDrag={false}
        draggable={false}
        elementsSelectable={false}
        viewport={{
          x: 200,
          y: 100,
          zoom: 1,
        }}
        proOptions={{
          hideAttribution: true,
        }}
      />
      <Window name="docs" icon="file" />
      <Directory name="refs" icon="bookmark" />
      <Text name="esperança.txt" textItem={textItens[0]}/>
    </section>
  );
};
