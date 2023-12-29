import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'

const Layout = loadable(() => import('../components/layout'))

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 24px 47px 79px -21px rgba(0,0,0,0.51);
`

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;

  ${({ href }) => href && css`
    &:hover ${Image}{
      transition: transform .5s;
      transform: translateY(-5px);
    }
  `}
`

const Education = ({ className, location }) => {
    const title = "Education";
    const { keywords, education, cert, edu_title } = siteConfig;
  
    return (
      <Layout location={location}>
        <SEO title={title} keywords={keywords} />
        <Hero heroImg={withPrefix('/images/cover-apple.png')} title={title} />
  
        <Wrapper className={className}>
          <Container className="page-content" fluid>
            <Row className="edu-title2">
              <strong>{edu_title}</strong>
            </Row>
            
            <Row className="edu-top">
              {education.map(edu => (
                <Col key={edu.description} align="center">
                  <div className="edu">
                    <p><strong>{edu.name}</strong></p>
                    <p>{edu.degree}</p>
                    <p><em>{edu.description}</em></p>
                    <p><a href={edu.url}>{edu.url}</a></p>
                    <p>{edu.date}</p>
                  </div>
                </Col>
              ))}
            </Row>
  
            <Row>
              {cert.map(c => (
                <div className="cert" key={c.name}>
                  <p><strong>{c.name}</strong></p>
                  <p><a href={c.url}>{c.url}</a></p>
                  <p>{c.date}</p>
                </div>
              ))}
            </Row>
          </Container>
        </Wrapper>
      </Layout>
    );
  };
  
export default styled(Education)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
  .edu-top {
    margin-top: 50px;
    padding-left: 0;
  }
  .edu-title2 {
    margin-top: 10px;
    padding-left: 0;
  }
  .edu {
    margin-top: 30px;
    width: 100%;
  }
  .cert {
    margin-top: 30px;
    width: 100%;
  }
  .edu-title {
    margin-top: -35px;
    padding-left: 0;
  }
`