import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const  products  = useSelector((state)=> state.cart.products)
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/shop">e-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form>
            <input type="text" placeholder="Search Product" className="w-full border py-2 px-4"  />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4 relative">
          <Link to="/cart">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 ? <span className="absolute top-0 left-3 w-3 text-xs
            bg-red-600 rounded-full flex items-center justify-center text-white">{products.length}</span> : ""} 
          </Link>
          <button className="hidden md:block">Login | Register</button>
          <button className="block md:hidden"><FaUser /></button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
