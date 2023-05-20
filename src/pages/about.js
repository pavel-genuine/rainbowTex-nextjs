import React, { useEffect } from 'react'

import { motion } from "framer-motion"
import { Button } from '@mui/material'
import MissionVision from '@/Components/MissionVission/MissionVission'
import Head from 'next/head'

const About = ({ setIsHome }) => {

    useEffect(() => {
        setIsHome(false)
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Head>
                <title>About | Rainbow Tex</title>
                <meta property="og:title" content="About" />
                <meta
                    name="og:description"
                    content="Rapidly growing conglomerate, working in  RMG in Bangladesh."
                />
                {/* <meta property="og:type" content="video.movie" /> */}
                {/* <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" /> */}
                {/* <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> */}

            </Head>

            <div>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ y: 300, opacity: .5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: .2, }}
                >
                    <motion.div
                        className=' text-[white] absolute  font-bold'
                        viewport={{ once: true }}
                        initial={{ y: 300, opacity: .5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0, }}
                    >
                        <div className='flex justify-center items-center h-[100vh] w-[98.8vw] bg-[black] bg-opacity-40'>
                            <div>
                                <h1 className='text-5xl  text-center mb-4'>
                                    About Us

                                </h1>

                                <p className='text-xl lg:text-2xl text-center px-[5vw]'>
                                    Rainbow Tex is a garments buying house that specializes in product sourcing, quality control, and logistics management. With years of experience in the industry, our team is dedicated to providing the highest quality products and services to our clients. We work closely with our clients to understand their needs and to ensure that they receive the best possible service. Our mission is to build long-lasting relationships with our clients by providing exceptional service and high-quality products. At Rainbow Tex, we believe in integrity, honesty, and transparency, and we are committed to upholding these values in everything we do.                                </p>
                            </div>
                        </div>

                    </motion.div>
                    <img className='w-[98.8vw] h-[100vh]' src="https://i.ibb.co/LQdTQhG/Fiduciary-Responsibility-Board-of-Directors-ESG-1.jpg" alt="" />
                </motion.div>
                <MissionVision></MissionVision>

            </div>
        </div>

    )
}

export default About