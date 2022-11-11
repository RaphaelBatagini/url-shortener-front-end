import NextHead from "next/head";

export default function Head() {
  return (
    <NextHead>
      <title>URL Shortener</title>
      <meta name="description" content="Shoten your URLs" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}