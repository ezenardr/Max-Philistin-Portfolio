import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsWhatsapp, BsTelephoneOutbound } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
    return (
        <section className=" py-16 lg:section" id="contact">
            <div className=" container mx-auto">
                <div className=" flex flex-col lg:flex-row">
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex justify-start items-center"
                    >
                        <div>
                            <h4 className=" text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                                Get In Touch
                            </h4>
                            <h2 className=" text-[45px] lg:text-[90px] leading-none mb-12">
                                Let's work <br /> together
                            </h2>
                            <motion.div
                                variants={fadeIn('left', 0.7)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.7 }}
                                className="flex justify-center gap-10 text-white mt-8 mb-8 text-2xl md:justify-start lg:mt-10"
                            >
                                <a
                                    href="https://wa.me/50955256069"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <BsWhatsapp />
                                </a>
                                <a
                                    href="mailto:mab27ht@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiOutlineMail />
                                </a>
                                <a
                                    href="tel:38048573"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <BsTelephoneOutbound />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.form
                        variants={fadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 border rounded-2xl flex  flex-col gap-y-6 pb-24 p-6 items-start mb-6"
                    >
                        <input
                            className=" bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                            type="text"
                            placeholder="Your Name"
                        />
                        <input
                            className=" bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                            type="text"
                            placeholder="Your Email"
                        />
                        <textarea
                            className=" bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                            placeholder="Your message"
                        ></textarea>
                        <button className="btn btn-lg">Send message</button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
