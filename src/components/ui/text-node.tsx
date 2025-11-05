import { Handle, Position } from "@xyflow/react";
import { useWindowManager } from "../../hooks/useWindowManager";

interface TextNodeProps {
  data: {
    name: string;
  };
}

export const TextNode = ({ data }: TextNodeProps) => {
  const { name } = data;

  const { isOpen, bringToFront, openWindow } = useWindowManager();

  const onClick = () => {
    if (isOpen(name)) {
      bringToFront(name);
    } else {
      openWindow(name);
    }
  };

  return (
    <button onClick={onClick} className="cursor-pointer">
      <span className="font-helvetica font-bold uppercase text-[20px]">
        {name}
      </span>

      <Handle
        type="source"
        position={Position.Bottom}
        className="opacity-0"
        isConnectable={false}
      />
      <Handle
        type="target"
        position={Position.Top}
        className="opacity-0"
        isConnectable={false}
      />
    </button>
  );
};
