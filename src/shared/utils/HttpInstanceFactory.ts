import axios, { AxiosInstance } from "axios";
import { BACK_URL } from "../config/api.config";

export class HttpInstanceFactory {
  private static httpInstance: AxiosInstance | null;

  public static getInstance() {
    if (this.httpInstance) return this.httpInstance;
    this.httpInstance = axios.create({
      baseURL: BACK_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return this.httpInstance;
  }
}
