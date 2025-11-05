import { useCallback, useRef, useState } from "react";
import { useDraggable } from "@reactuses/core";
import BookIcon from "../../assets/icons/book.svg";
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import BookopenedIcon from "../../assets/icons/bookopened.svg";
import CameraIcon from "../../assets/icons/camera-photo.svg";
import FileIcon from "../../assets/icons/file.svg";
import NoteIcon from "../../assets/icons/note.svg";
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

interface WindowProps {
  initialPosition?: {
    x: number;
    y: number;
  };
  name: string;
  icon: string;
}

const defaultInitialPosition = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

const iconMap: { [key: string]: string } = {
  book: BookIcon,
  bookmark: BookmarkIcon,
  bookopened: BookopenedIcon,
  camera: CameraIcon,
  file: FileIcon,
  note: NoteIcon,
};

const nodeTypes = {
  "text-node": TextNode,
};

const edgeTypes = {
  "straight-edge": StraightEdge,
};

export const Window = ({
  initialPosition = defaultInitialPosition,
  name,
  icon,
}: WindowProps) => {
  const el = useRef<HTMLDivElement>(null);
  const scope = useRef<HTMLDivElement>(null);

  const [x, y] = useDraggable(el, {
    initialValue: initialPosition,
    preventDefault: true,
    containerElement: scope,
    exact: true,
  });

  const [openedWindows, setOpenedWindows] = useState<string[]>([]);

  const onClickShortcut = (id: string) => {
    const isAlreadyOpened = openedWindows.includes(id);

    if (!isAlreadyOpened) {
      setOpenedWindows([...openedWindows, id]);
    }
  };

  const initialNodes: Node[] = [
    {
      id: "esperanca",
      type: "text-node",
      position: { x: 0, y: 0 },
      data: {
        name: "esperança.txt",
        onClick: onClickShortcut,
      },
    },
    {
      id: "poema",
      type: "text-node",
      position: { x: 50, y:80 },
      data: {
        name: "poema.txt",
        onClick: onClickShortcut,
      },
    },
  ];

  const [nodes, setNodes] = useState<Node[]>(initialNodes);

  const initialEdges: Edge[] = [
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

  return (
    <div
      ref={el}
      style={{
        position: "absolute",
        left: x,
        top: y,
        zIndex: 10,
      }}
      className="border-2 border-black flex flex-row bg-main cursor-pointer"
    >
      <div className="border-t-2 border-l-2 border-b-2 border-black ml-8 my-[42px] cursor-default">
        <div className="border-r-2 border-black w-[380px] h-[280px]">
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
        <button className="border-b-2 border-l-2 border-black px-3 py-2 cursor-pointer">
          <span className="font-helvetica font-bold uppercase inline-block scale-y-200 text-sm">
            fechar
          </span>
        </button>

        <img className="mx-auto mt-auto mb-8" src={iconMap[icon]} alt={icon} />

        <span className="font-helvetica font-bold uppercase inline-block scale-y-250 scale-x-75 text-3xl rotate-270">
          {name}
        </span>
      </div>
    </div>
  );
};
