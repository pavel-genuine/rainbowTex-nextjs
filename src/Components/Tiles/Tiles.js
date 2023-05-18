import React from 'react'
import { motion } from "framer-motion"
// import img1 from '../../assets/logos/'
import img1 from '../../assets/logos/eagle.png'
import img2 from '../../assets/logos/adidas.png'
import img3 from '../../assets/logos/tommy.png'
import img4 from '../../assets/logos/hnm.png'
import img5 from '../../assets/logos/oldnavyblue.png'
import img6 from '../../assets/logos/guess.png'
import img7 from '../../assets/logos/zarablue.png'
import img8 from '../../assets/logos/jnj.png'
import img9 from '../../assets/logos/ck.png'
import img10 from '../../assets/logos/nik.png'
import img11 from '../../assets/logos/levis.png'
import img12 from '../../assets/logos/lacoste.png'
import img13 from '../../assets/logos/nautica.png'
import img14 from '../../assets/logos/cnk.png'
import img15 from '../../assets/logos/jj.png'
import img16 from '../../assets/logos/under.png'
import img17 from '../../assets/logos/holister.png'
import img18 from '../../assets/logos/br.png'
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component'
const posts = [
    {
        id: 1,
        img: img1,
        text: ''
    },
    {
        id: 2,
        img: img2,
        text: ''
    },
    {
        id: 3,
        img: img8,
        text: ''
    },
    {
        id: 15,
        img: img15,
        text: ''
    },
    {
        id: 4,
        img: img4,
        text: ''
    },

    {
        id: 5,
        img: img5,
        text: ''
    },
    {
        id: 6,
        img: img6,
        text: ''
    },
    {
        id: 7,
        img: img7,
        text: ''
    },
    {
        id: 8,
        img: img3,
        text: ''
    },
    {
        id: 9,
        img: img9,
        text: ''
    },
    {
        id: 10,
        img: img10,
        text: ''
    },
    {
        id: 11,
        img: img11,
        text: ''
    },
    {
        id: 12,
        img: img12,
        text: ''
    },
    {
        id: 13,
        img: img13,
        text: ''
    },
    {
        id: 17,
        img: img17,
        text: ''
    },
    {
        id: 14,
        img: img14,
        text: ''
    },

    {
        id: 16,
        img: img16,
        text: ''
    },

    {
        id: 18,
        img: img18,
        text: ''
    },

]

const Tile = ({ img }) => {
    return (
        <div className='w-[98.7vw] h-[33vh] lg:h-[18vh] lg:w-[25vw] overflow-hidden border-[.1px] border-[grey] relative'>
            <motion.div
                className=' '

                initial={{ y: -10, }}
                whileHover={{ y: 0, }}
                transition={{ duration: .5, delay: 0, }}
            >
                <div className='absolute w-[98.7vw] h-[33vh] lg:h-[18vw] lg:w-[25vw] hover:bg-[black] hover:bg-opacity-40'>

                </div>

                <Image
                    className=' overflow-hidden w-[98.7vw] h-[35vh] lg:h-[20vw] lg:w-[25vw] border-[.1px] border-[grey]  '
                    alt={'brand'}
                    height={500}
                    // fill
                    src={img}
                    width={500}
                />

            </motion.div>


        </div>
    )
}
const TileGap = ({ img, id }) => {


    return (

        <div className={`${(id == 14 || id == 15) ? 'hidden lg:block ' : ''} flex justify-center items-center `}>
            <LazyLoadImage
                className='  w-[98.7vw]  lg:w-[15vw]  '
                alt={'brand'}
                // height={500}
                // width={500}
                // fill
                src={img?.src}
            />
        </div>

    )
}
const Tiles = () => {
    return (
        <div className=' overflow-hidden bg-bg lg:pt-24 lg:pb-36 lg:py-0 py-14 px-[5vw]'>
            <motion.div
                className=' grid grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-[8%]'
 
                initial={{ y: 50, }}
                whileInView={{ y: 0, }}
                transition={{ duration: .2, delay: 0, }}
            >

                {
                    posts.map(post =>
                        <TileGap id={post.id} key={post.id} img={post.img} text={post.text}></TileGap>
                    )
                }
            </motion.div>


        </div>
    )
}

export default Tiles