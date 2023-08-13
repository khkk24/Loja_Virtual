import React, { useState } from 'react';
import { Container, Image} from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel"
import TitleBanner from '../../atoms/TitleBanner';
import SubtitleBanner from '../../atoms/SubtitleBanner';
import './styles.css';

import image1 from '../../../images/architecture-city-building-tourism-wallpaper-preview.jpg'; // Importez vos images
import image2 from '../../../images/burj-khalifa-dubai-city-cityscape-wallpaper-preview.jpg';
import image3 from '../../../images/cinque-terre-italy-sea-city-dock-boat-building-hill-cityscape-cliff-wallpaper-preview.jpg';
import image4 from '../../../images/city-cityscape-sea-boat-building-forest-bay-portofino-italy-wallpaper-preview.jpg';
import image5 from '../../../images/city-doha-photos-public-domain.jpg'
import image6 from '../../../images/cityscape-architecture-building-new-york-city-wallpaper-preview.jpg';
import image7 from '../../../images/closeup-photography-of-red-ladybug-perched-on-green-leaf-wallpaper-preview.jpg';

const CarouselPage = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselItems = [
    {
      image: image1,
      title: 'Titre 1',
      subtitle: 'Sous-titre 1',
    },
    {
      image: image2,
      title: 'Titre 2',
      subtitle: 'Sous-titre 2',
    },
    {
      image: image3,
      title: 'Titre 3',
      subtitle: 'Sous-titre 3',
    },
    {
      image: image4,
      title: 'Titre 4',
      subtitle: 'Sous-titre 4',
    },
    {
      image: image5,
      title: 'Titre 5',
      subtitle: 'Sous-titre 5',
    },
    {
      image: image6,
      title: 'Titre 6',
      subtitle: 'Sous-titre 6',
    },
    {
      image: image7,
      title: 'Titre 7',
      subtitle: 'Sous-titre 7',
    },
    // Ajoutez plus d'éléments ici si nécessaire
  ];
  return (
    <Container fluid className='container-carrosel justify-content-center fluid-bg vh-70'>
     
          <div className="w-100"  >
        <Carousel activeIndex={index} onSelect={handleSelect} className=''>
              {carouselItems.map((item, idx) => (
                <Carousel.Item key={idx} className='carousel-image img-fluid'>
                  <Image
                    src={item.image}
                    alt={`Slide ${idx}`}
                    className='carousel-image carousel-image-size'
                    style={{
                      //width: '100%',
                      objectFit: 'cover',
                      // maxHeight: '70vh',
                    }}
                  />
                  <Carousel.Caption className='texto-banner ps-lg-2'>
                    <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                      <TitleBanner text={item.title} className='' />
                      <SubtitleBanner text={item.subtitle} />
                   </div>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
       
    </Container>
  )
}

export default CarouselPage 
