// import "./MobileNav.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@mui/material";




export const MenuToggle = ({ toggle, isOpen }) => {

    return (
        <div >
            {
                !isOpen ?
                    <button onClick={toggle} className="menu_button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke={`${isOpen ? '#fff' : "#fff"}`} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>


                    </button>
                    :
                    <button onClick={toggle} className="menu_button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#fff" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>


                    </button>
            }
        </div>
    )
}
    ;

export function Menu({ toggle, isOpen }) {

    const router = useRouter();
    const [bgWhite, setBgWhite] = useState(false)

    useEffect(() => {

        // setTimeout(()=>{
        if (isOpen) setBgWhite(true)
        // },1000)
        setTimeout(() => {
            if (!isOpen) setBgWhite(false)
        }, 1000)
    })


    return (
        <nav style={{ zIndex: 10 }} className="  menuItem text-[white]">
            <ul className={`${bgWhite ? ' bg-opacity-90 backdrop-blur-md text-center bg-navBg w-[100vw] pt-[20%] h-[100vh] mt-[-15%]' : ''}`}>
                <li className="li_menu" onClick={toggle}>
                    <Link className={`md:p-3 md:m-5 hover:text-nav ${router.pathname == "/" ? " border-b-[2px]" : ""}`} href='/'>Home</Link>

                </li>

                <li className="li_menu" onClick={toggle}>
                    <Link className={`md:p-3 md:m-5 hover:text-nav ${router.pathname == '/services' ? "border-b-[2px]" : ""}`} href='/services'>Services</Link>

                </li>
                <li className="li_menu" onClick={toggle}>
                    <Link className={`md:p-3 md:m-5 hover:text-nav ${router.pathname == '/products' ? "border-b-[2px]" : ""}`} href='/products'>Products</Link>

                </li>

                {/* <li className="li_menu" onClick={toggle}>
                <Link className={`md:p-3 md:m-5 hover:text-nav ${router.pathname =='/gallery' ? "border-b-[2px]" : ""}`} href='/gallery'>Gallery</Link>

                </li> */}

                <li className="li_menu" onClick={toggle}>
                    <Link className={`md:p-3 md:m-5 hover:text-nav ${router.pathname == "/testimonials" ? "border-b-[2px]" : ""}`} href='/testimonials'>Testimonials</Link>

                </li>

                <li className="li_menu" onClick={toggle}>
                    <Link className={`md:p-3 md:m-5 hover:text-nav ${router.pathname == "/about" ? "border-b-[2px]" : ""}`} href='/about'>About</Link>

                </li>

                <li className="li_menu" onClick={toggle}>
                    <Link className={`md:p-3 md:m-5 hover:text-nav ${router.pathname == "/contact" ? "border-b-[2px]" : ""}`} href='/contact'>Contact</Link>

                </li>
            </ul>
        </nav>
    );
}

const Path = (props) => (
    <path
        fill="transparent"
        strokeWidth="3"
        stroke="var(--background)"
        strokeLinecap="round"
        {...props}
    />
);



function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations = isOpen
            ? [
                [
                    "nav",
                    { transform: "translateX(0%)" },
                    { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
                ],
                [
                    "li",
                    { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
                    { delay: stagger(0.05), at: "-0.1" }
                ]
            ]
            : [
                [
                    "li",
                    { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
                    { delay: stagger(0.05, { from: "last" }), at: "<" }
                ],
                ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
            ];

        animate([
            [
                "path.top",
                { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
                { at: "<" }
            ],
            ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
            [
                "path.bottom",
                { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
                { at: "<" }
            ],
            ...menuAnimations
        ]);
    }, [isOpen]);

    return scope;
}

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const scope = useMenuAnimation(isOpen);


    return (
        <div ref={scope} >
            <Menu toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </div>
    );
}
