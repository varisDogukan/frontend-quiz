import NavbarTitle from "./NavbarTitle";
import Theme from "./Theme";

function Navbar() {
  return (
    <nav className="container flex justify-between py-[16px] md:py-[40px] xl:py-[80px]">
      <NavbarTitle />
      <Theme />
    </nav>
  );
}

export default Navbar;
