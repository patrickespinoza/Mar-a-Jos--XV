import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Crown,
  Music2,
  Pause,
  Play,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

export default function MusicaXV() {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [silenciado, setSilenciado] = useState(false);
  const [audioListo, setAudioListo] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.45;

    const marcarAudioListo = () => {
      setAudioListo(true);
    };

    const marcarPausa = () => {
      setReproduciendo(false);
    };

    const marcarReproduccion = () => {
      setReproduciendo(true);
    };

    audio.addEventListener("canplaythrough", marcarAudioListo);
    audio.addEventListener("play", marcarReproduccion);
    audio.addEventListener("pause", marcarPausa);

    return () => {
      audio.removeEventListener("canplaythrough", marcarAudioListo);
      audio.removeEventListener("play", marcarReproduccion);
      audio.removeEventListener("pause", marcarPausa);
    };
  }, []);

  const iniciarConMusica = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.muted = false;
      setSilenciado(false);

      await audio.play();

      setReproduciendo(true);
      setMostrarModal(false);
    } catch (error) {
      console.error("No se pudo reproducir el audio:", error);

      setReproduciendo(false);
      setMostrarModal(false);
    }
  };

  const continuarSinMusica = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
    }

    setReproduciendo(false);
    setMostrarModal(false);
  };

  const alternarReproduccion = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setReproduciendo(true);
      } else {
        audio.pause();
        setReproduciendo(false);
      }
    } catch (error) {
      console.error("No se pudo cambiar la reproducción:", error);
    }
  };

  const alternarSilencio = () => {
    const audio = audioRef.current;

    if (!audio) return;

    const nuevoEstado = !audio.muted;

    audio.muted = nuevoEstado;
    setSilenciado(nuevoEstado);
  };

  return (
    <>
      {/* AUDIO PRINCIPAL */}
      <audio
        ref={audioRef}
        src="/musica.mp3"
        preload="auto"
        loop
      />

      {/* VENTANA EMERGENTE */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              musicaXV__modal-fondo
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              overflow-hidden
              bg-[#2E2E2E]/75
              px-5
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* DESTELLOS DECORATIVOS */}
            <motion.div
              className="
                musicaXV__destello-superior
                absolute
                left-[10%]
                top-[12%]
                text-[#F5EBDD]
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
              <Sparkles size={30} strokeWidth={1.4} />
            </motion.div>

            <motion.div
              className="
                musicaXV__destello-inferior
                absolute
                bottom-[15%]
                right-[10%]
                text-[#C8B6E2]
              "
              animate={{
                opacity: [0.2, 0.9, 0.2],
                scale: [0.7, 1.1, 0.7],
                rotate: [0, -20, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={38} strokeWidth={1.3} />
            </motion.div>

            {/* TARJETA DEL MODAL */}
            <motion.div
              className="
                musicaXV__modal
                relative
                w-full
                max-w-md
                overflow-hidden
                rounded-[2.25rem]
                border
                border-white/70
                bg-gradient-to-b
                from-[#FFFFFF]
                via-[#F5EBDD]
                to-[#C8B6E2]
                px-6
                py-9
                text-center
                shadow-[0_30px_90px_rgba(46,36,70,0.45)]
                sm:px-9
                sm:py-11
              "
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 35,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 25,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* BRILLOS DE FONDO */}
              <div
                className="
                  musicaXV__brillo-superior
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-44
                  w-44
                  rounded-full
                  bg-white/60
                  blur-3xl
                "
              />

              <div
                className="
                  musicaXV__brillo-inferior
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-16
                  h-48
                  w-48
                  rounded-full
                  bg-[#5D4E8C]/20
                  blur-3xl
                "
              />

              {/* CORONA */}
              <motion.div
                className="
                  musicaXV__corona
                  relative
                  mx-auto
                  mb-5
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#5D4E8C]/20
                  bg-white/65
                  text-[#5D4E8C]
                  shadow-[0_12px_35px_rgba(93,78,140,0.18)]
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
                <Crown size={38} strokeWidth={1.35} />

                <motion.span
                  className="
                    musicaXV__corona-destello
                    absolute
                    right-2
                    top-1
                    text-[#5D4E8C]
                  "
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles size={17} />
                </motion.span>
              </motion.div>

              {/* TEXTO */}
              <p
                className="
                  musicaXV__etiqueta
                  relative
                  mb-3
                  font-playfair
                  text-xs
                  uppercase
                  tracking-[0.38em]
                  text-[#5D4E8C]/75
                  sm:text-sm
                "
              >
                Mis XV años
              </p>

              <h2
                className="
                  musicaXV__titulo
                  relative
                  font-cursiveDancing
                  text-5xl
                  leading-none
                  text-[#5D4E8C]
                  sm:text-6xl
                "
              >
                Allison
              </h2>

              <div
                className="
                  musicaXV__separador
                  relative
                  mx-auto
                  my-6
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <span className="h-px w-14 bg-[#5D4E8C]/30" />

                <Music2
                  size={19}
                  strokeWidth={1.5}
                  className="text-[#5D4E8C]"
                />

                <span className="h-px w-14 bg-[#5D4E8C]/30" />
              </div>

              <p
                className="
                  musicaXV__descripcion
                  relative
                  mx-auto
                  max-w-sm
                  font-playfair
                  text-base
                  leading-relaxed
                  text-[#2E2E2E]/80
                  sm:text-lg
                "
              >
                Esta celebración tiene una melodía especial.
                Acompáñame a vivir este momento con música.
              </p>

              {/* BOTONES */}
              <div
                className="
                  musicaXV__acciones
                  relative
                  mt-8
                  flex
                  flex-col
                  gap-3
                "
              >
                <motion.button
                  type="button"
                  onClick={iniciarConMusica}
                  disabled={!audioListo}
                  className="
                    musicaXV__boton-principal
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
                    text-sm
                    uppercase
                    tracking-[0.18em]
                    text-white
                    shadow-[0_14px_35px_rgba(93,78,140,0.35)]
                    transition
                    duration-300
                    hover:bg-[#4C3F77]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    sm:text-base
                  "
                  whileHover={{ scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Play size={19} fill="currentColor" />

                  {audioListo
                    ? "Entrar con música"
                    : "Preparando música..."}
                </motion.button>

                <motion.button
                  type="button"
                  onClick={continuarSinMusica}
                  className="
                    musicaXV__boton-secundario
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#5D4E8C]/25
                    bg-white/55
                    px-6
                    py-3.5
                    font-playfair
                    text-sm
                    uppercase
                    tracking-[0.15em]
                    text-[#5D4E8C]
                    backdrop-blur-md
                    transition
                    duration-300
                    hover:bg-white/80
                  "
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <VolumeX size={18} />

                  Continuar sin música
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTROLES FLOTANTES */}
      <AnimatePresence>
        {!mostrarModal && (
          <motion.div
            className="
              musicaXV__controles
              fixed
              bottom-5
              right-4
              z-[9998]
              flex
              items-center
              gap-2
              sm:bottom-7
              sm:right-7
            "
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.85,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {/* SILENCIAR */}
            <motion.button
              type="button"
              onClick={alternarSilencio}
              aria-label={
                silenciado
                  ? "Activar sonido"
                  : "Silenciar música"
              }
              className="
                musicaXV__boton-volumen
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/60
                bg-[#F5EBDD]/90
                text-[#5D4E8C]
                shadow-[0_8px_25px_rgba(46,46,46,0.18)]
                backdrop-blur-md
              "
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              {silenciado ? (
                <VolumeX size={19} />
              ) : (
                <Volume2 size={19} />
              )}
            </motion.button>

            {/* REPRODUCIR / PAUSAR */}
            <motion.button
              type="button"
              onClick={alternarReproduccion}
              aria-label={
                reproduciendo
                  ? "Pausar música"
                  : "Reproducir música"
              }
              className="
                musicaXV__boton-reproduccion
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-white/50
                bg-[#5D4E8C]
                text-white
                shadow-[0_12px_30px_rgba(93,78,140,0.4)]
              "
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              {reproduciendo && (
                <motion.span
                  className="
                    musicaXV__pulso
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-[#C8B6E2]
                  "
                  animate={{
                    scale: [1, 1.65],
                    opacity: [0.7, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}

              <span className="relative z-10">
                {reproduciendo ? (
                  <Pause size={22} fill="currentColor" />
                ) : (
                  <Play
                    size={22}
                    fill="currentColor"
                    className="translate-x-[1px]"
                  />
                )}
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}