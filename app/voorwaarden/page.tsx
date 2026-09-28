import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/config";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description:
    "Algemene voorwaarden van MATCH — de regels voor het gebruik van onze app voor amateurvoetbalteams.",
};

export default function VoorwaardenPage() {
  return (
    <main className={styles.page}>
      <h1>Algemene voorwaarden MATCH</h1>
      <p className={styles.updated}>Laatst bijgewerkt: 28 september 2026</p>

      <h2>1. Over MATCH</h2>
      <p>
        MATCH is een app waarmee amateurvoetbalteams tegenstanders kunnen
        vinden, Challenges kunnen sturen en wedstrijden kunnen organiseren.
        MATCH faciliteert contact en organisatie tussen teams; MATCH is zelf geen
        partij bij de voetbalwedstrijd.
      </p>

      <h2>2. Account</h2>
      <p>
        Om MATCH te gebruiken kan een account nodig zijn. Je bent verantwoordelijk
        voor het verstrekken van juiste gegevens en voor het veilig houden van
        toegang tot je account. Gebruik geen accounts van anderen zonder
        toestemming.
      </p>

      <h2>3. Teams</h2>
      <p>
        Captains of andere daartoe bevoegde gebruikers kunnen teams aanmaken en
        beheren. Teaminformatie, zoals naam, format en niveau, moet zo accuraat
        mogelijk zijn.
      </p>

      <h2>4. Challenges en wedstrijden</h2>
      <p>
        Challenges zijn verzoeken tussen gebruikers of teams om een wedstrijd te
        spelen. MATCH is geen partij bij de voetbalwedstrijd zelf en bemiddelt
        niet als scheidsrechter of organisator van het veld.
      </p>

      <h2>5. Gedrag</h2>
      <p>Het is niet toegestaan om MATCH te gebruiken voor:</p>
      <ul>
        <li>intimidatie of pesten;</li>
        <li>discriminatie;</li>
        <li>bedreigingen;</li>
        <li>fraude;</li>
        <li>zich voordoen als een ander;</li>
        <li>manipulatie van wedstrijdresultaten of ranglijsten;</li>
        <li>het plaatsen of verspreiden van onrechtmatige content.</li>
      </ul>

      <h2>6. Wedstrijdorganisatie en veiligheid</h2>
      <p>Gebruikers zijn zelf verantwoordelijk voor onder meer:</p>
      <ul>
        <li>de locatie / het veld;</li>
        <li>benodigde toestemmingen;</li>
        <li>geschiktheid van het speelveld;</li>
        <li>veiligheid van deelnemers;</li>
        <li>afspraken tussen teams;</li>
        <li>lokale regels en voorschriften.</li>
      </ul>
      <p>MATCH garandeert niet:</p>
      <ul>
        <li>dat er een tegenstander beschikbaar is;</li>
        <li>dat teams of spelers komen opdagen;</li>
        <li>een bepaald speelniveau;</li>
        <li>beschikbaarheid van een veld;</li>
        <li>de kwaliteit van een wedstrijd.</li>
      </ul>

      <h2>7. Ranking / ELO</h2>
      <p>
        ELO-ranglijsten zijn een productfunctie van MATCH. MATCH kan ranglijsten
        corrigeren of aanpassen bij misbruik, fouten of onjuiste
        wedstrijdresultaten.
      </p>

      <h2>8. Beschikbaarheid</h2>
      <p>
        MATCH kan van tijd tot tijd wijzigen, onderbroken worden of tijdelijk
        niet beschikbaar zijn, bijvoorbeeld wegens onderhoud, updates of
        storingen.
      </p>

      <h2>9. Gebruikerscontent</h2>
      <p>
        Je blijft verantwoordelijk voor de informatie die je via MATCH verstrekt.
        Je verleent MATCH een beperkt, niet-exclusief recht om die informatie te
        tonen en te gebruiken, uitsluitend voor zover nodig om de dienst te
        leveren.
      </p>

      <h2>10. Opschorting en beëindiging</h2>
      <p>
        MATCH mag accounts beperken, opschorten of beëindigen bij ernstig
        misbruik of schending van deze voorwaarden.
      </p>

      <h2>11. Aansprakelijkheid</h2>
      <p>
        MATCH wordt geleverd zoals die is. Voor zover wettelijk toegestaan zijn
        wij niet aansprakelijk voor schade die voortvloeit uit het gebruik van
        de app, uit afspraken tussen teams of uit de organisatie of het verloop
        van wedstrijden.
      </p>
      <p>
        Niets in deze voorwaarden beperkt of sluit aansprakelijkheid uit die
        volgens dwingend recht niet kan worden beperkt of uitgesloten,
        waaronder aansprakelijkheid voor opzet of bewuste roekeloosheid.
      </p>

      <h2>12. Intellectueel eigendom</h2>
      <p>
        Het merk MATCH, het ontwerp en de software behoren toe aan de
        exploitant of de desbetreffende rechthebbende. Je mag deze niet
        kopiëren, wijzigen of commercieel gebruiken zonder toestemming, behalve
        voor zover dat nodig is om de app normaal te gebruiken.
      </p>

      <h2>13. Privacy</h2>
      <p>
        Hoe wij persoonsgegevens verwerken, staat in ons{" "}
        <Link href="/privacy">privacybeleid</Link>.
      </p>

      <h2>14. Wijzigingen van de voorwaarden</h2>
      <p>
        Wij kunnen deze algemene voorwaarden van tijd tot tijd wijzigen. De
        datum &quot;Laatst bijgewerkt&quot; bovenaan deze pagina geeft aan
        wanneer de meest recente versie van kracht is geworden. Bij voortgezet
        gebruik na een wijziging kunnen de nieuwe voorwaarden van toepassing
        zijn, voor zover dat wettelijk is toegestaan.
      </p>

      <h2>15. Toepasselijk recht</h2>
      <p>
        Nederlands recht is van toepassing voor zover wettelijk toegestaan.
      </p>

      <h2>16. Contact</h2>
      <p>
        Vragen over deze voorwaarden kun je sturen naar{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </main>
  );
}
