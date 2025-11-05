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
import { NodesWindow } from "../components/windows/nodes-window";
import { DirectoryWindow } from "../components/windows/directory-window";
import { TextWindow } from "../components/windows/text-window";
import { textItens } from "../constants";
import { useWindowManager } from "../hooks/useWindowManager";
import { shortcuts, shortcutsEdges } from "../data/shortcuts";
import { docsEdges, docsNodes, imgsEdges, imgsNodes } from "../data/docs";
import Vitral from "../assets/images/vitral.svg";
import { LittleBible } from "../components/windows/bible-window";

export const Main = () => {
  const [nodes, setNodes] = useState<Node[]>(shortcuts);
  const [edges, setEdges] = useState<Edge[]>(shortcutsEdges);

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

  const { isOpen } = useWindowManager();

  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-main">
      <div className="w-3/4 h-3/4 border-2 border-black">
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
          nodeExtent={[
            [0, 0],
            [window.innerWidth * 0.75, window.innerHeight * 0.75],
          ]}
          viewport={{
            x: 0,
            y: 0,
            zoom: 1,
          }}
          proOptions={{
            hideAttribution: true,
          }}
        />
      </div>
      <div className="w-3/4">
        <img
          src={Vitral}
          alt={Vitral}
          style={{
            marginRight: "auto",
            marginTop: -2,
          }}
        />
      </div>

      {isOpen("docs") && (
        <NodesWindow
          name="docs"
          icon="file"
          initialNodes={docsNodes}
          initialEdges={docsEdges}
        />
      )}
      {isOpen("imgs") && (
        <NodesWindow
          name="imgs"
          icon="camera"
          initialNodes={imgsNodes}
          initialEdges={imgsEdges}
        />
      )}
      {isOpen("refs") && <DirectoryWindow name="refs" icon="bookmark" />}
      {isOpen("biblinha") && <LittleBible name="biblinha" icon="bookopened" />}
      {isOpen("esperanca.txt") && (
        <TextWindow name="esperança.txt" textItem={textItens[0]} />
      )}
    </section>
  );
};
