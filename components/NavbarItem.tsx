import Link from "next/link";

interface NavbarItemProps {
  label: string;
  href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, href }) => {
  return (
    <Link
      href={href}
      className="text-white hover:text-gray-300 cursor-pointer transition text-lg"
    >
      {label}
    </Link>
  );
};

export default NavbarItem;
