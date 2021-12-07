

import { useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Row, Col } from 'reactstrap';

const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    }
  })

  const createFadeInClass = () => {
    if (typeof window !== 'undefined') {
      return window.__isAboutLoaded ? '' : 'fadein';
    }

    return 'fadein';
  }


  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title="About Me - Nutdanai Kitphermjaroen"
        className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
              <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4>
              <p className={`subsubTitle ${createFadeInClass()}`}>Here is a short description about me.</p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>My name is Nutdanai Kitphermjaroen. I am CS student who interested in using web and mobile applications to improve people's well-being. </p>
              <p>
              As an undergraduate student studying computer science, I have developed web and mobile applications both for my personal interests and for university projects over the last 3 years since 2019.
              </p>

              <p>Speaking of my own interests, my passion is to design and create the app that will help me (as well as others) grow up.
              You can check out my portfolio on this site to see some of my projects in the self-development field.</p>
         
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default About;
