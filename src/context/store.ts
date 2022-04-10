import type { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import type { IDataPokemon, IModal } from "./types";

export interface State {
  currentPokemon: IDataPokemon;
  modal: IModal;
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
    modal: {
      title: "",
      description: [],
      visible: false,
    },
  },
  getters: {
    currentPokemon: (state) => state.currentPokemon,
    modal: (state) => state.modal,
  },
  mutations: {
    setCurrentPokemonId(state, payload: string) {
      state.currentPokemon.id = payload;
    },
    setCurrentPokemonName(state, payload: string) {
      state.currentPokemon.name = payload;
    },
    setCurrentPokemonAttacks(state, payload: IDataPokemon["attacks"]) {
      state.currentPokemon.attacks = payload;
    },
    setCurrentPokemonTypes(state, payload: string[]) {
      state.currentPokemon.types = payload;
    },
    setCurrentPokemonWeaknesses(state, payload: IDataPokemon["weaknesses"]) {
      state.currentPokemon.weaknesses = payload;
    },
    setCurrentPokemonResistances(state, payload: IDataPokemon["resistances"]) {
      state.currentPokemon.resistances = payload;
    },
    setCurrentPokemonSet(state, payload: IDataPokemon["set"]) {
      state.currentPokemon.set = payload;
    },
    setCurrentPokemonImages(state, payload: IDataPokemon["images"]) {
      state.currentPokemon.images = payload;
    },
    setModal(state, payload: IModal) {
      state.modal = payload;
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
    toggleModalState({ commit, state }, payload: IModal) {
      commit("setModal", {
        ...payload,
        visible: !state.modal.visible,
      });
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
