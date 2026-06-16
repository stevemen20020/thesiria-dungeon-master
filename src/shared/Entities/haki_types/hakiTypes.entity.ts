import { type SkillUsageEntity } from "../skill_usage/skillUsage.entity";
import { type NpcEntity } from "../npc/npc.entity";
import { type PlayableCharacterEntity } from "../playable_character/playableCharacter.entity";
export interface HakiTypesEntity {
  id: string;
  name: string;
  description: string;
  skillBonused: string;
  skillUsage?: SkillUsageEntity;
  npc?: NpcEntity[];
  playableCharacter?: PlayableCharacterEntity[];
}
