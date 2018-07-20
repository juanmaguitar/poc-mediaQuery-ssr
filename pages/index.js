import React, { Fragment } from "react"
import MediaQuery, { MediaQueryFactory } from "react-media-query"
import './styles.scss'

const BREAKPOINTS = {
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1200'
}

const MediaQueryBootstrap = MediaQueryFactory(BREAKPOINTS)

const App = () => (
  <Fragment>
    <MediaQuery>
      { 
        ({ M, L, XL }) => {
          if (XL) return <p>LargeDesktop</p>
          if (L) return <p>Desktop</p>
          if (M) return <p>Tablet</p>
          return <p>Mobile</p>
        }
      }
    </MediaQuery>
    <MediaQuery>
      { 
        ({ XS, S, M, L, XL, XXL }) => {
          let responsiveRender = <p>default</p>
          if (XS) responsiveRender = <p className='XS'>XS</p>
          if (S) responsiveRender = <p className='S'>S</p>
          if (M) responsiveRender = <p className='M'>M</p>
          if (L) responsiveRender = <p className='L'>L</p>
          if (XL) responsiveRender = <p className='XL'>XL</p>
          if (XXL) responsiveRender = <p className='XXL'>XXL</p>
          return <div className="responsiveContainer">{ responsiveRender }</div>
        }
      }
    </MediaQuery>
    <hr/>
    <MediaQueryBootstrap>
      { 
        ({ MD, LG, XL }) => {
          if (XL) return <p>LargeDesktop</p>
          if (LG) return <p>Desktop</p>
          if (MD) return <p>Tablet</p>
          return <p>Mobile</p>
        }
      }
    </MediaQueryBootstrap>
    <MediaQueryBootstrap>
    { 
      ({ SM, MD, LG, XL }) => {
        let responsiveRender = <p>default</p>
        if (SM) responsiveRender = <p className='SM'>SM</p>
        if (MD) responsiveRender = <p className='MD'>MD</p>
        if (LG) responsiveRender = <p className='LG'>LG</p>
        if (XL) responsiveRender = <p className='XL'>XL</p>
        return <div className="responsiveBootstrap">{ responsiveRender }</div>
      }
    }
    </MediaQueryBootstrap>
  </Fragment>
)

export default () => <App />
