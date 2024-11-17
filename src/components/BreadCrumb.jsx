import { useLocation, Link } from "react-router-dom";
export default function BreadCrumb() {

  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
 
  if (location.pathname === "/") return null;
  if (location.pathname === "/login") return null;

  return (
    <div className="w-[85%] m-auto mt-7">
      <nav className="text-gray-600">
        <ul className="flex space-x-1">
          <li>
            <Link to="/" className="">Home</Link>
          </li>
          {paths.map((path, index) => {
            const pathUrl = `/${paths.slice(0, index + 1).join("/")}`;
            return (
              <li key={path} className="flex items-center">
                <span className="mx-2 text-gray-400">{">"}</span>
                <Link to={pathUrl} className="text-black">
                  {path.replace(/-/g, " ")}  
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
