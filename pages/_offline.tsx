import Heading from "../components/Heading";
import Container from "../components/Container";
import Paragraph from "../components/Paragraph";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="flex flex-col justify-center items-center py-5">
      <Image
        src="/images/logo.svg"
        alt="Best Tools For Web Logo"
        width={400}
        height={0}
        loading="eager"
        className="my-8"
      />

      <Heading level={1}>Connection problem found!</Heading>

      <Paragraph align="center">
        Please, check your internet connection and try again.
      </Paragraph>
    </Container>
  );
}
