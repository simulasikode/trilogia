"use client";
import Script from "next/script";

function Home() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EBSR5G5K30" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-EBSR5G5K30');
        `}
      </Script>
    </>
  );
}

export default Home;
