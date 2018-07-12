# Quick SSR test for `sui-components`

## Prepare the component
Things to do **from the component's folder** (the component you want to test)

1.-  Build a _production_ version
```
npm run build
```

2.- Link this using NPM so you can then use it directly from other projects
_For example from the `AtomTooltip` component's folder (`package.json` → `"name": "@s-ui/react-atom-tooltip"`) we can do_
```
npm link
```

## On this project

Steps to follow to test the `sui-components` component

1-. clone this repo
```
git clone XXXXXX
```

2.- install its dependencies
```
npm install
```

3.- install the component previously linked using
_The name used here corresponds to the `name` property in the `package.json` of the component previously linked_
```
npm link @s-ui/react-atom-tooltip
```

4.- modify the code at `pages/index.js` to use the component

5.- launch a SSR app using this component by doing...
```
npm run dev
```
or 
```
npm run dev -- -p 3002
````
to specify a PORT

