import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import A from './../a'
import B from './../b'

async function getModule() {
let dynamicImportedModule 
if(false) {
  dynamicImportedModule = () => import('./../a')
} else {
  dynamicImportedModule = () => import('./../b')
}
return await dynamicImportedModule
}

storiesOf('Modules loading', module)
  .add('static A', () => <A />)
  .add('static B', () => <B />)
  .add('dynamic', async () => {
    const dynamicImportedModule = await getModule();
    const DynamicImportedModule = await dynamicImportedModule()
    const DynamicImportedComponent =  DynamicImportedModule.default
    
    console.log(DynamicImportedComponent)
    // DynamicImportedComponent spits out: 

    // ƒ () {
    //   return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    //     'p',
    //     null,
    //     'b'
    //   );
    // }
    

    // return DynamicImportedComponent
    return <DynamicImportedComponent />
  });