import Carousel from "./componentes-encabezado/carrusel";
import Portada from "./componentes-encabezado/portada";
import Contador from "./componentes-encabezado/Contador";
import Celebracion from "./componentes-encabezado/Ubicacion";
import Regalos from "./componentes-encabezado/Regalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import MusicaXV from "./componentes-encabezado/musica";
import FotoFinal from "./componentes-encabezado/final";

export default function Intinerario() {
  return (
    <div>

      <MusicaXV/>

      <Portada />

      <Contador />

      <Celebracion />

      <Carousel />

      <Regalos />

      <Confirmacion />

      <FotoFinal/>
    </div>
  );
}