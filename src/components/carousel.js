import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { StaticImage } from "gatsby-plugin-image"

function DarkVariantExample() {

    const carouselImageStyle = {
        height: '75px', 
        objectFit: 'cover', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      };
  return (
    <Carousel data-bs-theme="dark" interval={4000}>
      <Carousel.Item>
        <StaticImage
          className="d-block w-100"
          src="../images/slider-1-sm.jpg"
          alt="First slide"
          placeholder="blurred"
          layout="constrained"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block w-100"
          src="../images/slider-2-sm.jpg"
          alt="Second slide"
          placeholder="blurred"
          layout="constrained"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block w-100"
          src="../images/slider-3-sm.jpg"
          alt="Third slide"
          placeholder="blurred"
          layout="constrained"
        />
      
        
       
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block w-100"
          src="../images/slider-4-md.jpg"
          alt="Second slide"
          placeholder="blurred"
          layout="constrained"
          width={760}
    height={505}
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block w-100"
          src="../images/slider-5-sm.jpg"
          alt="Second slide"
          placeholder="blurred"
          layout="constrained"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block w-100"
          src="../images/slider-6-sm.jpg"
          alt="Second slide"
          placeholder="blurred"
          layout="constrained"
          width={760}
    height={505}
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default DarkVariantExample
