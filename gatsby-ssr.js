/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
          (() => {    
            window.__onThemeChange = function() {};                
            function setTheme(newTheme) {                  
              window.__theme = newTheme;                  
              preferredTheme = newTheme;                  
              document.body.className = newTheme;                 
              window.__onThemeChange(newTheme);                
            }

            let preferredTheme
            try {
              preferredTheme = localStorage.getItem('theme')
            } catch (err) {}

            window.__setPreferredTheme = newTheme => {
              setTheme(newTheme)
              try {
                localStorage.setItem('theme', newTheme)
              } catch (err) {}
            }

            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
            darkQuery.addListener(e => {
              window.__setPreferredTheme(e.matches ? 'dark' : 'light')
            })
            
            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
          })()
        `,
      },
    }),
  ])
}

// exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
//   /**
//    * @type {any[]} headComponents
//    */
//   const headComponents = getHeadComponents();

//   headComponents.sort((a, b) => {
//       if (a.props && a.props["data-react-helmet"]) {
//           return 0;
//       }
//       return 1;
//   });
//   replaceHeadComponents(headComponents);
// };