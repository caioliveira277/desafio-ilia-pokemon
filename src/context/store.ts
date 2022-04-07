import type { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import type {
  IDataPokemon,
  TAttacks,
  TImages,
  TObjectTypeValue,
  TSet,
} from "./types";

export interface State {
  currentPokemon: IDataPokemon;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    currentPokemon: {
      id: "",
      name: "",
      attacks: [],
      types: [],
      weaknesses: [],
      resistances: [],
      set: {
        images: {
          symbol: "",
        },
      },
      images: {
        small: "",
        large: "",
      },
    },
  },
  getters: {
    imageSymbol({ currentPokemon }) {
      return currentPokemon.set.images.symbol;
    },
  },
  mutations: {
    setCurrentPokemonId(state, payload: string) {
      state.currentPokemon.id = payload;
    },
    setCurrentPokemonName(state, payload: string) {
      state.currentPokemon.name = payload;
    },
    setCurrentPokemonAttacks(state, payload: TAttacks) {
      state.currentPokemon.attacks = payload;
    },
    setCurrentPokemonTypes(state, payload: string[]) {
      state.currentPokemon.types = payload;
    },
    setCurrentPokemonWeaknesses(state, payload: TObjectTypeValue) {
      state.currentPokemon.weaknesses = payload;
    },
    setCurrentPokemonResistances(state, payload: TObjectTypeValue) {
      state.currentPokemon.resistances = payload;
    },
    setCurrentPokemonSet(state, payload: TSet) {
      state.currentPokemon.set = payload;
    },
    setCurrentPokemonImages(state, payload: TImages) {
      state.currentPokemon.images = payload;
    },
  },
  actions: {
    setCurrentPokemon({ commit }, paylod: IDataPokemon) {
      commit("setCurrentPokemonId", paylod.id);
      commit("setCurrentPokemonName", paylod.name);
      commit("setCurrentPokemonAttacks", paylod.attacks);
      commit("setCurrentPokemonTypes", paylod.types);
      commit("setCurrentPokemonWeaknesses", paylod.weaknesses);
      commit("setCurrentPokemonResistances", paylod.resistances);
      commit("setCurrentPokemonSet", paylod.set);
      commit("setCurrentPokemonImages", paylod.images);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
