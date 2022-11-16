import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { withTranslation, i18n } from "../i18n";

import TranslateIcon from "@material-ui/icons/Translate";
import { Button } from "@material-ui/core";

function Home({ t: Translate }) {
  const [language, setLanguage] = useState("en");

  const handleClick = (e) => {
    language == "en" ? setLanguage("id") : setLanguage("en");
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{Translate("title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1
          className={i18n.language == "id" ? styles.titleId : styles.titleEn}
        >
          {Translate("hello")}
        </h1>

        <p>{Translate("nested.content")}</p>
        <p>{Translate("secondFile:second")}</p>

        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          color={i18n.language == "id" ? "secondary" : "primary"}
          onClick={handleClick}
          startIcon={<TranslateIcon />}
        >
          {i18n.language == "id" ? "Indonesia" : "English"}
        </Button>
      </main>
    </div>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "secondFile"],
});

export default withTranslation("common")(Home);
