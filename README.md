# POC: MediaQuery component

## Launching the DEMO

```
yarn install
yarn dev
```


## Suggestions 

👤 https://stackblitz.com/edit/react-dosthe

```
// breakpoints definidos en el componente
import {BREAKPOINTS} from '@s-ui/react-content-query'

/** Esto es una, otra es que fuese simplemente un array con todos los breakpoints disponibles y pillar los index del Object.keys. :) Nos ayuda a comparar luego y hacer el mayor o menor que.
const BREAKPOINTS = {
  xs: 0,
  s: 1,
  m: 2,
  l: 3,
  xl: 4
}
*/

class CardList extends Component {
  render () {
    return (
      <SuiContentQuery>
        {(breakpointKey) => {
          return this.props.cards.map(card => (
            <Card
              orientation={breakpointKey >= BREAKPOINTS['xs'] ? 'horizontal' : 'vertical'}
              size={breakpointKey === 's' ? 'small' : 'default'
            />
          ))
        }}
      </SuiContentQuery>
    )
  }
}
```

### References 

- 👉  `[2888]` https://github.com/contra/react-responsive
- 👉  `[1361]` https://github.com/ReactTraining/react-media
- 👉  `[586]` https://github.com/d6u/react-container-query

## Breakpoints

`https://github.com/SUI-Components/sui-theme/blob/master/src/layout/_breakpoints.scss`
```
$breakpoints: (
  xxs: 0,
  xs: 480px,
  s: 600px,
  m: 840px,
  l: 960px,
  xl: 1280px,
  xxl: 1440px
) !default;
```
