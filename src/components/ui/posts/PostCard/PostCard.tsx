import { FC } from "react";
import styles from "./PostCard.module.css";
import { IPostCardProps } from "./PostCard.interface";

export const PostCard: FC<IPostCardProps> = ({ body, id, title }) => {
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};
