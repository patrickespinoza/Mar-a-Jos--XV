import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";

const Contador = ({
  titulo = "¡Estás invitado!",
  texto = "Hay momentos que se sueñan toda la vida, y para mí será muy especial compartir este día contigo.",
  frase = "La magia está por comenzar",
  fecha = "2027-07-11T00:00:00",
}) => {
  const calcularTiempo = () => {
    const diferencia = new Date(fecha).getTime() - new Date().getTime();

    if (diferencia > 0) {
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
    }

    return {
      Días: 0,
      Horas: 0,
      Minutos: 0,
      Segundos: 0,
    };
  };

  const [tiempoRestante, setTiempoRestante] = useState(
    calcularTiempo()
  );

  useEffect(() => {
    const temporizador = setInterval(() => {
      setTiempoRestante(calcularTiempo());
    }, 1000);

    return () => clearInterval(temporizador);
  }, [fecha]);

  const elementosContador = Object.entries(tiempoRestante);

  return (
    <section
      className="
        contadorXV
        relative
        isolate
        overflow-hidden
        bg-gradient-to-b
        from-[#5D4E8C]
        via-[#7765A6]
        to-[#C8B6E2]
        px-5
        py-24
        sm:px-8
        sm:py-28
      "
    >
      {/* LUZ SUPERIOR */}
      <div
        className="
          contadorXV__luz-superior
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#F5EBDD]/20
          blur-[90px]
        "
      />

      {/* LUZ INFERIOR */}
      <div
        className="
          contadorXV__luz-inferior
          pointer-events-none
          absolute
          -bottom-40
          -right-28
          h-[430px]
          w-[430px]
          rounded-full
          bg-white/20
          blur-[100px]
        "
      />

      {/* CÍRCULO DECORATIVO */}
      <div
        className="
          contadorXV__circulo-decorativo
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-white/10
        "
      />

      {/* DESTELLOS */}
      <motion.div
        className="
          contadorXV__destello-izquierdo
          absolute
          left-[7%]
          top-20
          text-[#F5EBDD]/80
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
        <Sparkles size={30} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          contadorXV__destello-derecho
          absolute
          right-[8%]
          top-1/3
          text-white/75
        "
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.7, 1.1, 0.7],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      >
        <Sparkles size={38} strokeWidth={1.1} />
      </motion.div>

      <div
        className="
          contadorXV__contenedor
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >
        {/* ENCABEZADO */}
        <motion.div
          className="
            contadorXV__encabezado
            mx-auto
            max-w-4xl
            text-center
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
            duration: 0.9,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
        >
          {/* CORONA */}
          <motion.div
            className="
              contadorXV__corona
              mx-auto
              mb-5
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-white/10
              text-[#F5EBDD]
              shadow-[0_12px_35px_rgba(46,46,46,0.18)]
              backdrop-blur-md
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
            <Crown size={30} strokeWidth={1.3} />
          </motion.div>

          {/* ETIQUETA */}
          <p
            className="
              contadorXV__etiqueta
              mb-4
              font-playfair
              text-xs
              uppercase
              tracking-[0.42em]
              text-[#F5EBDD]/85
              sm:text-sm
            "
          >
            Mis XV años
          </p>

          {/* TÍTULO */}
          <h2
            className="
              contadorXV__titulo
              font-cursiveDancing
              text-5xl
              leading-tight
              text-white
              drop-shadow-[0_6px_18px_rgba(46,46,46,0.25)]
              sm:text-6xl
              md:text-7xl
            "
          >
            {titulo}
          </h2>

          {/* TEXTO */}
          <p
            className="
              contadorXV__texto
              mx-auto
              mt-7
              max-w-3xl
              font-playfair
              text-lg
              leading-relaxed
              text-white/90
              sm:text-xl
              md:text-2xl
            "
          >
            {texto}
          </p>

          {/* SEPARADOR */}
          <div
            className="
              contadorXV__separador
              mx-auto
              my-9
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                contadorXV__linea-izquierda
                h-px
                w-16
                bg-gradient-to-r
                from-transparent
                to-[#F5EBDD]/80
                sm:w-24
              "
            />

            <Sparkles
              size={20}
              strokeWidth={1.4}
              className="text-[#F5EBDD]"
            />

            <span
              className="
                contadorXV__linea-derecha
                h-px
                w-16
                bg-gradient-to-l
                from-transparent
                to-[#F5EBDD]/80
                sm:w-24
              "
            />
          </div>

          {/* FRASE */}
          <p
            className="
              contadorXV__frase
              font-cursiveDancing
              text-3xl
              text-[#F5EBDD]
              sm:text-4xl
            "
          >
            {frase}
          </p>
        </motion.div>

        {/* TARJETA CONTADOR */}
        <motion.div
          className="
            contadorXV__tarjeta
            relative
            mx-auto
            mt-14
            max-w-5xl
            overflow-hidden
            rounded-[2rem]
            border
            border-white/35
            bg-white/15
            p-5
            shadow-[0_30px_80px_rgba(48,38,76,0.35)]
            backdrop-blur-xl
            sm:p-8
            md:mt-16
          "
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          {/* BRILLO DE LA TARJETA */}
          <div
            className="
              contadorXV__tarjeta-brillo
              pointer-events-none
              absolute
              -right-16
              -top-20
              h-48
              w-48
              rounded-full
              bg-white/25
              blur-3xl
            "
          />

          <div
            className="
              contadorXV__cuadricula
              relative
              grid
              grid-cols-2
              gap-4
              sm:grid-cols-4
              sm:gap-5
            "
          >
            {elementosContador.map(
              ([etiqueta, valor], indice) => (
                <motion.div
                  key={etiqueta}
                  className="
                    contadorXV__unidad
                    group
                    relative
                    flex
                    min-h-[165px]
                    flex-col
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[1.6rem]
                    border
                    border-white/55
                    bg-gradient-to-b
                    from-white/95
                    to-[#F5EBDD]/90
                    px-3
                    py-6
                    text-center
                    shadow-[0_16px_40px_rgba(55,43,88,0.2)]
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
                    duration: 0.65,
                    delay: indice * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.025,
                  }}
                >
                  {/* BRILLO INTERIOR */}
                  <div
                    className="
                      contadorXV__unidad-brillo
                      pointer-events-none
                      absolute
                      -right-8
                      -top-8
                      h-24
                      w-24
                      rounded-full
                      bg-[#C8B6E2]/35
                      blur-2xl
                    "
                  />

                  {/* NÚMERO */}
                  <motion.span
                    key={`${etiqueta}-${valor}`}
                    className="
                      contadorXV__numero
                      relative
                      font-playfair
                      text-4xl
                      font-semibold
                      tabular-nums
                      text-[#5D4E8C]
                      sm:text-5xl
                    "
                    initial={{
                      opacity: 0.4,
                      scale: 0.92,
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

                  {/* LÍNEA */}
                  <div
                    className="
                      contadorXV__unidad-linea
                      my-4
                      h-px
                      w-10
                      bg-[#C8B6E2]
                      transition-all
                      duration-300
                      group-hover:w-14
                    "
                  />

                  {/* ETIQUETA */}
                  <span
                    className="
                      contadorXV__unidad-etiqueta
                      font-playfair
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#5D4E8C]/80
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
    </section>
  );
};

export default Contador;