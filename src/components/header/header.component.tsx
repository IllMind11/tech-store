import { Link, useNavigate } from "react-router-dom";

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
          <Link to={"/"}>Hekto</Link>
        </div>
        <div>
          <ul className="p-8 text-slate-100 text-3xl flex">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/products")}>Products</li>
            <li onClick={() => navigate("/blog")}>Blog</li>
            <li onClick={() => navigate("/shop")}>Shop</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
