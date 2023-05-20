import React, { useEffect } from 'react'
import img1 from '../assets/imgs/rating.webp'
import port from '../assets/imgs/avatar.jpg'

import { motion } from "framer-motion"
import { Button } from '@mui/material'
import Head from 'next/head'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Testimonials = ({ setIsHome }) => {

    useEffect(() => {
        setIsHome(false)
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Head>
                <title>Testimnials | Rainbow Tex</title>
                <meta property="og:title" content="Testimonials" />
                <meta
                    name="og:description"
                    content="Rapidly growing conglomerate, working in  RMG in Bangladesh."
                />
                {/* <meta property="og:type" content="video.movie" /> */}
                {/* <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" /> */}
                {/* <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> */}

            </Head>

            <div className='bg-bg text-white'>
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
                        <div className='flex justify-center items-center h-[100vh] lg:w-[98.8vw] bg-[black] bg-opacity-40 '>
                            <div>
                                <h1 className='text-5xl  text-center mb-10 '>
                                    Testimonials are strength

                                </h1>

                                <p className=' lg:text-xl  text-center px-[5vw]'>

                                    At Rainbow Tex, we understand the importance of building trust and credibility with our clients. That's why we feature testimonials from satisfied customers on our website. These testimonials provide real-world examples of the high-quality products and services that we offer and demonstrate our commitment to customer satisfaction. We showcase testimonials from a range of clients, including small businesses and large corporations, to show the breadth and depth of our expertise. We also include photos and quotes from our clients to help potential customers connect with our brand and understand the positive experiences that others have had working with us. At Rainbow Tex, we believe that testimonials are an essential part of building trust with our clients, and we are committed to showcasing the positive experiences that our customers have had working with us.
                                </p>
                            </div>
                        </div>

                    </motion.div>
                    <img className='lg:w-[98.8vw] h-[100vh]' src={img1.src} alt="" />
                </motion.div>



                <div className='py-10 lg:w-[98.8vw] overflow-hidden px-[5vw]'>


                    <div className='lg:flex'>
                        <motion.div className=' mb-10 lg:mb-0'

                            viewport={{ once: true }}
                            initial={{ y: 300, opacity: .5 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}

                        >
                            <div className='review'>
                                <img src={port.src} />
                                <div className="myCarousel">
                                    <h3>Theo Sorel</h3>
                                    <h4>Brazil</h4>
                                    <p>
                                        I had a wonderful experience working with Rainbow Tex.
                                        They were professional, efficient, and delivered exceptional quality garments. Highly recommended!
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className='lg:pt-20  lg:pr-40 lg:flex mb-10 lg:mb-0'

                            viewport={{ once: true }}
                            initial={{ x: 200, opacity: .5 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}

                        >
                            <div className='review'>
                                <img src={port.src} />
                                <div className="myCarousel">
                                    <h3>Abraham Kali</h3>
                                    <h4>Spain</h4>
                                    <p>
                                        The team at Rainbow Tex exceeded my expectations.
                                        They were attentive to my requirements, provided timely updates, and ensured the production process was smooth. I'm extremely satisfied with their services.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>


                    <div className='lg:flex lg:pt-10'>
                        <motion.div className='lg:w-[80%] mb-10 lg:mb-0'

                            viewport={{ once: true }}
                            initial={{ y: 200, opacity: .5 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}

                        >
                            <div className='review'>
                                <img src={port.src} />
                                <div className="myCarousel">
                                    <h3>Robert Jacob</h3>
                                    <h4>Mexico</h4>
                                    <p>
                                        I've been working with this garment buying house for several years now, and they consistently deliver outstanding results. Their attention to detail and commitment to customer satisfaction is commendable. I recommend them.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div

                            viewport={{ once: true }}
                            initial={{ x: 200, opacity: .5 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}

                            className='lg:pt-20 lg:pr-96 flex-row-reverse lg:flex mb-10 lg:mb-0'>
                            <div className='review'>
                                <img src={port.src} />
                                <div className="myCarousel">
                                    <h3>Mohammmad Saleh</h3>
                                    <h4>Iran</h4>
                                    <p>
                                    Rainbow Tex truly understands the fashion industry. They have an extensive network of reliable suppliers, and their expertise in sourcing the latest trends is unmatched. It's been a pleasure collaborating with them.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>


                    <div className='lg:flex lg:pt-10'>
                        <motion.div className=' mb-10 lg:mb-0'

                            viewport={{ once: true }}
                            initial={{ y: 300, opacity: .5 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}

                        >
                            <div className='review'>
                                <img src={port.src} />
                                <div className="myCarousel">
                                    <h3>Crish Mario</h3>
                                    <h4>Italy</h4>
                                    <p>
                                    Working with this garment buying house was a breeze. They provided valuable insights and suggestions, helping me make informed decisions throughout the process. The end result exceeded my expectations.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className='lg:pt-20  lg:pr-40 lg:flex mb-10 lg:mb-0'

                            viewport={{ once: true }}
                            initial={{ x: 200, opacity: .5 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}

                        >
                            <div className='review'>
                                <img src={port.src} />
                                <div className="myCarousel">
                                    <h3>Suni monin</h3>
                                    <h4>Portugal</h4>
                                    <p>
                                    I was impressed by the professionalism displayed their team. They have a streamlined communication system, and their team was responsive to all my queries. The final products were of excellent quality.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Testimonials