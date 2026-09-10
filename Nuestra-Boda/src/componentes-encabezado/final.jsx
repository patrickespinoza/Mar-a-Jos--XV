import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Leaf,
  Sparkles,
} from "lucide-react";

const FotoFinal = ({
  imagen = "/final.jpeg",
  texto = "Por mis XV",
}) => {
  return (
    <section
      className="
        fotoFinalXV
        relative
        h-screen
        min-h-[600px]
        w-full
        overflow-hidden
        bg-[#6F568F]
      "
    >
      {/* Fotografía */}
      <motion.img
        src={imagen}
        alt="Fotografía de mis XV años"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[center_5%]
        "
        initial={{
          opacity: 0,
          scale: 1.06,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
      />

      {/* Sombra inferior */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[50%]
          bg-gradient-to-t
          from-black/75
          via-black/25
          to-transparent
        "
      />

      {/* Sombra superior ligera */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[25%]
          bg-gradient-to-b
          from-black/25
          to-transparent
        "
      />

      {/* Destellos */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-[9%]
          top-[16%]
          text-white/80
        "
        animate={{
          opacity: [0.25, 1, 0.25],
          scale: [0.8, 1.15, 0.8],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={28} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[9%]
          top-[30%]
          text-[#E9B7C7]
        "
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.75, 1.15, 0.75],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkles size={34} strokeWidth={1.1} />
      </motion.div>

      {/* Hojas inferiores */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -bottom-5
          -left-6
          z-10
          flex
          rotate-[28deg]
          text-[#A9B79E]
        "
        initial={{
          opacity: 0,
          x: -35,
        }}
        whileInView={{
          opacity: 0.9,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        viewport={{
          once: true,
        }}
      >
        <Leaf size={74} strokeWidth={1.1} />

        <Leaf
          size={47}
          strokeWidth={1.1}
          className="-ml-6 mt-11 rotate-45"
        />

        <Leaf
          size={36}
          strokeWidth={1.1}
          className="-ml-5 mt-20 rotate-90"
        />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          -bottom-5
          -right-6
          z-10
          flex
          -rotate-[28deg]
          text-[#A9B79E]
        "
        initial={{
          opacity: 0,
          x: 35,
        }}
        whileInView={{
          opacity: 0.9,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        viewport={{
          once: true,
        }}
      >
        <Leaf
          size={36}
          strokeWidth={1.1}
          className="mt-20 rotate-90"
        />

        <Leaf
          size={47}
          strokeWidth={1.1}
          className="-ml-5 mt-11 rotate-45"
        />

        <Leaf
          size={74}
          strokeWidth={1.1}
          className="-ml-6"
        />
      </motion.div>

      {/* Texto inferior */}
      <motion.div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20
          flex
          flex-col
          items-center
          px-5
          pb-14
          text-center
          sm:pb-16
          md:pb-20
        "
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.35,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        {/* Separador */}
        <div
          className="
            mb-5
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span
            className="
              h-px
              w-14
              bg-[#C9C9CF]
              sm:w-20
            "
          />

          <Heart
            size={18}
            strokeWidth={1.3}
            className="
              fill-[#E9B7C7]/45
              text-[#E9B7C7]
            "
          />

          <span
            className="
              h-px
              w-14
              bg-[#C9C9CF]
              sm:w-20
            "
          />
        </div>

        <h2
          className="
            font-cursiveDancing
            text-6xl
            leading-none
            text-white
            drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)]
            sm:text-7xl
            md:text-8xl
          "
        >
          {texto}
        </h2>

        <p
          className="
            mt-4
            font-playfair
            text-xs
            uppercase
            tracking-[0.35em]
            text-white/85
            sm:text-sm
          "
        >
          Gracias por acompañarme
        </p>
      </motion.div>
    </section>
  );
};

export default FotoFinal;