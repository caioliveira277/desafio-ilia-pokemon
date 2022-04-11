type TAttacks = {
  name: string;
  convertedEnergyCost: number;
  damage: string;
  text: string;
}[];

type TObjectTypeValue = {
  type: string;
  value: string;
}[];

type TSet = {
  images: {
    symbol: string;
  };
};

type TImages = {
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

export interface IModal {
  title: string;
  description: string[];
  visible: boolean;
}
