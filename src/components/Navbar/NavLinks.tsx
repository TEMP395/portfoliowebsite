import { Link } from '../Link';

export function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-6 lg:gap-8">
      <Link href="#about">About me</Link>
      <Link href="#skills">Skills</Link>
      <Link href="#projects">Work</Link>
      <Link href="#education">Education</Link>
      <Link href="#contact">Contact Me</Link>
    </div>
  );
}