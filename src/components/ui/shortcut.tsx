import { Handle, Position } from "@xyflow/react";
import BookIcon from "../../assets/icons/book.svg";
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import BookopenedIcon from "../../assets/icons/bookopened.svg";
import CameraIcon from "../../assets/icons/camera-photo.svg";
import FileIcon from "../../assets/icons/file.svg";
import NoteIcon from "../../assets/icons/note.svg";

interface ShortcutProps {
  data: {
    name: string;
    icon: string;
    onClick: (id: string) => void;
  };
}

const iconMap: { [key: string]: string } = {
  book: BookIcon,
  bookmark: BookmarkIcon,
  bookopened: BookopenedIcon,
  camera: CameraIcon,
  file: FileIcon,
  note: NoteIcon,
};

export const Shortcut = ({ data }: ShortcutProps) => {
  const { name, icon, onClick } = data;

  return (
    <button className="border-2 border-black cursor-pointer" onClick={() => onClick(name)}>
      <img className="ml-auto" src={iconMap[icon]} alt={icon} />

      <span className="font-helvetica font-bold uppercase inline-block scale-y-200 text-3xl m-4 mt-2">
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
