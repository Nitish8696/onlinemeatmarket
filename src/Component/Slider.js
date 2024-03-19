import Carousel from "react-bootstrap/Carousel";
import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";
import slider3 from "../images/slider3.png";
import slider4 from "../images/slider4.png";

function IndividualIntervalsExample() {
  return (
    <div className=" ">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={slider1} alt="" className="sm:w-[1350px] sm:h-[500px]" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={slider2} className="sm:w-[1350px] sm:h-[500px]" alt="" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={slider3} className="sm:w-[1350px] sm:h-[500px]" alt="" />
        </Carousel.Item>
      </Carousel>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            src={slider4}
            alt=""
            className="sm:w-[1150px] sm:h-[75px] m-auto my-2"
            style={{ border: "4px dotted red" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src={slider4}
            className="sm:w-[1100px] sm:h-[75px] m-auto my-2"
            alt=""
            style={{ border: "4px dotted red" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src={slider4}
            className="sm:w-[1100px] sm:h-[75px] m-auto my-2"
            alt=""
            style={{ border: "4px dotted red" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
