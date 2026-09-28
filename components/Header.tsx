import Link from "next/link";
import { SITE_NAME } from "@/lib/config";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          {SITE_NAME}
        </Link>
        <nav className={styles.nav} aria-label="Hoofdnavigatie">
          <Link href="/privacy">Privacy</Link>
          <Link href="/voorwaarden">Voorwaarden</Link>
        </nav>
      </div>
    </header>
  );
}
