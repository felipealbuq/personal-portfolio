// NavLink.jsx
import Link from "next/link";

const NavLink = ({ href, title, isActive }) => {
  return (
    <Link href={href} className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-white overflow-auto ${isActive ? "text-white" : "text-slate-400"}`}>
      {title}
    </Link>
  );
};

export default NavLink;
