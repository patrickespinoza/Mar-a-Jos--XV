import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, Sparkles } from "lucide-react";

const Contador = ({
  titulo = "Faltan",
  texto = "Hay momentos que se sueñan toda la vida, y para mí será muy especial compartir este día contigo.",
  fecha = "2026-10-30T19:30:00",
}) => {
  const calcularTiempo = () => {
    const diferencia = new Date(fecha).getTime() - Date.now();

    if (diferencia <= 0) {
      return {
        Días: 0,
        Horas: 0,
        Minutos: 0,
        Segundos: 0,
      };
    }

    return {
      Días: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      Horas: Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
      ),
      Minutos: Math.floor(
        (diferencia / (1000 * 60)) % 60
      ),
      Segundos: Math.floor(
        (diferencia / 1000) % 60
      ),
    };
  };

  const [tiempoRestante, setTiempoRestante] = useState(
    calcularTiempo
  );

  useEffect(() => {
    const actualizarContador = () => {
      setTiempoRestante(calcularTiempo());
    };

    actualizarContador();

    const temporizador = window.setInterval(
      actualizarContador,
      1000
    );

    return () => window.clearInterval(temporizador);
  }, [fecha]);

  const elementosContador = Object.entries(tiempoRestante);

  return (
    <section
      className="
        contadorXV
        relative
        isolate
        overflow-hidden
        bg-[#FFF9F4]
        px-4
        py-20
        sm:px-8
        sm:py-24
        md:py-28
      "
    >
      {/* Círculos decorativos */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-16
          h-64
          w-64
          rounded-full
          bg-[#E9B7C7]/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-10
          h-72
          w-72
          rounded-full
          bg-[#B9A2D8]/20
          blur-3xl
        "
      />

      {/* Hojas superiores */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -left-3
          top-5
          flex
          -rotate-[28deg]
          text-[#7F9275]
          opacity-75
        "
        initial={{ opacity: 0, x: -30, rotate: -40 }}
        whileInView={{ opacity: 0.75, x: 0, rotate: -28 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Leaf size={52} strokeWidth={1.1} />
        <Leaf
          size={37}
          strokeWidth={1.1}
          className="-ml-4 mt-8 rotate-45"
        />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          -right-2
          top-8
          flex
          rotate-[25deg]
          text-[#7F9275]
          opacity-75
        "
        initial={{ opacity: 0, x: 30, rotate: 40 }}
        whileInView={{ opacity: 0.75, x: 0, rotate: 25 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Leaf
          size={38}
          strokeWidth={1.1}
          className="mt-8 rotate-45"
        />

        <Leaf
          size={55}
          strokeWidth={1.1}
          className="-ml-4"
        />
      </motion.div>

      {/* Hojas inferiores */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-5
          -left-5
          rotate-[35deg]
          text-[#7F9275]
          opacity-60
        "
      >
        <Leaf size={68} strokeWidth={1} />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          -bottom-5
          -right-5
          -rotate-[35deg]
          text-[#7F9275]
          opacity-60
        "
      >
        <Leaf size={68} strokeWidth={1} />
      </div>

      {/* Destellos */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-[12%]
          top-[32%]
          text-[#C9C9CF]
        "
        animate={{
          opacity: [0.25, 0.9, 0.25],
          scale: [0.85, 1.15, 0.85],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={24} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[55%]
          text-[#E9B7C7]
        "
        animate={{
          opacity: [0.25, 1, 0.25],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkles size={28} strokeWidth={1.2} />
      </motion.div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >
        {/* Marco exterior */}
        <div
          className="
            relative
            rounded-[2rem]
            border
            border-[#C9C9CF]
            bg-white/45
            px-4
            py-12
            shadow-[0_20px_60px_rgba(111,86,143,0.10)]
            sm:px-8
            sm:py-16
          "
        >
          {/* Marco interior */}
          <div
            className="
              pointer-events-none
              absolute
              inset-2
              rounded-[1.65rem]
              border
              border-[#E9B7C7]/55
            "
          />

          {/* Encabezado */}
          <motion.div
            className="
              relative
              mx-auto
              max-w-4xl
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
                uppercase
                tracking-[0.4em]
                text-[#7F9275]
                sm:text-sm
              "
            >
              Mis XV años
            </p>

            <h2
              className="
                font-cursiveDancing
                text-6xl
                leading-none
                text-[#C98DA3]
                sm:text-7xl
                md:text-8xl
              "
            >
              {titulo}
            </h2>

            {/* Separador */}
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
                  w-14
                  bg-[#C9C9CF]
                  sm:w-24
                "
              />

              <Heart
                size={17}
                strokeWidth={1.3}
                className="fill-[#E9B7C7]/35 text-[#C98DA3]"
              />

              <span
                className="
                  h-px
                  w-14
                  bg-[#C9C9CF]
                  sm:w-24
                "
              />
            </div>

            <p
              className="
                mx-auto
                max-w-3xl
                font-playfair
                text-base
                leading-relaxed
                text-[#554B5E]
                sm:text-lg
                md:text-xl
              "
            >
              {texto}
            </p>
          </motion.div>

          {/* Contador */}
          <motion.div
            className="
              relative
              mx-auto
              mt-10
              max-w-5xl
              sm:mt-12
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
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <div
              className="
                grid
                grid-cols-2
                gap-3
                sm:grid-cols-4
                sm:gap-4
                md:gap-6
              "
            >
              {elementosContador.map(
                ([etiqueta, valor], indice) => (
                  <motion.div
                    key={etiqueta}
                    className="
                      group
                      relative
                      flex
                      min-h-[140px]
                      flex-col
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[1.25rem]
                      border
                      border-[#C9C9CF]
                      bg-[#FFFDFC]
                      px-2
                      py-5
                      text-center
                      shadow-[0_12px_30px_rgba(111,86,143,0.10)]
                      sm:min-h-[155px]
                    "
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: indice * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                  >
                    {/* Línea rosa superior */}
                    <div
                      className="
                        absolute
                        inset-x-5
                        top-0
                        h-[3px]
                        rounded-b-full
                        bg-[#E9B7C7]
                      "
                    />

                    {/* Adorno de plata */}
                    <div
                      className="
                        absolute
                        right-3
                        top-3
                        h-4
                        w-4
                        rounded-full
                        border
                        border-[#C9C9CF]
                        opacity-50
                      "
                    />

                    <motion.span
                      key={`${etiqueta}-${valor}`}
                      className="
                        font-playfair
                        text-4xl
                        font-medium
                        tabular-nums
                        text-[#6F568F]
                        sm:text-5xl
                        md:text-6xl
                      "
                      initial={{
                        opacity: 0.45,
                        scale: 0.94,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      {String(valor).padStart(2, "0")}
                    </motion.span>

                    <div
                      className="
                        my-3
                        h-px
                        w-10
                        bg-[#E9B7C7]
                        transition-all
                        duration-300
                        group-hover:w-14
                      "
                    />

                    <span
                      className="
                        font-playfair
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#6F568F]/80
                        sm:text-xs
                      "
                    >
                      {etiqueta}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contador;