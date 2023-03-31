import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
const Banner = () => {
    return (
        <div className="container mx-auto flex justify-between items-center mt-3">
            <h1 className=" font-extrabold text-3xl text-gradient uppercase md:text-4xl">
                Tonio
            </h1>
            <a
                href="https://wa.me/50955256069"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm  uppercase tracking-wide flex items-center justify-center"
            >
                <BsWhatsapp className=" text-2xl" />
            </a>
        </div>
    );
};

export default Banner;
