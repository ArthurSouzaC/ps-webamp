import { useRef } from "react";
import { useDraggable } from "@reactuses/core";
import prodCaseira from "../../assets/imgs/producao_caseira_da_casa.png";
import uly6 from "../../assets/imgs/ULY6.png";
import vitral from "../../assets/imgs/vitral_literal.png";
import praVcPaulin from "../../assets/imgs/pra_vc_paulin.gif";
import redentor from "../../assets/imgs/redentor-01.gif";
import { useWindowManager } from "../../hooks/useWindowManager";

interface Props {
  name: string;
  imageName: string;
}

const imageMap: { [key: string]: string } = {
  producao_caseira_da_casa: prodCaseira,
  ULY6: uly6,
  vitral_literal: vitral,
  pra_vc_paulin: praVcPaulin,
  redentor: redentor
};

export const ImageWindow = ({ name, imageName }: Props) => {
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
      className="border-2 border-[#A5A690] bg-black cursor-pointer text-[#A5A690]"
      onClick={onWindowFocus}
    >
      <div
        ref={el}
        className="flex border-y-2 border-[#A5A690]  border-t-0 justify-between"
      >
        <span className="font-helvetica font-bold uppercase py-2.5 px-4 text-sm select-none">
          {name}
        </span>
        <button
          className="border-x-2 border-r-0 border-[#A5A690] px-3 py-2 cursor-pointer"
          onClick={close}
        >
          <span className="font-helvetica font-bold uppercase inline-block scale-y-200 text-sm select-none">
            fechar
          </span>
        </button>
      </div>
      <div className="py-3 px-4 cursor-default max-w-[500px]">
        <img src={imageMap[imageName]} alt={imageName} />
      </div>
    </div>
  );
};
