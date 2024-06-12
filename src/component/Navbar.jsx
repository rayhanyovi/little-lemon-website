function Navbar() {
  return (
    <nav className="flex flex-row justify-evenly items-center p-4 border-b-2 border-[#495E57]">
      <ul className="hidden list-none flex flex-row gap-12 font-semibold">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#home">Menus</a>
        </li>
        <li>
          <a href="#home">Reviews</a>
        </li>
      </ul>
      <img
        src={`${process.env.PUBLIC_URL}//Asset 16@4x.png`}
        className="h-10"
      />
      <ul className="hidden list-none flex flex-row gap-12 font-semibold ">
        <li>
          <a href="#home">Our Story</a>
        </li>
        <li>
          <a href="#home">Gallery</a>
        </li>
        <li>
          <a href="#home">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
