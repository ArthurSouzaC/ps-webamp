import { useRef, useState } from "react";
import { useDraggable } from "@reactuses/core";
import { useWindowManager } from "../../hooks/useWindowManager";
import { iconMap } from "../../data/icons";
import { bibleCases, bibleVerses, cardColors } from "../../data/bible-verses";
import { motion } from "motion/react";
import { animate } from "motion";

interface Props {
  initialPosition?: {
    x: number;
    y: number;
  };
  name: string;
  icon: string;
}

export const BibleWindow = ({ name, icon }: Props) => {
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

  const [indexes, setIndexes] = useState({
    card: 0,
    case: 1,
    verse: 0,
  });

  const getVerse = () => {
    animate(".card", { top: 40 }).then(() => {
      setIndexes((prev) => ({
        card: (prev.card + 1) % cardColors.length,
        case: (prev.case + 1) % bibleCases.length,
        verse: (prev.verse + 1) % bibleVerses.length,
      }));

      animate(".card", { top: -200 });
    });
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
        <div className="border-black w-[600px] h-full flex items-end justify-center p-10">
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={getVerse}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative"
          >
            <img
              src={bibleCases[indexes.case]}
              alt="bibleCases[index]"
              style={{
                width: 400,
              }}
            />
            <motion.div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                top: 40,
                left: 10,
                background: cardColors[indexes.card],
                width: 380,
                height: 150,
                padding: 16,
                zIndex: -1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="card rotate-2"
            >
              <div className="font-grotesque text-sm">
                {bibleVerses[indexes.verse].verse}
              </div>

              <div className="font-grotesque text-sm text-end">
                {bibleVerses[indexes.verse].reference}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col justify-between pb-19">
        <button
          className="border-b-2 border-l-2 border-black px-3 py-2 cursor-pointer"
          onClick={close}
        >
          <span className="font-helvetica font-bold uppercase inline-block scale-y-200 text-sm select-none">
            fechar
          </span>
        </button>

        <img
          className="mx-auto mt-auto mb-14 select-none"
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
