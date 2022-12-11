import Heading from "../components/Heading";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Paragraph from "../components/Paragraph";
import Head from "../components/Head";
import { useEffect, useState } from "react";
import Anchor from "../components/anchors/Anchor";
import { useRouter } from "next/router";

export default function Redirect() {
  const router = useRouter();
  const { shortenedKey } = router.query;

  const [originalUrl, setOriginalUrl] = useState<boolean | null>(null);

  useEffect(() => {
    if (shortenedKey) {
      setTimeout(() => {
        getOriginalUrl(shortenedKey);
      }, 1000);
    }
  }, [shortenedKey]);

  useEffect(() => {
    if (typeof originalUrl === "string") {
      setTimeout(() => {
        window.location.assign(originalUrl);
      }, 1000);
    }
  }, [originalUrl]);

  const getOriginalUrl = async (shortenedKey?: any): Promise<void> => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/original-url/${shortenedKey}`
    );

    if (result.status === 404) {
      setOriginalUrl(false);
      return;
    }

    const data = await result.json();

    if (data?.result) {
      setOriginalUrl(data.result);
    }
  };

  return (
    <div>
      <Head />

      <main>
        <Container className="flex flex-col py-5 lg:py-10">
          {originalUrl === null && <Paragraph align="center">Searching your URL...</Paragraph>}
          {originalUrl === false && (
            <div className="my-8 text-center">
              <Heading level={1} align="center">URL Not Found</Heading>
              <Paragraph align="center">
                This shortened URL was not found on our server
              </Paragraph>
              <Anchor href="/">
                Create a new shortened URL
              </Anchor>
            </div>
          )}
          {typeof originalUrl === 'string' && (
            <Paragraph align="center">Redirecting...</Paragraph>
          )}
        </Container>
      </main>

      <Footer />
    </div>
  );
}
