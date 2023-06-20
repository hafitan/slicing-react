import React from 'react'
import Button from '../../atom/Button'
import { Link } from 'react-router-dom'
import Image from '../../atom/Image'

export default function Navbar(props) {
    const {children, size} = props
  return (
    <>
        <Header />
            {children}
        <Footer />
    </>    
  )
}

const Header = () => {
    return(
        <>
            <div className="sticky flex items-center justify-between top-0 bg-white  text-black  py-5 ">
                <div className="h-full flex items-center px-7">
                    <h1>Sunho Finance</h1>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <a href="#">Home</a>
                    <a href="#">Featurs</a>
                    <a href="#">About Us</a>
                    <a href="#">Pricing</a>
                    <a href="#">Resources</a>
                </div>
                <div className="flex gap-2">
                    <Link><p className=''>Sign In</p></Link>
                    <Button className=''>try fro free</Button>
                </div>
            </div>
        </>
    )
}

const Footer = () => {
    return(
        <>
            <div className="flex bottom-0 bg-white pt-10 text-black p-2 z-50 ">
                <div className="w-56 ml-32">
                    <div className="text-left px-5">
                        <h1 className='font-semibold'>Sunho Finance</h1>
                    </div>
                    <div className="text-left px-5 mb-2 mt-2">
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vitae eius ut ullam autem sequi.</p>
                    </div>
                    <div className="flex  gap-2">
                        <Image size='45' image='/images/face.svg'></Image>
                        <Image size='45' image='/images/insta.svg'></Image>
                        <Image size='45' image='/images/twit.svg'></Image>
                        <Image size='45' image='/images/youtu.svg'></Image>
                    </div>
                </div>
                <div className="flex gap-10 ml-80">
                    <div className="">
                        <h1 className='font-semibold'>Featurs</h1>
                        <div className="text-gray-500 text-xs">
                            <p className='mt-3'>Overview</p>
                            <p className='mt-7'>Shopify Owner</p>
                            <p className='mt-7'>Secure Payments</p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className='font-semibold'>Resources</h1>
                        <div className="text-gray-500 text-xs">
                            <p className='mt-3'>Developers</p>
                            <p className='mt-7'>Showcase</p>
                            <p className='mt-7'>Online Store</p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className='font-semibold'>Contacts</h1>
                        <div className="text-gray-500  text-xs">
                            <p className=' flex items-center'><Image size='42' image='/images/tel.svg'></Image> +38042073</p>
                            <p className=' flex items-center'><Image size='42' image='/images/mail.svg'></Image> contcat@sunho.ai</p>
                            <p className=' flex items-center'><Image size='42' image='/images/map.svg'></Image> jln.abrahah</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}