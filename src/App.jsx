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
      <meta name="locale" content="en_ID" />
      <meta name="type" content="article" />
      <meta name="title" content="Undangan 100 Hari Lalu Manan" />
      <meta name="description" content="Undangan 100 Hari Lalu Manan Ayahanda dari Bq. Devi Andikasari" />
      <meta name="url" content="https://udangan-nine.vercel.app" />
      <meta name="site_name" content="Undangan Online Digital" />
      <meta name="image" content={alm} />
      <meta name="image:secure_url" content={alm} />
      <meta name="image:width" content="600" />
      <meta name="image:height" content="600" />
      <meta name="image:alt" content="Lalu Manan" />
      <meta name="image:type" content="image/" />
    </Helmet>
    <Desktop/>
    <Mobile/>
    </>
  );
}

export default App;
