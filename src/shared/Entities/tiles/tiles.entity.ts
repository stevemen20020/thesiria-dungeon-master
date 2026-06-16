import { type ArmorEntity } from "../armor/armor.entity";
import { type ObjectsEntity } from "../objects/objects.entity";
import { type StructuresEntity } from "../structures/structures.entity";
import { type WeaponEntity } from "../weapon/weapon.entity";
export interface TilesEntity {
  id: string;
  name: string;
  image: string;
  structureId: string;
  armor?: ArmorEntity[];
  objects?: ObjectsEntity[];
  structuresStructuresLocationIdTotiles?: StructuresEntity[];
  structuresTilesStructureIdTostructures?: StructuresEntity;
  weapon?: WeaponEntity[];
}
