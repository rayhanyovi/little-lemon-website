function Navbar() {
  return (
    <nav className="flex flex-row justify-evenly items-center p-4 border-b-2 border-[#495E57] mx-12">
      <ul className="  list-none flex flex-row gap-12 font-semibold">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Menus</a>
        </li>
        <li>
          <a href="">Reviews</a>
        </li>
      </ul>
      <img src="/Asset 16@4x.png" className="h-12  " />
      <ul className="  list-none flex flex-row gap-12 font-semibold">
        <li>
          <a href="">Our Story</a>
        </li>
        <li>
          <a href="">Gallery</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
