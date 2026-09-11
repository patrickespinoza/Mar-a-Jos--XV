import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  Music2,
  Pause,
  Play,
  Sparkles,
  Volume2,
  VolumeX,
} from "lucide-react";

export default function MusicaXV({
  nombre = "María José",
  archivo = "/musica.mp3",
}) {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] =
    useState(true);
  const [reproduciendo, setReproduciendo] =
    useState(false);
  const [silenciado, setSilenciado] =
    useState(false);
  const [audioListo, setAudioListo] =
    useState(false);
  const [iniciando, setIniciando] =
    useState(false);
  const [errorAudio, setErrorAudio] =
    useState("");

  /* Precarga anticipada del archivo */
  useEffect(() => {
    const enlacePrecarga =
      document.createElement("link");

    enlacePrecarga.rel = "preload";
    enlacePrecarga.as = "audio";
    enlacePrecarga.href = archivo;

    document.head.appendChild(enlacePrecarga);

    const audio = audioRef.current;

    if (!audio) {
      return () => {
        enlacePrecarga.remove();
      };
    }

    audio.preload = "auto";
    audio.volume = 0.5;
    audio.load();

    const marcarAudioListo = () => {
      setAudioListo(true);
      setErrorAudio("");
    };

    const marcarReproduccion = () => {
      setReproduciendo(true);
      setIniciando(false);
      setErrorAudio("");
    };

    const marcarPausa = () => {
      setReproduciendo(false);
    };

    const mostrarError = () => {
      setIniciando(false);
      setReproduciendo(false);
      setErrorAudio(
        "No fue posible cargar la música. Intenta nuevamente."
      );
    };

    audio.addEventListener(
      "loadeddata",
      marcarAudioListo
    );
    audio.addEventListener(
      "canplay",
      marcarAudioListo
    );
    audio.addEventListener(
      "canplaythrough",
      marcarAudioListo
    );
    audio.addEventListener(
      "playing",
      marcarReproduccion
    );
    audio.addEventListener(
      "pause",
      marcarPausa
    );
    audio.addEventListener(
      "error",
      mostrarError
    );

    if (audio.readyState >= 3) {
      marcarAudioListo();
    }

    return () => {
      enlacePrecarga.remove();

      audio.removeEventListener(
        "loadeddata",
        marcarAudioListo
      );
      audio.removeEventListener(
        "canplay",
        marcarAudioListo
      );
      audio.removeEventListener(
        "canplaythrough",
        marcarAudioListo
      );
      audio.removeEventListener(
        "playing",
        marcarReproduccion
      );
      audio.removeEventListener(
        "pause",
        marcarPausa
      );
      audio.removeEventListener(
        "error",
        mostrarError
      );
    };
  }, [archivo]);

  const reproducirAudio = async () => {
    const audio = audioRef.current;

    if (!audio || iniciando) return;

    setIniciando(true);
    setErrorAudio("");

    try {
      audio.muted = false;
      setSilenciado(false);

      /*
       * play() se ejecuta directamente dentro del clic.
       * Si aún falta descargar una parte, el navegador
       * continuará automáticamente al estar disponible.
       */
      await audio.play();

      setReproduciendo(true);
      setMostrarModal(false);
    } catch (error) {
      console.error(
        "No se pudo reproducir la música:",
        error
      );

      setErrorAudio(
        "No fue posible iniciar la música. Presiona nuevamente."
      );
    } finally {
      setIniciando(false);
    }
  };

  const continuarSinMusica = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
    }

    setReproduciendo(false);
    setMostrarModal(false);
    setErrorAudio("");
  };

  const alternarReproduccion = async () => {
    const audio = audioRef.current;

    if (!audio || iniciando) return;

    try {
      if (audio.paused) {
        setIniciando(true);
        audio.muted = false;
        setSilenciado(false);

        await audio.play();

        setReproduciendo(true);
      } else {
        audio.pause();
        setReproduciendo(false);
      }
    } catch (error) {
      console.error(
        "No se pudo cambiar la reproducción:",
        error
      );

      setErrorAudio(
        "No fue posible reproducir la música."
      );
    } finally {
      setIniciando(false);
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
      {/* Audio precargado */}
      <audio
        ref={audioRef}
        preload="auto"
        loop
        playsInline
      >
        <source
          src={archivo}
          type="audio/mpeg"
        />

        Tu navegador no puede reproducir este audio.
      </audio>

      {/* Ventana inicial */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              overflow-hidden
              bg-[#4D4352]/75
              px-5
              py-8
              backdrop-blur-md
            "
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
              duration: 0.45,
            }}
          >
            {/* Destellos */}
            <motion.div
              className="
                pointer-events-none
                absolute
                left-[10%]
                top-[12%]
                text-[#E9B7C7]
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
              <Sparkles
                size={30}
                strokeWidth={1.3}
              />
            </motion.div>

            <motion.div
              className="
                pointer-events-none
                absolute
                bottom-[14%]
                right-[10%]
                text-[#C9C9CF]
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
              <Sparkles
                size={38}
                strokeWidth={1.2}
              />
            </motion.div>

            {/* Tarjeta */}
            <motion.div
              className="
                relative
                w-full
                max-w-md
                overflow-hidden
                rounded-[2.25rem]
                border
                border-[#C9C9CF]
                bg-[#FFF9F4]
                px-6
                py-9
                text-center
                shadow-[0_30px_90px_rgba(45,35,49,0.45)]
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
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Marco interior plateado */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-2
                  rounded-[1.9rem]
                  border
                  border-[#E9B7C7]/65
                "
              />

              {/* Detalle superior */}
              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-1
                  w-28
                  -translate-x-1/2
                  rounded-b-full
                  bg-[#C9C9CF]
                "
              />

              <div className="relative z-10">
                {/* Ícono musical */}
                <motion.div
                  className="
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
                    border-[#C9C9CF]
                    bg-[#F7E6EC]
                    text-[#C98DA3]
                    shadow-[0_12px_35px_rgba(201,141,163,0.20)]
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
                  <Music2
                    size={37}
                    strokeWidth={1.35}
                  />

                  <motion.span
                    className="
                      absolute
                      -right-1
                      top-0
                      text-[#C9C9CF]
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
                    <Sparkles size={18} />
                  </motion.span>
                </motion.div>

                <p
                  className="
                    font-playfair
                    text-xs
                    uppercase
                    tracking-[0.38em]
                    text-[#9B7885]
                    sm:text-sm
                  "
                >
                  Mis XV años
                </p>

                <h2
                  className="
                    mt-3
                    font-cursiveDancing
                    text-5xl
                    leading-none
                    text-[#C98DA3]
                    sm:text-6xl
                  "
                >
                  {nombre}
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
                    "
                  />

                  <Heart
                    size={17}
                    strokeWidth={1.3}
                    className="
                      fill-[#E9B7C7]/40
                      text-[#C98DA3]
                    "
                  />

                  <span
                    className="
                      h-px
                      w-14
                      bg-[#C9C9CF]
                    "
                  />
                </div>

                <p
                  className="
                    mx-auto
                    max-w-sm
                    font-playfair
                    text-base
                    leading-relaxed
                    text-[#554B5E]/80
                    sm:text-lg
                  "
                >
                  Esta celebración tiene una melodía
                  especial. Acompáñame a vivir este momento
                  con música.
                </p>

                {/* Estado de precarga */}
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-center
                    gap-2
                    font-playfair
                    text-xs
                    text-[#9B7885]
                  "
                >
                  <span
                    className={`
                      h-2
                      w-2
                      rounded-full
                      ${
                        audioListo
                          ? "bg-[#8BA17F]"
                          : "animate-pulse bg-[#C9C9CF]"
                      }
                    `}
                  />

                  {audioListo
                    ? "Música preparada"
                    : "Precargando música..."}
                </div>

                {/* Error */}
                <AnimatePresence>
                  {errorAudio && (
                    <motion.p
                      role="alert"
                      className="
                        mt-4
                        rounded-xl
                        border
                        border-[#C98DA3]/35
                        bg-[#F7E6EC]
                        px-4
                        py-3
                        font-playfair
                        text-sm
                        text-[#854D62]
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
                      {errorAudio}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Botones */}
                <div
                  className="
                    mt-7
                    flex
                    flex-col
                    gap-3
                  "
                >
                  <motion.button
                    type="button"
                    onClick={reproducirAudio}
                    disabled={iniciando}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      border
                      border-[#C9C9CF]
                      bg-[#C98DA3]
                      px-6
                      py-4
                      font-playfair
                      text-sm
                      uppercase
                      tracking-[0.15em]
                      text-white
                      shadow-[0_14px_35px_rgba(201,141,163,0.32)]
                      transition
                      duration-300
                      hover:bg-[#B97991]
                      disabled:cursor-wait
                      disabled:opacity-70
                      sm:text-base
                    "
                    whileHover={
                      iniciando
                        ? {}
                        : {
                            scale: 1.025,
                          }
                    }
                    whileTap={
                      iniciando
                        ? {}
                        : {
                            scale: 0.97,
                          }
                    }
                  >
                    {iniciando ? (
                      <>
                        <motion.span
                          className="
                            h-5
                            w-5
                            rounded-full
                            border-2
                            border-white/35
                            border-t-white
                          "
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        Iniciando música...
                      </>
                    ) : (
                      <>
                        <Play
                          size={19}
                          fill="currentColor"
                        />

                        Entrar con música
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={continuarSinMusica}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      border
                      border-[#C9C9CF]
                      bg-white
                      px-6
                      py-3.5
                      font-playfair
                      text-sm
                      uppercase
                      tracking-[0.13em]
                      text-[#9B7885]
                      transition
                      duration-300
                      hover:bg-[#F7E6EC]
                    "
                    whileHover={{
                      scale: 1.015,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                  >
                    <VolumeX size={18} />
                    Continuar sin música
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controles flotantes */}
      <AnimatePresence>
        {!mostrarModal && (
          <motion.div
            className="
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
              duration: 0.45,
            }}
          >
            {/* Volumen */}
            <motion.button
              type="button"
              onClick={alternarSilencio}
              aria-label={
                silenciado
                  ? "Activar sonido"
                  : "Silenciar música"
              }
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#C9C9CF]
                bg-[#FFF9F4]/95
                text-[#C98DA3]
                shadow-[0_8px_25px_rgba(46,46,46,0.20)]
                backdrop-blur-md
              "
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
            >
              {silenciado ? (
                <VolumeX size={19} />
              ) : (
                <Volume2 size={19} />
              )}
            </motion.button>

            {/* Reproducir o pausar */}
            <motion.button
              type="button"
              onClick={alternarReproduccion}
              disabled={iniciando}
              aria-label={
                reproduciendo
                  ? "Pausar música"
                  : "Reproducir música"
              }
              className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[#C9C9CF]
                bg-[#C98DA3]
                text-white
                shadow-[0_12px_30px_rgba(201,141,163,0.42)]
                disabled:cursor-wait
                disabled:opacity-70
              "
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
            >
              {reproduciendo && (
                <motion.span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-[#E9B7C7]
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
                {iniciando ? (
                  <motion.span
                    className="
                      block
                      h-5
                      w-5
                      rounded-full
                      border-2
                      border-white/35
                      border-t-white
                    "
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ) : reproduciendo ? (
                  <Pause
                    size={22}
                    fill="currentColor"
                  />
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