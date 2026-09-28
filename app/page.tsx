import Link from "next/link";
import {
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SLOGAN,
} from "@/lib/config";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.brand}>{SITE_NAME}</h1>
        <p className={styles.slogan}>{SITE_SLOGAN}</p>
        <p className={styles.intro}>{SITE_DESCRIPTION}</p>
        <div className={styles.actions}>
          <Link href="/privacy" className={styles.button}>
            Privacybeleid
          </Link>
          <Link href="/voorwaarden" className={styles.buttonSecondary}>
            Algemene voorwaarden
          </Link>
        </div>
        <p className={styles.contact}>
          Contact:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </main>
  );
}
