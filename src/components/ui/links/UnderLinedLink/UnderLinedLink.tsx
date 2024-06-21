import Link from "next/link";
import styles from "./UnderLinedLink.module.css";
import { FC } from "react";
import { IUnderLinedLinkProps } from "./UnderLinedLink.interface";
export const UnderLinedLink: FC<IUnderLinedLinkProps> = ({
  href,
  title,
  ...props
}) => {
  return (
    <Link href={href} className={styles.wrapper} {...props}>
      {title}
    </Link>
  );
};
