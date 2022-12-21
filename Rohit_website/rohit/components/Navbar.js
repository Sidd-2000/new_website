import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart,AiOutlineCloseCircle,AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';
import {BsFillBagCheckFill} from 'react-icons/Bs'
import {MdOutlineAccountCircle} from 'react-icons/md'
const Navbar = ({cart,addToCart,removeFromCart,clearCart,subTotal,SubTotal}) => {
  const togglecart=()=>{
    if (ref.current.classList.contains("translate-x-full")){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains("translate-x-full")){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  return (
    <div className='flex flex-col justify-center md:flex-row md:justify-start items-center shadow-md sticky top-0 bg-white z-10'>
        <div className='logo mx-5'>
          <Link href={'/'}><Image src='/furniture_logo.jpg' alt='' height={80} width={80}/></Link>
        </div>
        <div className='nav'>
            <ul className='flex space-x-6 items-center md:text-md font-bold'>
                <Link href={'/bed'}><li>Bed</li></Link>
                <Link href={'/chair'}><li>chair</li></Link>
                <Link href={'/wardrove'}><li>Wardrobe</li></Link>
                <Link href={'/flooring'}><li>Flooring</li></Link>
            </ul>
        </div>
        <Link href={'/login'}><div  className='cart  absolute right-14 flex  mx-5 top-4 cursor-pointer'>
          <MdOutlineAccountCircle className='md:text-2xl text-xl'/>
          </div></Link>
        <div onClick={togglecart} className='cart  absolute right-0  mx-5 top-4 cursor-pointer'>
          <AiOutlineShoppingCart className='md:text-2xl text-xl'/>
        </div>
        <div  ref={ref} className ={`sidecart w-72 h-[100vh] absolute top-0 right-0  bg-red-100 px-8 py-10 transform transition-transform  ${Object.keys(cart).length !==0 ? 'translate-x-0': 'translate-x-full '}`} >
          <h2 className='font-bold text-xl'>siddharth sharma</h2>
          <span onClick={togglecart} className='absolute top-2 right-2 cursor-pointer text-2xl text-red-600'> <AiOutlineCloseCircle/></span>
          <ol className='list-decimal font-semibold'>
            {Object.keys(cart).length==0 && <div className='my-4 font-normal'>No Items in the cart please add some item to checkout</div>}
            {Object.keys(cart).map((k)=>{ return <li key={k}>
            <div className='item flex my-5 '>
            <div className='w-2/3 font-semibold '>{cart[k].name}</div>
            <div className='w-1/3 text-center justify-center flex font-semibold items-center'><AiFillMinusCircle className='cursor-pointer mx-1 text-pink-500' onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} /><span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer mx-1 text-pink-500' /></div>
            </div>
            </li>})}
          </ol>
          <div className='font-bold mt-20 mb-0'>subTotal:₹{SubTotal}</div>
          <div className='flex'>
            <Link href={'/checkout'}><button  className="flex  text-white bg-pink-500 border-0 py-2 px-2  my-16 -ml-5 mr-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1'/>Check Out</button></Link> 
            <button onClick={clearCart} className="flex  text-white bg-pink-500 border-0 py-2 px-5 mr-10 my-16 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
