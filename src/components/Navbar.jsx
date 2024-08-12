import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/ProductSlice";

const Navbar = () => {
  const [search, setSearch] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false) 
  const [isLogin, setIsLogin] = useState(true)
  const  products  = useSelector((state)=> state.cart.products)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = (e)=>{
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filterData')
  }

  const openSignUp = ()=>{
    setIsLogin(false)
  }

  const openLogin = ()=>{
    setIsLogin(true)
  }
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/shop">e-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={(e)=>handleSearch(e)}>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Product" className="w-full border py-2 px-4"  />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4 relative">
          <Link to="/cart">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 ? <span className="absolute top-0 left-3 w-3 text-xs
            bg-red-600 rounded-full flex items-center justify-center text-white">{products.length}</span> : ""} 
          </Link>
          <button onClick={()=>setIsModalOpen(true)} className="hidden md:block">Login | Register</button>
          <button className="block md:hidden"><FaUser /></button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
      </Modal>
    </nav>
  );
};

export default Navbar;
