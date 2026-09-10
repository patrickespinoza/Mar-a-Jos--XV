import React from "react";
import { motion } from "framer-motion";
import {
  Gift,
  Heart,
  Leaf,
  Mail,
  Sparkles,
} from "lucide-react";

const Regalos = ({
  titulo = "Sugerencia de regalo",
  opcion = "Lluvia de sobres",
  mensaje = "Tu presencia es el regalo más importante para mí. Será muy especial compartir contigo esta noche llena de magia y alegría.",
  mensajeSecundario = "Si deseas obsequiarme un detalle, puedes hacerlo mediante la tradicional lluvia de sobres depositando tu presenten.  efectivo.",
}) => {
  return (
    <section
      className="
        regalosXV
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#F3CBD7]
        px-4
        py-20
        sm:px-8
        sm:py-24
        md:py-28
      "
    >
      {/* Decoraciones suaves */}
      <div
        className="
          pointer-events-none
          absolute
          -left-28
          -top-28
          h-80
          w-80
          rounded-full
          bg-white/35
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-28
          -right-24
          h-80
          w-80
          rounded-full
          bg-[#B9A2D8]/25
          blur-3xl
        "
      />

      {/* Hojas superiores */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -left-5
          top-8
          flex
          -rotate-[30deg]
          text-[#7F9275]
          opacity-80
        "
        initial={{
          opacity: 0,
          x: -35,
        }}
        whileInView={{
          opacity: 0.8,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <Leaf size={62} strokeWidth={1.1} />

        <Leaf
          size={43}
          strokeWidth={1.1}
          className="-ml-5 mt-10 rotate-45"
        />

        <Leaf
          size={32}
          strokeWidth={1.1}
          className="-ml-5 mt-20 rotate-90"
        />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          -right-5
          top-8
          flex
          rotate-[30deg]
          text-[#7F9275]
          opacity-80
        "
        initial={{
          opacity: 0,
          x: 35,
        }}
        whileInView={{
          opacity: 0.8,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <Leaf
          size={32}
          strokeWidth={1.1}
          className="mt-20 rotate-90"
        />

        <Leaf
          size={43}
          strokeWidth={1.1}
          className="-ml-5 mt-10 rotate-45"
        />

        <Leaf
          size={62}
          strokeWidth={1.1}
          className="-ml-5"
        />
      </motion.div>

      {/* Hojas inferiores */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-7
          -left-6
          flex
          rotate-[32deg]
          text-[#7F9275]
          opacity-70
        "
      >
        <Leaf size={72} strokeWidth={1.05} />

        <Leaf
          size={47}
          strokeWidth={1.05}
          className="-ml-6 mt-11 rotate-45"
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          -bottom-7
          -right-6
          flex
          -rotate-[32deg]
          text-[#7F9275]
          opacity-70
        "
      >
        <Leaf
          size={47}
          strokeWidth={1.05}
          className="mt-11 rotate-45"
        />

        <Leaf
          size={72}
          strokeWidth={1.05}
          className="-ml-6"
        />
      </div>

      {/* Destellos */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-[9%]
          top-[34%]
          text-white/85
        "
        animate={{
          opacity: [0.25, 1, 0.25],
          scale: [0.8, 1.15, 0.8],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 3.2,
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
          bottom-[24%]
          right-[9%]
          text-[#6F568F]/50
        "
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.75, 1.1, 0.75],
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

      <motion.div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
        "
        initial={{
          opacity: 0,
          y: 45,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        {/* Encabezado */}
        <div className="text-center">
          <motion.div
            className="
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border
              border-white/80
              bg-[#FFF9F4]
              text-[#6F568F]
              shadow-[0_14px_35px_rgba(111,86,143,0.18)]
            "
            animate={{
              y: [0, -6, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Gift size={35} strokeWidth={1.3} />
          </motion.div>

          <p
            className="
              mt-6
              font-playfair
              text-xs
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#7F9275]
              sm:text-sm
            "
          >
            Con mucho cariño
          </p>

          <h2
            className="
              mt-3
              font-cursiveDancing
              text-5xl
              leading-none
              text-[#6F568F]
              sm:text-6xl
              md:text-7xl
            "
          >
            {titulo}
          </h2>

          <div
            className="
              mx-auto
              my-7
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-16
                bg-white/90
                sm:w-24
              "
            />

            <Heart
              size={18}
              strokeWidth={1.3}
              className="fill-white/35 text-[#6F568F]"
            />

            <span
              className="
                h-px
                w-16
                bg-white/90
                sm:w-24
              "
            />
          </div>

          <p
            className="
              mx-auto
              max-w-2xl
              font-playfair
              text-base
              leading-8
              text-[#554B5E]
              sm:text-lg
              sm:leading-9
            "
          >
            {mensaje}
          </p>
        </div>

        {/* Tarjeta de lluvia de sobres */}
        <motion.div
          className="
            relative
            mx-auto
            mt-10
            max-w-2xl
            overflow-hidden
            rounded-[2rem]
            border
            border-[#C9C9CF]
            bg-[#FFF9F4]
            px-5
            py-11
            text-center
            shadow-[0_24px_65px_rgba(111,86,143,0.16)]
            sm:px-10
            sm:py-14
          "
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          whileHover={{
            y: -5,
          }}
        >
          {/* Marco interior */}
          <div
            className="
              pointer-events-none
              absolute
              inset-2
              rounded-[1.65rem]
              border
              border-[#E9B7C7]/65
            "
          />

          {/* Línea superior */}
          <div
            className="
              absolute
              left-1/2
              top-0
              h-1
              w-32
              -translate-x-1/2
              rounded-b-full
              bg-[#B9A2D8]
            "
          />

          {/* Hojas de la tarjeta */}
          <div
            className="
              pointer-events-none
              absolute
              -left-4
              -top-4
              flex
              -rotate-[35deg]
              text-[#7F9275]
              opacity-70
            "
          >
            <Leaf size={56} strokeWidth={1.05} />

            <Leaf
              size={34}
              strokeWidth={1.05}
              className="-ml-4 mt-8 rotate-45"
            />
          </div>

          <div
            className="
              pointer-events-none
              absolute
              -right-4
              -top-4
              flex
              rotate-[35deg]
              text-[#7F9275]
              opacity-70
            "
          >
            <Leaf
              size={34}
              strokeWidth={1.05}
              className="mt-8 rotate-45"
            />

            <Leaf
              size={56}
              strokeWidth={1.05}
              className="-ml-4"
            />
          </div>

          <div
            className="
              pointer-events-none
              absolute
              -bottom-5
              -left-4
              rotate-[35deg]
              text-[#7F9275]
              opacity-60
            "
          >
            <Leaf size={57} strokeWidth={1.05} />
          </div>

          <div
            className="
              pointer-events-none
              absolute
              -bottom-5
              -right-4
              -rotate-[35deg]
              text-[#7F9275]
              opacity-60
            "
          >
            <Leaf size={57} strokeWidth={1.05} />
          </div>

          <div className="relative z-10">
            {/* Sobre */}
            <motion.div
              className="
                relative
                mx-auto
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                border
                border-[#C9C9CF]
                bg-[#EEE7F5]
                text-[#6F568F]
                shadow-[0_12px_30px_rgba(111,86,143,0.15)]
              "
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Mail size={46} strokeWidth={1.25} />

              <motion.div
                className="
                  absolute
                  -right-1
                  top-0
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E9B7C7]
                  text-white
                  shadow-md
                "
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart
                  size={15}
                  strokeWidth={1.5}
                  className="fill-white"
                />
              </motion.div>
            </motion.div>

            <p
              className="
                mt-7
                font-playfair
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#C98DA3]
              "
            >
              Detalle especial
            </p>

            <h3
              className="
                mt-3
                font-cursiveDancing
                text-4xl
                text-[#6F568F]
                sm:text-5xl
              "
            >
              {opcion}
            </h3>

            <div
              className="
                mx-auto
                my-6
                h-px
                w-20
                bg-[#C9C9CF]
              "
            />

            <p
              className="
                mx-auto
                max-w-lg
                font-playfair
                text-base
                leading-8
                text-[#554B5E]/80
                sm:text-lg
              "
            >
              {mensajeSecundario}
            </p>

            {/* Sobre decorativo */}
            <motion.div
              className="
                mx-auto
                mt-8
                flex
                w-fit
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#C9C9CF]
                bg-[#F7E6EC]
                px-6
                py-3
                font-playfair
                text-sm
                uppercase
                tracking-[0.14em]
                text-[#6F568F]
              "
              whileHover={{
                scale: 1.04,
              }}
            >
              <Mail size={18} strokeWidth={1.5} />
              Lluvia de sobres
            </motion.div>
          </div>
        </motion.div>

        {/* Separador inferior */}
        <div
          className="
            mx-auto
            mt-11
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-12 bg-white/90" />

          <Sparkles
            size={18}
            strokeWidth={1.2}
            className="text-[#6F568F]"
          />

          <span className="h-px w-12 bg-white/90" />
        </div>
      </motion.div>
    </section>
  );
};

export default Regalos;