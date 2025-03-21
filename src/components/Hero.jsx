import { HERO } from "../constants";
import rajaImg from "../assets/raja.jpg";
import rajaResume from "../assets/Resume - Achmad Raja Qodli Zaka.pdf";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { HiDocumentArrowDown } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
        <motion.div 
            initial={{ opacity:0, x: -50 }}
            animate={{ opacity:1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2">
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
            {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
            {/* {HERO.greet} */}
            <Typewriter
                options={{
                    strings: ['Hello World!', 'Hello there! 👋'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </p>
        <p className="mb-8 p-2 text-xl">
            {HERO.description}
            <div className="mb-2 py-5">
                <a href={rajaResume} download className="inline-flex items-center gap-2 rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300">
                    Download Resume <HiDocumentArrowDown />
                </a>
            </div>
        </p>
        </motion.div>
        <motion.div
            initial={{ opacity:0, scale: 0.8 }}
            animate={{ opacity:1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                        initial={{ opacity:0 }} 
                        animate={{ opacity:1 }}
                        transition={{ duration: 1 }}
                        src={rajaImg} 
                        width={450} 
                        height={450} 
                        alt="Achmad Raja" 
                        className="rounded-3xl"/>
                </div>
        </motion.div>
    </section>
  )
} 

export default Hero