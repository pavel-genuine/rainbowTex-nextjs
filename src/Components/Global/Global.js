import React, { useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Global = () => {

    const count = useMotionValue(0)
    const count2 = useMotionValue(0)
    const count3 = useMotionValue(0)
    const count4 = useMotionValue(0)
    const rounded = useTransform(count, latest => Math.floor(latest))
    const rounded2 = useTransform(count2, latest => Math.round(latest))
    const rounded3 = useTransform(count3, latest => Math.round(latest))
    const rounded4 = useTransform(count4, latest => Math.round(latest))

    useEffect(() => {
        const controls = animate(count, 99, { duration: 10 })
        const controls2 = animate(count2, 24, { duration: 10 })
        const controls3 = animate(count3, 7, { duration: 10 })
        const controls4 = animate(count4, 99, { duration: 10 })

        return controls.stop

    }, [])

    // console.log(rounded,'rrrrrrr');

    return (
        <div className=' bg-navBg lg:pt-[5vh] pt-5  lg:h-auto px-[5vw]'>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: .5, scale: .7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .7, delay: 0 }}
            // transformValues={'-200px'}
            // transform= isInView ? "none" : "translateX(-200px)"
            >
                <div className='mt-8 text-[white] '>
                    <div className=' lg:h-auto'>
                        <h2 className='lg:text-4xl text-[25px] text-[white]  text-center font-semibold '><span className='text-accent'>Enterprise-ready solutions</span> for your business need</h2>
                        <h2 className='lg:text-lg   text-center text-[#cecece] lg:mt-8 px-2 my-5 lg:my-0'>Rainbow Tex is built by the team that created the goods <span className='lg:hidden'>for some of the amazing buyers.</span></h2>
                        <h2 className='lg:text-lg  text-center text-[#cecece] hidden lg:block mb-5'>for some of the amazing buyers globally.</h2>
                    </div>

                    <div className='my-8  lg:h-auto'>
                        <div className='flex text-[white] justify-center items-center space-x-16 lg:mb-4 lg:text-5xl text-3xl  font-semibold'>
                            <div className='flex'>
                                <motion.h2 className='lg:text-5xl text-3xl   font-semibold'>{rounded}</motion.h2>{'.'}
                                <motion.h2 className='lg:text-5xl text-3xl  font-semibold'>{rounded4}</motion.h2>{'%'}
                            </div>
                            <div className='flex'>
                                <motion.h2 className='lg:text-5xl text-3xl  font-semibold'>{rounded2}</motion.h2>{'  /'}
                                <motion.h2 className='lg:text-5xl text-3xl  font-semibold'>{rounded3}</motion.h2>
                            </div>
                        </div>
                        <div className='flex justify-center items-center space-x-10 lg:space-x-12'>
                            <h2 className='lg:text-xl  text-center text-[#cecece]'>Guaranteed Uptime</h2>
                            <h2 className='lg:text-xl  text-center text-[#cecece]'>Expert Support</h2>
                        </div>
                    </div>

                    <div className='relative flex justify-center  lg:h-[60vh] '>
                        <LazyLoadImage
                            alt={'brand'}
                            // height={450}
                            // width={650}
                            src={'https://i.ibb.co/PDZCY7h/globe-975be501addf74160239.png'}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Global;