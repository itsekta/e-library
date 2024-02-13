import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
export default function NavBar() {
  return (
    <Navbar style={{ backgroundColor: "#0e0c0c" }}>
      <NavbarBrand>
        <p className="font-bold text-inherit">E-Library</p>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <div>Home</div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
