import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Copy,
  CreditCard,
  Gift,
  Sparkles,
  X,
} from "lucide-react";

const Regalos = ({
  banco = "Santander",
  numeroCuenta = "1234 5678 9012 3456",
  titular = "Juan Pérez",
}) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    if (!mostrarModal) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setMostrarModal(false);
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [mostrarModal]);

  const copiarCuenta = async () => {
    try {
      await navigator.clipboard.writeText(numeroCuenta);
      setCopiado(true);

      window.setTimeout(() => {
        setCopiado(false);
      }, 2200);
    } catch (error) {
      console.error("No fue posible copiar la cuenta:", error);
    }
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setCopiado(false);
  };

  return (
    <section
      className="
        regalosXV
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
      {/* LUCES DECORATIVAS */}
      <div
        className="
          regalosXV__luz-superior
          pointer-events-none
          absolute
          -left-28
          -top-28
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#C8B6E2]/40
          blur-[105px]
        "
      />

      <div
        className="
          regalosXV__luz-inferior
          pointer-events-none
          absolute
          -bottom-32
          -right-24
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#5D4E8C]/18
          blur-[115px]
        "
      />

      {/* CÍRCULOS DECORATIVOS */}
      <div
        className="
          regalosXV__circulo-izquierdo
          pointer-events-none
          absolute
          left-8
          top-28
          h-36
          w-36
          rounded-full
          border
          border-[#5D4E8C]/10
        "
      />

      <div
        className="
          regalosXV__circulo-derecho
          pointer-events-none
          absolute
          bottom-24
          right-8
          h-48
          w-48
          rounded-full
          border
          border-[#C8B6E2]/40
        "
      />

      {/* DESTELLOS */}
      <motion.div
        className="
          regalosXV__destello-izquierdo
          pointer-events-none
          absolute
          left-[8%]
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
          regalosXV__destello-derecho
          pointer-events-none
          absolute
          bottom-24
          right-[9%]
          text-[#C8B6E2]
        "
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.7, 1.2, 0.7],
          rotate: [0, -18, 0],
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

      {/* TARJETA PRINCIPAL */}
      <motion.div
        className="
          regalosXV__tarjeta-principal
          relative
          z-10
          mx-auto
          max-w-5xl
          overflow-hidden
          rounded-[2.5rem]
          border
          border-white/85
          bg-white/70
          px-6
          py-14
          text-center
          shadow-[0_30px_90px_rgba(93,78,140,0.17)]
          backdrop-blur-xl
          sm:px-12
          sm:py-16
          md:px-16
        "
        initial={{
          opacity: 0,
          y: 55,
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
        {/* BRILLOS INTERNOS */}
        <div
          className="
            regalosXV__tarjeta-luz-superior
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
            regalosXV__tarjeta-luz-inferior
            pointer-events-none
            absolute
            -bottom-24
            -left-20
            h-64
            w-64
            rounded-full
            bg-[#F5EBDD]
            blur-3xl
          "
        />

        <div className="regalosXV__contenido relative">
          {/* ICONO PRINCIPAL */}
          <motion.div
            className="
              regalosXV__icono-principal
              relative
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border
              border-[#5D4E8C]/15
              bg-gradient-to-br
              from-[#F5EBDD]
              to-[#E8DFF2]
              text-[#5D4E8C]
              shadow-[0_14px_35px_rgba(93,78,140,0.18)]
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
            <Gift size={36} strokeWidth={1.35} />

            <motion.span
              className="
                regalosXV__icono-destello
                absolute
                -right-1
                top-0
                text-[#5D4E8C]
              "
              animate={{
                opacity: [0, 1, 0],
                scale: [0.6, 1.2, 0.6],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
              }}
            >
              <Sparkles size={18} strokeWidth={1.3} />
            </motion.span>
          </motion.div>

          {/* ENCABEZADO */}
          <p
            className="
              regalosXV__etiqueta
              mt-7
              font-playfair
              text-xs
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#5D4E8C]/65
              sm:text-sm
            "
          >
            Con mucho cariño
          </p>

          <h2
            className="
              regalosXV__titulo
              mt-4
              font-cursiveDancing
              text-5xl
              leading-none
              text-[#5D4E8C]
              sm:text-6xl
              md:text-7xl
            "
          >
            Mesa de Regalos
          </h2>

          {/* SEPARADOR */}
          <div
            className="
              regalosXV__separador
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
                regalosXV__linea-izquierda
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
                regalosXV__linea-derecha
                h-px
                w-16
                bg-gradient-to-l
                from-transparent
                to-[#5D4E8C]/40
                sm:w-24
              "
            />
          </div>

          {/* MENSAJE */}
          <p
            className="
              regalosXV__mensaje
              mx-auto
              max-w-2xl
              font-playfair
              text-lg
              leading-9
              text-[#2E2E2E]/75
              sm:text-xl
              sm:leading-10
            "
          >
            Tu presencia es el regalo más importante para mí.
            Será muy especial compartir contigo esta noche
            llena de magia y alegría.
          </p>

          <p
            className="
              regalosXV__mensaje-secundario
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-[#2E2E2E]/65
              sm:text-lg
            "
          >
            Si deseas obsequiarme un detalle, puedes hacerlo
            mediante transferencia bancaria.
          </p>

          {/* TARJETA DE OPCIÓN */}
          <motion.div
            className="
              regalosXV__opcion
              mx-auto
              mt-10
              max-w-xl
              rounded-[2rem]
              border
              border-[#C8B6E2]/45
              bg-gradient-to-br
              from-[#F5EBDD]/85
              to-[#E8DFF2]/80
              px-5
              py-8
              shadow-[0_14px_40px_rgba(93,78,140,0.1)]
              sm:px-8
            "
            whileHover={{
              y: -5,
              scale: 1.01,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div
              className="
                regalosXV__opcion-icono
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#5D4E8C]
                text-white
                shadow-[0_10px_25px_rgba(93,78,140,0.25)]
              "
            >
              <CreditCard size={26} strokeWidth={1.5} />
            </div>

            <h3
              className="
                regalosXV__opcion-titulo
                mt-5
                font-playfair
                text-2xl
                text-[#2E2E2E]
              "
            >
              Transferencia bancaria
            </h3>

            <p
              className="
                regalosXV__opcion-texto
                mt-3
                text-base
                leading-7
                text-[#2E2E2E]/60
              "
            >
              Consulta los datos de la cuenta de forma segura.
            </p>
          </motion.div>

          {/* BOTÓN PARA ABRIR MODAL */}
          <motion.button
            type="button"
            onClick={() => setMostrarModal(true)}
            className="
              regalosXV__boton-datos
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
              tracking-[0.16em]
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
            <CreditCard size={19} strokeWidth={1.5} />
            Ver datos bancarios
          </motion.button>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              regalosXV__modal-fondo
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              overflow-y-auto
              bg-[#2E2E2E]/75
              px-5
              py-8
              backdrop-blur-md
            "
            onClick={cerrarModal}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="titulo-datos-bancarios"
              onClick={(event) => event.stopPropagation()}
              className="
                regalosXV__modal
                relative
                w-full
                max-w-md
                overflow-hidden
                rounded-[2.3rem]
                border
                border-white/60
                bg-gradient-to-b
                from-[#FFFFFF]
                via-[#F5EBDD]
                to-[#E8DFF2]
                px-6
                py-8
                text-center
                shadow-[0_30px_90px_rgba(0,0,0,0.4)]
                sm:px-8
                sm:py-10
              "
              initial={{
                opacity: 0,
                scale: 0.86,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.88,
                y: 40,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* BRILLOS DEL MODAL */}
              <div
                className="
                  regalosXV__modal-brillo-superior
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-52
                  w-52
                  rounded-full
                  bg-[#C8B6E2]/45
                  blur-3xl
                "
              />

              <div
                className="
                  regalosXV__modal-brillo-inferior
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-20
                  h-52
                  w-52
                  rounded-full
                  bg-white/80
                  blur-3xl
                "
              />

              {/* BOTÓN CERRAR */}
              <motion.button
                type="button"
                onClick={cerrarModal}
                aria-label="Cerrar datos bancarios"
                className="
                  regalosXV__modal-cerrar
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#5D4E8C]/15
                  bg-white/70
                  text-[#5D4E8C]
                  shadow-sm
                  backdrop-blur-md
                "
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                <X size={20} />
              </motion.button>

              <div className="regalosXV__modal-contenido relative z-10">
                {/* ICONO */}
                <div
                  className="
                    regalosXV__modal-icono
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#5D4E8C]
                    text-white
                    shadow-[0_12px_30px_rgba(93,78,140,0.28)]
                  "
                >
                  <CreditCard size={29} strokeWidth={1.4} />
                </div>

                <p
                  className="
                    regalosXV__modal-etiqueta
                    mt-6
                    font-playfair
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.32em]
                    text-[#5D4E8C]/65
                  "
                >
                  Datos bancarios
                </p>

                <h3
                  id="titulo-datos-bancarios"
                  className="
                    regalosXV__modal-titulo
                    mt-3
                    font-cursiveDancing
                    text-4xl
                    text-[#5D4E8C]
                    sm:text-5xl
                  "
                >
                  {banco}
                </h3>

                {/* TARJETA BANCARIA */}
                <div
                  className="
                    regalosXV__tarjeta-bancaria
                    relative
                    mt-7
                    overflow-hidden
                    rounded-[1.7rem]
                    bg-gradient-to-br
                    from-[#5D4E8C]
                    via-[#6D5A9C]
                    to-[#3F3468]
                    px-6
                    py-7
                    text-left
                    text-white
                    shadow-[0_20px_45px_rgba(93,78,140,0.35)]
                  "
                >
                  <div
                    className="
                      regalosXV__tarjeta-bancaria-brillo
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-36
                      w-36
                      rounded-full
                      bg-white/15
                      blur-2xl
                    "
                  />

                  <div
                    className="
                      regalosXV__tarjeta-encabezado
                      relative
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <CreditCard
                      size={27}
                      strokeWidth={1.35}
                      className="text-[#F5EBDD]"
                    />

                    <span
                      className="
                        regalosXV__tarjeta-banco
                        font-playfair
                        text-sm
                        uppercase
                        tracking-[0.18em]
                        text-white/80
                      "
                    >
                      {banco}
                    </span>
                  </div>

                  {/* CHIP */}
                  <div
                    className="
                      regalosXV__chip
                      relative
                      mt-7
                      h-9
                      w-12
                      overflow-hidden
                      rounded-md
                      bg-gradient-to-br
                      from-[#F5EBDD]
                      to-[#C7A85A]
                      shadow-inner
                    "
                  >
                    <span
                      className="
                        absolute
                        left-1/2
                        top-0
                        h-full
                        w-px
                        -translate-x-1/2
                        bg-[#8E7542]/35
                      "
                    />

                    <span
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-px
                        w-full
                        -translate-y-1/2
                        bg-[#8E7542]/35
                      "
                    />
                  </div>

                  <p
                    className="
                      regalosXV__numero-cuenta
                      relative
                      mt-7
                      break-words
                      font-playfair
                      text-lg
                      tracking-[0.13em]
                      text-white
                      sm:text-xl
                    "
                  >
                    {numeroCuenta}
                  </p>

                  <div
                    className="
                      regalosXV__titular-contenedor
                      relative
                      mt-6
                    "
                  >
                    <p
                      className="
                        regalosXV__titular-etiqueta
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-white/55
                      "
                    >
                      Titular
                    </p>

                    <p
                      className="
                        regalosXV__titular
                        mt-1
                        font-playfair
                        text-base
                        text-white/95
                      "
                    >
                      {titular}
                    </p>
                  </div>
                </div>

                {/* BOTÓN COPIAR */}
                <motion.button
                  type="button"
                  onClick={copiarCuenta}
                  className={`
                    regalosXV__boton-copiar
                    mt-7
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    px-6
                    py-4
                    font-playfair
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    shadow-[0_12px_30px_rgba(93,78,140,0.18)]
                    transition
                    duration-300
                    ${
                      copiado
                        ? "bg-[#C8B6E2] text-[#3F3468]"
                        : "bg-[#5D4E8C] text-white hover:bg-[#4B3E76]"
                    }
                  `}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  {copiado ? (
                    <>
                      <Check size={19} strokeWidth={2} />
                      Número copiado
                    </>
                  ) : (
                    <>
                      <Copy size={18} strokeWidth={1.7} />
                      Copiar número
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {copiado && (
                    <motion.p
                      className="
                        regalosXV__mensaje-copiado
                        mt-4
                        text-sm
                        text-[#5D4E8C]
                      "
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -5,
                      }}
                    >
                      La cuenta se copió correctamente.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Regalos;