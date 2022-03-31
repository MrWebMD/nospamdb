import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/ui/Home/Header";
import Overview from "../components/ui/Home/Overview";
export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Overview/>
      </main>
      <footer></footer>
    </>
  );
}
