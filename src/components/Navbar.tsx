import NavbarTitle from "./NavbarTitle";
import Theme from "./Theme";

function Navbar() {
  return (
    <nav className="md:py-[40px] container flex justify-between py-[16px] xl:py-[80px]">
      <NavbarTitle />
      <Theme />
    </nav>
  );
}

export default Navbar;
