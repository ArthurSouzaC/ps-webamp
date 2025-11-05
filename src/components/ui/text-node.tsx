import { Handle, Position } from "@xyflow/react";

interface TextNodeProps {
  data: {
    name: string;
    onClick: (id: string) => void;
  };
}

export const TextNode = ({ data }: TextNodeProps) => {
  const { name, onClick } = data;

  return (
    <div onClick={() => onClick(name)} className="cursor-pointer">
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
    </div>
  );
};
