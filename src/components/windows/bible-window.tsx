import { useRef } from "react";
import { useDraggable } from "@reactuses/core";
import BookIcon from "../../assets/icons/book.svg";
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import BookopenedIcon from "../../assets/icons/bookopened.svg";
import CameraIcon from "../../assets/icons/camera-photo.svg";
import FileIcon from "../../assets/icons/file.svg";
import NoteIcon from "../../assets/icons/note.svg";
import { useWindowManager } from "../../hooks/useWindowManager";

interface LittleBibleProps {
  initialPosition?: {
    x: number;
    y: number;
  };
  name: string;
  icon: string;
}

const iconMap: { [key: string]: string } = {
  book: BookIcon,
  bookmark: BookmarkIcon,
  bookopened: BookopenedIcon,
  camera: CameraIcon,
  file: FileIcon,
  note: NoteIcon,
};

export const LittleBible = ({
  name,
  icon,
}: LittleBibleProps) => {
  const el = useRef<HTMLDivElement>(null);
  const scope = useRef<HTMLDivElement>(null);
const { windows, closeWindow } = useWindowManager();

  const [x, y] = useDraggable(el, {
    initialValue: windows[name].position,
    preventDefault: true,
    containerElement: scope,
    exact: true,
  });

  const close = () => {
    closeWindow(name);
  };

  return (
    <div
      ref={el}
      style={{
        position: "absolute",
        left: x,
        top: y,
        zIndex: 10,
      }}
      className="border-2 border-black flex flex-row bg-main cursor-pointer min-h-[600px]"
    >
      <div className="border-t-2 border-l-2 border-b-2 border-r-2 border-black ml-8 my-[42px] cursor-default">
        <div className="border-black w-[480px] flex items-center justify-center p-10">
         <div className="flex w-[207px] h-[105px] bg-amber-300"></div>
        </div>
      </div>
      <div className="flex flex-col justify-between pb-14">
        <button className="border-b-2 border-l-2 border-black px-3 py-2 cursor-pointer"  onClick={close}>
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
