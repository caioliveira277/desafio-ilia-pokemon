import type { IDataPokemon } from "@/context/types";
import type { AxiosResponse } from "axios";
import { HttpClient } from "./HttpClient";

export class CardAdapter extends HttpClient {
  private rangeQuery = "nationalPokedexNumbers:[1 TO 151]";
  private queryParameters = {
    orderBy: "name",
    page: "1",
    pageSize: "30",
    q: this.rangeQuery,
  };

  constructor() {
    super();
  }

  public getPokemonCards(
    searchName = "",
    page = 1
  ): Promise<AxiosResponse<{ data: { [key: string]: never }[] }>> {
    this.queryParameters.page = page.toString();

    if (searchName) {
      this.queryParameters.q = `${this.rangeQuery} name:${searchName}*`;
    } else {
      this.queryParameters.q = this.rangeQuery;
    }

    return this.instance.get(
      `/cards?${this.formatQueryString(this.queryParameters)}`
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public formatCards(data: { [key: string]: any }[]): IDataPokemon[] {
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
