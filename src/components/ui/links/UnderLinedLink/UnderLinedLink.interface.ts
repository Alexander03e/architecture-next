import { AnchorHTMLAttributes } from "react";

export interface IUnderLinedLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
}
