import React from "react";

export default function Portada() {
  return (
    <section className="portadaXV relative h-screen w-full overflow-hidden">
      {/* Imagen de portada */}
      <img
        src="/portada.jpg"
        alt="María José Guajardo de la Rosa"
        className="
          portadaXV__imagen
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[center_20%]
        "
      />

      {/* Sombra inferior para mejorar la lectura */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[55%]
          bg-gradient-to-t
          from-black/70
          via-black/25
          to-transparent
        "
      />

      {/* Destellos decorativos */}
      <div
        className="
          portadaXV__decoracion
          absolute
          left-8
          top-8
          h-28
          w-28
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      <div
        className="
          portadaXV__decoracion
          absolute
          bottom-20
          right-6
          h-36
          w-36
          rounded-full
          bg-[#C8B6E2]/30
          blur-3xl
        "
      />

      {/* Nombre y fecha en la parte inferior */}
      <div
        className="
          portadaXV__contenido
          relative
          z-10
          flex
          h-full
          flex-col
          items-center
          justify-end
          px-5
          pb-8
          text-center
          sm:px-8
          sm:pb-10
          md:pb-12
        "
      >
        <h1
          className="
            portadaXV__titulo
            max-w-5xl
            font-cursiveDancing
            text-5xl
            leading-[0.95]
            text-white
            drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
            sm:text-6xl
            md:text-7xl
            lg:text-[6rem]
          "
        >
          María José Guajardo de la Rosa
        </h1>

        <div
          className="
            portadaXV__linea
            my-5
            h-[2px]
            w-28
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-[#F5EBDD]
            to-transparent
            sm:my-6
            sm:w-36
          "
        />

        <div
          className="
            portadaXV__fecha
            rounded-full
            border
            border-[#C8B6E2]
            bg-[#F5EBDD]/90
            px-6
            py-3
            shadow-xl
            backdrop-blur-md
            sm:px-8
            sm:py-4
          "
        >
          <p
            className="
              font-playfair
              text-base
              uppercase
              tracking-[0.12em]
              text-[#5D4E8C]
              sm:text-xl
              sm:tracking-[0.18em]
            "
          >
            30 · Octubre · 2026
          </p>
        </div>
      </div>
    </section>
  );
}