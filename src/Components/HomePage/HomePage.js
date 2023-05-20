import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Link from 'next/link'



export const Demo = (
  {
    tag1,
    tag2,
    tag3,
    tag4,
    smallTag
  }
) => {


  return (
    <div>

      <div className='lg:pt-[0%] pt-[30%] px-[5vw] lg:h-[100vh] h-[95vh] w-[100vw] lg:w-[98.8vw] bg-[black] bg-opacity-60'>

        <div className='lg:absolut top-[170px] lg:flex justify-between flex-col lg:h-[94vh]'>

          <div className='lg:h-[80px]'>
            
          </div>

          <div className='lg:h-[410px] overflow-hidden' >
            <div className=''>

              <h1 className='lg:text-[60px] text-[25px] font-semibold text-[white]'>
                <span className='text-accent'>{tag1} {' '}</span>{tag2}
                <br />
                <span>{tag3}</span>
                <span className='text-accent'>.</span>
                <br />
                {tag4}<span className='text-accent'>.</span>
              </h1>
              <p className='text-[white] lg:w-[40%] w-[100%] mt-5'>
                {
                  smallTag
                }
              </p>

              <div className='flex mt-8 space-x-5'>

                <a href="https://api.whatsapp.com/send/?phone=8801711813933&text=" target="_blank" rel="noopener noreferrer">

                  <Button style={{ borderRadius: '68px', backgroundColor: '#1F2937' }} className='bg-bgNav' variant='contained'

                    startIcon={<WhatsAppIcon style={{ color: '#4ADE80' }} />}
                  >
                    Get Started
                  </Button>
                </a>

                <Link href='/about'>
                  <Button style={{ borderRadius: '68px', borderColor: 'white' }} variant='outlined'
                    startIcon={<CrisisAlertIcon style={{ color: '#fff' }} />}
                  >
                    <p className='text-[white]'>
                      Learn More
                    </p>
                  </Button>
                </Link>


              </div>

            </div>
          </div>

          <div className=' text-[white] pt-16 '>
            <div className='lg:flex justify-between lg:w-[87vw] lg:font-semibold lg:text-md '>

              <p className='lg:absolut top-[510px]'>
                <span className='text-[orange]'>
                  +5000
                </span>  Wholesale Orders Worldwide
              </p>

              <p className='lg:absolut top-[510px] left-[45vw]'>
                <span className='text-[orange]'>
                  +20
                </span>  Countries
              </p>

              <p className='lg:absolut top-[510px] right-[0vw]'>

                Operating Since  <span className='text-[orange]'>
                  2006
                </span>
              </p>

            </div>
          </div>
        </div>
      </div>

      <div className='pic lg:h-[100vh] h-[95vh] w-[100vw] lg:w-[98.8vw]' id='pic3' />
      <div className='pic lg:h-[100vh] h-[95vh] w-[100vw] lg:w-[98.8vw]' id='pic2' />
      <div className='pic lg:h-[100vh] h-[95vh] w-[100vw] lg:w-[98.8vw]' id='pic1' />
    </div>
  );
};



const HomePage = ({ brand, tag1, tag2, tag3, tag4, smallTag }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [background, setBackground] = useState(false)


  const handleScroll = () => {
    const element = document.getElementById('section');

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className=' '>
      <div className='w-[100%] mx-auto lg:h-[100vh] h-[93vh]  '>

        {
          <div className='relative'>

            <div className='z-0 '>
              <Demo
                tag1={tag1}
                tag2={tag2}
                tag3={tag3}
                tag4={tag4}
                smallTag={smallTag}
              ></Demo>
            </div>

            <div className='cursor-pointer lg:rotate-90 absolute text-[white] lg:text-lg font-bold text-[white] text-center  font-bold z-10 lg:top-[50%] top-[89%] right-[40%] lg:right-[5.5%]' onClick={() => handleScroll()}>
              <motion.div
                className='   '
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 1, }}
              >
                <p className='   mb-[-12px]'>
                  scroll
                </p>
                <marquee behavior="scroll" direction='right'>
                  <div className=' bg-[white] h-[2px] w-[60px] lg:w-[75px]'>

                  </div>
                </marquee>


              </motion.div>

            </div>

          </div>
        }

      </div>

    </div>
  )
}

export default HomePage