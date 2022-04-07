export type TAttacks = {
  name: string;
  convertedEnergyCost: number;
  damage: string;
  text: string;
}[];

export type TObjectTypeValue = {
  type: string;
  value: string;
}[];

export type TSet = {
  images: {
    symbol: string;
  };
};

export type TImages = {
  small: string;
  large: string;
};

export interface IDataPokemon {
  id: string;
  name: string;
  attacks: TAttacks;
  types: string[];
  weaknesses: TObjectTypeValue;
  resistances: TObjectTypeValue;
  set: TSet;
  images: TImages;
}
