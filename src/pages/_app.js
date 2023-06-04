import '@/styles/globals.css'
import '@/styles/homePage.css'
import '@/styles/mobileNav.css'
import '@/styles/testimony.css'
import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic';
import { motion } from "framer-motion"
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from '@/Components/Navbar/Navbar';
import WhatsApp from '@/Components/WhatsApp/WhatsApp';
import { SunnyMorning } from 'moving-letters'
import Head from 'next/head'
import localFont from 'next/font/local';


const roboto = localFont({
  src: '../assets/fonts/Neuropol X W00 Expanded/Neuropol X W00 Expanded.ttf',
  // display: 'swap',
});

const Footer = dynamic(() => import('@/Components/Footer/Footer'), {
  loading: () => <p>Loading...</p>,
});



export default function App({ Component, pageProps }) {

  const [isHome, setIsHome] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const theme = createTheme({
    typography: {
      // fontFamily: 'Artifika',
      button: {
        textTransform: 'none'
      }
    },
    palette: {
      primary: {
        main: "#000",//lgt2
        // main: "#80a10a",//lgt2
        light: "#000",
        dark: "#000",
        mainGradient: "linear-gradient(to right , #480626, #7e2651)",
      },
    },
  });

  useEffect(() => {

    setTimeout(() => {
      setIsOpen(true)
    }, 2000)

  }, [])


  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <div className=''>
        {
          !isOpen ?
            // <div className=' h-[100vh] w-[100vw] flex justify-center items-center bg-bg'>
            //   <div className='lg:scale-[.5] scale-[.8] flex justify-center items-center'>
            //     <motion.div
            //       // viewport={{ once: true }}
            //       initial={{ opacity: 0, scale: .3 }}
            //       whileInView={{ opacity: 1, scale: 1 }}
            //       transition={{ duration: 1.5, delay: 0 }}

            //     >
            //       <img
            //         className='bg-[white] px-3 py-2 rounded-full bg-opacity-70'
            //         src="https://i.ibb.co/nRLv9G8/rainbowtex-removebg-preview.png" alt="" srcset=""
            //       />
            //     </motion.div>

            //   </div>
            // </div>

            // <div>
            //   <div
            //     className='h-[100vh] flex justify-center items-center bg-bg w-[100vw] overflow-hidden'

            //   >
            //     <motion.div
            //       className='absolute top-50 z-10'
            //       initial={{ opacity: 0, scale: .1 }}
            //       whileInView={{ opacity: 1, scale: .5 }}
            //       transition={{ duration: 2, delay: .2 }}

            //     >
            //       <img
            //         // className='bg-[white grayscal px-3 py-2 rounded-full  bg-opacity-70'
            //         src="https://i.ibb.co/djRrFXd/rainbowtex-removebg-preview-1.png" alt="" srcset=""
            //       />
            //     </motion.div>


            //     <motion.div className='bg-[white] h-[100px] w-[100px] rounded-full z-0'

            //       initial={{ opacity: 1, scale: .5 }}
            //       whileInView={{ opacity: 1, scale: 100 }}
            //       transition={{ duration: 3, delay: .2 }}

            //     >

            //     </motion.div>
            //   </div>
            // </div>

            <div className={roboto.className}>
              <div className=' h-[100vh] w-[100vw] flex justify-center items-center bg-bg text-[white] text-center'>
              <div className='scale-[.8] lg:scale-[1.5] lg:flex '>

                <SunnyMorning text='Rainbow' />
                <div className='lg:ml-5'>
                  <SunnyMorning text='tex' />
                </div>

              </div>
              </div>
            </div>

            :
            <div>
              <Navbar isHome={isHome}></Navbar>
              <WhatsApp></WhatsApp>
              <Component setIsHome={setIsHome} {...pageProps} />
              <Footer></Footer>
            </div>

        }
      </div>


    </ThemeProvider>
  )
}
