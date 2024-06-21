import Image from "next/image";
import styles from "./page.module.css";
import { MainPage } from "@/screens/Main";

export default function Home() {
  return (
    <div className="container">
      <MainPage />
    </div>
  );
}
