import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  Camera,
  Heart,
  Leaf,
  Sparkles,
} from "lucide-react";

const Carousel = () => {
  const images = [
    {
      src: "/Carrusel01.jpeg",
      alt: "Fotografía especial 1",
      position: "center",
    },
    {
      src: "/Carrusel02.jpeg",
      alt: "Fotografía especial 2",
      position: "center",
    },
    {
      src: "/Carrusel03.jpeg",
      alt: "Fotografía especial 3",
      position: "center",
    },
    {
      src: "/Carrusel04.jpeg",
      alt: "Fotografía especial 4",
      position: "center",
    },
    {
      src: "/Carrusel05.jpeg",
      alt: "Fotografía especial 5",
      position: "center",
    },
  ];

  const [index, setIndex] = useState(0);
  const [pausado, setPausado] = useState(false);
  const pausaTimeout = useRef(null);

  /* Precargar todas las fotografías */
  useEffect(() => {
    images.forEach(({ src }) => {
      const imagen = new Image();
      imagen.src = src;
    });
  }, []);

  /* Cambio automático */
  useEffect(() => {
    if (pausado) return undefined;

    const intervalo = window.setInterval(() => {
      setIndex((anterior) => {
        return (anterior + 1) % images.length;
      });
    }, 4500);

    return () => window.clearInterval(intervalo);
  }, [pausado, images.length]);

  /* Limpiar temporizador al desmontar */
  useEffect(() => {
    return () => {
      if (pausaTimeout.current) {
        window.clearTimeout(pausaTimeout.current);
      }
    };
  }, []);

  const pausarTemporalmente = () => {
    setPausado(true);

    if (pausaTimeout.current) {
      window.clearTimeout(pausaTimeout.current);
    }

    pausaTimeout.current = window.setTimeout(() => {
      setPausado(false);
    }, 7000);
  };

  const nextImage = () => {
    setIndex((anterior) => {
      return (anterior + 1) % images.length;
    });

    pausarTemporalmente();
  };

  const prevImage = () => {
    setIndex((anterior) => {
      return (
        (anterior - 1 + images.length) % images.length
      );
    });

    pausarTemporalmente();
  };

  const seleccionarImagen = (nuevoIndex) => {
    setIndex(nuevoIndex);
    pausarTemporalmente();
  };

  const imagenActual = images[index];

  return (
    <section
      className="
        carouselXV
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#FFF9F4]
        px-4
        py-20
        sm:px-6
        sm:py-24
        md:py-28
      "
    >
      {/* Fondos decorativos */}
      <div
        className="
          pointer-events-none
          absolute
          -left-28
          top-28
          h-72
          w-72
          rounded-full
          bg-[#E9B7C7]/20
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
          bg-[#B9A2D8]/20
          blur-3xl
        "
      />

      {/* Ramas superiores */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -left-5
          top-6
          flex
          -rotate-[28deg]
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
        <Leaf size={64} strokeWidth={1.1} />

        <Leaf
          size={44}
          strokeWidth={1.1}
          className="-ml-5 mt-10 rotate-45"
        />

        <Leaf
          size={34}
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
          rotate-[28deg]
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
          size={34}
          strokeWidth={1.1}
          className="mt-20 rotate-90"
        />

        <Leaf
          size={44}
          strokeWidth={1.1}
          className="-ml-5 mt-10 rotate-45"
        />

        <Leaf
          size={64}
          strokeWidth={1.1}
          className="-ml-5"
        />
      </motion.div>

      {/* Hojas laterales */}
      <div
        className="
          pointer-events-none
          absolute
          left-1
          top-[45%]
          hidden
          -rotate-[18deg]
          flex-col
          text-[#7F9275]
          opacity-55
          md:flex
        "
      >
        <Leaf size={52} strokeWidth={1} />

        <Leaf
          size={40}
          strokeWidth={1}
          className="-mt-3 ml-6 rotate-45"
        />

        <Leaf
          size={48}
          strokeWidth={1}
          className="-mt-2 rotate-12"
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          right-1
          top-[48%]
          hidden
          rotate-[18deg]
          flex-col
          items-end
          text-[#7F9275]
          opacity-55
          md:flex
        "
      >
        <Leaf size={52} strokeWidth={1} />

        <Leaf
          size={40}
          strokeWidth={1}
          className="-mt-3 mr-6 rotate-45"
        />

        <Leaf
          size={48}
          strokeWidth={1}
          className="-mt-2 rotate-12"
        />
      </div>

      {/* Destellos */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[28%]
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
        <Sparkles size={26} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[9%]
          top-[38%]
          text-[#C98DA3]
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
        <Sparkles size={30} strokeWidth={1.1} />
      </motion.div>

      <motion.div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
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
          amount: 0.15,
        }}
      >
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <div className="relative inline-block">
            <div
              className="
                pointer-events-none
                absolute
                -left-16
                top-1/2
                flex
                -translate-y-1/2
                -rotate-[25deg]
                text-[#7F9275]
                opacity-75
                sm:-left-24
              "
            >
              <Leaf size={42} strokeWidth={1.1} />

              <Leaf
                size={29}
                strokeWidth={1.1}
                className="-ml-3 mt-7 rotate-45"
              />
            </div>

            <motion.div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[#C9C9CF]
                bg-[#EEE7F5]
                text-[#6F568F]
                shadow-[0_12px_30px_rgba(111,86,143,0.14)]
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
              <Camera size={29} strokeWidth={1.35} />
            </motion.div>

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                top-1/2
                flex
                -translate-y-1/2
                rotate-[25deg]
                text-[#7F9275]
                opacity-75
                sm:-right-24
              "
            >
              <Leaf
                size={29}
                strokeWidth={1.1}
                className="mt-7 rotate-45"
              />

              <Leaf
                size={42}
                strokeWidth={1.1}
                className="-ml-3"
              />
            </div>
          </div>

          <p
            className="
              mt-5
              font-playfair
              text-xs
              font-semibold
              uppercase
              tracking-[0.38em]
              text-[#7F9275]
              sm:text-sm
            "
          >
            Recuerdos especiales
          </p>

          <h2
            className="
              mt-3
              font-cursiveDancing
              text-6xl
              leading-none
              text-[#6F568F]
              sm:text-7xl
              md:text-8xl
            "
          >
            Mis Momentos
          </h2>

          <div
            className="
              mx-auto
              mt-6
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
              mx-auto
              mt-6
              max-w-2xl
              font-playfair
              text-base
              leading-relaxed
              text-[#554B5E]/80
              sm:text-lg
            "
          >
            Cada fotografía guarda un instante especial de
            esta hermosa etapa de mi vida.
          </p>
        </div>

        {/* Marco general */}
        <div
          className="
            relative
            mx-auto
            max-w-5xl
            rounded-[2rem]
            border
            border-[#C9C9CF]
            bg-[#FFFDFC]
            p-3
            shadow-[0_28px_75px_rgba(111,86,143,0.18)]
            sm:rounded-[2.8rem]
            sm:p-5
          "
        >
          {/* Marco interior rosa */}
          <div
            className="
              pointer-events-none
              absolute
              inset-1.5
              rounded-[1.7rem]
              border
              border-[#E9B7C7]/55
              sm:rounded-[2.45rem]
            "
          />

          {/* Hojas del marco */}
          <div
            className="
              pointer-events-none
              absolute
              -left-6
              -top-8
              z-30
              flex
              -rotate-[32deg]
              text-[#7F9275]
            "
          >
            <Leaf size={64} strokeWidth={1.15} />

            <Leaf
              size={42}
              strokeWidth={1.15}
              className="-ml-5 mt-10 rotate-45"
            />
          </div>

          <div
            className="
              pointer-events-none
              absolute
              -right-6
              -top-8
              z-30
              flex
              rotate-[32deg]
              text-[#7F9275]
            "
          >
            <Leaf
              size={42}
              strokeWidth={1.15}
              className="mt-10 rotate-45"
            />

            <Leaf
              size={64}
              strokeWidth={1.15}
              className="-ml-5"
            />
          </div>

          <div
            className="
              pointer-events-none
              absolute
              -bottom-7
              -left-5
              z-30
              flex
              rotate-[30deg]
              text-[#7F9275]
            "
          >
            <Leaf size={68} strokeWidth={1.1} />

            <Leaf
              size={44}
              strokeWidth={1.1}
              className="-ml-5 mt-10 rotate-45"
            />
          </div>

          <div
            className="
              pointer-events-none
              absolute
              -bottom-7
              -right-5
              z-30
              flex
              -rotate-[30deg]
              text-[#7F9275]
            "
          >
            <Leaf
              size={44}
              strokeWidth={1.1}
              className="mt-10 rotate-45"
            />

            <Leaf
              size={68}
              strokeWidth={1.1}
              className="-ml-5"
            />
          </div>

          {/* Visor */}
          <div
            className="
              relative
              h-[520px]
              w-full
              overflow-hidden
              rounded-[1.5rem]
              bg-[#EEE7F5]
              sm:h-[650px]
              sm:rounded-[2.2rem]
              md:h-[720px]
            "
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{
                  opacity: 0,
                  scale: 1.02,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Fondo desenfocado */}
                <img
                  src={imagenActual.src}
                  alt=""
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    scale-110
                    object-cover
                    opacity-40
                    blur-2xl
                  "
                  style={{
                    objectPosition: imagenActual.position,
                  }}
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-[#6F568F]/10
                  "
                />

                {/* Fotografía completa */}
                <motion.img
                  src={imagenActual.src}
                  alt={imagenActual.alt}
                  className="
                    relative
                    z-10
                    h-full
                    w-full
                    object-contain
                  "
                  style={{
                    objectPosition: imagenActual.position,
                  }}
                  initial={{
                    scale: 1.02,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 4.5,
                    ease: "easeOut",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Contador */}
            <div
              className="
                absolute
                right-4
                top-4
                z-30
                rounded-full
                border
                border-white/60
                bg-[#6F568F]/85
                px-4
                py-2
                font-playfair
                text-sm
                tracking-[0.12em]
                text-white
                shadow-lg
                backdrop-blur-md
                sm:right-6
                sm:top-6
              "
            >
              {String(index + 1).padStart(2, "0")}

              <span className="mx-2 text-white/55">
                /
              </span>

              {String(images.length).padStart(2, "0")}
            </div>

            {/* Flecha izquierda */}
            <motion.button
              type="button"
              onClick={prevImage}
              aria-label="Ver fotografía anterior"
              className="
                absolute
                left-3
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/65
                bg-[#6F568F]/90
                text-white
                shadow-[0_10px_25px_rgba(43,31,57,0.25)]
                backdrop-blur-md
                sm:left-6
                sm:h-12
                sm:w-12
              "
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.92,
              }}
            >
              <FaChevronLeft size={18} />
            </motion.button>

            {/* Flecha derecha */}
            <motion.button
              type="button"
              onClick={nextImage}
              aria-label="Ver fotografía siguiente"
              className="
                absolute
                right-3
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/65
                bg-[#6F568F]/90
                text-white
                shadow-[0_10px_25px_rgba(43,31,57,0.25)]
                backdrop-blur-md
                sm:right-6
                sm:h-12
                sm:w-12
              "
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.92,
              }}
            >
              <FaChevronRight size={18} />
            </motion.button>
          </div>

          {/* Controles inferiores */}
          <div
            className="
              relative
              z-20
              flex
              flex-col
              items-center
              px-3
              pb-3
              pt-6
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                gap-2
              "
            >
              {images.map((imagen, i) => (
                <button
                  key={imagen.src}
                  type="button"
                  onClick={() => seleccionarImagen(i)}
                  aria-label={`Ver fotografía ${i + 1}`}
                  className="
                    flex
                    h-6
                    items-center
                    justify-center
                  "
                >
                  <motion.span
                    animate={{
                      width: index === i ? 32 : 9,
                      opacity: index === i ? 1 : 0.4,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`
                      block
                      h-2
                      rounded-full
                      ${
                        index === i
                          ? "bg-[#6F568F]"
                          : "bg-[#C9C9CF]"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            <p
              className="
                mt-2
                font-playfair
                text-xs
                uppercase
                tracking-[0.22em]
                text-[#C98DA3]
              "
            >
              {index + 1} / {images.length}
            </p>
          </div>
        </div>

        {/* Hojas y separador inferior */}
        <div
          className="
            mx-auto
            mt-12
            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              flex
              items-center
              -rotate-[15deg]
              text-[#7F9275]
            "
          >
            <Leaf size={42} strokeWidth={1.1} />

            <Leaf
              size={29}
              strokeWidth={1.1}
              className="-ml-3 mt-5 rotate-45"
            />
          </div>

          <span
            className="
              mx-3
              h-px
              w-10
              bg-[#C9C9CF]
              sm:w-20
            "
          />

          <Sparkles
            size={18}
            strokeWidth={1.2}
            className="text-[#C98DA3]"
          />

          <span
            className="
              mx-3
              h-px
              w-10
              bg-[#C9C9CF]
              sm:w-20
            "
          />

          <div
            className="
              flex
              items-center
              rotate-[15deg]
              text-[#7F9275]
            "
          >
            <Leaf
              size={29}
              strokeWidth={1.1}
              className="mt-5 rotate-45"
            />

            <Leaf
              size={42}
              strokeWidth={1.1}
              className="-ml-3"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Carousel;