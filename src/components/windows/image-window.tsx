import { useRef } from "react";
import { useDraggable } from "@reactuses/core";
import prodCaseira from "../../assets/imgs/producao_caseira_da_casa.png";
import uly6 from "../../assets/imgs/ULY6.png";
import vitral from "../../assets/imgs/vitral_literal.png";
import { useWindowManager } from "../../hooks/useWindowManager";

interface ImageProps {
  name: string;
  imageName: string;
}

const imageMap: { [key: string]: string } = {
  producao_caseira_da_casa: prodCaseira,
  ULY6: uly6,
  vitral_literal: vitral,
};

export const ImageWindow = ({ name, imageName }: ImageProps) => {
  const el = useRef<HTMLDivElement>(null);
  const scope = useRef<HTMLDivElement>(null);

  const { windows, closeWindow } = useWindowManager();

  const [x, y] = useDraggable(el, {
    initialValue: windows[name].position,
    preventDefault: true,
    containerElement: scope,
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
      className="border-2 border-[#A5A690] bg-black cursor-pointer text-[#A5A690]"
    >
      <div
        ref={el}
        className="flex border-y-2 border-[#A5A690]  border-t-0 justify-between "
      >
        <span className="font-helvetica font-bold uppercase py-2.5 px-4 text-sm ">
          {name}
        </span>
        <button
          className="border-x-2 border-r-0 border-[#A5A690] px-3 py-2 cursor-pointer"
          onClick={close}
        >
          <span className="font-helvetica font-bold uppercase inline-block scale-y-200 text-sm">
            fechar
          </span>
        </button>
      </div>
      <div className="py-3 px-4 cursor-default w-[380px]">
        <img src={imageMap[imageName]} alt={imageName} />
      </div>
    </div>
  );
};
