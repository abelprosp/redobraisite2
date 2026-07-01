import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  height?: number;
  priority?: boolean;
}

export function Logo({
  className = "",
  height = 36,
  priority = false,
}: LogoProps) {
  return (
    <Link
      href="#"
      className={`inline-flex shrink-0 ${className}`}
      aria-label="Redobrai Corp — início"
    >
      <Image
        src="/logo-redobrai.png"
        alt="Redobrai Corp"
        width={180}
        height={44}
        priority={priority}
        className="object-contain"
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
