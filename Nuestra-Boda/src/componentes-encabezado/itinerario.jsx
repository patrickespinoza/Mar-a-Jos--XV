import React from "react";
import { motion } from "framer-motion";
import {
  CakeSlice,
  Camera,
  Crown,
  GlassWater,
  Heart,
  Music2,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

const Itinerario = () => {
  const eventos = [
    {
      hora: "4:30 PM",
      titulo: "Recepción",
      descripcion:
        "Daremos la bienvenida a todos nuestros invitados.",
      icono: Crown,
    },
    {
      hora: "5:00 PM",
      titulo: "Entrada de la quinceañera",
      descripcion:
        "El momento especial en el que dará inicio la celebración.",
      icono: Sparkles,
    },
    {
      hora: "5:30 PM",
      titulo: "Vals",
      descripcion:
        "Una tradición llena de emoción y recuerdos inolvidables.",
      icono: Heart,
    },
    {
      hora: "6:00 PM",
      titulo: "Cena",
      descripcion:
        "Compartiremos una deliciosa cena en compañía de todos.",
      icono: UtensilsCrossed,
    },
    {
      hora: "7:00 PM",
      titulo: "Brindis",
      descripcion:
        "Levantaremos nuestras copas para celebrar esta nueva etapa.",
      icono: GlassWater,
    },
    {
      hora: "7:30 PM",
      titulo: "Pastel",
      descripcion:
        "Disfrutaremos juntos de uno de los momentos más dulces.",
      icono: CakeSlice,
    },
    {
      hora: "8:00 PM",
      titulo: "Sesión de fotografías",
      descripcion:
        "Un momento para guardar recuerdos junto a familiares y amigos.",
      icono: Camera,
    },
    {
      hora: "8:30 PM",
      titulo: "Baile",
      descripcion:
        "La pista estará lista para disfrutar y celebrar toda la noche.",
      icono: Music2,
    },
  ];

  return (
    <section
      className="
        itinerarioXV
        relative
        isolate
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-[#E8DFF2]
        via-[#FFFFFF]
        to-[#F5EBDD]
        px-5
        py-20
        sm:px-8
        sm:py-28
      "
    >
      {/* LUCES DECORATIVAS */}
      <div
        className="
          itinerarioXV__luz-superior
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#C8B6E2]/45
          blur-[110px]
        "
      />

      <div
        className="
          itinerarioXV__luz-inferior
          pointer-events-none
          absolute
          -bottom-36
          -right-28
          h-[440px]
          w-[440px]
          rounded-full
          bg-[#5D4E8C]/18
          blur-[120px]
        "
      />

      {/* DESTELLOS */}
      <motion.div
        className="
          itinerarioXV__destello-izquierdo
          pointer-events-none
          absolute
          left-[7%]
          top-24
          text-[#5D4E8C]/45
        "
        animate={{
          opacity: [0.25, 1, 0.25],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 3.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={30} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          itinerarioXV__destello-derecho
          pointer-events-none
          absolute
          bottom-24
          right-[8%]
          text-[#C8B6E2]
        "
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.7, 1.15, 0.7],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkles size={38} strokeWidth={1.1} />
      </motion.div>

      <div
        className="
          itinerarioXV__contenedor
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >
        {/* ENCABEZADO */}
        <motion.div
          className="
            itinerarioXV__encabezado
            mx-auto
            mb-16
            max-w-3xl
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
            amount: 0.3,
          }}
        >
          <motion.div
            className="
              itinerarioXV__corona
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
              bg-white/75
              text-[#5D4E8C]
              shadow-[0_12px_30px_rgba(93,78,140,0.15)]
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
            <Crown size={30} strokeWidth={1.35} />
          </motion.div>

          <p
            className="
              itinerarioXV__etiqueta
              font-playfair
              text-xs
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#5D4E8C]/65
              sm:text-sm
            "
          >
            Una noche inolvidable
          </p>

          <h2
            className="
              itinerarioXV__titulo
              mt-4
              font-cursiveDancing
              text-5xl
              leading-none
              text-[#5D4E8C]
              sm:text-6xl
              md:text-7xl
            "
          >
            Itinerario
          </h2>

          <div
            className="
              itinerarioXV__separador
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
                h-px
                w-16
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
                h-px
                w-16
                bg-gradient-to-l
                from-transparent
                to-[#5D4E8C]/40
                sm:w-24
              "
            />
          </div>

          <p
            className="
              itinerarioXV__descripcion
              mx-auto
              max-w-2xl
              font-playfair
              text-base
              leading-8
              text-[#2E2E2E]/70
              sm:text-lg
            "
          >
            Estos serán algunos de los momentos especiales que
            viviremos durante la celebración.
          </p>
        </motion.div>

        {/* LÍNEA DEL TIEMPO */}
        <div
          className="
            itinerarioXV__timeline
            relative
            mx-auto
            max-w-5xl
          "
        >
          {/* LÍNEA CENTRAL EN ESCRITORIO */}
          <div
            className="
              itinerarioXV__linea-central
              absolute
              left-6
              top-0
              h-full
              w-px
              bg-gradient-to-b
              from-transparent
              via-[#5D4E8C]/35
              to-transparent
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="itinerarioXV__eventos space-y-10 md:space-y-14">
            {eventos.map((evento, index) => {
              const Icono = evento.icono;
              const esIzquierda = index % 2 === 0;

              return (
                <motion.div
                  key={`${evento.hora}-${evento.titulo}`}
                  className={`
                    itinerarioXV__evento
                    relative
                    grid
                    grid-cols-[48px_1fr]
                    items-center
                    gap-5
                    md:grid-cols-[1fr_80px_1fr]
                    md:gap-8
                  `}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                >
                  {/* TARJETA IZQUIERDA EN ESCRITORIO */}
                  <div
                    className={`
                      itinerarioXV__lado-izquierdo
                      hidden
                      md:block
                      ${
                        esIzquierda
                          ? "md:col-start-1"
                          : "md:col-start-3"
                      }
                    `}
                  >
                    <motion.div
                      className={`
                        itinerarioXV__tarjeta
                        relative
                        overflow-hidden
                        rounded-[2rem]
                        border
                        border-white/80
                        bg-white/75
                        px-7
                        py-7
                        shadow-[0_18px_50px_rgba(93,78,140,0.14)]
                        backdrop-blur-xl
                        ${
                          esIzquierda
                            ? "text-right"
                            : "text-left"
                        }
                      `}
                      whileHover={{
                        y: -5,
                        scale: 1.015,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div
                        className="
                          itinerarioXV__tarjeta-brillo
                          pointer-events-none
                          absolute
                          -right-12
                          -top-12
                          h-32
                          w-32
                          rounded-full
                          bg-[#C8B6E2]/30
                          blur-2xl
                        "
                      />

                      <p
                        className="
                          itinerarioXV__hora
                          relative
                          font-playfair
                          text-sm
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[#5D4E8C]/65
                        "
                      >
                        {evento.hora}
                      </p>

                      <h3
                        className="
                          itinerarioXV__evento-titulo
                          relative
                          mt-3
                          font-cursiveDancing
                          text-4xl
                          text-[#5D4E8C]
                        "
                      >
                        {evento.titulo}
                      </h3>

                      <p
                        className="
                          itinerarioXV__evento-descripcion
                          relative
                          mt-4
                          font-playfair
                          text-base
                          leading-7
                          text-[#2E2E2E]/65
                        "
                      >
                        {evento.descripcion}
                      </p>
                    </motion.div>
                  </div>

                  {/* ICONO CENTRAL */}
                  <motion.div
                    className="
                      itinerarioXV__icono-central
                      relative
                      z-10
                      col-start-1
                      row-start-1
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-[#F5EBDD]
                      bg-[#5D4E8C]
                      text-white
                      shadow-[0_10px_30px_rgba(93,78,140,0.3)]
                      md:col-start-2
                      md:h-16
                      md:w-16
                    "
                    whileHover={{
                      scale: 1.12,
                      rotate: 5,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <Icono
                      size={22}
                      strokeWidth={1.5}
                      className="md:h-7 md:w-7"
                    />

                    <motion.span
                      className="
                        itinerarioXV__icono-pulso
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-[#5D4E8C]
                      "
                      animate={{
                        scale: [1, 1.45],
                        opacity: [0.45, 0],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: index * 0.15,
                      }}
                    />
                  </motion.div>

                  {/* TARJETA MÓVIL */}
                  <motion.div
                    className="
                      itinerarioXV__tarjeta-movil
                      relative
                      col-start-2
                      row-start-1
                      overflow-hidden
                      rounded-[1.7rem]
                      border
                      border-white/80
                      bg-white/80
                      px-5
                      py-6
                      shadow-[0_16px_40px_rgba(93,78,140,0.12)]
                      backdrop-blur-xl
                      md:hidden
                    "
                    whileHover={{
                      y: -4,
                    }}
                  >
                    <div
                      className="
                        itinerarioXV__tarjeta-movil-brillo
                        pointer-events-none
                        absolute
                        -right-10
                        -top-10
                        h-28
                        w-28
                        rounded-full
                        bg-[#C8B6E2]/35
                        blur-2xl
                      "
                    />

                    <p
                      className="
                        itinerarioXV__hora-movil
                        relative
                        font-playfair
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#5D4E8C]/65
                      "
                    >
                      {evento.hora}
                    </p>

                    <h3
                      className="
                        itinerarioXV__titulo-movil
                        relative
                        mt-2
                        font-cursiveDancing
                        text-3xl
                        text-[#5D4E8C]
                      "
                    >
                      {evento.titulo}
                    </h3>

                    <p
                      className="
                        itinerarioXV__descripcion-movil
                        relative
                        mt-3
                        font-playfair
                        text-sm
                        leading-6
                        text-[#2E2E2E]/65
                      "
                    >
                      {evento.descripcion}
                    </p>
                  </motion.div>

                  {/* ESPACIO VACÍO EN ESCRITORIO */}
                  <div
                    className={`
                      itinerarioXV__espacio
                      hidden
                      md:block
                      ${
                        esIzquierda
                          ? "md:col-start-3"
                          : "md:col-start-1"
                      }
                    `}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MENSAJE FINAL */}
        <motion.div
          className="
            itinerarioXV__mensaje-final
            mx-auto
            mt-16
            max-w-2xl
            text-center
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
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <Sparkles
            size={24}
            strokeWidth={1.3}
            className="mx-auto text-[#5D4E8C]"
          />

          <p
            className="
              mt-5
              font-cursiveDancing
              text-4xl
              text-[#5D4E8C]
              sm:text-5xl
            "
          >
            ¡Disfrutemos juntos cada momento!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Itinerario;