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

const Interests = ({ className, location }) => {
  const title = "Interests"
  const { keywords, music, books, gym, interests_title } = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={title}
        keywords={keywords}
      />

      <Hero
        heroImg={withPrefix('/images/cover.jpeg')}
        title={title}
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
        <Row className="edu-top">
            <p><strong>{interests_title}</strong></p>
        </Row>
        <Row className="edu-top">
              <Col
                align="center"
              >
                    <div className="edu"> 
                        <h2>{music.name}</h2>
                        <p>{music.txt}</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ivvxJ2h8nes?si=FS5Y5ZqQRnNlo4Zs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
              </Col>
              <Col key={gym.txt}
                align="center"
              >
                    <div className="edu"> 
                        <h2>{gym.name}</h2>
                        <p>{gym.txt}</p>
                     </div>
              </Col>
              <Col key={books.txt}
                align="center"
              >
                    <div className="edu"> 
                        <h2>{books.name}</h2>
                        <p>{books.txt}</p>
                     </div>
              </Col>
        </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Interests)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
  .edu-top {
    margin-top: -15px;
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
`