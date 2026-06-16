import { type PlayableCharacterEntity } from "../playable_character/playableCharacter.entity";
import { type WeaponEntity } from "../weapon/weapon.entity";
export interface InventoryWeaponEntity {
  id: string;
  idUser: string;
  idWeapon: string;
  level: string;
  playableCharacterInventoryWeaponIdUserToplayableCharacter?: PlayableCharacterEntity;
  weapon?: WeaponEntity;
  playableCharacterPlayableCharacterWeaponIdToinventoryWeapon?: PlayableCharacterEntity[];
}
