interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className="text-[16px] md:text-[18px] text-gray-300 hover:text-white transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  );
}