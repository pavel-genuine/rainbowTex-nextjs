import React, { useEffect } from 'react'
import img1 from '../assets/imgs/product5.webp'
import denim from '../assets/imgs/denim.webp'
import sweater from '../assets/imgs/sweater.jpeg'
import active from '../assets/imgs/active.webp'
import formal from '../assets/imgs/formal.webp'
import winter from '../assets/imgs/winter.jpeg'
import kids from '../assets/imgs/kids.webp'
import outer from '../assets/imgs/outer.webp'
import inner from '../assets/imgs/inner.jpeg'
import { motion } from "framer-motion"
import { Button } from '@mui/material'
import Head from 'next/head'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Products = ({ setIsHome }) => {

    useEffect(() => {
        setIsHome(false)
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Head>
                <title>Products | Rainbow Tex</title>
                <meta property="og:title" content="Products" />
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
                        <div className='flex justify-center items-center h-[100vh]  lg:w-[98.8vw] bg-[black] bg-opacity-40 '>
                            <div>
                                <h1 className='text-5xl  text-center mb-10 '>
                                    Products of Global Trends

                                </h1>

                                <p className=' lg:text-xl  text-center px-[5vw]'>
                                    At Rainbow Tex, we offer a wide range of high-quality products to meet the needs of our clients. Our products include everything from casual wear to formal wear, and we offer a variety of styles, colors, and sizes to suit different preferences. We work with a network of trusted suppliers and manufacturers to ensure that our products are of the highest quality and are ethically sourced. Our product range includes t-shirts, polo shirts, dress shirts, blouses, dresses, skirts, pants, and more.
                                    We also offer custom product development services, allowing our clients to create unique and customized products that are tailored to their specific needs. At Rainbow Tex, we are committed to providing our clients with the best possible products and services, and we are constantly updating our product range to ensure that we stay up-to-date with the latest trends and styles in the industry.
                                </p>
                            </div>
                        </div>

                    </motion.div>
                    <img className=' lg:w-[98.8vw] h-[100vh] object-cover' src={img1.src} alt="" />
                </motion.div>



                <div className='py-10  lg:w-[98.8vw] overflow-hidden px-[5vw] text-center lg:text-left '>


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
                                    src={formal.src}

                                />
                            </div>

                            <div>
                                <h1 className='font-bold py-3'>Formal</h1>

                                <p className='lg:w-[60%] lg:pb-0 pb-5 lg:pb-0 pb-5'>
                                    Step into the world of refined glamour with our formal dress section. From graceful gowns to chic cocktail dresses, our collection showcases exquisite craftsmanship and impeccable design. Indulge in luxurious fabrics, intricate details, and flattering silhouettes that will make you feel confident and stunning at any formal occasion.                                </p>
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

                                    src={denim.src}
                                />
                            </div>

                            <div className='lg:w-[60%] lg:pt-16 lg:px-5'>
                                <h1 className='font-bold py-3'>Denim</h1>
                                <p className=' lg:pb-0 pb-5'>
                                    Rainbow Tex's heritage denim is produced using traditional methods, reestablishing a connection with the spirit of craftsmanship. Our carefully selected fabrics give it an authentically slubby appearance and serve as the perfect backdrop for the traditional fabric, trim, label, and wash detailing.                                </p>
                            </div>
                        </motion.div>
                    </div>


                    <div className='lg:flex lg:pt-10'>
                        <motion.div className=' lg:w-[95%]'

                            viewport={{ once: true }}
                            initial={{ y: 200, opacity: .5 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}

                        >
                            <div>

                                <LazyLoadImage
                                    className='lg:w-[250px] lg:h-[400px]'
                                    alt={'brand'}

                                    src={winter.src}
                                />
                            </div>

                            <div>
                                <h1 className='font-bold py-3'>Winter</h1>

                                <p className='lg:pb-0 pb-5'>
                                    Get ready to conquer winter in style with our winter clothing section. From cozy coats to warm accessories, we have everything you need to stay fashionable and comfortable during the cold season. Explore our collection of insulated jackets, soft knitwear, and trendy boots to create your perfect winter ensemble.

                                </p>
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

                                    src={sweater.src}
                                />
                            </div>

                            <div className='lg:w-[60%] lg:pt-16  lg:pb-0 pb-5'>
                                <h1 className='font-bold py-3'>Sweater</h1>

                                <p>
                                    Stay cozy and chic with our sweater section. Explore a wide range of stylish knits, from classic crewnecks to trendy oversized designs. Crafted from premium materials, our sweaters offer unmatched comfort and warmth. With various colors, patterns, and textures, find the perfect sweater to elevate  cold-weather wardrobe.

                                </p>
                            </div>
                        </motion.div>
                    </div>


                    <div className='lg:flex lg:pt-10'>
                        <motion.div

                            viewport={{ once: true }}
                            initial={{ x: -200, opacity: .5 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}

                            className='' >
                            <div>

                                <LazyLoadImage
                                    className='lg:w-[250px] lg:h-[400px]'
                                    alt={'brand'}

                                    src={kids.src}
                                />
                            </div>

                            <div>
                                <h1 className='font-bold py-3'>Kids</h1>
                                <p className='lg:w-[80%] lg:pb-0 pb-5'>
                                    Discover adorable and trendy styles in our kids' clothing section. From cute dresses to comfortable playwear, we offer a wide range of fashionable garments for little ones. Our collection features high-quality materials and attention to detail, ensuring durability and comfort.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div

                            viewport={{ once: true }}
                            initial={{ x: 200, opacity: .5 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}

                            className='lg:pt-20  lg:pr-20 '>
                            <div>
                                <LazyLoadImage
                                    className='lg:w-[250px] lg:h-[400px]'

                                    alt={'brand'}

                                    src={active.src}
                                />
                            </div>

                            <div className='lg:w-[60%]  lg:pb-0 pb-5'>
                                <h1 className='font-bold py-3'>Active wear</h1>
                                <p>
                                    Elevate one's active lifestyle with our dynamic active wear section. From performance-enhancing leggings to moisture-wicking tops, our collection offers stylish and functional apparel to support your fitness journey. Designed with breathable fabrics and ergonomic fits, our active wear ensures comfort and freedom of movement.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className='lg:flex lg:pt-10'>

                        <motion.div
                            viewport={{ once: true }}
                            initial={{ x: -200, opacity: .5 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, }}
                            className='lg:pt-20  flex flex-col-reverse lg:flex-row '>


                            <div className='lg:w-[50%] lg:pt-5 pr-5 lg:pb-0 pb-5'>
                                <h1 className='font-bold py-3'>Outerwear</h1>

                                <p>
                                    Embrace the elements in style with our versatile outerwear section. From cozy jackets to durable coats, our collection offers fashionable protection against the elements. Whether you're braving chilly winds or rainy days, our outerwear is designed with premium materials and innovative features for ultimate comfort and functionality.
                                </p>
                            </div>

                            <div>
                                <LazyLoadImage
                                    className='lg:w-[250px] lg:h-[400px]'

                                    alt={'brand'}

                                    src={outer.src}
                                />
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

                                    src={inner.src}
                                />
                            </div>

                            <div>
                                <h1 className='font-bold py-3'>Inner wear</h1>

                                <p className='lg:pb-0 pb-5'>

                                    Super comfort and confidence with our exceptional innerwear section. Discover a wide range of lingerie and undergarments designed to support and enhance your natural beauty. Our collection features premium fabrics and meticulous craftsmanship, ensuring a luxurious feel against your skin. From bras that provide optimal support to underwear that offers a seamless fit, we prioritize both comfort and style.
                                </p>
                            </div>
                        </motion.div>


                    </div>

                </div>

            </div>
        </div>

    )
}

export default Products