import { Link, useNavigate } from "react-router-dom";
import { InputSearch } from "../../ui-components/input-search/input-search.component";

export function Header() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const navigate = useNavigate();

  // ---------------------------------------------------------------------------
  return (
    <div>
      <div className="w-full bg-slate-500 flex justify-around items-center">
        <div>
          <Link to={"/"}>Tech</Link>
        </div>
        <div>
          <ul className="p-5 text-1xl flex">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/products")}>Products</li>
            <li onClick={() => navigate("/blog")}>Blog</li>
            <li onClick={() => navigate("/shop")}>Shop</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>
        <InputSearch />
      </div>
    </div>
  );
}
