import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/config";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Privacybeleid van MATCH — hoe wij persoonsgegevens verwerken in onze app voor amateurvoetbalteams.",
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <h1>Privacybeleid MATCH</h1>
      <p className={styles.updated}>Laatst bijgewerkt: 28 september 2026</p>

      <h2>1. Wie we zijn</h2>
      <p>
        MATCH is een mobiele applicatie voor amateurvoetbalteams. Met MATCH kun
        je onder meer teams aanmaken, tegenstanders vinden, Challenges sturen,
        wedstrijden plannen en ranglijsten en wedstrijdgeschiedenis bijhouden.
      </p>
      <p>
        Dit privacybeleid legt uit welke persoonsgegevens wij verwerken, waarom
        wij dat doen en welke rechten je hebt.
      </p>

      <h2>2. Welke gegevens we verwerken</h2>
      <p>
        Afhankelijk van hoe je MATCH gebruikt, kunnen wij de volgende gegevens
        verwerken:
      </p>
      <ul>
        <li>naam;</li>
        <li>e-mailadres;</li>
        <li>accountidentifier;</li>
        <li>teaminformatie, waaronder teamnaam, door jou opgegeven stad of
          locatievoorkeur, teamformat (zoals 5v5 of 7v7) en teamniveau;</li>
        <li>ELO / ranking;</li>
        <li>Challenges;</li>
        <li>wedstrijdinformatie en wedstrijdresultaten;</li>
        <li>voorkeuren in de app, zoals taal, haptiek en geluid;</li>
        <li>
          technische informatie die nodig is voor authenticatie en beveiliging.
        </li>
      </ul>
      <p>
        Wij verzamelen geen precieze GPS-locatie, tenzij dat in een latere versie
        van de app uitdrukkelijk wordt aangeboden en toegelicht.
      </p>

      <h2>3. Waarom we gegevens verwerken</h2>
      <p>Wij verwerken gegevens om:</p>
      <ul>
        <li>een account aan te maken en te beheren;</li>
        <li>teamfuncties te laten werken;</li>
        <li>teams te matchen;</li>
        <li>Challenges te versturen;</li>
        <li>wedstrijden te plannen;</li>
        <li>ranglijsten / ELO te berekenen;</li>
        <li>accountondersteuning te bieden;</li>
        <li>misbruik te voorkomen en de dienst te beveiligen.</li>
      </ul>

      <h2>4. Authenticatie en infrastructuur</h2>
      <p>
        Wij kunnen dienstverleners zoals Supabase gebruiken voor onder meer
        authenticatie, databaseopslag en het beheren van account- en
        applicatiegegevens. Deze partijen verwerken gegevens namens ons, voor
        zover dat nodig is om de dienst te leveren.
      </p>

      <h2>5. Rechtsgrondslagen</h2>
      <p>
        Voor zover de Algemene Verordening Gegevensbescherming (AVG) van
        toepassing is, baseren wij de verwerking onder meer op:
      </p>
      <ul>
        <li>
          uitvoering van de overeenkomst of de door jou gevraagde dienst
          (gebruik van MATCH);
        </li>
        <li>
          gerechtvaardigd belang, bijvoorbeeld voor beveiliging, voorkoming van
          misbruik en verbetering van de dienst;
        </li>
        <li>toestemming, waar dat van toepassing is.</li>
      </ul>

      <h2>6. Bewaartermijn</h2>
      <p>
        Wij bewaren persoonsgegevens niet langer dan nodig is voor de doelen
        waarvoor zij zijn verzameld, of zolang wij daartoe wettelijk verplicht
        zijn.
      </p>

      <h2>7. Delen van gegevens</h2>
      <p>
        Wij verkopen jouw persoonsgegevens niet aan adverteerders. Wij delen
        gegevens alleen met dienstverleners voor zover dat nodig is om MATCH te
        laten functioneren.
      </p>
      <p>
        Informatie over teams en wedstrijden kan zichtbaar zijn voor andere
        MATCH-gebruikers, voor zover dat nodig is voor de werking van de app
        (bijvoorbeeld om tegenstanders te vinden of Challenges te versturen).
      </p>

      <h2>8. Jouw rechten</h2>
      <p>
        Onder de AVG heb je, voor zover van toepassing, onder meer het recht op:
      </p>
      <ul>
        <li>inzage;</li>
        <li>correctie;</li>
        <li>verwijdering;</li>
        <li>beperking van de verwerking;</li>
        <li>bezwaar;</li>
        <li>gegevensoverdraagbaarheid, waar van toepassing;</li>
        <li>intrekking van toestemming, waar van toepassing.</li>
      </ul>
      <p>
        Je hebt ook het recht een klacht in te dienen bij de Autoriteit
        Persoonsgegevens.
      </p>

      <h2>9. Account verwijderen</h2>
      <p>
        Je kunt verwijdering van je account en bijbehorende gegevens aanvragen
        via{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Waar
        beschikbaar kunnen wij ook een verwijderoptie in de app aanbieden.
      </p>

      <h2>10. Beveiliging</h2>
      <p>
        Wij nemen redelijke technische en organisatorische maatregelen om
        persoonsgegevens te beschermen tegen verlies, misbruik en ongeautoriseerde
        toegang. Absolute veiligheid kunnen wij niet garanderen.
      </p>

      <h2>11. Kinderen</h2>
      <p>
        MATCH is niet bedoeld voor kinderen die volgens de toepasselijke
        wetgeving niet zelfstandig toestemming kunnen geven voor het verwerken
        van hun persoonsgegevens.
      </p>

      <h2>12. Wijzigingen</h2>
      <p>
        Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. De datum
        &quot;Laatst bijgewerkt&quot; bovenaan deze pagina geeft aan wanneer de
        meest recente versie van kracht is geworden.
      </p>

      <h2>13. Contact</h2>
      <p>
        Vragen over dit privacybeleid of over jouw persoonsgegevens kun je
        sturen naar{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </main>
  );
}
