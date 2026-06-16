import { type SkillUsageEntity } from "../skill_usage/skillUsage.entity";
import { type NpcEntity } from "../npc/npc.entity";
import { type PlayableCharacterEntity } from "../playable_character/playableCharacter.entity";
export interface DevilFruitEntity {
  id: string;
  name: string;
  bonus: string;
  skillBonused: string;
  description: string;
  awakeningDescription: string;
  skillUsage?: SkillUsageEntity;
  npc?: NpcEntity[];
  playableCharacter?: PlayableCharacterEntity[];
}
