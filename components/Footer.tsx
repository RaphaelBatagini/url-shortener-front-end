import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-5 border-t border-black text-center">
      <a
        href="https://besttoolsforweb.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with <span style={{ color: 'red' }}>❤</span> by{" "}
        <Image src="/images/icon.svg" alt="Best Tools For Web Logo" width={30} height={30} className="inline -mt-1" />
      </a>
    </footer>
  );
}
