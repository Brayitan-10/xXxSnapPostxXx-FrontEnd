import 'bootstrap/dist/css/bootstrap.min.css';
import './initialMainStyles.css';
import Carousel from 'react-bootstrap/Carousel';
import ModelOne from '../../../img/First-Model.jpg/';
import ModelTwo from '../../../img/Four-Model.jpg';
import ModelThree from '../../../img/Second-Model.jpg';
import EncryptPhoto from '../../../img/encrypt-lock.jpg';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className='carousel-main'>
      <Carousel.Item>
        <img
          className="first-img"
          src={ModelOne}
          alt=""
        />
        <Carousel.Caption className='info-carrusel-one'>
          <h5>¡Muestra tu creatividad al mundo!</h5>
          <p>¿Tienes fotos creativas que te gustaría compartir con el mundo? ¡Únete a nuestra comunidad y muestra tu talento!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ModelTwo}
          alt=""
        />
        <Carousel.Caption className='info-carrusel-one'>
          <h5>¡Muestra tu creatividad al mundo!</h5>
          <p>En xXxSnapPostxXx, encontrarás personas de todo el mundo que comparten su pasión por la fotografía. Podrás inspirarte en sus creaciones y aprender de sus técnicas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ModelThree}
          alt=""
        />
        <Carousel.Caption className='info-carrusel-one'>
          <h5>¡Muestra tu creatividad al mundo!</h5>
          <p>
            ¡Únete a nuestra comunidad y comparte tu creatividad!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={EncryptPhoto}
          alt=""
        />
        <Carousel.Caption className='info-carrusel-two'>
          <h5>Avisó importante</h5>
          <p className='pharagraph-security-lock'>
            En xXxSnapPostxXx, nos comprometemos a proteger tu información personal. Por eso, utilizamos el hasheo para proteger tus contraseñas y mensajes.

            Hasheo de contraseñas:

            Tus contraseñas son almacenadas en forma de hash, lo que significa que son convertidas en una cadena de caracteres aleatorios. Esto hace que sea imposible leerlas, incluso si alguien accede a nuestros servidores.

            Hasheo de mensajes:

            Los mensajes que envías a través de nuestra app también son hasheados antes de ser enviados. Esto significa que, incluso si alguien intercepta los mensajes, no podrá leerlos.

            ¿Por qué es importante el hasheo?

            El hasheo es una forma segura de almacenar contraseñas y mensajes. Es mucho más seguro que almacenarlos en texto plano, que podría ser leído por cualquier persona que acceda a los datos.

            ¿Qué puedes hacer para ayudar?

            Además de los sistemas de seguridad que hemos implementado, también puedes ayudar a proteger tu información personal siguiendo estos consejos:

            Elige contraseñas fuertes y únicas.
            No compartas tus contraseñas con nadie.
            Mantén tu software actualizado.
            Gracias por tu confianza.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
