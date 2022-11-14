import { useState } from "react";
import FormInput from "../components/forms/FormInput";
import Button from "../components/buttons/Button";
import Form, { FormSubmitType } from "../components/forms/Form";
import Heading from "../components/Heading";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Paragraph from "../components/Paragraph";
import Head from "../components/Head";
import Card from "../components/cards/Card";
import Anchor from "../components/anchors/Anchor";
import ClipboardAnchor from "../components/anchors/ClipboardAnchor";

export default function Home() {
  const [shortenedUrl, setShortenedUrl] = useState<string>("");

  const shortUrl = async ({ formData }: FormSubmitType): Promise<void> => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/shorten-url/${encodeURIComponent(
        formData.originalUrl
      )}`
    );
    const data = await result.json();

    if (data?.result) {
      setShortenedUrl(`${process.env.NEXT_PUBLIC_APP_URL}/${data.result}`);
    }
  }

  return (
    <div>
      <Head />

      <main>
        <Container className="flex flex-col justify-center items-center py-20">
          <Heading level={1}>Start shortening your URLs!</Heading>

          <Form
            className="mt-12 w-full md:w-5/6 lg:w-2/5 flex"
            onSubmit={shortUrl}
          >
            <FormInput
              name="originalUrl"
              id="url"
              placeholder="Type your URL"
              required
              className="grow w-1"
            />
            <Button type="submit" className="shrink-0">
              Shorten it!
            </Button>
          </Form>

          {shortenedUrl && (
            <div className="mt-16">
              <strong>Your Shortened URL: </strong>
              <Anchor
                href={shortenedUrl}
                target="_blank"
              >
                {shortenedUrl}
              </Anchor>
              <ClipboardAnchor value={ shortenedUrl } className="ml-3"/>
            </div>
          )}

          <Paragraph align="center" spacing="md">
            URL Shortener is a free tool to shorten your URLs or reduce your
            links.
            <br />
            Use URL Shortener to create a shortened link making it easy to
            remember.
          </Paragraph>

          <Heading level={3}>Simple and fast URL shortener!</Heading>
          <Paragraph align="center">
            ShortURL allows to reduce long links from Instagram, Facebook,
            YouTube, Twitter, Linked In and top sites on the Internet, just
            paste the long URL and click the Shorten URL button. On the next
            screen, copy the shortened URL and share it on websites, chat and
            e-mail. After shortening the URL, check how many clicks it received.
          </Paragraph>

          <Heading level={3}>Shorten, share and track</Heading>
          <Paragraph align="center">
            Your shortened URLs can be used in publications, documents,
            advertisements, blogs, forums, instant messages, and other
            locations. Track statistics for your business and projects by
            monitoring the number of hits from your URL with the click counter,
            you do not have to register.
          </Paragraph>

          <div className="grid grid-cols-2 gap-4 w-full lg:w-3/6">
            <Card link="#">
              <Heading level={4}>Free &rarr;</Heading>
              <Paragraph>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Paragraph>
            </Card>

            <Card link="#">
              <Heading level={4}>Free &rarr;</Heading>
              <Paragraph>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Paragraph>
            </Card>

            <Card link="#">
              <Heading level={4}>Free &rarr;</Heading>
              <Paragraph>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Paragraph>
            </Card>

            <Card link="#">
              <Heading level={4}>Free &rarr;</Heading>
              <Paragraph>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Paragraph>
            </Card>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
