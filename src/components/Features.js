import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 
import meter1 from "../assets/img/analytic.png";
import meter2 from "../assets/img/team.png";
import meter3 from "../assets/img/settings.png";


export const Features = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
    },
  };

  return (
    <section className="skill" id="features">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Features</h2>
              <p>
                Fitur-fitur khusus yang terintegrasi dalam sistem ini bertujuan
                untuk memberikan visibilitas, kontrol, dan pelaporan yang optimal
                kepada tim proyek dan pemangku kepentingan.
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Img" />
                  <h5>STATISTIC</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Img" />
                  <h5>MANAGEMENT</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt=" Img" />
                  <h5>MAINTENANCE</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt=" Img" />
                  <h5>STATISTIC</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={bg2} alt="Background" /> */}
    </section>
  );
};
