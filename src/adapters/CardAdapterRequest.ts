import type { IDataPokemon } from "@/context/types";
import type { AxiosResponse } from "axios";
import { HttpClient } from "./HttpClient";

export interface IAnyObjectList {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { [key: string]: any }[];
}
export class CardAdapterRequest extends HttpClient {
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
  ): Promise<AxiosResponse<IAnyObjectList>> {
    this.queryParameters.page = page.toString();

    if (searchName) {
      this.queryParameters.q = `${this.rangeQuery} name:${searchName}*`;
    } else {
      this.queryParameters.q = this.rangeQuery;
    }

    return this.instance.get<IAnyObjectList>(
      `/cards?${this.formatQueryString(this.queryParameters)}`
    );
  }

  public formatCards(data: IAnyObjectList["data"]): IDataPokemon[] {
    return data.map((item) => {
      return {
        id: item.id || "",
        attacks: item.attacks || [],
        images: item.images || { small: "", large: "" },
        name: item.name || "",
        resistances: item.resistances || [],
        set: {
          images: {
            symbol: item.set.images.symbol || "",
          },
        },
        types: item.types || [],
        weaknesses: item.weaknesses || [],
      } as IDataPokemon;
    });
  }
}
