import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Heart,
  Leaf,
  MessageCircle,
  Send,
  Sparkles,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

const Confirmacion = () => {
  const numeroWhatsApp = "528139939942";

  const [nombreInvitado, setNombreInvitado] =
    useState("");
  const [mensajeInvitado, setMensajeInvitado] =
    useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [error, setError] = useState("");

  const seleccionarAsistencia = (respuesta) => {
    setAsistencia(respuesta);
    setError("");

    if (respuesta === "No podré asistir") {
      setInvitados("");
    }
  };

  const enviarConfirmacion = () => {
    const nombreLimpio = nombreInvitado.trim();
    const mensajeLimpio = mensajeInvitado.trim();

    if (!nombreLimpio || !asistencia) {
      setError(
        "Escribe tu nombre y selecciona si podrás asistir."
      );
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (!invitados || Number(invitados) < 1)
    ) {
      setError("Indica el número de invitados.");
      return;
    }

    setError("");

    const cantidad =
      asistencia === "Sí asistiré"
        ? Number(invitados)
        : 0;

    const textoWhatsApp = [
      "✨ CONFIRMACIÓN DE ASISTENCIA ✨",
      "",
      `👤 Nombre: ${nombreLimpio}`,
      `💜 Asistencia: ${asistencia}`,
      ...(asistencia === "Sí asistiré"
        ? [
            `👥 Número de invitados: ${cantidad}`,
          ]
        : []),
      `💌 Mensaje: ${
        mensajeLimpio || "Sin mensaje adicional"
      }`,
    ].join("\n");

    const enlaceWhatsApp =
      `https://wa.me/${numeroWhatsApp}` +
      `?text=${encodeURIComponent(textoWhatsApp)}`;

    window.open(
      enlaceWhatsApp,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const claseCampo = `
    w-full
    rounded-2xl
    border
    border-[#C9C9CF]
    bg-white
    font-playfair
    text-[#554B5E]
    outline-none
    transition
    duration-300
    placeholder:text-[#554B5E]/35
    focus:border-[#B9A2D8]
    focus:ring-4
    focus:ring-[#B9A2D8]/20
  `;

  return (
    <section
      className="
        confirmacionXV
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#6F568F]
        px-4
        py-20
        sm:px-8
        sm:py-24
        md:py-28
      "
    >
      {/* Luces de fondo */}
      <div
        className="
          pointer-events-none
          absolute
          -left-28
          -top-28
          h-80
          w-80
          rounded-full
          bg-[#E9B7C7]/20
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
          bg-white/15
          blur-3xl
        "
      />

      {/* Hojas superiores */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -left-5
          top-7
          flex
          -rotate-[30deg]
          text-[#A9B79E]
          opacity-85
        "
        initial={{
          opacity: 0,
          x: -30,
        }}
        whileInView={{
          opacity: 0.85,
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
          size={43}
          strokeWidth={1.1}
          className="-ml-5 mt-10 rotate-45"
        />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          -right-5
          top-7
          flex
          rotate-[30deg]
          text-[#A9B79E]
          opacity-85
        "
        initial={{
          opacity: 0,
          x: 30,
        }}
        whileInView={{
          opacity: 0.85,
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
          size={43}
          strokeWidth={1.1}
          className="mt-10 rotate-45"
        />

        <Leaf
          size={64}
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
          text-[#A9B79E]
          opacity-75
        "
      >
        <Leaf size={72} strokeWidth={1} />

        <Leaf
          size={46}
          strokeWidth={1}
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
          text-[#A9B79E]
          opacity-75
        "
      >
        <Leaf
          size={46}
          strokeWidth={1}
          className="mt-11 rotate-45"
        />

        <Leaf
          size={72}
          strokeWidth={1}
          className="-ml-6"
        />
      </div>

      {/* Destellos */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[30%]
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
        <Sparkles size={29} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-[22%]
          right-[8%]
          text-[#E9B7C7]
        "
        animate={{
          opacity: [0.25, 0.95, 0.25],
          scale: [0.75, 1.15, 0.75],
          rotate: [0, -18, 0],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkles size={36} strokeWidth={1.1} />
      </motion.div>

      {/* Encabezado */}
      <motion.div
        className="
          relative
          z-10
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
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >
        <p
          className="
            font-playfair
            text-xs
            font-semibold
            uppercase
            tracking-[0.4em]
            text-[#A9B79E]
            sm:text-sm
          "
        >
          RSVP
        </p>

        <h2
          className="
            mt-3
            font-cursiveDancing
            text-6xl
            leading-none
            text-white
            sm:text-7xl
            md:text-8xl
          "
        >
          Confirmación
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
            className="
              fill-[#E9B7C7]/40
              text-[#E9B7C7]
            "
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
            font-cursiveDancing
            text-3xl
            text-[#F3CBD7]
            sm:text-4xl
          "
        >
          ¿Nos acompañas?
        </p>

        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            font-playfair
            text-base
            leading-8
            text-white/85
            sm:text-lg
          "
        >
          Tu presencia hará de esta celebración un momento
          todavía más especial. Confirma tu asistencia por
          medio de WhatsApp.
        </p>
      </motion.div>

      {/* Tarjeta del formulario */}
      <motion.div
        className="
          relative
          z-10
          mx-auto
          mt-11
          max-w-3xl
          overflow-hidden
          rounded-[2rem]
          border
          border-[#C9C9CF]
          bg-[#FFF9F4]
          px-5
          py-10
          shadow-[0_30px_90px_rgba(37,28,66,0.38)]
          sm:px-10
          sm:py-12
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
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.15,
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
            bg-[#E9B7C7]
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
            opacity-65
          "
        >
          <Leaf size={57} strokeWidth={1.05} />

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
            opacity-65
          "
        >
          <Leaf
            size={34}
            strokeWidth={1.05}
            className="mt-8 rotate-45"
          />

          <Leaf
            size={57}
            strokeWidth={1.05}
            className="-ml-4"
          />
        </div>

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-2xl
            space-y-5
          "
        >
          {/* Nombre */}
          <div>
            <label
              htmlFor="nombreInvitado"
              className="
                mb-2
                block
                font-playfair
                text-sm
                font-semibold
                text-[#6F568F]
              "
            >
              Nombre completo
            </label>

            <div className="relative">
              <UserRound
                size={20}
                strokeWidth={1.5}
                className="
                  pointer-events-none
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-[#6F568F]/55
                "
              />

              <input
                id="nombreInvitado"
                type="text"
                autoComplete="name"
                placeholder="Nombre y apellido"
                value={nombreInvitado}
                onChange={(event) => {
                  setNombreInvitado(event.target.value);
                  setError("");
                }}
                className={`
                  ${claseCampo}
                  py-4
                  pl-14
                  pr-5
                `}
              />
            </div>
          </div>

          {/* Asistencia */}
          <fieldset>
            <legend
              className="
                mb-3
                font-playfair
                text-sm
                font-semibold
                text-[#6F568F]
              "
            >
              ¿Podrás acompañarme?
            </legend>

            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
              "
            >
              <motion.button
                type="button"
                onClick={() =>
                  seleccionarAsistencia("Sí asistiré")
                }
                className={`
                  flex
                  min-h-[70px]
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  px-5
                  py-4
                  font-playfair
                  transition
                  duration-300
                  ${
                    asistencia === "Sí asistiré"
                      ? "border-[#6F568F] bg-[#6F568F] text-white shadow-[0_12px_30px_rgba(111,86,143,0.25)]"
                      : "border-[#C9C9CF] bg-white text-[#6F568F] hover:bg-[#EEE7F5]"
                  }
                `}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Check size={20} strokeWidth={2} />
                Sí asistiré
              </motion.button>

              <motion.button
                type="button"
                onClick={() =>
                  seleccionarAsistencia(
                    "No podré asistir"
                  )
                }
                className={`
                  flex
                  min-h-[70px]
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  px-5
                  py-4
                  font-playfair
                  transition
                  duration-300
                  ${
                    asistencia === "No podré asistir"
                      ? "border-[#C98DA3] bg-[#C98DA3] text-white shadow-[0_12px_30px_rgba(201,141,163,0.25)]"
                      : "border-[#C9C9CF] bg-white text-[#6F568F] hover:bg-[#F7E6EC]"
                  }
                `}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <X size={20} strokeWidth={2} />
                No podré asistir
              </motion.button>
            </div>
          </fieldset>

          {/* Número de invitados */}
          <AnimatePresence initial={false}>
            {asistencia === "Sí asistiré" && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <label
                  htmlFor="numeroInvitados"
                  className="
                    mb-2
                    block
                    font-playfair
                    text-sm
                    font-semibold
                    text-[#6F568F]
                  "
                >
                  Número de invitados
                </label>

                <div className="relative">
                  <UsersRound
                    size={20}
                    strokeWidth={1.5}
                    className="
                      pointer-events-none
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-[#6F568F]/55
                    "
                  />

                  <input
                    id="numeroInvitados"
                    type="number"
                    min="1"
                    inputMode="numeric"
                    placeholder="Ejemplo: 2"
                    value={invitados}
                    onChange={(event) => {
                      setInvitados(event.target.value);
                      setError("");
                    }}
                    className={`
                      ${claseCampo}
                      py-4
                      pl-14
                      pr-5
                    `}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mensaje */}
          <div>
            <label
              htmlFor="mensajeInvitado"
              className="
                mb-2
                block
                font-playfair
                text-sm
                font-semibold
                text-[#6F568F]
              "
            >
              Mensaje para la quinceañera
            </label>

            <div className="relative">
              <MessageCircle
                size={20}
                strokeWidth={1.5}
                className="
                  pointer-events-none
                  absolute
                  left-5
                  top-5
                  text-[#6F568F]/55
                "
              />

              <textarea
                id="mensajeInvitado"
                placeholder="Escribe un mensaje especial..."
                value={mensajeInvitado}
                onChange={(event) =>
                  setMensajeInvitado(event.target.value)
                }
                rows={4}
                className={`
                  ${claseCampo}
                  resize-none
                  py-4
                  pl-14
                  pr-5
                  leading-7
                `}
              />
            </div>
          </div>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div
                role="alert"
                className="
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-[#C98DA3]/40
                  bg-[#F7E6EC]
                  px-4
                  py-4
                  font-playfair
                  text-sm
                  leading-6
                  text-[#864D62]
                "
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
              >
                <X
                  size={19}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0"
                />

                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón de WhatsApp */}
          <motion.button
            type="button"
            onClick={enviarConfirmacion}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#B9A2D8]
              bg-[#6F568F]
              px-6
              py-4
              font-playfair
              text-sm
              font-semibold
              uppercase
              tracking-[0.1em]
              text-white
              shadow-[0_16px_40px_rgba(111,86,143,0.30)]
              transition
              duration-300
              hover:bg-[#5D4779]
              sm:text-base
            "
            whileHover={{
              scale: 1.02,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <Send size={20} strokeWidth={1.7} />
            Confirmar por WhatsApp
          </motion.button>

          <p
            className="
              text-center
              font-playfair
              text-xs
              leading-6
              text-[#554B5E]/55
            "
          >
            Al presionar el botón se abrirá WhatsApp con tu
            confirmación preparada.
          </p>
        </div>
      </motion.div>

      {/* Mensaje final */}
      <motion.p
        className="
          relative
          z-10
          mx-auto
          mt-10
          max-w-xl
          text-center
          font-cursiveDancing
          text-3xl
          text-[#F3CBD7]
          sm:text-4xl
        "
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        viewport={{
          once: true,
        }}
      >
        ¡Será una noche inolvidable!
      </motion.p>
    </section>
  );
};

export default Confirmacion;