import { type ObjectsEntity } from "../objects/objects.entity";
import { type NpcEntity } from "../npc/npc.entity";
export interface NpcInventoryEntity {
  id: string;
  idNpc: string;
  idObject: string;
  quantity: string;
  objects?: ObjectsEntity;
  npc?: NpcEntity;
}
