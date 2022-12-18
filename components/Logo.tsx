import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/logo.svg"
        alt="Best Tools For Web Logo"
        width={400}
        height={0}
        loading="eager"
        className="my-8"
      />
    </Link>
  );
}
