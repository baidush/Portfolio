import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { ResetCSS, GlobalStyle, themes } from '../styles'
import Header from '../header'
import Footer from '../footer'
import { useDarkMode } from './useDarkMode'
import { animateOnScroll } from '../../utils/isVisible'
import Helmet from 'react-helmet'

const variants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
`

const Layout = ({ children, location }) => {
  const [theme, setTheme] = useDarkMode()
  useEffect(() => {
    animateOnScroll()
  }, [])
  return (
  <ThemeProvider theme={themes[theme || 'light']}>
    <ResetCSS />
    <GlobalStyle />
    <StyledContainer>
      <Header location={location} onChangeTheme={setTheme} theme={theme} />
      <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: 'Kostiantyn Baidush CV',
              },
              {
                property: `og:title`,
                content: 'Kostiantyn Baidush CV',
              },
              {
                property: `og:description`,
                content: 'Kostiantyn Baidush CV',
              },
              {
                property: `og:image`,
                content: 'https://kostix.tech/images/cover.png'
              },]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
        />
  
      <motion.main
        key={location}
        variants={variants}
        initial="initial"
        animate="enter"
      >
        {children}
      </motion.main>
      <Footer />
    </StyledContainer>
  </ThemeProvider>
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
}


export default Layout