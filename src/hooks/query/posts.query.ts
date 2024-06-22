import { PostsApi } from "@/shared/api/posts.api";
import { useQuery } from "@tanstack/react-query";

const postApi = PostsApi.getInstance();

export const useFetchPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => postApi.getPosts(),
  });
};
