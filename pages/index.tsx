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
        <Container className="flex flex-col justify-center items-center py-5 lg:py-10">

          <Heading level={1}>Start shortening your URLs!</Heading>

          <Form
            className="mt-12 w-full md:w-5/6 lg:w-2/5 lg:flex"
            onSubmit={shortUrl}
          >
            <FormInput
              name="originalUrl"
              id="url"
              placeholder="Type your URL"
              required
              className="grow w-full lg:w-1"
            />
            <Button type="submit" className="w-full mt-4 lg:mt-0 lg:w-auto shrink-0">
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

          <Paragraph align="center" spacing="sm">
            <strong>Shortened.at</strong> is a free web tool to shorten your links and create friendlier URLs.
          </Paragraph>

          <Heading level={2}>Fast and simple as it should be!</Heading>
          <Paragraph align="center">
            Reduce long links from any social network like Instagram, Facebook,
            Twitter, Linked In and any other website from the internet.
            Paste or type the original URL, click the button and you're done.
            As fast as you can imagine, the shortened URL will be shown and you just
            have to click on copy button.
          </Paragraph>

          <Heading level={2}>Why should I use Shortened.at?</Heading>
          <Paragraph align="center">
            Why should you use <strong>Shortened.at</strong> to shorten your URLs with so many options on the internet? We explain!
          </Paragraph>

          <div className="grid lg:grid-cols-2 gap-4 w-full lg:w-3/6">
            <Card link="#">
              <Heading level={4}>Simple</Heading>
              <Paragraph align="center">
                We do not offer a lot of features you will never use, just simple shortened URLs generated fast as it should be.
              </Paragraph>
            </Card>

            <Card link="#">
              <Heading level={4}>Free</Heading>
              <Paragraph align="center">
                No plans and no costs. Shorten your URLs for free now.
              </Paragraph>
            </Card>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
