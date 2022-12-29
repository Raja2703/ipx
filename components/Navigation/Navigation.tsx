import React from "react";
import Link from "next/link";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
];

const Navigation = () => (
  <nav className="text-red">
    {links.map((listItem) => (
      <Link href={listItem.link} key={listItem.name}>{listItem.name}</Link>
    ))}
  </nav>
);

export default Navigation;
