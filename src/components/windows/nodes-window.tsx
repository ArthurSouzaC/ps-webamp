import { useCallback, useRef, useState } from "react";
import { useDraggable } from "@reactuses/core";

import {
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlow,
  StraightEdge,
  type Edge,
  type EdgeChange,
  type Node,
  type NodeChange,
} from "@xyflow/react";
import { TextNode } from "../ui/text-node";
import { useWindowManager } from "../../hooks/useWindowManager";
import { iconMap } from "../../data/icons";

interface Props {
  initialPosition?: {
    x: number;
    y: number;
  };
  name: string;
  icon: string;
  initialNodes: Node[];
  initialEdges: Edge[];
}

const nodeTypes = {
  "text-node": TextNode,
};

const edgeTypes = {
  "straight-edge": StraightEdge,
};

export const NodesWindow = ({
  name,
  icon,
  initialNodes,
  initialEdges,
}: Props) => {
  const el = useRef<HTMLDivElement>(null);

  const { windows, closeWindow, bringToFront } = useWindowManager();

  const [x, y] = useDraggable(el, {
    initialValue: windows[name].position,
    preventDefault: true,
    exact: true,
  });

  const [nodes, setNodes] = useState<Node[]>(initialNodes);
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

  const close = () => {
    closeWindow(name);
  };

  const onWindowFocus = () => {
    bringToFront(name);
  };

  return (
    <div
      ref={el}
      style={{
        position: "absolute",
        left: x,
        top: y,
        zIndex: windows[name].zIndex,
      }}
      className="border-2 border-black flex flex-row bg-main cursor-pointer"
      onClick={onWindowFocus}
    >
      <div className="border-t-2 border-l-2 border-b-2 border-black ml-8 my-[42px] cursor-default">
        <div className="border-r-2 border-black w-[500px] h-[300px]">
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
            elementsSelectable={false}
            nodeExtent={[
              [10, 0],
              [500, 300],
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
      </div>
      <div className="flex flex-col justify-between pb-14">
        <button
          className="border-b-2 border-l-2 border-black px-3 py-2 cursor-pointer"
          onClick={close}
        >
          <span className="font-helvetica font-bold uppercase inline-block scale-y-200 text-sm select-none">
            fechar
          </span>
        </button>

        <img
          className="mx-auto mt-auto mb-8 select-none"
          src={iconMap["dark"][icon]}
          alt={icon}
        />

        <span className="font-helvetica font-bold uppercase inline-block scale-y-250 scale-x-75 text-3xl rotate-270 select-none">
          {name}
        </span>
      </div>
    </div>
  );
};
