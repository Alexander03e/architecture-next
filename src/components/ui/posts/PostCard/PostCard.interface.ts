import { IPost } from "@/shared/types/posts.interface";

export type IPostCardProps = Omit<IPost, "userId">;
