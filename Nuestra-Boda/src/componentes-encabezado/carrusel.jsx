import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Camera, Sparkles } from "lucide-react";

const Carousel = () => {
  const images = [
    {
      src: "/carrusel01.png",
      alt: "Fotografía especial 1",
      position: "center",
    },
    {
      src: "/carrusel02.png",
      alt: "Fotografía especial 2",
      position: "center",
    },
    {
      src: "/carrusel03.png",
      alt: "Fotografía especial 3",
      position: "center",
    },
    {
      src: "/carrusel04.png",
      alt: "Fotografía especial 4",
      position: "center",
    },
  ];

  const [index, setIndex] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (pausado) return undefined;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length, pausado]);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
    pausarTemporalmente();
  };

  const prevImage = () => {
    setIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
    pausarTemporalmente();
  };

  const seleccionarImagen = (nuevoIndex) => {
    setIndex(nuevoIndex);
    pausarTemporalmente();
  };

  const pausarTemporalmente = () => {
    setPausado(true);

    window.clearTimeout(
      window.__carouselXVTimeout
    );

    window.__carouselXVTimeout = window.setTimeout(() => {
      setPausado(false);
    }, 7000);
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
        bg-gradient-to-b
        from-[#E8DFF2]
        via-[#FFFFFF]
        to-[#F5EBDD]
        px-4
        py-20
        sm:px-6
        sm:py-28
      "
    >
      {/* LUCES DE FONDO */}
      <div
        className="
          carouselXV__luz-superior
          pointer-events-none
          absolute
          -left-28
          -top-32
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#C8B6E2]/45
          blur-[110px]
        "
      />

      <div
        className="
          carouselXV__luz-inferior
          pointer-events-none
          absolute
          -bottom-32
          -right-24
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#5D4E8C]/20
          blur-[120px]
        "
      />

      {/* DESTELLOS */}
      <motion.div
        className="
          carouselXV__destello-izquierdo
          pointer-events-none
          absolute
          left-[7%]
          top-24
          text-[#5D4E8C]/40
        "
        animate={{
          opacity: [0.25, 1, 0.25],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={30} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          carouselXV__destello-derecho
          pointer-events-none
          absolute
          right-[8%]
          top-1/3
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

      <motion.div
        className="
          carouselXV__contenedor
          relative
          z-10
          mx-auto
          max-w-6xl
        "
        initial={{
          opacity: 0,
          y: 55,
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
        {/* ENCABEZADO */}
        <div
          className="
            carouselXV__encabezado
            mb-12
            text-center
          "
        >
          <motion.div
            className="
              carouselXV__icono
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
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Camera size={29} strokeWidth={1.4} />
          </motion.div>

          <p
            className="
              carouselXV__etiqueta
              font-playfair
              text-xs
              font-semibold
              uppercase
              tracking-[0.38em]
              text-[#5D4E8C]/65
              sm:text-sm
            "
          >
            Recuerdos especiales
          </p>

          <h2
            className="
              carouselXV__titulo
              mt-4
              font-cursiveDancing
              text-5xl
              leading-none
              text-[#5D4E8C]
              sm:text-6xl
              md:text-7xl
            "
          >
            Mis Momentos
          </h2>

          <div
            className="
              carouselXV__separador
              mx-auto
              mt-7
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
                to-[#5D4E8C]/45
                sm:w-24
              "
            />

            <Sparkles
              size={18}
              strokeWidth={1.3}
              className="text-[#5D4E8C]"
            />

            <span
              className="
                h-px
                w-16
                bg-gradient-to-l
                from-transparent
                to-[#5D4E8C]/45
                sm:w-24
              "
            />
          </div>

          <p
            className="
              carouselXV__descripcion
              mx-auto
              mt-6
              max-w-2xl
              font-playfair
              text-base
              leading-relaxed
              text-[#2E2E2E]/65
              sm:text-lg
            "
          >
            Cada fotografía guarda un instante especial de
            esta hermosa etapa de mi vida.
          </p>
        </div>

        {/* TARJETA PRINCIPAL */}
        <div
          className="
            carouselXV__tarjeta
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[2rem]
            border
            border-white/80
            bg-white/70
            p-3
            shadow-[0_30px_90px_rgba(93,78,140,0.2)]
            backdrop-blur-xl
            sm:rounded-[2.8rem]
            sm:p-5
          "
        >
          {/* VISOR */}
          <div
            className="
              carouselXV__visor
              relative
              h-[520px]
              w-full
              overflow-hidden
              rounded-[1.5rem]
              bg-[#DDD4E8]
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
                className="
                  carouselXV__imagen-contenedor
                  absolute
                  inset-0
                "
                initial={{
                  opacity: 0,
                  scale: 1.03,
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
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* FONDO DESENFOCADO */}
                <img
                  src={imagenActual.src}
                  alt=""
                  aria-hidden="true"
                  className="
                    carouselXV__imagen-fondo
                    absolute
                    inset-0
                    h-full
                    w-full
                    scale-110
                    object-cover
                    opacity-45
                    blur-2xl
                  "
                  style={{
                    objectPosition: imagenActual.position,
                  }}
                />

                {/* OVERLAY DEL FONDO */}
                <div
                  className="
                    carouselXV__imagen-overlay
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-[#5D4E8C]/15
                    via-black/5
                    to-[#2E2E2E]/25
                  "
                />

                {/* IMAGEN COMPLETA */}
                <motion.img
                  src={imagenActual.src}
                  alt={imagenActual.alt}
                  className="
                    carouselXV__imagen-principal
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
                    scale: 1.025,
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

            {/* SOMBRA SUPERIOR */}
            <div
              className="
                carouselXV__sombra-superior
                pointer-events-none
                absolute
                inset-x-0
                top-0
                z-20
                h-28
                bg-gradient-to-b
                from-black/30
                to-transparent
              "
            />

            {/* SOMBRA INFERIOR */}
            <div
              className="
                carouselXV__sombra-inferior
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                z-20
                h-32
                bg-gradient-to-t
                from-black/45
                to-transparent
              "
            />

            {/* CONTADOR */}
            <div
              className="
                carouselXV__contador
                absolute
                right-4
                top-4
                z-30
                rounded-full
                border
                border-white/30
                bg-[#2E2E2E]/35
                px-4
                py-2
                font-playfair
                text-sm
                tracking-[0.15em]
                text-white
                shadow-lg
                backdrop-blur-md
                sm:right-6
                sm:top-6
              "
            >
              {String(index + 1).padStart(2, "0")}
              <span className="mx-2 text-white/50">/</span>
              {String(images.length).padStart(2, "0")}
            </div>

            {/* BOTÓN IZQUIERDO */}
            <motion.button
              type="button"
              onClick={prevImage}
              aria-label="Ver fotografía anterior"
              className="
                carouselXV__boton-anterior
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
                border-white/35
                bg-[#5D4E8C]/85
                text-white
                shadow-[0_10px_30px_rgba(46,46,46,0.25)]
                backdrop-blur-md
                transition
                duration-300
                hover:bg-[#4B3E76]
                sm:left-6
                sm:h-13
                sm:w-13
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

            {/* BOTÓN DERECHO */}
            <motion.button
              type="button"
              onClick={nextImage}
              aria-label="Ver fotografía siguiente"
              className="
                carouselXV__boton-siguiente
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
                border-white/35
                bg-[#5D4E8C]/85
                text-white
                shadow-[0_10px_30px_rgba(46,46,46,0.25)]
                backdrop-blur-md
                transition
                duration-300
                hover:bg-[#4B3E76]
                sm:right-6
                sm:h-13
                sm:w-13
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

            {/* INDICADORES INFERIORES */}
            <div
              className="
                carouselXV__indicadores
                absolute
                bottom-5
                left-1/2
                z-30
                flex
                -translate-x-1/2
                items-center
                gap-2
              "
            >
              {images.map((imagen, i) => (
                <button
                  key={imagen.src}
                  type="button"
                  onClick={() => seleccionarImagen(i)}
                  aria-label={`Ver fotografía ${i + 1}`}
                  className="flex items-center justify-center"
                >
                  <motion.span
                    animate={{
                      width: index === i ? 34 : 9,
                      opacity: index === i ? 1 : 0.6,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      block
                      h-2
                      rounded-full
                      bg-white
                      shadow
                    "
                  />
                </button>
              ))}
            </div>
          </div>

          {/* MINIATURAS */}
          <div
            className="
              carouselXV__miniaturas
              mt-4
              flex
              gap-3
              overflow-x-auto
              px-1
              pb-2
              pt-1
              sm:mt-5
              sm:justify-center
            "
          >
            {images.map((imagen, i) => (
              <motion.button
                key={imagen.src}
                type="button"
                onClick={() => seleccionarImagen(i)}
                aria-label={`Seleccionar fotografía ${i + 1}`}
                className={`
                  carouselXV__miniatura
                  relative
                  h-20
                  min-w-[64px]
                  overflow-hidden
                  rounded-2xl
                  border-2
                  bg-[#E8DFF2]
                  shadow-md
                  transition
                  duration-300
                  sm:h-24
                  sm:min-w-[76px]
                  ${
                    index === i
                      ? "border-[#5D4E8C] opacity-100"
                      : "border-white opacity-60 hover:opacity-100"
                  }
                `}
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <img
                  src={imagen.src}
                  alt=""
                  className="
                    carouselXV__miniatura-imagen
                    h-full
                    w-full
                    object-cover
                  "
                  style={{
                    objectPosition: imagen.position,
                  }}
                />

                {index === i && (
                  <motion.div
                    layoutId="miniaturaActiva"
                    className="
                      carouselXV__miniatura-activa
                      absolute
                      inset-0
                      bg-[#5D4E8C]/10
                    "
                  />
                )}

                <span
                  className="
                    carouselXV__miniatura-numero
                    absolute
                    bottom-1
                    right-1
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#5D4E8C]/85
                    text-[10px]
                    text-white
                    backdrop-blur-sm
                  "
                >
                  {i + 1}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Carousel;