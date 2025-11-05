import { useRef } from "react";
import { useDraggable } from "@reactuses/core";

interface TextProps {
  initialPosition?: {
    x: number;
    y: number;
  };
  name: string;
  textItem: string;
}

const defaultInitialPosition = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

export const TextWindow = ({
  initialPosition = defaultInitialPosition,
  name,
  textItem,
}: TextProps) => {
  const el = useRef<HTMLDivElement>(null);
  const scope = useRef<HTMLDivElement>(null);

  const [x, y] = useDraggable(el, {
    initialValue: initialPosition,
    preventDefault: true,
    containerElement: scope,
  });

  return (
    <div
      ref={el}
      style={{
        position: "absolute",
        left: x,
        top: y,
        zIndex: 10,
      }}
      className="border-2 border-black bg-main cursor-pointer"
    >
      <div className="flex border-y-2 border-t-0 justify-between">
        <span className="font-helvetica font-bold uppercase py-2.5 px-4 text-sm">
          {name}
        </span>
        <button className="border-x-2 border-r-0 border-black px-3 py-2 cursor-pointer">
          <span className="font-helvetica font-bold uppercase inline-block scale-y-200 text-sm">
            fechar
          </span>
        </button>
      </div>
      <div className="m-5 cursor-default bg-[#A5A690] w-[380px] pt-6 pb-10 px-3 gap-5 flex flex-col">
        <span
          dangerouslySetInnerHTML={{ __html: textItem }}
          className="text-xs font-times"
        ></span>
      </div>
    </div>
  );
};
