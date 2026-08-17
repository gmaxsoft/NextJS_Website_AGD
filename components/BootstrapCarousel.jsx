"use client"

import { useState } from "react";
import { items } from "@/public/json/Items.json";
import { Carousel } from "react-bootstrap";

export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="slider">
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className="item" interval={4000}>
          <img src={item.imageUrl} alt="slides" />
          <Carousel.Caption className="caption">
            <h3>{item.body}</h3>
            <a href="/oferta/" className="btn btn-danger" title="Oferta">Zobacz ofertę</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}