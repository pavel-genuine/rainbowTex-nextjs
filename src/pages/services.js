import React, { useEffect } from 'react'
import img1 from '../assets/imgs/services.jpg'
import source from '../assets/imgs/source.jpeg'
import qc from '../assets/imgs/qc.jpeg'
import port from '../assets/imgs/port.jpeg'
import prsr from '../assets/imgs/prsr.webp'

import { motion } from "framer-motion"
import { Button } from '@mui/material'
import Head from 'next/head'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Services = ({ setIsHome }) => {

    useEffect(() => {
        setIsHome(false)
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Head>
                <title>Services | Rainbow Tex</title>
                <meta property="og:title" content="Services" />
                <meta
                    name="og:description"
                    content="Rapidly growing conglomerate, working in  RMG in Bangladesh."
                />
                {/* <meta property="og:type" content="video.movie" /> */}
                {/* <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" /> */}
                {/* <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> */}

            </Head>

            <div className='bg-bg text-white '>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ y: 300, opacity: .5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: 0, }}
                >
                    <motion.div
                        className=' text-[white] absolute  font-bold'
                        viewport={{ once: true }}
                        initial={{ y: 300, opacity: .5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: .5, delay: 0, }}
                    >
                        <div className='flex justify-center items-center h-[100vh]  lg:w-[98.8vw] bg-[black] bg-opacity-40 '>
                            <div>
                                <h1 className='text-5xl  text-center mb-10 '>
                                    Our Services Wordwide

                                </h1>

                                <p className=' lg:text-xl  text-center px-[5vw]'>

                                    At Rainbow Tex, we offer a range of services to meet the needs of our clients. Our primary services include product sourcing, quality control, and logistics management. We work closely with our clients to identify the right products for their needs and to ensure that they meet the required quality standards. Our quality control process is rigorous, and we inspect every product thoroughly to ensure that it meets our clients' expectations.
                                    We also provide logistics management services to ensure that products are delivered on time and at the right cost. Additionally, we offer a range of other services, including market research, trend analysis, and custom product development. Our goal is to provide a comprehensive suite of services to our clients, allowing them to focus on their core business while we take care of the rest.</p>
                            </div>
                        </div>

                    </motion.div>
                    <img className=' lg:w-[98.8vw] h-[100vh] object-cover' src={img1.src} alt="" />
                </motion.div>



                <div className='py-10  lg:w-[98.8vw] overflow-hidden text-center lg:text-left px-[5vw] '>


                    <div className='lg:flex'>
                        <motion.div className=''

                            viewport={{ once: true }}
                            initial={{ y: 300, opacity: .5 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}

                        >
                            <div>

                                <LazyLoadImage
                                    className='lg:w-[250px] lg:h-[400px]'
                                    alt={'brand'}
                                    src={prsr.src}

                                />
                            </div>

                            <div>
                                <h1 className='font-bold py-3'>Product Sourcing</h1>

                                <p className='lg:w-[60%] lg:pb-0 pb-5 lg:pb-0 pb-5'>
                                    Rainow Tex product sourcing section works tirelessly to find the best suppliers and manufacturers, ensuring top-quality materials and competitive prices. We prioritize ethical and sustainable sourcing to create products that are both stylish and responsible.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div className='lg:pt-20  lg:pr-40 lg:flex'

                            viewport={{ once: true }}
                            initial={{ x: 200, opacity: .5 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}

                        >
                            <div>
                                <LazyLoadImage
                                    className='lg:w-[250px] lg:h-[400px]'

                                    alt={'brand'}

                                    src={qc.src}
                                />
                            </div>

                            <div className='lg:w-[60%] lg:pt-28 lg:px-5'>
                                <h1 className='font-bold py-3'>Quality Control</h1>
                                <p className=' lg:pb-0 pb-5 '>
                                    Our quality control section ensures impeccable standards. We meticulously inspect every garment, ensuring superior craftsmanship, precise measurements, and flawless finishes. Customer satisfaction is our top priority.
                                </p>
                            </div>
                        </motion.div>
                    </div>


                    <div className='lg:flex lg:pt-10'>
                        <motion.div className=' lg:w-[50%]'

                            viewport={{ once: true }}
                            initial={{ y: 200, opacity: .5 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}

                        >
                            <div>

                                <LazyLoadImage
                                    className='lg:w-[250px] lg:h-[400px]'
                                    alt={'brand'}

                                    src={port.src}
                                />
                            </div>

                            <div>
                                <h1 className='font-bold py-3'>Logistic Management</h1>

                                <p className='lg:pb-0 pb-5'>
                                    Our logistics management section ensures timely and efficient delivery of our products. We use advanced technology to streamline our supply chain, optimize inventory, and minimize delivery times. Your satisfaction is our priority.                                </p>
                            </div>
                        </motion.div>

                        <motion.div

                            viewport={{ once: true }}
                            initial={{ x: 200, opacity: .5 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}

                            className='lg:pt-20 lg:pr-96 flex-row-reverse lg:flex '>
                            <div>
                                <LazyLoadImage
                                    className='lg:w-[250px] lg:h-[400px]'

                                    alt={'brand'}

                                    src={source.src} />
                            </div>

                            <div className='lg:w-[60%] lg:pt-28 pt-5 lg:pb-0 pb-5 lg:px-2'>
                                <h1 className='font-bold py-3'>Material sourcing</h1>

                                <p>
                                    Our material section sources only the finest fabrics and materials from around the world. We prioritize quality, sustainability, and innovation to create garments that look and feel exceptional.                                </p>
                            </div>
                        </motion.div>
                    </div>


                    {/* 
                    <div className='lg:flex lg:pt-10'>

                        <motion.div
                            viewport={{ once: true }}
                            initial={{ x: -200, opacity: .5 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}
                            className='lg:pt-20 lg:pl-28  flex flex-col-reverse lg:flex-row '>


                            <div className='lg:w-[60%] lg:pt-28 pt-5 lg:pb-0 pb-5'>
                                <h1 className='font-bold py-3'>Outerwear</h1>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, cupiditate porro voluptas omnis aliquid culpa excepturi, eum eius illo eos corporis, at dignissimos soluta expedita explicabo nesciunt quisquam ratione ullam?
                                </p>
                            </div>

                            <div>
                                <LazyLoadImage
                                    className='lg:w-[250px] lg:h-[400px]'

                                    alt={'brand'}

src={''}                                />
                            </div>
                        </motion.div>

                        <motion.div

                            viewport={{ once: true }}
                            initial={{ x: 200, opacity: .5 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}
                            className='lg:pr-60 lg:pl-20' >
                            <div>

                                <LazyLoadImage
                                    className='lg:w-[250px] lg:h-[400px]'
                                    alt={'brand'}

                                    src={"https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"}                    // width={}
                                />
                            </div>

                            <div>
                                <h1 className='font-bold py-3'>Inner wear</h1>

                                <p className='lg:pb-0 pb-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, cupiditate porro voluptas omnis aliquid culpa excepturi, eum eius illo eos corporis, at dignissimos soluta expedita explicabo nesciunt quisquam ratione ullam?
                                </p>
                            </div>
                        </motion.div>


                    </div> */}

                </div>

            </div>
        </div>

    )
}

export default Services