import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Heart,
  Leaf,
  MapPin,
  Sparkles,
} from "lucide-react";

const Celebracion = ({
  titulo = "Celebración",
  fecha = "30 Octubre 2026",
  hora = "7:30 PM",
  lugar = "La Amatista Eventos",
  direccion = "Av. Luis Donaldo Colosio Murrieta No. 110, Ciudad Solidaridad, 64102 Monterrey, N.L.",
  ubicacion = "https://maps.app.goo.gl/FPxGhjYQvDLnj3rGA",
}) => {
  return (
    <section
      className="
        celebracionXV
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#EEE7F5]
        px-4
        py-20
        sm:px-8
        sm:py-24
        md:py-28
      "
    >
      {/* Decoraciones suaves de fondo */}
      <div
        className="
          pointer-events-none
          absolute
          -left-28
          top-20
          h-72
          w-72
          rounded-full
          bg-[#E9B7C7]/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
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
          -left-4
          top-10
          flex
          -rotate-[30deg]
          text-[#7F9275]
          opacity-70
        "
        initial={{
          opacity: 0,
          x: -30,
        }}
        whileInView={{
          opacity: 0.7,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <Leaf size={58} strokeWidth={1.1} />

        <Leaf
          size={40}
          strokeWidth={1.1}
          className="-ml-4 mt-9 rotate-45"
        />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          -right-4
          top-12
          flex
          rotate-[28deg]
          text-[#7F9275]
          opacity-70
        "
        initial={{
          opacity: 0,
          x: 30,
        }}
        whileInView={{
          opacity: 0.7,
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
          size={40}
          strokeWidth={1.1}
          className="mt-9 rotate-45"
        />

        <Leaf
          size={58}
          strokeWidth={1.1}
          className="-ml-4"
        />
      </motion.div>

      {/* Destellos */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[35%]
          text-[#C9C9CF]
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
        <Sparkles size={27} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[58%]
          text-[#C98DA3]
        "
        animate={{
          opacity: [0.2, 0.85, 0.2],
          scale: [0.75, 1.1, 0.75],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 3.7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkles size={32} strokeWidth={1.1} />
      </motion.div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
        "
      >
        {/* Encabezado */}
        <motion.div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.85,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <p
            className="
              mb-3
              font-playfair
              text-xs
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#7F9275]
              sm:text-sm
            "
          >
            Un día inolvidable
          </p>

          <h2
            className="
              font-cursiveDancing
              text-6xl
              leading-none
              text-[#6F568F]
              sm:text-7xl
              md:text-8xl
            "
          >
            {titulo}
          </h2>

          <div
            className="
              mx-auto
              my-6
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
                bg-[#C9C9CF]
                sm:w-24
              "
            />

            <Heart
              size={18}
              strokeWidth={1.3}
              className="fill-[#E9B7C7]/35 text-[#C98DA3]"
            />

            <span
              className="
                h-px
                w-16
                bg-[#C9C9CF]
                sm:w-24
              "
            />
          </div>

          <p
            className="
              font-playfair
              text-base
              leading-relaxed
              text-[#554B5E]
              sm:text-lg
            "
          >
            Acompáñame a celebrar uno de los momentos más
            especiales de mi vida.
          </p>
        </motion.div>

        {/* Tarjeta de celebración */}
        <motion.div
          className="
            relative
            mx-auto
            mt-12
            max-w-3xl
            overflow-hidden
            rounded-[2rem]
            border
            border-[#C9C9CF]
            bg-[#FFF9F4]
            px-5
            py-10
            text-center
            shadow-[0_24px_65px_rgba(111,86,143,0.16)]
            sm:px-10
            sm:py-12
            md:px-14
          "
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
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
              border-[#E9B7C7]/60
            "
          />

          {/* Línea superior rosa */}
          <div
            className="
              absolute
              left-1/2
              top-0
              h-1
              w-32
              -translate-x-1/2
              rounded-b-full
              bg-[#E9B7C7]
            "
          />

          {/* Hojas dentro de la tarjeta */}
          <div
            className="
              pointer-events-none
              absolute
              -left-3
              -top-3
              -rotate-[35deg]
              text-[#7F9275]
              opacity-55
            "
          >
            <Leaf size={58} strokeWidth={1} />
          </div>

          <div
            className="
              pointer-events-none
              absolute
              -right-3
              -top-3
              rotate-[35deg]
              text-[#7F9275]
              opacity-55
            "
          >
            <Leaf size={58} strokeWidth={1} />
          </div>

          <div className="relative">
            {/* Ícono de ubicación */}
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
                border-[#C9C9CF]
                bg-[#EEE7F5]
                text-[#6F568F]
                shadow-[0_10px_30px_rgba(111,86,143,0.14)]
              "
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MapPin size={36} strokeWidth={1.3} />
            </motion.div>

            <p
              className="
                mt-6
                font-playfair
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#C98DA3]
              "
            >
              Mis XV años
            </p>

            <h3
              className="
                mt-3
                font-playfair
                text-3xl
                text-[#554B5E]
                sm:text-4xl
              "
            >
              {lugar}
            </h3>

            {/* Fecha y hora */}
            <div
              className="
                mx-auto
                mt-8
                grid
                max-w-xl
                grid-cols-1
                gap-4
                sm:grid-cols-2
              "
            >
              <motion.div
                className="
                  rounded-[1.25rem]
                  border
                  border-[#C9C9CF]
                  bg-[#EEE7F5]
                  px-4
                  py-5
                "
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <CalendarDays
                  size={27}
                  strokeWidth={1.3}
                  className="
                    mx-auto
                    mb-3
                    text-[#6F568F]
                  "
                />

                <p
                  className="
                    mb-1
                    font-playfair
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    text-[#7F9275]
                  "
                >
                  Fecha
                </p>

                <p
                  className="
                    font-playfair
                    text-lg
                    text-[#554B5E]
                    sm:text-xl
                  "
                >
                  {fecha}
                </p>
              </motion.div>

              <motion.div
                className="
                  rounded-[1.25rem]
                  border
                  border-[#C9C9CF]
                  bg-[#F7E6EC]
                  px-4
                  py-5
                "
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <Clock3
                  size={27}
                  strokeWidth={1.3}
                  className="
                    mx-auto
                    mb-3
                    text-[#C98DA3]
                  "
                />

                <p
                  className="
                    mb-1
                    font-playfair
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    text-[#7F9275]
                  "
                >
                  Hora
                </p>

                <p
                  className="
                    font-playfair
                    text-lg
                    text-[#554B5E]
                    sm:text-xl
                  "
                >
                  {hora}
                </p>
              </motion.div>
            </div>

            {/* Dirección */}
            <div
              className="
                mx-auto
                mt-7
                max-w-xl
                border-t
                border-[#C9C9CF]/75
                pt-7
              "
            >
              <MapPin
                size={23}
                strokeWidth={1.35}
                className="
                  mx-auto
                  mb-3
                  text-[#7F9275]
                "
              />

              <p
                className="
                  font-playfair
                  text-sm
                  leading-relaxed
                  text-[#554B5E]/80
                  sm:text-base
                "
              >
                {direccion}
              </p>
            </div>

            {/* Botón */}
            <motion.a
              href={ubicacion}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#B9A2D8]
                bg-[#6F568F]
                px-8
                py-4
                font-playfair
                text-sm
                uppercase
                tracking-[0.14em]
                text-white
                shadow-[0_12px_30px_rgba(111,86,143,0.28)]
                transition-colors
                duration-300
                hover:bg-[#5D4779]
                sm:px-10
                sm:text-base
              "
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <MapPin size={19} strokeWidth={1.6} />
              Ver ubicación
            </motion.a>
          </div>
        </motion.div>

        {/* Adorno inferior */}
        <div
          className="
            mx-auto
            mt-10
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span
            className="
              h-px
              w-12
              bg-[#C9C9CF]
            "
          />

          <Sparkles
            size={18}
            strokeWidth={1.2}
            className="text-[#C98DA3]"
          />

          <span
            className="
              h-px
              w-12
              bg-[#C9C9CF]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Celebracion;