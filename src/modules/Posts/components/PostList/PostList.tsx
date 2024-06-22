"use client";
import { useFetchPosts } from "@/hooks/query/posts.query";
import styles from "./PostList.module.css";

export const PostList = () => {
  const { data, isLoading } = useFetchPosts();
  return (
    <div className={styles.wrapper}>
      {data?.map((item) => (
        <div className={styles.postWrapper}>
          {isLoading ? (
            <p>loading...</p>
          ) : (
            <>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
