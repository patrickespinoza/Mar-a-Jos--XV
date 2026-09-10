import React from "react";
import { motion } from "framer-motion";
import { Crown, Shirt, Sparkles } from "lucide-react";

const Vestimenta = () => {
  return (
    <section
      className="
        vestimentaXV
        relative
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
      {/* LUCES */}
      <div
        className="
          vestimentaXV__luz-superior
          absolute
          -top-24
          -left-24
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#C8B6E2]/40
          blur-[90px]
        "
      />

      <div
        className="
          vestimentaXV__luz-inferior
          absolute
          -bottom-28
          -right-20
          h-[340px]
          w-[340px]
          rounded-full
          bg-[#5D4E8C]/15
          blur-[100px]
        "
      />

      {/* DESTELLOS */}
      <motion.div
        className="
          vestimentaXV__destello1
          absolute
          left-[8%]
          top-20
          text-[#5D4E8C]/40
        "
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [0.8, 1.15, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <Sparkles size={30} />
      </motion.div>

      <motion.div
        className="
          vestimentaXV__destello2
          absolute
          right-[10%]
          bottom-24
          text-[#C8B6E2]
        "
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Sparkles size={34} />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 45,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .9,
        }}
        viewport={{
          once: true,
        }}
        className="
          vestimentaXV__tarjeta
          relative
          z-10
          max-w-4xl
          mx-auto
          rounded-[2.5rem]
          bg-white/75
          backdrop-blur-xl
          border
          border-white
          shadow-[0_30px_80px_rgba(93,78,140,.15)]
          px-7
          py-14
          sm:px-14
          sm:py-16
          text-center
        "
      >
        {/* CORONA */}

        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            vestimentaXV__corona
            w-16
            h-16
            rounded-full
            bg-[#F5EBDD]
            mx-auto
            flex
            items-center
            justify-center
            text-[#5D4E8C]
            shadow-lg
          "
        >
          <Crown size={28} />
        </motion.div>

        <p
          className="
            vestimentaXV__etiqueta
            mt-6
            uppercase
            tracking-[.4em]
            text-xs
            sm:text-sm
            text-[#5D4E8C]/70
            font-semibold
          "
        >
          Dress Code
        </p>

        <h2
          className="
            vestimentaXV__titulo
            mt-5
            font-cursiveDancing
            text-[#5D4E8C]
            text-5xl
            sm:text-6xl
          "
        >
          Código de Vestimenta
        </h2>

        <div
          className="
            vestimentaXV__linea
            flex
            items-center
            justify-center
            gap-3
            my-8
          "
        >
          <span className="w-16 sm:w-24 h-px bg-[#C8B6E2]" />

          <Shirt
            size={20}
            className="text-[#5D4E8C]"
          />

          <span className="w-16 sm:w-24 h-px bg-[#C8B6E2]" />
        </div>

        <p
          className="
            vestimentaXV__formal
            font-playfair
            text-3xl
            sm:text-4xl
            text-[#2E2E2E]
          "
        >
          Formal
        </p>

        <p
          className="
            vestimentaXV__descripcion
            mt-8
            max-w-2xl
            mx-auto
            leading-8
            text-lg
            text-[#2E2E2E]/70
          "
        >
          Me encantará compartir este día contigo.
          Te invito a vestir de manera formal para
          hacer de esta celebración un recuerdo
          inolvidable.
        </p>

        <div
          className="
            vestimentaXV__separador
            w-20
            h-px
            bg-[#C8B6E2]
            mx-auto
            my-12
          "
        />

        <h3
          className="
            vestimentaXV__eventoTitulo
            font-cursiveDancing
            text-4xl
            sm:text-5xl
            text-[#5D4E8C]
          "
        >
          Evento
        </h3>

        <p
          className="
            vestimentaXV__evento
            mt-6
            font-playfair
            text-2xl
            text-[#2E2E2E]
          "
        >
          Solo para adultos
        </p>

        <p
          className="
            vestimentaXV__eventoTexto
            mt-5
            max-w-xl
            mx-auto
            text-lg
            leading-8
            text-[#2E2E2E]/70
          "
        >
          Agradecemos tu comprensión y cariño.
          Esperamos disfrutar juntos de una noche
          llena de alegría y momentos inolvidables.
        </p>
      </motion.div>
    </section>
  );
};

export default Vestimenta;