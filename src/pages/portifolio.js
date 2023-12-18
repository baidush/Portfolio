import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import Timeline from '../components/timeline'
import Repositories from '../components/repositories'

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.fontColor};
  opacity: .2;
`

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

const Portifolio = ({ className, location }) => {
  const title = "Projects"
  const { keywords, portifolio, projects_title } = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={title}
        keywords={keywords}
      />

      <Hero
        heroImg={withPrefix('/images/cover-projects.png')}
        title={title}
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row className="edu-top">
            <p><strong>{projects_title}</strong></p>
          </Row>
          <Row className="job-top">
            {portifolio.map(job => (
              <Col
                key={job.description}
                align="center"
              >
                <JobCard
                  as={job.url ? "a" : "div"}
                  href={job.url}
                  target="_blank"
                >
                  <Image src={withPrefix(job.image)} />
                  <p>{job.description}</p>
                </JobCard>
              </Col>
            ))}
          </Row>
          <Separator />
          <Timeline />
          <Separator />
          {siteConfig.githubUsername && <Repositories />}
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Portifolio)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
  .edu-top {
    margin-top: -15px;
    padding-left: 0;
  }
  .job-top {
    margin-top: 15px;
    padding-left: 0;
  }
`
