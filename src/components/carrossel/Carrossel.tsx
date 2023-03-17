import React from "react";
import { Carousel } from "react-bootstrap";

function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.kabum.com.br/core/_next/image?url=https://themes.kabum.com.br/conteudo/layout/3176/banner_img.jpg&w=3840&h=400&q=100"
          alt="Primeira imagem"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.kabum.com.br/core/_next/image?url=https://themes.kabum.com.br/conteudo/layout/3061/banner_img.jpg&w=3840&h=400&q=100"
          alt="Segunda imagem"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.kabum.com.br/core/_next/image?url=https://themes.kabum.com.br/conteudo/layout/3197/banner_img.jpg&w=3840&h=400&q=100"
          alt="Terceira imagem"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrossel;
