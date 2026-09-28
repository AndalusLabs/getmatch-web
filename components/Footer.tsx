import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/config";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© 2026 {SITE_NAME}</p>
        <nav className={styles.links} aria-label="Footer navigatie">
          <Link href="/privacy">Privacybeleid</Link>
          <Link href="/voorwaarden">Algemene voorwaarden</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </nav>
      </div>
    </footer>
  );
}
