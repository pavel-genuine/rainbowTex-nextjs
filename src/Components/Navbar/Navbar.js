import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { motion, useScroll } from "framer-motion"
import MobileMenu from './MobileMenu';


const Navbar = ({ isHome }) => {

    const [background, setBackground] = useState(false)

    const router = useRouter();

    const { scrollYProgress } = useScroll();

    useEffect(() => {

        const changeBackground = () => {

            if (window.scrollY >= 20) {
                setBackground(true)

            } else {
                setBackground(false)

            }
        }

        window.addEventListener('scroll', changeBackground)

    }, [])



    return (
        <div className='w-[100vw] absolute' style={{ zIndex: 100 }}>

            <div id='' style={{ transition: "all .5s", }} className=
                {`nav w-[100vw] h-[60px] md:h-[80px]  fixed  ${!background ? 'bg-opacity-0 bg-white' : 'bg-opacity-40 bg-navBg backdrop-blur-md'} `}
            >
                <div class="lg:navbar lg:w-[87%] lg:pl-[2.5vw] mx-auto lg:flex my-4  ">
                    <div class="lg:navbar-start">


                        <Link href='/' class=" normal-case text-xl ">
                            <motion.div 


                                initial={{ opacity: 1, scale:1 }}
                                whileInView={{ opacity: 1, scale:1}}
                                transition={{ duration: 1, delay: 0 }}

                            >
                                <img
                                    className='lg:w-[35%] w-[40%] mx-[10px] lg:mx-[-4vw] bg-[white] px-3 py-2 rounded-full bg-opacity-70'
                                    src="https://i.ibb.co/nRLv9G8/rainbowtex-removebg-preview.png" alt="" srcset=""
                                />
                            </motion.div>

                        </Link>
                    </div>

                    <div className='lg:hidden'>
                        <MobileMenu></MobileMenu>

                    </div>

                    <div class="navbar-center hidden lg:block lg:mt-[8px] ">
                        <ul class="menu lg:flex menu-horizontal ml-[-30%] justify-between text-[white]">
                            <>
                                <Link className={`md:px-3 md:m-0 ${router.pathname == "/" ? "border-b-[2px]" : ""}`} href='/'>HOME</Link>
                                <Link className={`md:px-3 md:m-0 ${router.pathname == '/services' ? "border-b-[2px]" : ""}`} href='/services'>SERVICES</Link>
                                <Link className={`md:px-3 md:m-0 ${router.pathname == '/products' ? "border-b-[2px]" : ""}`} href='/products'>PRODUCTS</Link>
                                {/* <Link className={`md:px-3 md:m-0 ${router.pathname == '/gallary' ? "border-b-[2px]" : ""}`} href='/gallary'>GALLERY</Link> */}
                                <Link className={`md:px-3 md:m-0 ${router.pathname == '/testimonials' ? "border-b-[2px]" : ""}`} href='/testimonials'>TESTIMONIALS</Link>

                                <Link className={`md:px-3 md:m-0 ${router.pathname == "/about" ? "border-b-[2px]" : ""}`} href='/about'> ABOUT </Link>
                                <Link className={`md:px-3 md:m-0 ${router.pathname == "/contact" ? "border-b-[2px]" : ""}`} href='/contact'>CONTACT </Link>
                            </>
                        </ul>
                    </div>

                </div>

            </div>



        </div>

    );
};

export default Navbar;