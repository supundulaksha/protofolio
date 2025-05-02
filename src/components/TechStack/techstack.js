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
        width="200px"
        duration={30}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={"#fff"}>
        <Slider.Slide>
          <img src={php} alt="any" className="w-20" />
        </Slider.Slide>
        <Slider.Slide>
          <img src= {react} alt="any2" className="w-20" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={wordpress} alt="any3" className="w-20" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={laravel} alt="any4" className="w-20" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={mysql} alt="any5" className="w-20" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={figma} alt="any6" className="w-20" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={shopify} alt="any7" className="w-20" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={bitbucket} alt="any8" className="w-20" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={js} alt="any9" className="w-20" />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default Component;
