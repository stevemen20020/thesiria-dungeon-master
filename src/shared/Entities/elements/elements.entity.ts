import { type AffinityEntity } from "../affinity/affinity.entity";
import { type ArmorEntity } from "../armor/armor.entity";
import { type ObjectsEntity } from "../objects/objects.entity";
import { type WeaponEntity } from "../weapon/weapon.entity";
export interface ElementsEntity {
  id: string;
  name: string;
  affinity?: AffinityEntity[];
  armor?: ArmorEntity[];
  objects?: ObjectsEntity[];
  weapon?: WeaponEntity[];
}
