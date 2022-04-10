import type { IDataPokemon } from "@/context/types";
import type { AxiosResponse } from "axios";
import { HttpClient } from "./HttpClient";

export class CardAdapter extends HttpClient {
  private queryParameters = {
    orderBy: "name",
    page: "1",
    pageSize: "30",
    q: "nationalPokedexNumbers:[1 TO 151]",
  };

  constructor() {
    super();
  }

  public getPokemonCards(): Promise<
    AxiosResponse<{ data: { [key: string]: never }[] }>
  > {
    return this.instance.get(
      `/cards?${this.formatQueryString(this.queryParameters)}`
    );
  }

  public formatCards(
    data: { [key: string]: string | object }[]
  ): IDataPokemon[] {
    return data.map((item) => {
      return {
        id: item.id,
        attacks: item.attacks,
        images: item.images,
        name: item.name,
        resistances: item.resistances,
        set: {
          images: {
            symbol: item.set.images.symbol,
          },
        },
        types: item.types,
        weaknesses: item.weaknesses,
      } as IDataPokemon;
    });
  }
}
