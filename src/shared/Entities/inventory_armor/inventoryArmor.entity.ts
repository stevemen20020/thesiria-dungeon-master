import { type ArmorEntity } from "../armor/armor.entity";
import { type PlayableCharacterEntity } from "../playable_character/playableCharacter.entity";
export interface InventoryArmorEntity {
  id: string;
  idUser: string;
  idArmor: string;
  level: string;
  playableCharacterInventoryArmorIdUserToplayableCharacter?: PlayableCharacterEntity;
  armor?: ArmorEntity;
  playableCharacterPlayableCharacterArmorIdToinventoryArmor?: PlayableCharacterEntity[];
}
