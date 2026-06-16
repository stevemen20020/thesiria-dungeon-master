import { type ArmorEntity } from "../armor/armor.entity";
import { type AttacksEntity } from "../attacks/attacks.entity";
import { type DevilFruitEntity } from "../devil_fruit/devilFruit.entity";
import { type HakiTypesEntity } from "../haki_types/hakiTypes.entity";
import { type ObjectsEntity } from "../objects/objects.entity";
import { type SpellsEntity } from "../spells/spells.entity";
import { type WeaponEntity } from "../weapon/weapon.entity";
export interface SkillUsageEntity {
  id: string;
  name: string;
  armorArmorSkillUsageToskillUsage?: ArmorEntity[];
  attacksAttacksSkillUsageToskillUsage?: AttacksEntity[];
  devilFruit?: DevilFruitEntity[];
  hakiTypes?: HakiTypesEntity[];
  objects?: ObjectsEntity[];
  spellsSpellsSkillUsageToskillUsage?: SpellsEntity[];
  weaponWeaponSkillUsageToskillUsage?: WeaponEntity[];
}
