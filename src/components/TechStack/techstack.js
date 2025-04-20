import Slider from "react-infinite-logo-slider";
import './techstack.css';
import php from '../../assets/PHP-logo 1.png';
import react from '../../assets/react.png';
import wordpress from '../../assets/wordpress.png';
import laravel from '../../assets/laravel.png';
import mysql from '../../assets/mysql.png';
import figma from '../../assets/figma.png';
import shopify from '../../assets/shopify.png';
import bitbucket from '../../assets/bitbucket.png';
import js from '../../assets/Js.png';

const Component = () => {
  return (
    <div className="techstack">
      <Slider
        width="250px"
        duration={30}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={"#fff"}>
        <Slider.Slide>
          <img src={php} alt="any" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src= {react} alt="any2" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={wordpress} alt="any3" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={laravel} alt="any3" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={mysql} alt="any3" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={figma} alt="any3" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={shopify} alt="any3" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={bitbucket} alt="any3" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={js} alt="any3" className="w-36" />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default Component;
