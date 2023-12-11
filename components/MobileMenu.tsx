import NavbarItem from "./NavbarItem";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="w-56 absolute top-10 left-0 bg-[#111] shadow-sm shadow-black flex-col p-4 overflow-x-hidden">
      <div className="flex flex-col gap-3">
        <NavbarItem label="Home" href="/" />
        <NavbarItem label="Tv Shows" href="/shows" />
        <NavbarItem label="Movies" href="/movies" />
        <NavbarItem label="Recently added" href="/recently" />
        <NavbarItem label="My List" href="/list" />
      </div>
    </div>
  );
};

export default MobileMenu;
