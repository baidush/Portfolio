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
  const { keywords, interests } = siteConfig
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
            {interests.map(int => (
              <Col
                key={int.description}
                align="center"
              >
                    <div className="edu"> 
                        <p><strong>{int.name}</strong></p>
                        <p>{int.desc}</p>
                        <p><em>{int.prev}</em></p>
                    </div>
              </Col>
            ))}
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
    margin-top: 50px;
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