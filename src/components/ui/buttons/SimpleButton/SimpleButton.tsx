import { FC } from "react";
import styles from "./SimpleButton.module.css";
import { ISimpleButtonProps } from "./SimpleButton.interface";

export const SimpleButton: FC<ISimpleButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button className={styles.wrapper} {...props}>
      {children}
    </button>
  );
};
