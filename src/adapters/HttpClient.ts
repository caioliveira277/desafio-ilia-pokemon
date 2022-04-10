import type { AxiosInstance } from "axios";
import axios from "axios";

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;
  protected readonly baseUrl = import.meta.env.VITE_API_BASE_URL;
  protected readonly xApiKey = import.meta.env.VITE_X_API_KEY;

  constructor() {
    this.instance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "X-Api-Key": this.xApiKey,
      },
    });
  }

  protected formatQueryString(queryParameters: {
    [key: string]: string;
  }): string {
    return new URLSearchParams(queryParameters).toString();
  }
}
