import { create } from "zustand";

interface SidebarStore {
  isCollapsed: boolean;
  toggle: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isCollapsed: true,

  toggle: () =>
    set((state) => ({
      isCollapsed: !state.isCollapsed,
    })),
}));