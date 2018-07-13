import React, { Fragment } from 'react'
import AtomTooltip from '@s-ui/react-atom-tooltip'

import "@s-ui/react-atom-tooltip/lib/index.scss"

const App = () => (
  <Fragment>
    <p>Welcome to this demo</p>
    <p>Welcome to <AtomTooltip><strong title="Simplifying SSR w/ react">next.js!</strong></AtomTooltip></p>
  </Fragment>
)

export default () => <App />