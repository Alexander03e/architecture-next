import { AxiosInstance } from "axios";
import { HttpInstanceFactory } from "@/shared/utils/HttpInstanceFactory";
import { IPostList } from "../types/posts.interface";

export class PostsApi {
  private static baseInstance: PostsApi | null = null;
  private httpInstance: AxiosInstance;

  constructor() {
    this.httpInstance = HttpInstanceFactory.getInstance();
  }

  public static getInstance() {
    if (this.baseInstance) return this.baseInstance;
    this.baseInstance = new PostsApi();
    return this.baseInstance;
  }

  async getPosts(): Promise<IPostList | undefined> {
    try {
      const response = await this.httpInstance.get("/posts");
      return response.data;
    } catch (e) {
      throw new Error("e.message");
    }
  }
}
