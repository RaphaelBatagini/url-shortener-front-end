import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex grow p-5 border-t border-black justify-center items-center">
      <a
        href="https://besttoolsforweb.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center"
      >
        Made with <span style={{ color: 'red' }}>❤</span> by
        <span className="flex grow justify-center items-center">
          <Image src="/images/logo.svg" alt="Best Tools For Web Logo" width={150} height={150} className="mt-3" />
        </span>
      </a>
    </footer>
  );
}
