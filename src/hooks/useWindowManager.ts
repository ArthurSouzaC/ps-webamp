import { create } from "zustand";

interface WindowData {
  id: string;
  isOpen: boolean;
  zIndex: number;
  position?: { x: number; y: number };
}

interface WindowManagerState {
  windows: Record<string, WindowData>;
  openWindow: (id: string, position?: { x: number; y: number }) => void;
  closeWindow: (id: string) => void;
  toggleWindow: (id: string) => void;
  bringToFront: (id: string) => void;
  getHighestZ: () => number;
  isOpen: (id: string) => boolean;
}

export const useWindowManager = create<WindowManagerState>((set, get) => ({
  windows: {},

  openWindow: (id, position) => {
    const { windows } = get();
    const currentTop = get().getHighestZ();

    set({
      windows: {
        ...windows,
        [id]: {
          ...windows[id],
          id,
          position: position || {
            x: (Object.keys(windows).length + 1) * 100 + 500,
            y: (Object.keys(windows).length + 1) * 75,
          },
          isOpen: true,
          zIndex: currentTop + 1,
        },
      },
    });
  },

  closeWindow: (id) => {
    const { windows } = get();
    if (!windows[id]) return;
    const updatedWindows = { ...windows };
    delete updatedWindows[id];
    set({
      windows: updatedWindows,
    });
  },

  toggleWindow: (id) => {
    const { windows } = get();
    const win = windows[id];
    if (!win || !win.isOpen) {
      get().openWindow(id);
    } else {
      get().closeWindow(id);
    }
  },

  bringToFront: (id) => {
    const { windows } = get();
    const currentTop = get().getHighestZ();
    if (!windows[id]) return;

    set({
      windows: {
        ...windows,
        [id]: {
          ...windows[id],
          zIndex: currentTop + 1,
        },
      },
    });
  },

  getHighestZ: () => {
    const { windows } = get();
    return Object.values(windows).reduce(
      (max, w) => Math.max(max, w.zIndex ?? 0),
      0
    );
  },

  isOpen: (id) => {
    const { windows } = get();
    return windows[id]?.isOpen || false;
  },
}));
