import React from 'react';
import { Link } from 'react-scroll/modules';
import { Link as RouterLink } from 'react-router-dom';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Tp2 from '../assets/gallery/TP-2.jpg';
import Tp3 from '../assets/gallery/TP-3.jpg';
import Tp5 from '../assets/gallery/TP-5.jpg';
import Tp6 from '../assets/gallery/TP-6.jpg';
import Tp7 from '../assets/gallery/TP-7.jpg';
import Tp8 from '../assets/gallery/TP-8.jpg';
import Tp10 from '../assets/gallery/TP-10.jpg';
import Tp11 from '../assets/gallery/TP-11.jpg';
import Tp13 from '../assets/gallery/TP-13.jpg';
import Land1 from '../assets/gallery/land-1.jpg';
import Land2 from '../assets/gallery/lan-2.jpg';
import Land3 from '../assets/gallery/lan-3.jpg';
import Land4 from '../assets/gallery/land-4.jpg';
import Land5 from '../assets/gallery/land-5.jpg';
import Land6 from '../assets/gallery/land-6.jpg';
import Land7 from '../assets/gallery/land-7.jpg';

const Gallery = () => {
    return (
        <section className="bg-site h-full pb-4 pt-4" id="gallery">
            <div className="container mx-auto">
                <div className=" container flex justify-start pb-5">
                    <RouterLink
                        to={'/Max-Philistin-Portfolio'}
                        className="btn btn-sm  uppercase tracking-wide flex items-center justify-center"
                    >
                        {"Page d'acceuil "}
                    </RouterLink>
                </div>
                <div>
                    <div className=" flex flex-col gap-3 item-center">
                        <div className=" flex flex-col lg:flex-row gap-4">
                            <div className=" flex flex-col gap-4 w-[100%] mx-auto">
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp7}
                                        className=" hover:scale-125 transition-all duration-500 "
                                        alt="Portrait d'une jeune fille debout"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land1}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Landscape d'un terrain avec des ruines"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp11}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Portrait d'un jeune homme debout"
                                    />
                                </div>
                            </div>
                            <div className=" flex flex-col gap-4 w-[100%] mx-auto">
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land2}
                                        className=" hover:scale-125 transition-all duration-500 "
                                        alt="Chute d'eau"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp13}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Portrait d'une jeune fille debout"
                                    />
                                </div>
                                {/* <div className=" overflow-hidden">
                                    <img
                                        src={Land4}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Portrait d'un jeune homme debout"
                                    />
                                </div> */}
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp6}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Portrait d'une jeune fille debout"
                                    />
                                </div>
                            </div>
                            <div className=" flex flex-col gap-4 w-[100%] mx-auto">
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp8}
                                        className=" hover:scale-125 transition-all duration-500 "
                                        alt="Portrait d'un jeune homme debout"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land3}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Chapelle de Maznod"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp3}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Enfant habillé en blanc"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col lg:flex-row gap-4">
                            <div className=" flex flex-col gap-4 w-[100%] mx-auto">
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land4}
                                        className=" hover:scale-125 transition-all duration-500 "
                                        alt="Ceremonie de mariage"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp5}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Portrait d'une jeune fille debout"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land5}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Bouquet de mariage"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land7}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Fille d'honneur"
                                    />
                                </div>
                            </div>
                            <div className=" flex flex-col gap-4 w-[100%] mx-auto">
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp2}
                                        className=" hover:scale-125 transition-all duration-500 "
                                        alt="Ceremonie de mariage"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Land6}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Portrait d'une jeune fille debout"
                                    />
                                </div>
                                <div className=" overflow-hidden">
                                    <img
                                        src={Tp10}
                                        className=" hover:scale-125 transition-all duration-500"
                                        alt="Bouquet de mariage"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link
                    to="gallery"
                    spy={true}
                    smooth={false}
                    offset={0}
                    duration={500}
                >
                    <div className=" container flex justify-start mt-5">
                        <p className=" btn btn-sm  uppercase tracking-wide flex items-center justify-center">
                            <AiOutlineArrowUp className="cursor-pointer w-[40px] h-[40px]" />
                        </p>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Gallery;
