import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll/modules';
import { fadeIn } from '../variants';

const service = [
    {
        title: 'Portrait',
        description:
            "Je m'efforce de faire ressortir la beauté de votre portrait. Chaque photographie a le pouvoir d'évoquer des émotions et transporter le spectateur dans un lieu et temps différent.",
    },
    {
        title: 'Evènements',
        description:
            'Derrière chaque cliché se cache une histoire. Notre objectif est de créer des images qui ne sont pas seulement belles, mais aussi significatives et mémorables.',
    },
    {
        title: 'Photographie de produits',
        description:
            'Représentez vos produits de la manière la plus attrayante possible à des fins commerciales. Il n’y a rien de plus honnête que des photos qui montrent la réalité de l’article tel qu’il est.',
    },
];
const Services = () => {
    return (
        <section className=" section h-full" id="services">
            <div className=" container mx-auto">
                <div className=" flex flex-col lg:flex-row">
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className=" flex-1 lg:bg-services bg-no-repeat  bg-bottom mix-blend-lighten mb-12 lg:mb-0 "
                    >
                        <h2 className="h2 mb-6 text-accent">What I Do</h2>
                        <h3 className="h3 mb-10 max-w-[455px]">
                            7+ Années d'expérience dans divers domaines de la
                            photographie
                        </h3>
                        <Link
                            className="btn btn-sm uppercase text-lg tracking-wider pt-2 pb-2"
                            to="contact"
                            spy={true}
                            offset={0}
                            duration={500}
                        >
                            <a href="/" className="inline-block">
                                Contact
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className=" flex-1"
                    >
                        <div>
                            {service.map((service, index) => {
                                const { title, description } = service;
                                return (
                                    <div
                                        className=" border-b border-white/20 h-[146px] mb-[38px]"
                                        key={index}
                                    >
                                        <motion.div
                                            variants={fadeIn('up', 0.5)}
                                            initial="hidden"
                                            whileInView={'show'}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                            className=" max-w-[476px]"
                                        >
                                            <h4 className=" text-[20px] font-primary tracking-wider mb-6 font-semibold">
                                                {title}
                                            </h4>
                                            <p className=" font-secondary leading-tight">
                                                {description}
                                            </p>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
