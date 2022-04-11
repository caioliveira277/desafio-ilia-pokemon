import { describe, test, expect, beforeAll } from "vitest";
import { CardAdapterRequest } from "../CardAdapterRequest";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

describe("HttpClient", () => {
  const mockAdapter = new AxiosMockAdapter(axios);
  const cardAdapter = new CardAdapterRequest();
  const dataMock = [
    {
      id: "sm9-1",
      name: "Celebi & Venusaur-GX",
      types: ["Grass"],
      attacks: [
        {
          name: "Pollen Hazard",
          convertedEnergyCost: 3,
          damage: "50",
          text: "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
        },
        {
          name: "Solar Beam",
          convertedEnergyCost: 4,
          damage: "150",
          text: "",
        },
        {
          name: "Evergreen-GX",
          convertedEnergyCost: 4,
          damage: "180",
          text: "Heal all damage from this Pokémon. If this Pokémon has at least 1 extra Grass Energy attached to it (in addition to this attack's cost), shuffle all cards from your discard pile into your deck. (You can't use more than 1 GX attack in a game.)",
        },
      ],
      resistances: [
        {
          type: "Psychic",
          value: "-20",
        },
      ],
      set: {
        images: {
          symbol: "https://images.pokemontcg.io/sm9/symbol.png",
        },
      },
      images: {
        small: "https://images.pokemontcg.io/sm9/1.png",
        large: "https://images.pokemontcg.io/sm9/1_hires.png",
      },
    },
    {
      id: "base1-43",
      name: "Abra",
      types: ["Psychic"],
      attacks: [
        {
          name: "Psyshock",
          convertedEnergyCost: 1,
          damage: "10",
          text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
        },
      ],
      weaknesses: [
        {
          type: "Psychic",
          value: "×2",
        },
      ],
      set: {
        images: {
          symbol: "https://images.pokemontcg.io/base1/symbol.png",
        },
      },
      images: {
        small: "https://images.pokemontcg.io/base1/43.png",
        large: "https://images.pokemontcg.io/base1/43_hires.png",
      },
    },
  ];

  beforeAll(() => {
    cardAdapter.cacheInterceptorEject();
  });

  test("Should return the data", async () => {
    mockAdapter.onGet().reply(200, { data: dataMock });

    const pokemonCards = await cardAdapter.getPokemonCards();

    expect(pokemonCards).toHaveProperty("data");
    expect(pokemonCards.data.data).toHaveLength(2);
  });

  test("Should return formatted cards", async () => {
    mockAdapter.onGet().reply(200, { data: dataMock });

    const { data: dataPokemon } = await cardAdapter.getPokemonCards();
    const pokemonCardsFormatted = cardAdapter.formatCards(dataPokemon.data);

    expect(pokemonCardsFormatted[0]).toHaveProperty("id", "sm9-1");
    expect(pokemonCardsFormatted[0]).toHaveProperty(
      "name",
      "Celebi & Venusaur-GX"
    );
    expect(pokemonCardsFormatted[0]).toHaveProperty("types");
    expect(pokemonCardsFormatted[0].types).contain("Grass");

    expect(pokemonCardsFormatted[0]).toHaveProperty("attacks");
    expect(pokemonCardsFormatted[0].attacks).toHaveLength(3);
    expect(pokemonCardsFormatted[0].attacks[0]).toHaveProperty(
      "name",
      "Pollen Hazard"
    );
    expect(pokemonCardsFormatted[0].attacks[0]).toHaveProperty(
      "convertedEnergyCost",
      3
    );
    expect(pokemonCardsFormatted[0].attacks[0]).toHaveProperty("damage", "50");
    expect(pokemonCardsFormatted[0].attacks[0]).toHaveProperty("text");
    expect(pokemonCardsFormatted[0].attacks[0].text).contain("Your opponent");

    expect(pokemonCardsFormatted[0]).toHaveProperty("weaknesses", []);

    expect(pokemonCardsFormatted[0]).toHaveProperty("resistances");
    expect(pokemonCardsFormatted[0].resistances).toHaveLength(1);

    expect(pokemonCardsFormatted[0]).toHaveProperty([
      "set",
      "images",
      "symbol",
    ]);
    expect(pokemonCardsFormatted[0].set.images.symbol).contain("https://");

    expect(pokemonCardsFormatted[0]).toHaveProperty(["images", "small"]);
    expect(pokemonCardsFormatted[0]).toHaveProperty(["images", "large"]);
    expect(pokemonCardsFormatted[0].images.small).contain("https://");
    expect(pokemonCardsFormatted[0].images.large).contain("https://");
  });

  test("Should pass the parameters to the url", async () => {
    mockAdapter.onGet().reply(200, { data: dataMock });
    const { request } = await cardAdapter.getPokemonCards("any_name", 2);

    const expectedUrl =
      "/cards?orderBy=name&page=2&pageSize=30&q=nationalPokedexNumbers%3A%5B1+TO+151%5D+name%3Aany_name*";
    expect(request.responseURL).toEqual(expectedUrl);
  });
});
