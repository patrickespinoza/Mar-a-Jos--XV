import React from "react";

export default function Portada() {
  return (
    <section className="relative portadaXV w-full h-screen overflow-hidden">

      {/* Imagen */}
      <img
        src="/Portada-02.png"
        alt="Allison"
        className="
          portadaXV__imagen
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-[center_20%]
        "
      />


      {/* Destellos */}
      <div className="portadaXV__decoracion absolute top-8 left-8 w-28 h-28 rounded-full bg-white/10 blur-3xl" />
      <div className="portadaXV__decoracion absolute bottom-20 right-6 w-36 h-36 rounded-full bg-[#C8B6E2]/30 blur-3xl" />

      {/* Contenido */}
      <div
        className="
          portadaXV__contenido
          relative
          z-10
          h-full
          flex
          flex-col
          justify-end
          items-center
          text-center
          px-6
          pb-24
        "
      >

        <p
          className="
            portadaXV__subtitulo
            uppercase
            tracking-[0.45em]
            text-[#F5EBDD]
            text-sm
            sm:text-base
            font-playfair
            mb-6
          "
        >
          Mis XV Años
        </p>

        <h1
          className="
            portadaXV__titulo
            font-cursiveDancing
            text-white
            text-6xl
            sm:text-7xl
            md:text-8xl
            lg:text-[7rem]
            leading-none
            drop-shadow-2xl
          "
        >
          Allison
        </h1>

        <div
          className="
            portadaXV__linea
            w-28
            h-[2px]
            my-8
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-[#F5EBDD]
            to-transparent
          "
        />

        <div
          className="
            portadaXV__fecha
            px-8
            py-4
            rounded-full
            bg-[#F5EBDD]/90
            backdrop-blur-md
            border
            border-[#C8B6E2]
            shadow-xl
          "
        >
          <p
            className="
              font-playfair
              text-[#5D4E8C]
              text-lg
              sm:text-xl
              tracking-[0.18em]
              uppercase
            "
          >
            11 · Junio · 2027
          </p>
        </div>

      </div>
    </section>
  );
}