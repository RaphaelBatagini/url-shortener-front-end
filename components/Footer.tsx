import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-5 border-t border-black text-center">
      <Link href="/">
        Made with <span style={{ color: 'red' }}>❤</span> by{" "}
        <Image src="/images/icon.svg" alt="Best Tools For Web Logo" width={30} height={30} className="inline -mt-1" />
      </Link>
    </footer>
  );
}
