import { type MissionFasesEntity } from "../mission_fases/missionFases.entity";
import { type MissionJournalEntity } from "../mission_journal/missionJournal.entity";
import { type NpcEntity } from "../npc/npc.entity";
export interface MissionsEntity {
  id: string;
  giverNpcId?: string;
  name: string;
  description: string;
  missionFases?: MissionFasesEntity[];
  missionJournal?: MissionJournalEntity[];
  npc?: NpcEntity;
}
