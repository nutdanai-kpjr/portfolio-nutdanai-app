
import { useState, useRef, useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';
import { useGetUser } from '@/actions/user';

const ROLES = ['Developer', 'Flutter Lover', 'Team Player', 'Next.js', 'React.js', 'Firebase'];
const Index = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const { data, loading } = useGetUser();
  const flipInterval = useRef();

  useEffect(() => {
    startAnimation();
    return () => flipInterval.current && clearInterval(flipInterval.current)
  }, []);

  const startAnimation = () => {
    flipInterval.current = setInterval(() => {
      setIsFlipping(prevFlipping => !prevFlipping);
    }, 20000);
  }

  return (
    <BaseLayout
      user={data}
      loading={loading}
      navClass="transparent"
      className={`cover ${isFlipping ? 'cover-orange' : 'cover-blue'}`}>
      <BasePage indexPage title="Portfolio - Nutdanai">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="bb"></div>
                 {/* <div className="image image-1">
                        <div className="hero-section-content">
                          <h2> Full Stack Developer </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio and job history.
                          </div>
                        </div>
                  </div> */}
                    
                      {/* <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div> */}
                    </div>
                    <div className="back">
                    <div className="bb2"></div>
                      {/* <div className="image image-2">
                        <div className="hero-section-content">
                          <h2>React and Next is Amazing!</h2>
                          <div className="hero-section-content-intro">
                            Software developer ready for a project of any type!
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="shadow-custom shadow-custom-orange">
                        <div className="shadow-inner"> </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    <span>
                  Welcome to my portfolio, <br/> Nutdanai here!</span><br/> 
                  
                   <span><br/> Discover more about my work, collaborate, and<br/>  see what I have been up to!</span>
                  </h1>
                </div>

                <Typed
                  loop
                  typeSpeed={100}
                  backSpeed={100}
                  strings={ROLES}
                  backDelay={5000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look on my work!
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  )
}

export default Index;
