# Dymaic import with 

Trying to get dynamic import to work with storybook 

```
let dynamicImportedModule 
if(false) {
  dynamicImportedModule = () => import('./../a')
} else {
  dynamicImportedModule = () => import('./../b')
}
```

see [the story](stories/index.stories.js) for a complete example and to debug. 

# How to reproduce

```
git clone <this repo>
yarn install 
yarn storybook
```

## Status

This is currently not working. 
