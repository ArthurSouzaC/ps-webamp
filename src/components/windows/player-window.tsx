import { useEffect, useRef } from "react";
import { useWindowManager } from "../../hooks/useWindowManager";
import type TWebamp from "webamp";

// @ts-ignore
import _Webamp from "webamp/butterchurn";
import { tracks } from "../../data/tracks";

const Webamp: typeof TWebamp = _Webamp;

interface Props {
  name: string;
}

export const PlayerWindow = ({ name }: Props) => {
  const webampContainerRef = useRef<HTMLDivElement>(null);
  const { closeWindow } = useWindowManager();

  const close = () => {
    closeWindow(name);
  };

  useEffect(() => {
    if (webampContainerRef.current) {
      const webamp = new Webamp({
        initialTracks: tracks,
        zIndex: 3,
      });

      webamp.renderWhenReady(webampContainerRef.current);

      webamp.onClose(close);

      return () => {
        webamp.dispose();
      };
    }
  }, []);

  return (
    <div className="absolute w-[725px] h-[464px] flex z-0" ref={webampContainerRef}></div>
  );
};
