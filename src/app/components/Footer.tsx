import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <Image
            src="/images/logo.webp"
            alt="Altius Lexia"
            width={994}
            height={1023}
            className="h-10 md:h-12 w-auto max-w-[120px] object-contain"
          />
          <p className="text-sm font-outfit text-body-muted">
            &copy; {new Date().getFullYear()} Altius Lexia. Sistemas Legales Arquitectónicos.
          </p>
        </div>
      </div>
    </footer>
  );
}
