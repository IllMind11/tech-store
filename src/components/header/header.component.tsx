import { Link, useNavigate } from "react-router-dom";
import { InputSearch } from "../../ui-components/input-search/input-search.component";

export function Header() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const navigate = useNavigate();

  // ---------------------------------------------------------------------------
  return (
    <header className="h-20 bg-violet-700 text-white flex items-center justify-around">
      <div>
        <Link className="text-2xl font-bold" to={"/"}>
          Tech
        </Link>
      </div>
      <div>
        <ul className="flex gap-x-2 cursor-pointer">
          <li
            className="text-slate-100 font-medium hover:text-rose-400"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="text-slate-100 font-medium hover:text-rose-400"
            onClick={() => navigate("/products")}
          >
            Products
          </li>
          <li
            className="text-slate-100 font-medium hover:text-rose-400"
            onClick={() => navigate("/blog")}
          >
            Blog
          </li>
          <li
            className="text-slate-100 font-medium hover:text-rose-400"
            onClick={() => navigate("/shop")}
          >
            Shop
          </li>
          <li
            className="text-slate-100 font-medium hover:text-rose-400"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>
      </div>
      <InputSearch />
    </header>
  );
}
