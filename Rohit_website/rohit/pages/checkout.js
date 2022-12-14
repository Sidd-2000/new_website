import React from 'react'
import {AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';
import {BsFillBagCheckFill} from 'react-icons/Bs'
import Link from 'next/link';

const checkout = ({cart,SubTotal,addToCart,removeFromCart}) => {
  return (
    <div className='container m-auto'>
      <h1 className='font-bold text-3xl my-8 text-center'>Check Out</h1>
      <h2 className=''>1. Delivery Details</h2>
      <div className='mx-auto flex my-2'>
      <div className='px-2 w-1/2'>
      <div class="mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="name" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className='px-2 w-1/2'>
      <div class="mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      </div>
      <div className='px-2 w-full'>
      <div class="mb-4">
        <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
        <textarea id="address" name="address" rows="2" cols="10" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> 
        </textarea>
      </div>
      </div>
      <div className='mx-auto flex my-2'>
      <div className='px-2 w-1/2'>
      <div class="mb-4">
        <label for="Phone" class="leading-7 text-sm text-gray-600">Phone</label>
        <input type="Phone" id="Phone" name="Phone" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className='px-2 w-1/2'>
      <div class="mb-4">
        <label for="City" class="leading-7 text-sm text-gray-600">City</label>
        <input type="text" id="City" name="City" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      </div>
      <div className='mx-auto flex my-2'>
      <div className='px-2 w-1/2'>
      <div class="mb-4">
        <label for="State" class="leading-7 text-sm text-gray-600">State</label>
        <input type="text" id="State" name="State" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className='px-2 w-1/2'>
      <div class="mb-4">
        <label for="Pincode" class="leading-7 text-sm text-gray-600">Pincode</label>
        <input type="Pincode" id="Pincode" name="Pincode" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      </div>
      <h2 className=''>1. Review Cart Items & Pay</h2>
      <div className='sidecart  bg-pink-100 p-6 m-2'>
          <h2 className='font-bold text-xl'>siddharth sharma</h2>
          
          <ol className='list-decimal font-semibold'>
            {Object.keys(cart).length==0 && <div className='my-4 font-normal'>No Items in the cart please add some item to checkout</div>}
            {Object.keys(cart).map((k)=>{ return <li key={k}>
            <div className='item flex my-5 '>
            <div className='font-semibold '>{cart[k].name}</div>
            <div className='w-1/3 text-center justify-center flex font-semibold items-center'><AiFillMinusCircle className='cursor-pointer mx-1 text-pink-500' onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} /><span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer mx-1 text-pink-500' />
            
            </div>
            </div>
            </li>})}
            
          </ol>
          <span className='font-bold'>subTotal:???{SubTotal}</span>
        </div>
        <div className='mx-4'>
        <Link href={''}><button  className="flex  text-white bg-pink-500 border-0 py-2 px-5  my-16   focus:outline-none hover:bg-pink-600 rounded text-lg"><BsFillBagCheckFill className='mt-1  text-2xl'/>Pay ???{SubTotal}</button></Link>
        </div> 
    </div>
  )
}

export default checkout
