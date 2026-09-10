import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Crown,
  Heart,
  Loader2,
  MessageCircle,
  Send,
  Sparkles,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const enviarConfirmacion = async () => {
    if (!nombreInvitado.trim() || !asistencia) {
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
    setEnviando(true);
    setEnviado(false);

    const data = {
      nombre: nombreInvitado.trim(),
      asistencia,
      invitados:
        asistencia === "Sí asistiré"
          ? Number(invitados)
          : 0,
      mensaje: mensajeInvitado.trim(),
    };

    try {
      const respuesta = await fetch(
        "https://script.google.com/macros/s/AKfycbxklU9PTlqxkcu9pBUfWYhByQZ_7kJWuFENeeQhlEW-C6eh2cVbTK3z2AbMJiWVL1ME/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (!respuesta.ok) {
        throw new Error(
          "La confirmación no pudo enviarse."
        );
      }

      setEnviado(true);
      setNombreInvitado("");
      setMensajeInvitado("");
      setAsistencia("");
      setInvitados("");

      window.setTimeout(() => {
        setEnviado(false);
      }, 4500);
    } catch (error) {
      console.error("Error al enviar:", error);

      setError(
        "Hubo un problema al enviar la confirmación. Intenta nuevamente."
      );
    } finally {
      setEnviando(false);
    }
  };

  const seleccionarAsistencia = (respuesta) => {
    setAsistencia(respuesta);
    setError("");

    if (respuesta === "No podré asistir") {
      setInvitados("");
    }
  };

  return (
    <section
      className="
        confirmacionXV
        relative
        isolate
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-[#5D4E8C]
        via-[#6C5A9A]
        to-[#C8B6E2]
        px-5
        py-20
        sm:px-8
        sm:py-28
      "
    >
      {/* LUCES DECORATIVAS */}
      <div
        className="
          confirmacionXV__luz-superior
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-[430px]
          w-[430px]
          rounded-full
          bg-white/15
          blur-[110px]
        "
      />

      <div
        className="
          confirmacionXV__luz-inferior
          pointer-events-none
          absolute
          -bottom-36
          -right-28
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#F5EBDD]/25
          blur-[120px]
        "
      />

      {/* CÍRCULOS DECORATIVOS */}
      <div
        className="
          confirmacionXV__circulo-superior
          pointer-events-none
          absolute
          right-[8%]
          top-16
          h-36
          w-36
          rounded-full
          border
          border-white/10
        "
      />

      <div
        className="
          confirmacionXV__circulo-inferior
          pointer-events-none
          bottom-16
          left-[6%]
          h-48
          w-48
          rounded-full
          border
          border-white/10
        "
      />

      {/* DESTELLOS */}
      <motion.div
        className="
          confirmacionXV__destello-izquierdo
          pointer-events-none
          absolute
          left-[7%]
          top-24
          text-[#F5EBDD]/80
        "
        animate={{
          opacity: [0.25, 1, 0.25],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={32} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          confirmacionXV__destello-derecho
          pointer-events-none
          absolute
          bottom-24
          right-[8%]
          text-white/70
        "
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.75, 1.15, 0.75],
          rotate: [0, -18, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkles size={40} strokeWidth={1.1} />
      </motion.div>

      {/* TARJETA PRINCIPAL */}
      <motion.div
        className="
          confirmacionXV__tarjeta
          relative
          z-10
          mx-auto
          max-w-4xl
          overflow-hidden
          rounded-[2.5rem]
          border
          border-white/65
          bg-gradient-to-b
          from-white/95
          via-[#F5EBDD]/95
          to-[#E8DFF2]/95
          px-5
          py-12
          shadow-[0_35px_100px_rgba(37,28,66,0.35)]
          backdrop-blur-xl
          sm:px-10
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
          amount: 0.2,
        }}
      >
        {/* BRILLOS INTERNOS */}
        <div
          className="
            confirmacionXV__tarjeta-luz-superior
            pointer-events-none
            absolute
            -right-20
            -top-24
            h-64
            w-64
            rounded-full
            bg-[#C8B6E2]/40
            blur-3xl
          "
        />

        <div
          className="
            confirmacionXV__tarjeta-luz-inferior
            pointer-events-none
            absolute
            -bottom-24
            -left-20
            h-64
            w-64
            rounded-full
            bg-white/90
            blur-3xl
          "
        />

        <div
          className="
            confirmacionXV__contenido
            relative
            z-10
          "
        >
          {/* ENCABEZADO */}
          <motion.div
            className="
              confirmacionXV__corona
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
              bg-white/75
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
            <Crown size={36} strokeWidth={1.35} />

            <motion.span
              className="
                confirmacionXV__corona-destello
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
              <Sparkles size={18} />
            </motion.span>
          </motion.div>

          <div
            className="
              confirmacionXV__encabezado
              mx-auto
              max-w-2xl
              text-center
            "
          >
            <p
              className="
                confirmacionXV__etiqueta
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
              RSVP
            </p>

            <h2
              className="
                confirmacionXV__titulo
                mt-4
                font-cursiveDancing
                text-5xl
                leading-none
                text-[#5D4E8C]
                sm:text-6xl
                md:text-7xl
              "
            >
              Confirma tu asistencia
            </h2>

            <div
              className="
                confirmacionXV__separador
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
                  confirmacionXV__linea-izquierda
                  h-px
                  w-14
                  bg-gradient-to-r
                  from-transparent
                  to-[#5D4E8C]/40
                  sm:w-24
                "
              />

              <Heart
                size={18}
                strokeWidth={1.4}
                className="text-[#5D4E8C]"
              />

              <span
                className="
                  confirmacionXV__linea-derecha
                  h-px
                  w-14
                  bg-gradient-to-l
                  from-transparent
                  to-[#5D4E8C]/40
                  sm:w-24
                "
              />
            </div>

            <p
              className="
                confirmacionXV__descripcion
                mx-auto
                max-w-2xl
                font-playfair
                text-base
                leading-8
                text-[#2E2E2E]/70
                sm:text-lg
              "
            >
              Tu presencia hará de esta celebración un momento
              todavía más especial. Por favor, confirma si
              podrás acompañarme.
            </p>
          </div>

          {/* FORMULARIO */}
          <div
            className="
              confirmacionXV__formulario
              mx-auto
              mt-10
              max-w-2xl
              space-y-5
            "
          >
            {/* NOMBRE */}
            <div className="confirmacionXV__campo">
              <label
                htmlFor="nombreInvitado"
                className="
                  confirmacionXV__label
                  mb-2
                  block
                  font-playfair
                  text-sm
                  font-semibold
                  text-[#5D4E8C]
                "
              >
                Nombre completo
              </label>

              <div className="confirmacionXV__input-contenedor relative">
                <UserRound
                  size={20}
                  strokeWidth={1.5}
                  className="
                    pointer-events-none
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-[#5D4E8C]/55
                  "
                />

                <input
                  id="nombreInvitado"
                  type="text"
                  placeholder="Nombre y apellido"
                  value={nombreInvitado}
                  onChange={(event) => {
                    setNombreInvitado(event.target.value);
                    setError("");
                  }}
                  disabled={enviando}
                  className="
                    confirmacionXV__input
                    w-full
                    rounded-2xl
                    border
                    border-[#C8B6E2]/60
                    bg-white/80
                    py-4
                    pl-14
                    pr-5
                    font-playfair
                    text-[#2E2E2E]
                    outline-none
                    transition
                    duration-300
                    placeholder:text-[#2E2E2E]/35
                    focus:border-[#5D4E8C]/55
                    focus:ring-4
                    focus:ring-[#C8B6E2]/25
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                />
              </div>
            </div>

            {/* ASISTENCIA */}
            <fieldset className="confirmacionXV__asistencia">
              <legend
                className="
                  confirmacionXV__label
                  mb-3
                  font-playfair
                  text-sm
                  font-semibold
                  text-[#5D4E8C]
                "
              >
                ¿Podrás acompañarme?
              </legend>

              <div
                className="
                  confirmacionXV__opciones
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
                  disabled={enviando}
                  className={`
                    confirmacionXV__opcion-si
                    flex
                    min-h-[76px]
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
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    ${
                      asistencia === "Sí asistiré"
                        ? "border-[#5D4E8C] bg-[#5D4E8C] text-white shadow-[0_12px_30px_rgba(93,78,140,0.25)]"
                        : "border-[#C8B6E2]/60 bg-white/75 text-[#5D4E8C] hover:bg-white"
                    }
                  `}
                  whileHover={
                    enviando
                      ? {}
                      : {
                          y: -3,
                          scale: 1.01,
                        }
                  }
                  whileTap={
                    enviando
                      ? {}
                      : {
                          scale: 0.97,
                        }
                  }
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
                  disabled={enviando}
                  className={`
                    confirmacionXV__opcion-no
                    flex
                    min-h-[76px]
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
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    ${
                      asistencia === "No podré asistir"
                        ? "border-[#5D4E8C] bg-[#5D4E8C] text-white shadow-[0_12px_30px_rgba(93,78,140,0.25)]"
                        : "border-[#C8B6E2]/60 bg-white/75 text-[#5D4E8C] hover:bg-white"
                    }
                  `}
                  whileHover={
                    enviando
                      ? {}
                      : {
                          y: -3,
                          scale: 1.01,
                        }
                  }
                  whileTap={
                    enviando
                      ? {}
                      : {
                          scale: 0.97,
                        }
                  }
                >
                  <X size={20} strokeWidth={2} />
                  No podré asistir
                </motion.button>
              </div>
            </fieldset>

            {/* NÚMERO DE INVITADOS */}
            <AnimatePresence>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  className="confirmacionXV__campo-invitados"
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
                      confirmacionXV__label
                      mb-2
                      block
                      font-playfair
                      text-sm
                      font-semibold
                      text-[#5D4E8C]
                    "
                  >
                    Número de invitados
                  </label>

                  <div
                    className="
                      confirmacionXV__input-contenedor
                      relative
                    "
                  >
                    <UsersRound
                      size={20}
                      strokeWidth={1.5}
                      className="
                        pointer-events-none
                        absolute
                        left-5
                        top-1/2
                        -translate-y-1/2
                        text-[#5D4E8C]/55
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
                      disabled={enviando}
                      className="
                        confirmacionXV__input
                        w-full
                        rounded-2xl
                        border
                        border-[#C8B6E2]/60
                        bg-white/80
                        py-4
                        pl-14
                        pr-5
                        font-playfair
                        text-[#2E2E2E]
                        outline-none
                        transition
                        duration-300
                        placeholder:text-[#2E2E2E]/35
                        focus:border-[#5D4E8C]/55
                        focus:ring-4
                        focus:ring-[#C8B6E2]/25
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                      "
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* MENSAJE */}
            <div className="confirmacionXV__campo">
              <label
                htmlFor="mensajeInvitado"
                className="
                  confirmacionXV__label
                  mb-2
                  block
                  font-playfair
                  text-sm
                  font-semibold
                  text-[#5D4E8C]
                "
              >
                Mensaje para la quinceañera
              </label>

              <div
                className="
                  confirmacionXV__textarea-contenedor
                  relative
                "
              >
                <MessageCircle
                  size={20}
                  strokeWidth={1.5}
                  className="
                    pointer-events-none
                    absolute
                    left-5
                    top-5
                    text-[#5D4E8C]/55
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
                  disabled={enviando}
                  className="
                    confirmacionXV__textarea
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-[#C8B6E2]/60
                    bg-white/80
                    py-4
                    pl-14
                    pr-5
                    font-playfair
                    leading-7
                    text-[#2E2E2E]
                    outline-none
                    transition
                    duration-300
                    placeholder:text-[#2E2E2E]/35
                    focus:border-[#5D4E8C]/55
                    focus:ring-4
                    focus:ring-[#C8B6E2]/25
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                />
              </div>
            </div>

            {/* MENSAJE DE ERROR */}
            <AnimatePresence>
              {error && (
                <motion.div
                  role="alert"
                  className="
                    confirmacionXV__error
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    border
                    border-[#9F5470]/25
                    bg-[#9F5470]/10
                    px-4
                    py-4
                    text-sm
                    leading-6
                    text-[#783C54]
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

            {/* MENSAJE DE ÉXITO */}
            <AnimatePresence>
              {enviado && (
                <motion.div
                  role="status"
                  className="
                    confirmacionXV__exito
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    border
                    border-[#5D4E8C]/20
                    bg-[#C8B6E2]/25
                    px-4
                    py-4
                    text-sm
                    leading-6
                    text-[#4B3E76]
                  "
                  initial={{
                    opacity: 0,
                    y: -8,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                    scale: 0.98,
                  }}
                >
                  <Check
                    size={20}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                  />

                  <span>
                    Tu confirmación fue enviada correctamente.
                    ¡Gracias!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* BOTÓN ENVIAR */}
            <motion.button
              type="button"
              onClick={enviarConfirmacion}
              disabled={enviando}
              className="
                confirmacionXV__boton-enviar
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#5D4E8C]
                px-6
                py-4
                font-playfair
                text-base
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                shadow-[0_16px_40px_rgba(93,78,140,0.32)]
                transition
                duration-300
                hover:bg-[#4B3E76]
                disabled:cursor-not-allowed
                disabled:opacity-65
                sm:text-lg
              "
              whileHover={
                enviando
                  ? {}
                  : {
                      scale: 1.02,
                      y: -2,
                    }
              }
              whileTap={
                enviando
                  ? {}
                  : {
                      scale: 0.98,
                    }
              }
            >
              {enviando ? (
                <>
                  <Loader2
                    size={21}
                    className="animate-spin"
                  />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={20} strokeWidth={1.7} />
                  Enviar confirmación
                </>
              )}
            </motion.button>
          </div>

          {/* MENSAJE FINAL */}
          <p
            className="
              confirmacionXV__mensaje-final
              mx-auto
              mt-8
              max-w-xl
              text-center
              font-cursiveDancing
              text-3xl
              text-[#5D4E8C]
              sm:text-4xl
            "
          >
            ¡Será una noche inolvidable!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Confirmacion;