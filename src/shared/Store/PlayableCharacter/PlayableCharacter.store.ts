import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { PlayableCharacterEntity } from "../../Entities";

const characterInitialState: PlayableCharacterEntity = {
  userId: "",
  name: "",
  biography: "",
  idRace: "",
  positiveCharacteristic_1: "",
  positiveCharacteristic_2: "",
  positiveCharacteristic_3: "",
  negativeCharacteristic_1: "",
  negativeCharacteristic_2: "",
  strength: "",
  dexterity: "",
  defense: "",
  aim: "",
  vision: "",
  speed: "",
  handcraft: "",
  agility: "",
  charisma: "",
  wisdom: "",
  affinityId: "",
  chroniclerStatus: "",
};

type PlayableCharacterState = {
  character: PlayableCharacterEntity;

  setCharacterData: (data: Partial<PlayableCharacterEntity>) => void;
  clearCharacterData: () => void;
};

export const PlayableCharacterStore = create<PlayableCharacterState>()(
  persist(
    (set) => ({
      character: characterInitialState,

      setCharacterData: (data) =>
        set((state) => ({ character: { ...state.character, ...data } })),

      clearCharacterData: () =>
        set(() => ({ character: characterInitialState })),
    }),
    {
      name: "character-storage",

      storage: createJSONStorage(() => localStorage),
    },
  ),
);
