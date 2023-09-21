import { ReactNode } from "react";
import styles from "./screens.module.scss";

type PropTypes = {
  className?: string;
  children: ReactNode;
};

export const MobileScreen = ({ children, className }: PropTypes) => {
  return <div className={`${styles.mobile}  ${className}`}>{children}</div>;
};

export const DesktopScreen = ({ children, className }: PropTypes) => {
  return <div className={`${styles.mobile}  ${className}`}>{children}</div>;
};
