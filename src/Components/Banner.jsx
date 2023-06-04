import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const Banner = () => {
  return (
    <div >
    <Carousel fade >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://clauem2.arrowtheme.com/media/wysiwyg/slider/Top_banner1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='text-dark'>
        <div className="inner-text">
        <h5 className="sub-title">Spring - Summer 2020</h5>
        <h2 className="big-text">FLASH SALE OF 70%</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident</p>
        <a href="https://clauem2.arrowtheme.com/fr/women.html" className="btn btn-default">Shop now</a>
        </div>
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://clauem2.arrowtheme.com/media/wysiwyg/slider/Top_banner2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='text-dark'>
        <div className="inner-text">
        <h5 className="sub-title">Spring - Summer 2020</h5>
        <h2 className="big-text">FLASH SALE OF 70%</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident</p>
        <Button variant="outline-dark">Shop Now</Button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner