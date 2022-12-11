import NextHead from "next/head";

export default function Head() {
  return (
    <NextHead>
      <title>Shortened.at</title>
      <meta name="description" content="Shoten your URLs" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}