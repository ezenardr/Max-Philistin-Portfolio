import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-scroll/modules';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });
    return (
        <section className=" section h-full" id="about" ref={ref}>
            <div className=" container mx-auto">
                <div className=" flex flex-col gap-y-10 lg:flex-row">
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className=" bg-about bg-contain bg-no-repeat h-[400px] md:h-[500px] mix-blend-lighten bg-top lg:flex-1"
                    ></motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className=" flex-1"
                    >
                        <h2 className="h2 text-accent">About Me</h2>
                        <h3 className="h3">
                            7+ Années d'expérience dans divers domaines de la
                            photographie
                        </h3>
                        <motion.p
                            variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="pb-5 lg:text-xl"
                        >
                            Photographe professionnel passionné à capturer des
                            images époustouflantes qui racontent une histoire.
                            Reçevez le meilleur des photographies de qualité,
                            une clientèle hors pair et de l'expérience.
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.5)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex gap-2"
                        >
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={7}
                                            duration={5}
                                        />
                                    ) : null}
                                    +
                                </div>
                                <div className=" font-primary text-sm tracking-[2px]">
                                    Années
                                    <br /> d'expériences
                                </div>
                            </div>
                            <div className=" w-[115px]">
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={500}
                                            duration={3}
                                        />
                                    ) : null}
                                    +
                                </div>
                                <div className=" font-primary text-sm tracking-[2px]">
                                    Projects
                                    <br /> Complétés
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={2000}
                                            duration={3}
                                        />
                                    ) : null}
                                    +
                                </div>
                                <div className=" font-primary text-sm tracking-[2px]">
                                    Clients
                                    <br /> Satisfaitent
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 0.6)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className=" flex items-center mt-8 md:justify-start gap-4 lg:gap-10"
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
