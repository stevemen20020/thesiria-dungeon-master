import type { ElementsEntity } from "../elements/elements.entity";
import type { NpcEntity } from "../npc/npc.entity";
import type { PlayableCharacterEntity } from "../playable_character/playableCharacter.entity";
export interface AffinityEntity {
  id: string;
  name: string;
  elementId: string;
  bonus: string;
  color: string;
  elements?: ElementsEntity;
  npc?: NpcEntity[];
  playableCharacter?: PlayableCharacterEntity[];
}
