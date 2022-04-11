import { describe, it, expect, beforeAll } from "vitest";
import { store } from "../store";

describe("Vuex", () => {
  beforeAll(() => {
    store.dispatch("setCurrentPokemon", {
      id: "any_id",
      name: "any_name",
      attacks: [{ any: "attack" }],
      types: ["any", "type"],
      weaknesses: [{ any: "weaknesses" }],
      resistances: [{ any: "resistances" }],
      set: {
        images: {
          symbol: "http://any_image.png",
        },
      },
      images: {
        small: "http://any_image.jpg",
        large: "http://any_image.webp",
      },
    });

    store.dispatch("toggleModalState", {
      title: "any_title",
      description: ["any", "paragraph"],
    });
  });
  it("Should update current pokemon state", () => {
    expect(store.state.currentPokemon.id).toEqual("any_id");
    expect(store.state.currentPokemon.name).toEqual("any_name");

    expect(store.state.currentPokemon.attacks).toHaveLength(1);
    expect(store.state.currentPokemon.attacks[0]).toHaveProperty(
      "any",
      "attack"
    );

    expect(store.state.currentPokemon.types).toHaveLength(2);
    expect(store.state.currentPokemon.types).toContain("any");
    expect(store.state.currentPokemon.types).toContain("type");

    expect(store.state.currentPokemon.weaknesses).toHaveLength(1);
    expect(store.state.currentPokemon.weaknesses[0]).toHaveProperty(
      "any",
      "weaknesses"
    );

    expect(store.state.currentPokemon).toHaveProperty(
      ["set", "images", "symbol"],
      "http://any_image.png"
    );

    expect(store.state.currentPokemon).toHaveProperty(
      ["images", "small"],
      "http://any_image.jpg"
    );

    expect(store.state.currentPokemon).toHaveProperty(
      ["images", "large"],
      "http://any_image.webp"
    );
  });

  it("Should update modal state", () => {
    expect(store.state.modal.title).toEqual("any_title");
    expect(store.state.modal.description).toHaveLength(2);
    expect(store.state.modal.description).toContain("any");
    expect(store.state.modal.description).toContain("paragraph");
    expect(store.state.modal.visible).toBeTruthy();
  });

  it("Should return the current pokemon state", () => {
    expect(store.getters.currentPokemon).toEqual(store.state.currentPokemon);
  });

  it("Should return the modal state", () => {
    expect(store.getters.modal).toEqual(store.state.modal);
  });
});
