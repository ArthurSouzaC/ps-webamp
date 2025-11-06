import { useRef } from "react";
import { useDraggable } from "@reactuses/core";
import { DirectoryChildren } from "../ui/directory-children";
import { useWindowManager } from "../../hooks/useWindowManager";
import { directories } from "../../data/directories";
import { iconMap } from "../../data/icons";

interface Props {
  name: string;
  icon: string;
}

export const DirectoryWindow = ({ name, icon }: Props) => {
  const el = useRef<HTMLDivElement>(null);

  const { windows, closeWindow, bringToFront } = useWindowManager();

  const [x, y] = useDraggable(el, {
    initialValue: windows[name].position,
    preventDefault: true,
    exact: true,
  });

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
      className="border-2 border-black flex flex-row bg-main cursor-pointer min-h-[600px]"
      onClick={onWindowFocus}
    >
      <div className="border-t-2 border-l-2 border-b-2 border-r-2 border-black ml-8 my-[42px] cursor-default">
        <div className="border-black w-[380px] py-9 pl-5 gap-5 flex flex-col">
          <DirectoryChildren data={directories["books"]} />
          <DirectoryChildren data={directories["music"]} />
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
