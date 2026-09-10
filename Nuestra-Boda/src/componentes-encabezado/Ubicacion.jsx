import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Crown,
  MapPin,
  Sparkles,
} from "lucide-react";

const Celebracion = ({
  titulo = "Celebración",
  fecha = "11 Julio 2027",
  hora = "4:30 PM",
  lugar = "Salón Event Center",
  direccion = "C. 5 Pte. 400, Libertad, Heroica Puebla de Zaragoza, Pue.",
  ubicacion = "https://maps.app.goo.gl/TsSDUBKAractwi8F8",
}) => {
  return (
    <section
      className="
        celebracionXV
        relative
        isolate
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-[#F5EBDD]
        via-[#FFFFFF]
        to-[#E8DFF2]
        px-5
        py-20
        sm:px-8
        sm:py-28
      "
    >
      {/* DECORACIÓN SUPERIOR IZQUIERDA */}
      <div
        className="
          celebracionXV__luz-superior
          pointer-events-none
          absolute
          -left-28
          -top-28
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#C8B6E2]/45
          blur-[100px]
        "
      />

      {/* DECORACIÓN INFERIOR DERECHA */}
      <div
        className="
          celebracionXV__luz-inferior
          pointer-events-none
          absolute
          -bottom-32
          -right-24
          h-[390px]
          w-[390px]
          rounded-full
          bg-[#5D4E8C]/20
          blur-[110px]
        "
      />

      {/* CÍRCULOS DECORATIVOS */}
      <div
        className="
          celebracionXV__circulo-uno
          pointer-events-none
          absolute
          left-8
          top-28
          h-32
          w-32
          rounded-full
          border
          border-[#5D4E8C]/10
        "
      />

      <div
        className="
          celebracionXV__circulo-dos
          pointer-events-none
          absolute
          bottom-20
          right-10
          h-44
          w-44
          rounded-full
          border
          border-[#5D4E8C]/10
        "
      />

      {/* DESTELLOS */}
      <motion.div
        className="
          celebracionXV__destello-izquierdo
          absolute
          left-[7%]
          top-20
          text-[#5D4E8C]/45
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
        <Sparkles size={30} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          celebracionXV__destello-derecho
          absolute
          right-[8%]
          top-1/3
          text-[#C8B6E2]
        "
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.7, 1.1, 0.7],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkles size={38} strokeWidth={1.1} />
      </motion.div>

      <motion.div
        className="
          celebracionXV__tarjeta-principal
          relative
          z-10
          mx-auto
          max-w-5xl
          overflow-hidden
          rounded-[2.5rem]
          border
          border-white/80
          bg-white/70
          px-5
          py-14
          text-center
          shadow-[0_30px_90px_rgba(93,78,140,0.18)]
          backdrop-blur-xl
          sm:px-10
          sm:py-16
          md:px-14
        "
        initial={{
          opacity: 0,
          y: 45,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
      >
        {/* BRILLO DE TARJETA */}
        <div
          className="
            celebracionXV__tarjeta-brillo-superior
            pointer-events-none
            absolute
            -right-20
            -top-24
            h-64
            w-64
            rounded-full
            bg-[#C8B6E2]/35
            blur-3xl
          "
        />

        <div
          className="
            celebracionXV__tarjeta-brillo-inferior
            pointer-events-none
            absolute
            -bottom-24
            -left-20
            h-64
            w-64
            rounded-full
            bg-[#F5EBDD]/80
            blur-3xl
          "
        />

        {/* ENCABEZADO */}
        <div className="celebracionXV__encabezado relative">
          <motion.div
            className="
              celebracionXV__corona
              mx-auto
              mb-5
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#5D4E8C]/15
              bg-[#F5EBDD]/80
              text-[#5D4E8C]
              shadow-[0_12px_30px_rgba(93,78,140,0.14)]
            "
            animate={{
              y: [0, -5, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Crown size={31} strokeWidth={1.35} />
          </motion.div>

          <p
            className="
              celebracionXV__etiqueta
              mb-4
              font-playfair
              text-xs
              font-semibold
              uppercase
              tracking-[0.38em]
              text-[#5D4E8C]/65
              sm:text-sm
            "
          >
            Un día inolvidable
          </p>

          <h2
            className="
              celebracionXV__titulo
              font-cursiveDancing
              text-5xl
              leading-none
              text-[#5D4E8C]
              sm:text-6xl
              md:text-7xl
            "
          >
            {titulo}
          </h2>

          <div
            className="
              celebracionXV__separador
              mx-auto
              my-8
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                celebracionXV__linea-izquierda
                h-px
                w-14
                bg-gradient-to-r
                from-transparent
                to-[#5D4E8C]/40
                sm:w-24
              "
            />

            <Sparkles
              size={19}
              strokeWidth={1.3}
              className="text-[#5D4E8C]"
            />

            <span
              className="
                celebracionXV__linea-derecha
                h-px
                w-14
                bg-gradient-to-l
                from-transparent
                to-[#5D4E8C]/40
                sm:w-24
              "
            />
          </div>
        </div>

        {/* FECHA Y HORA */}
        <div
          className="
            celebracionXV__datos
            relative
            mx-auto
            grid
            max-w-3xl
            grid-cols-1
            gap-5
            sm:grid-cols-2
          "
        >
          <motion.div
            className="
              celebracionXV__fecha
              group
              relative
              overflow-hidden
              rounded-[1.8rem]
              border
              border-[#C8B6E2]/50
              bg-gradient-to-br
              from-[#5D4E8C]
              to-[#7563A5]
              px-6
              py-7
              text-white
              shadow-[0_16px_40px_rgba(93,78,140,0.25)]
            "
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div
              className="
                celebracionXV__fecha-brillo
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-28
                w-28
                rounded-full
                bg-white/15
                blur-2xl
              "
            />

            <CalendarDays
              size={28}
              strokeWidth={1.4}
              className="mx-auto mb-4 text-[#F5EBDD]"
            />

            <p
              className="
                celebracionXV__fecha-etiqueta
                mb-2
                font-playfair
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/65
              "
            >
              Fecha
            </p>

            <p
              className="
                celebracionXV__fecha-valor
                font-playfair
                text-2xl
                sm:text-3xl
              "
            >
              {fecha}
            </p>
          </motion.div>

          <motion.div
            className="
              celebracionXV__hora
              group
              relative
              overflow-hidden
              rounded-[1.8rem]
              border
              border-[#C8B6E2]/50
              bg-gradient-to-br
              from-[#5D4E8C]
              to-[#7563A5]
              px-6
              py-7
              text-white
              shadow-[0_16px_40px_rgba(93,78,140,0.25)]
            "
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div
              className="
                celebracionXV__hora-brillo
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-28
                w-28
                rounded-full
                bg-white/15
                blur-2xl
              "
            />

            <Clock3
              size={28}
              strokeWidth={1.4}
              className="mx-auto mb-4 text-[#F5EBDD]"
            />

            <p
              className="
                celebracionXV__hora-etiqueta
                mb-2
                font-playfair
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/65
              "
            >
              Hora
            </p>

            <p
              className="
                celebracionXV__hora-valor
                font-playfair
                text-2xl
                sm:text-3xl
              "
            >
              {hora}
            </p>
          </motion.div>
        </div>

        {/* UBICACIÓN */}
        <motion.div
          className="
            celebracionXV__ubicacion
            relative
            mx-auto
            mt-10
            max-w-3xl
            rounded-[2rem]
            border
            border-[#5D4E8C]/10
            bg-[#F5EBDD]/65
            px-5
            py-9
            shadow-[0_14px_35px_rgba(93,78,140,0.08)]
            sm:px-9
          "
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
        >
          <div
            className="
              celebracionXV__ubicacion-icono
              mx-auto
              mb-5
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-[#C8B6E2]/40
              text-[#5D4E8C]
            "
          >
            <MapPin size={27} strokeWidth={1.5} />
          </div>

          <p
            className="
              celebracionXV__ubicacion-titulo
              font-cursiveDancing
              text-4xl
              text-[#5D4E8C]
              sm:text-5xl
            "
          >
            Lugar de la celebración
          </p>

          <h3
            className="
              celebracionXV__lugar
              mt-4
              font-playfair
              text-2xl
              text-[#2E2E2E]
              sm:text-3xl
            "
          >
            {lugar}
          </h3>

          <p
            className="
              celebracionXV__direccion
              mx-auto
              mt-4
              max-w-xl
              font-playfair
              text-base
              leading-relaxed
              text-[#2E2E2E]/70
              sm:text-lg
            "
          >
            {direccion}
          </p>
        </motion.div>

        {/* BOTÓN */}
        <motion.a
          href={ubicacion}
          target="_blank"
          rel="noopener noreferrer"
          className="
            celebracionXV__boton
            relative
            mt-9
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            bg-[#5D4E8C]
            px-8
            py-4
            font-playfair
            text-sm
            uppercase
            tracking-[0.15em]
            text-white
            shadow-[0_14px_35px_rgba(93,78,140,0.3)]
            transition
            duration-300
            hover:bg-[#4B3E76]
            sm:px-10
            sm:text-base
          "
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <MapPin size={19} strokeWidth={1.6} />
          Ver ubicación
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Celebracion;