import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";
import { Helmet } from "react-helmet";
import alm from "../src/image/bp.png"

const App = () => {
  return (
    <>
    <Helmet>
      <meta property="og:locale" content="en_ID" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Undangan 100 Hari Lalu Manan" />
      <meta property="og:description" content="Undangan 100 Hari Lalu Manan Ayahanda dari Bq. Devi Andikasari" />
      <meta property="og:url" content="https://udangan-nine.vercel.app" />
      <meta property="og:site_name" content="Undangan Online Digital" />
      <meta property="og:image" content={alm} />
      <meta property="og:image:secure_url" content={alm} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:alt" content="Lalu Manan" />
      <meta property="og:image:type" content="image/png" />
    </Helmet>
    <Desktop/>
    <Mobile/>
    </>
  );
}

export default App;
