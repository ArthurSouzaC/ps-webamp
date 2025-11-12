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
import { useWindowManager } from "../hooks/useWindowManager";
import { shortcuts, shortcutsEdges } from "../data/shortcuts";
import { docsEdges, docsNodes, imgsEdges, imgsNodes } from "../data/docs";
import VitralLogo from "../assets/imgs/vitral.svg";
import gifSite from "../assets/imgs/gif-site.gif";
import { BibleWindow } from "../components/windows/bible-window";
import { articles } from "../data/articles";
import { ImageWindow } from "../components/windows/image-window";
import { PlayerWindow } from "../components/windows/player-window";

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

  if (window.innerWidth >= 768)
    return (
      <section className="w-full h-full flex flex-col items-center justify-center bg-main">
        <div className="w-3/4 h-3/4 border-2 border-black flex z-2">
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
        <div className="w-3/4 select-none">
          <img
            src={VitralLogo}
            alt={VitralLogo}
            style={{
              marginRight: "auto",
              marginTop: -2,
            }}
          />
        </div>

        {isOpen("player") && <PlayerWindow name="player" />}
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
        {isOpen("biblinha") && (
          <BibleWindow name="biblinha" icon="bookopened" />
        )}
        {isOpen("carta_aos_ouvintes.txt") && (
          <TextWindow
            name="carta_aos_ouvintes.txt"
            textItem={articles["carta_aos_ouvintes.txt"]}
          />
        )}
        {isOpen("esperanca.txt") && (
          <TextWindow name="esperanca.txt" textItem={articles["esperanca.txt"]} />
        )}
        {isOpen("fuga.txt") && (
          <TextWindow
            name="fuga.txt"
            textItem={articles["fuga.txt"]}
          />
        )}
        {isOpen("o_verde.txt") && (
          <TextWindow
            name="o_verde.txt"
            textItem={articles["o_verde.txt"]}
          />
        )}
        {isOpen("producao_caseira_da_casa.png") && (
          <ImageWindow
            name="producao_caseira_da_casa.png"
            imageName="producao_caseira_da_casa"
          />
        )}
        {isOpen("uly6.png") && <ImageWindow name="uly6.png" imageName="ULY6" />}
        {isOpen("vitral_literal.png") && (
          <ImageWindow name="vitral_literal.png" imageName="vitral_literal" />
        )}
         {isOpen("pra_vc_paulin.gif") && (
          <ImageWindow name="pra_vc_paulin.gif" imageName="pra_vc_paulin" />
        )}
         {isOpen("redentor-01.gif") && (
          <ImageWindow name="redentor-01.gif" imageName="redentor" />
        )}
      </section>
    );
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-[#364637]">
      <div>
        <img
        src={gifSite}
        alt="gif-site"
        className="object-fill"
      />
      </div>
    </section>
  );
};
