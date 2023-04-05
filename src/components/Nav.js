import React from 'react';
import { Link } from 'react-scroll/modules';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBriefcase, BsChatSquareText, BsClipboardData } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

const Nav = () => {
    return (
        <nav className="fixed bottom-2  w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div className=" w-full bg-black/20 backdrop-blur-2xl max-w-[460px] mx-auto px-5 rounded-full h-[80px] flex items-center justify-between text-2xl text-white/50">
                    <Link
                        className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                        activeClass="active"
                        to="header"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >
                        <AiOutlineHome />
                    </Link>
                    <Link
                        className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <BiUser />
                    </Link>
                    <Link
                        className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={5}
                        duration={500}
                    >
                        <BsClipboardData />
                    </Link>
                    <Link
                        className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={5}
                        duration={500}
                    >
                        <BsBriefcase />
                    </Link>
                    <Link
                        className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={10}
                        duration={500}
                    >
                        <BsChatSquareText />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
