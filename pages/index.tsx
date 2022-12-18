import Heading from "../components/Heading";
import Container from "../components/Container";
import Paragraph from "../components/Paragraph";
import Anchor from "../components/anchors/Anchor";
import Button from "../components/buttons/Button";
import { Logo } from "../components/Logo";

export default function Home() {
  return (
    <Container className="flex flex-col justify-center items-center py-5">
      <Logo />

      <Heading level={1}>Best Tools For Web</Heading>

      <Paragraph align="center" spacing="sm">
        Best Tools For Web tries to make your life easier with solutions for web common problems!
      </Paragraph>

      <Heading level={2}>Our Produducts</Heading>
      <div className="w-full lg:w-1/2 mt-4">
        <Anchor href="/short" className="block my-3">
          <Button className="w-full">URL Shortener</Button>
        </Anchor>
      </div>
    </Container>
  );
}
