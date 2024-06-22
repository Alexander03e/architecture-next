import { PostList } from "../../../../modules/Posts/components/PostList/PostList";
import styles from "./PostsPage.module.css";
export const PostsPage = () => {
  return (
    <div className={styles.wrapper}>
      Posts page
      <PostList />
    </div>
  );
};
