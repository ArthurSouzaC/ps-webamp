import { useRef } from "react";
import { useDraggable } from "@reactuses/core";
import { useWindowManager } from "../../hooks/useWindowManager";

interface Props {
  name: string;
  textItem: string;
}

export const TextWindow = ({ name, textItem }: Props) => {
  const el = useRef<HTMLDivElement>(null);

  const { windows, closeWindow, bringToFront } = useWindowManager();

  const [x, y] = useDraggable(el, {
    initialValue: windows[name].position,
    preventDefault: true,
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
      className="border-2 border-black bg-main cursor-pointer overflow-hidden"
      onClick={onWindowFocus}
    >
      <div className="flex border-y-2 border-t-0 justify-between">
        <span className="font-helvetica font-bold uppercase py-2.5 px-4 text-sm select-none">
          {name}
        </span>
        <button
          className="border-x-2 border-r-0 border-black px-3 py-2 cursor-pointer"
          onClick={close}
        >
          <span className="font-helvetica font-bold uppercase inline-block scale-y-200 text-sm select-none">
            fechar
          </span>
        </button>
      </div>
      <div className="m-5 cursor-default bg-[#A5A690] w-[750px] pt-6 pb-10 px-3 gap-5 flex flex-col overflow-y-scroll max-h-96 [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-[#435946]
      dark:[&::-webkit-scrollbar-thumb]:bg-[#283629]">
        <span
          dangerouslySetInnerHTML={{ __html: textItem }}
          className="font-times"
        ></span>
      </div>
    </div>
  );
};
