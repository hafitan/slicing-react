import React from 'react'
import Navbar from '../components/organism/Navbar'
import Button from '../components/atom/Button'
import Image from '../components/atom/Image'

export default function landingPage(props) {
  return (
    <>
        <Navbar>
            <div className="bg-gray-300 pt-12">
                {/* <div className="flex w-full px-5 items-center justify-between"> */}
                <div className="flex justify-center items-center gap-5">
                    <div className="px-5">
                        <div className=" mb-2 font-semibold text-4xl">
                            <h1>Trusted Simple</h1>
                            <h1>Payment Solution</h1>
                        </div>
                        <div className="w-[500px] mb-5 text-gray-500">
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, facere?</p>
                        </div>
                        <div className="flex gap-4 mb-5 w-full">
                            <Button style='py-2 text-sm' color='bg-blue-600 text-white'>Get Started</Button>
                            <Button color='bg-white'>Watch Demo</Button>
                        </div>
                        <div className="mb-2 text-sm text-gray-500">
                            <p>Trusted by over 40.000 partners & customers</p>
                        </div>
                        <div className="flex gap-4 text-gray-500">
                            <p className='flex items-center font-semibold'><Image size='60' image='/images/plag.svg'></Image> Luminous</p>
                            <p className='flex items-center font-semibold'><Image size='60' image='/images/sun.svg'></Image> Nietzsche</p>
                            <p className='flex items-center font-semibold'><Image size='60' image='/images/circle.svg'></Image> Polymath</p>
                        </div>
                    </div>
                    <div className="flex text-right">
                        <Image size='600' image='/images/work.avif'></Image>
                    </div>
                {/* <h1>xhelo</h1> */}
                </div>
                <div className="flex justify-center h-full w-full p-20">
                    <div className="h-[70%] bg-white w-[70%] rounded-2xl p-14">
                        <div className="flex">
                            <div className="w-1/2 font-semibold text-3xl">
                                <h1>Impressive mainstay features for you</h1>
                            </div>
                            <div className="w-1/2 text-sm text-gray-500">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ipsam quidem dolor mollitia, ad illo suscipit consequuntur beatae ullam distinctio?</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mt-4">
                            <div className="">
                                <div className="">
                                    <Image size='60' image='/images/bank.svg'></Image>
                                </div>
                                <div className="font-semibold text-2xl mb-3">
                                    <h1>Supervised by the central bank</h1>
                                </div>
                                <div className="text-sm text-gray-500 mb-10">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis expedita ut esse, nostrum officiis?</p>
                                </div>
                                <div className="">
                                    <p>Learn More..</p>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <Image size='60' image='/images/wallet.svg'></Image>
                                </div>
                                <div className="font-semibold text-2xl mb-3">
                                    <h1>Manage business finance flows</h1>
                                </div>
                                <div className="text-sm text-gray-500 mb-10">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis expedita ut esse, nostrum officiis?</p>
                                </div>
                                <div className="">
                                    <p>Learn More..</p>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <Image size='60' image='/images/protec.svg'></Image>
                                </div>
                                <div className="font-semibold text-2xl mb-3">
                                    <h1>Optimal data protection</h1>
                                </div>
                                <div className="text-sm text-gray-500 mb-10">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis expedita ut esse, nostrum officiis?</p>
                                </div>
                                <div className="">
                                    <p>Learn More..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-emerald-950 pt-10">
                <div className="flex flex-col items-center">
                    <div className="w-1/3 text-center">
                        <h1 className='text-white leading-[50px] text-4xl mb-5'>Financial analysis with an intuitive dashboard</h1>
                        <p className='text-gray-400 text-sm mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni, quia aut mollitia molestias quo.</p>
                    </div>
                </div>
                <div className="flex mx-32 mb-5 gap-4 bg-[#0B333A]">
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="">
                            <h1 className='text-white leading-[50px] text-2xl'>Track your income and expenses easily</h1>
                        </div>
                        <div className="">
                            <p className='text-gray-400 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, dolor?</p>
                        </div>
                        <div className="">
                            <Image size='500' image='/images/chart.PNG'></Image>
                        </div>
                    </div>
                    <div className="justify-center items-center text-center">
                        <div className="">
                            <h1 className='text-white leading-[50px] text-2xl'>Track your income and expenses easily</h1>
                        </div>
                        <div className="">
                            <p className='text-gray-400 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, dolor?</p>
                        </div>
                        <div className="">
                            <Image size='500' image='/images/sales.PNG'></Image>
                        </div>
                    </div>
                </div>
                <hr className='mt-9 w-3/4 ml-40' />
                <div className="flex justify-between px-32 mt-8 pb-32 text-white">
                    <div className="text-2xl">
                        <h1>About the</h1>
                        <h1>sunho finance</h1>
                    </div>
                    <div className="">
                        <h1 className='text-4xl'>300%</h1>
                        <p className='text-sm text-gray-300'>Return on investment</p>
                    </div>
                    <div className="">
                        <h1 className='text-4xl'>120M+</h1>
                        <p className='text-sm text-gray-300'>Global downloads</p>
                    </div>
                    <div className="">
                        <h1 className='text-4xl'>20K+</h1>
                        <p className='text-sm text-gray-300'>5-star reviews</p>
                    </div>
                </div>
            </div>
            <div className="bg-white py-16">
                <div className="">
                    <div className="flex justify-center font-semibold mb-20 items-center px-32 gap-5">
                        <div className="text-4xl w-[40%]">
                            <h1 className='text-[#0B333A]'>Customers believe in Sunho's strength</h1>
                        </div>
                        <div className="w-[40%]">
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, ab nemo commodi quis libero reiciendis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, magnam.</p>
                        </div>
                    </div>
                    <div className="flex gap-5  justify-center px-14">
                        <div className="rounded-lg w-[24%] bg-[#F3F3F3]">
                            <div className="mb-4">
                                <p className='flex items-center font-semibold text-gray-500'><Image size='60' image='/images/plag.svg'></Image> Luminous</p>
                            </div>
                            <div className="px-5 mb-14">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto eos quas quia praesentium perspiciatis.</p>
                            </div>
                            <div className="flex px-5 mb-4 justify-between">
                                <div className="flex font-semibold flex-col justify-center">
                                    <h1>robet</h1>
                                    <p className='text-xs text-gray-500'>web Designer</p>
                                </div>
                                <div className="">
                                    <Image size='60' image='/images/profile-pic.png'></Image>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg w-[24%] bg-[#F3F3F3]">
                            <div className="mb-4">
                                <p className='flex items-center font-semibold text-gray-500'><Image size='60' image='/images/sun.svg'></Image> Nietzsche</p>
                            </div>
                            <div className="px-5 mb-14">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto eos quas quia praesentium perspiciatis.</p>
                            </div>
                            <div className="flex px-5 mb-4 justify-between">
                                <div className="flex font-semibold flex-col justify-center">
                                    <h1>robet</h1>
                                    <p className='text-xs text-gray-500'>web Designer</p>
                                </div>
                                <div className="">
                                    <Image size='60' image='/images/profile-pic.png'></Image>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg w-[24%] bg-[#F3F3F3]">
                            <div className="mb-4">
                                <p className='flex items-center font-semibold text-gray-500'><Image size='60' image='/images/circle.svg'></Image> Polymath</p>
                            </div>
                            <div className="px-5 mb-14">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto eos quas quia praesentium perspiciatis.</p>
                            </div>
                            <div className="flex px-5 mb-4 justify-between">
                                <div className="flex font-semibold flex-col justify-center">
                                    <h1>robet</h1>
                                    <p className='text-xs text-gray-500'>web Designer</p>
                                </div>
                                <div className="">
                                    <Image size='60' image='/images/profile-pic.png'></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-36 flex flex-col items-center">
                    <div className="bg-black flex flex-col justify-center items-center h-[70%] w-[70%] p-14 rounded-lg">
                        <div className="w-[50%] flex flex-col text-white text-4xl text-center mb-8">
                            <h1>Try and integrate your business right now</h1>
                        </div>
                        <div className="flex justify-center items-center gap-4 w-full text-white">
                            <Button color='bg-blue-500' style='py-1'>Get Started</Button>
                            <Button color='bg-white text-black' style='py-1'>Watch Demo</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    </>
  )
}
