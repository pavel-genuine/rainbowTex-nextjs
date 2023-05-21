import React from 'react'
import img1 from '../../assets/imgs/denim.webp'
import img2 from '../../assets/imgs/sweater.jpeg'
import img3 from '../../assets/imgs/active.webp'
import img4 from '../../assets/imgs/formal.webp'
import img5 from '../../assets/imgs/winter.jpeg'
import img6 from '../../assets/imgs/kids.webp'
import Image from 'next/image'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Categories() {
    return (
        <div className='bg-bg px-[5vw] py-0 lg:py-14 text-center lg:text-left'>
            <h1 className='py-10 text-[white] lg:text-4xl text-[25px] font-semibold lg:font-bold'>
                Providing a wide selection of <span className='text-accent'>premium</span> clothing options to suit <span className='text-accent'>diverse</span>  styles and preferences.
            </h1>



            <div className='grid lg:grid-cols-6 grid-cols-2  gap-4 lg:space-x-[30px] text-[white] pb-10 lg:text-xl'>
                <div>

                    <LazyLoadImage

                        className={`lg:h-[300px] h-[250px] mb-2`}
                        alt={'cate'}
                        // height={400}
                        // width={300}
                        src={img1.src}
                    >

                    </LazyLoadImage>

                    <h1>
                        Denims
                    </h1>
                </div>
                <div>
                    <LazyLoadImage
                        className={`lg:h-[300px] h-[250px] mb-2`}
                        alt={'cate'}
                        // height={400}
                        // width={300}
                        src={img2.src}

                    >

                    </LazyLoadImage>

                    <h1>
                        Sweaters
                    </h1>
                </div>
                <div>
                    <LazyLoadImage
                        className={`lg:h-[300px] h-[250px] mb-2`}
                        alt={'cate'}
                        // height={400}
                        // width={300}
                        src={img3.src}

                    >

                    </LazyLoadImage>

                    <h1>
                        Active wears
                    </h1>
                </div>
                <div>
                    <LazyLoadImage
                        className={`lg:h-[300px] h-[250px] mb-2`}
                        alt={'cate'}
                        // height={400}
                        // width={300}
                        src={img4.src}

                    >

                    </LazyLoadImage>

                    <h1>
                        Formals
                    </h1>
                </div>
                <div>
                    <LazyLoadImage
                        className={`lg:h-[300px] h-[250px] mb-2`}
                        alt={'cate'}
                        // height={400}
                        // width={300}
                        src={img5.src}

                    >

                    </LazyLoadImage>

                    <h1>
                        Winter
                    </h1>
                </div>
                <div>
                    <LazyLoadImage
                        className={`lg:h-[300px] h-[250px] mb-2`}
                        alt={'cate'}
                        // height={400}
                        // width={300}
                        src={img6.src}

                    >

                    </LazyLoadImage>

                    <h1>
                        Kids
                    </h1>
                </div>

            </div>

        </div>
    )
}

export default Categories