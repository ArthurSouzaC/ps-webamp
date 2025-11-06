import { Handle, Position } from "@xyflow/react";
import { useWindowManager } from "../../hooks/useWindowManager";
import { iconMap } from "../../data/icons";

interface ShortcutProps {
  data: {
    name: string;
    icon: string;
  };
}

export const Shortcut = ({ data }: ShortcutProps) => {
  const { name, icon } = data;

  const { isOpen, bringToFront, openWindow } = useWindowManager();

  const onClick = () => {
    if (isOpen(name)) {
      bringToFront(name);
    } else {
      openWindow(name);
    }
  };

  return (
    <button
      className={`border-2 border-black cursor-pointer ${
        isOpen(name) ? "bg-black" : ""
      }`}
      onClick={onClick}
    >
      <img className="ml-auto" src={iconMap[isOpen(name) ? "light" : "dark"][icon]} alt={icon} />

      <span
        className={`font-helvetica font-bold uppercase inline-block scale-y-200 text-3xl m-4 mt-2 ${
          isOpen(name) ? "text-main" : ""
        }`}
      >
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
