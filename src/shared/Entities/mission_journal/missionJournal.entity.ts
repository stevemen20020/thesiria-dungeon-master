import { type PlayableCharacterEntity } from "../playable_character/playableCharacter.entity";
import { type MissionsEntity } from "../missions/missions.entity";
export interface MissionJournalEntity {
  id: string;
  playableCharacterId: string;
  missionId: string;
  completed: string;
  playableCharacter?: PlayableCharacterEntity;
  missions?: MissionsEntity;
}
