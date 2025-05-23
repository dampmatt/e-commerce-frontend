import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router'
import { SignIn, SignOut } from '../store/Slice/loginSlice'

const Header = () => {
  const isLogin = useSelector((state) => state.login.login)
  const dispatch = useDispatch()
  const navigate= useNavigate();

  const handleLinkClick = ()=>{
    navigate('/')
  }

  const handleClick = ()=>{
    if(!isLogin){
      dispatch(SignIn());
    }
    else{
      navigate('/cart');
    }    
  }
  return (
    <div className='flex justify-between items-center bg-[#1a1a2e] text-pink-500  px-8  '>
        <h1 className='text-3xl font-bold cursor-pointer py-6' onClick={handleLinkClick}>LOGO</h1>

        <ul className='flex  font-thin self-baseline-last '>
            <li className='cursor-pointer hover:border-1 hover:bg-pink-500 hover:border-[#1a1a2e] hover:text-[#1a1a2e] p-2 rounded-sm' onClick={handleLinkClick}>Home</li>    
            <li className='cursor-pointer hover:border-1 hover:bg-pink-500 hover:border-[#1a1a2e] hover:text-[#1a1a2e] p-2 rounded-sm' onClick={handleLinkClick}>Electronics</li>
            <li className='cursor-pointer hover:border-1 hover:bg-pink-500 hover:border-[#1a1a2e] hover:text-[#1a1a2e] p-2 rounded-sm' onClick={handleLinkClick}>Clothes</li>
            <li className='cursor-pointer hover:border-1 hover:bg-pink-500 hover:border-[#1a1a2e] hover:text-[#1a1a2e] p-2 rounded-sm' onClick={handleLinkClick}>Home Decor</li>
        </ul>
        
        <button 
        className="min-w-[150px] bg-[#f8f8f8] font-light border-2 hover:border-pink-500  hover:bg-[#1a1a2e] hover:text-pink-600 text-black rounded-xl px-4 py-2 shadow-md"
        onClick={handleClick}
        >
        {
          !isLogin &&
          <span>Login / Sign Up</span>
        }
        {
          isLogin &&
          <span>cart</span>
        }
        </button>


    </div>
  )
}

export default Header