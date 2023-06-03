
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';
import HomePage from '@/Components/HomePage/HomePage'

import Head from 'next/head'

const Categories = dynamic(() => import('@/Components/Categories/Categories'), {
  loading: () => <p>Loading...</p>,
});
const Global = dynamic(() => import('@/Components/Global/Global'), {
  loading: () => <p>Loading...</p>,
});
const Passion = dynamic(() => import('@/Components/Passion/Passion'), {
  loading: () => <p>Loading...</p>,
});
const Qualities = dynamic(() => import('@/Components/Qualities/Qualities'), {
  loading: () => <p>Loading...</p>,
});
const Tiles = dynamic(() => import('@/Components/Tiles/Tiles'), {
  loading: () => <p>Loading...</p>,
});




const Home = (props) => {

  console.log(props, 'props');

  useEffect(() => {

    window.scrollTo(0, 0)
  }, [])


  return (
    <main>
      
      <Head>
        <title>Home | Rainbow Tex</title>
        <meta property="og:title" content="Rainbow Tex" />
        <meta
          name="og:description"
          content="Rainbow Tex is Bangladeshi Ready Made Garments Sourcing Company. High-quality clothing exports from Bangladesh. Best in Fashion."
        />

        <meta property="og:url" content="https://www.rainbowtexbd.com/" />
        <meta property="og:image" content="https://i.ibb.co/x1mC4qm/Screenshot-2023-06-01-124833.png" />

      </Head>
      <div className=' overflow-hidden ' style={{ zIndex: -1 }}>

        <HomePage setIsHome={props?.setIsHome} brand={props?.brand}
          tag1={props?.tag1}
          tag2={props?.tag2}
          tag3={props?.tag3}
          tag4={props?.tag4}
          smallTag={props?.smallTag}
        ></HomePage>
        <div id='section'>
          <Tiles setIsHome={props?.setIsHome}></Tiles>
        </div>
        <Passion passion={props?.passion} passionTag={props?.passionTag} setIsHome={props?.setIsHome}></Passion>

        <Categories></Categories>


        <Global></Global>

        <Qualities></Qualities>


      </div>
    </main>
  )
}

export default Home


export async function getStaticProps() {
  return {
    props: {
      brand: 'Rainbow Tex',
      tag1: 'High-quality',
      tag2: 'clothing',
      tag3: 'exports from Bangladesh',
      tag4: 'Best in Fashion',
      smallTag: 'Elevate your style with our high-quality garments. Choose from a wide range of premium clothing.',
      passion: 'Our commitment to craftsmanship and quality',
      passionTag: 'Our clothing exports are made with the finest materials and crafted with exceptional attention to detail. Our team of experts works closely with our brand partners to ensure that each garment meets our high standards of quality.'
    }
  };
}