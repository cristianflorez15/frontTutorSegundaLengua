'use client'
import { Button, Col } from 'react-bootstrap';

export default function Home() {
  return( 
    <div className='d-flex justify-content-end'>
      <Col xs={11} md={6} xl={5} className='w-md-50 my-5 d-flex flex-column'>
        <p className='text-white p-5 mx-3 fs-5 lh-sm bg-secondary bg-opacity-50'>
        ¡Bienvenido a Tuto! la nueva plataforma educativa, donde el aprendizaje del inglés se convierte en una 
        experiencia interactiva y personalizada. Aquí en Tuto, nuestro tutor virtual está listo para 
        acompañarte en cada paso de tu viaje hacia la fluidez en inglés. Ya sea que estés buscando mejorar 
        tu gramática, ampliar tu vocabulario o simplemente practicar conversaciones, ¡estamos aquí para 
        ayudarte! Sumérgete en un mundo de aprendizaje dinámico y descubre cómo puedes dominar el idioma 
        inglés de manera eficiente y divertida. ¡Comencemos esta emocionante aventura juntos!
        </p>
      </Col>
      
    </div>
   )
}
