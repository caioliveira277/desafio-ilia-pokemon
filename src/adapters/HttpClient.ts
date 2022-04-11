import type { AxiosInstance } from "axios";
import axios from "axios";

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;
  protected readonly baseUrl = import.meta.env.VITE_API_BASE_URL;
  protected readonly xApiKey = import.meta.env.VITE_X_API_KEY;
  private cacheUrl = "";
  private readonly CancelToken = axios.CancelToken.source();
  private cacheRequestInterceptorId = 0;

  constructor() {
    this.instance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "X-Api-Key": this.xApiKey,
      },
    });
    this.cacheRequestInterceptor();
  }

  protected formatQueryString(queryParameters: {
    [key: string]: string;
  }): string {
    return new URLSearchParams(queryParameters).toString();
  }

  private cacheRequestInterceptor(): void {
    this.cacheRequestInterceptorId = this.instance.interceptors.request.use(
      (config) => {
        if (this.cacheUrl !== config.url) {
          this.cacheUrl = config.url || "";
        } else {
          config.cancelToken = this.CancelToken.token;
          this.CancelToken.cancel("Cached request");
        }
        return config;
      }
    );
  }

  public cacheInterceptorEject(): void {
    this.instance.interceptors.request.eject(this.cacheRequestInterceptorId);
  }
}
