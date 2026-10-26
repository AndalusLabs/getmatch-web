import type { Metadata } from "next";
import Image from "next/image";
import {
  APP_STORE_URL,
  SITE_NAME,
} from "@/lib/config";
import {
  isPlausibleInviteCode,
  matchInviteDeepLink,
  normalizeInviteCode,
} from "@/lib/invites";
import styles from "./invite.module.css";

export const metadata: Metadata = {
  title: "Uitnodiging",
  description: "Je bent uitgenodigd om lid te worden van een team op MATCH.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default async function InvitePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code: rawCode } = await params;
  const code = normalizeInviteCode(rawCode);
  const usable = isPlausibleInviteCode(code);

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <Image
          className={styles.logo}
          src="/match-icon.png"
          alt={SITE_NAME}
          width={72}
          height={72}
          priority
        />
        <p className={styles.brand}>{SITE_NAME}</p>
        {usable ? (
          <>
            <h1 className={styles.title}>Je bent uitgenodigd</h1>
            <p className={styles.body}>
              Iemand heeft je uitgenodigd om lid te worden van een voetbalteam
              op MATCH. Open de app om de uitnodiging te bekijken. Lid worden
              gebeurt pas in MATCH, niet op deze pagina.
            </p>
            <div className={styles.actions}>
              <a href={matchInviteDeepLink(code)} className={styles.primary}>
                Open MATCH
              </a>
              <a
                href={APP_STORE_URL}
                className={styles.secondary}
                rel="noopener noreferrer"
              >
                Download MATCH
              </a>
            </div>
            <p className={styles.hint}>
              Als MATCH al is geïnstalleerd, opent iOS de app meestal
              automatisch. Werkt dat niet? Tik op Open MATCH, of download de
              app en open deze link opnieuw.
            </p>
          </>
        ) : (
          <>
            <h1 className={styles.title}>Uitnodiging niet geldig</h1>
            <p className={styles.body}>
              Deze link is onvolledig of ongeldig. Vraag de captain om een
              nieuwe uitnodigingslink.
            </p>
            <div className={styles.actions}>
              <a
                href={APP_STORE_URL}
                className={styles.primary}
                rel="noopener noreferrer"
              >
                Download MATCH
              </a>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
