import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import campFire from "../assets/souls_fire.gif";

//api functions.
import { getQuotes } from "../lib/soulsApi";

export default function Home(props) {
  let [quote, setQuote] = useState({ attributes: {} });
  let data = null;

  return (
    <SectionContainer className={styles.container}>
      <Head>
        <title>Soulsum</title>
        <meta
          name="description"
          content="The Lorem Ipsum generator for the Hollowed and Tarnished."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-container">
        <main>
          <div className="title">
            <h1>Soulsum</h1>
          </div>

          <div className="gif-container">
            <Image src={campFire} alt="Camp fire Gif." className="gif" />
            <p>
              Welcome to Soulsum, the text generator for Hunters, Hollows and
              Tarnished.
            </p>
          </div>

          <button
            className="camp-button"
            onClick={async function () {
              data = await getQuotes();
              setQuote(data.data);
            }}
          >
            Rest by the fire.
          </button>

          <div className="quotes-container">
            <div className="quote">
              <h2>"{quote.attributes.Quote}"</h2>
              <h3>{quote.attributes.AuthorName}</h3>
            </div>
          </div>
        </main>

        <footer>
          <p>
            All rights reserved © 2022 | Forged by the Elden Lord{" "}
            <a href="https://keelanjon.com">KeelanJon</a>
          </p>
        </footer>
      </div>
    </SectionContainer>
  );
}

//Server side rendering.
// export async function getStaticProps() {
//   // Get quotes from the api.

//   const res = await fetch("http://localhost:1337/api/quotes");
//   const quotes = await res.json();

//   return {
//     props: { quotes },
//   };
// }

const SectionContainer = styled.div`
  text-align: center;
  max-width: 750px;
  margin: auto;
  height: 100vh;

  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  main {
    .gif-container {
      .gif {
        width: 100%;
        height: auto;
      }

      p {
        padding: 0 2rem;
      }
    }

    .camp-button {
      margin-top: 3rem;
      cursor: pointer;
      font-size: 1rem;
      padding: 0.2rem 0.4rem;
    }

    .quotes-container {
      width: 100%;
      margin: auto;

      .quote {
        padding-top: 2rem;
      }
    }
  }

  footer {
    padding: 2rem 0;

    p {
      font-weight: 500;

      a {
        text-decoration: underline;
        transition: 0.2s ease 0s;

        &:hover {
          color: #f5bc42;
        }
      }
    }
  }
`;
