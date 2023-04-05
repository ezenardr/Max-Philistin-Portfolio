import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll/modules';
import { Link as RouterLink } from 'react-router-dom';
import { fadeIn } from '../variants';
import Banner from './Banner';
import Hero from '../assets/hero.png';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const Header = () => {
    return (
        <header className="h-screen relative" id="header">
            <Banner />
            <div className="w-[90%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-60%] md:translate-x-[-50%] md:flex items-center md:gap-4">
                <div className=" text-center md:text-left md:w-[80%] lg:w-[65%]">
                    <motion.h1
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className=" uppercase font-primary text-3xl pb-3 font-medium tracking-wide lg:text-5xl"
                    >
                        Antoine Philistin
                    </motion.h1>
                    <motion.h2
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className=" font-secondary font-semibold text-[30px] uppercase mb-6 tracking-wide lg:text-[40px]"
                    >
                        Je suis un{' '}
                        <span className=" text-accent">
                            {
                                <TypeAnimation
                                    sequence={[
                                        'Photographe',
                                        1000,
                                        'Designer',
                                        1000,
                                        'Professionel',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                />
                            }
                        </span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="pb-6 text-slate-400 tracking-wide lg:text-xl"
                    >
                        En tant que photographe, je veux que mes photos
                        réflètent une image faramineuse car c'est un monde
                        passionnant et pleins de couleur à travers lequel le
                        produit ou la personne rayonne et se démarque. Une
                        journée sans photo est une journée perdue.
                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className=" flex items-center justify-center md:justify-start gap-4 lg:gap-10"
                    >
                        <Link
                            className="btn btn-sm uppercase text-lg tracking-wider flex items-center justify-center"
                            to="contact"
                            spy={true}
                            offset={0}
                            duration={500}
                        >
                            <a href="/">Contact</a>
                        </Link>
                        <RouterLink to={'/gallery'}>
                            <a
                                href="/"
                                className="text-gradient uppercase text-lg tracking-wider"
                            >
                                Gallerie
                            </a>
                        </RouterLink>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('up', 0.7)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="flex justify-center gap-10 text-white mt-8 text-2xl md:justify-start lg:mt-10"
                    >
                        <a
                            href="https://www.facebook.com/Tonio27P?mibextid=ZbWKwL "
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsFacebook />
                        </a>
                        <a href="0" target="_blank" rel="noreferrer">
                            <BsTwitter />
                        </a>
                        <a
                            href="https://www.instagram.com/invites/contact/?i=1ouydfo4ctvao&utm_content=j43cmn1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillInstagram />
                        </a>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn('down', 0.7)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className=" hidden md:block "
                >
                    <div className=" rounded-full bg-accent overflow-hidden">
                        <img src={Hero} alt="Profile of Tonio" />
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
