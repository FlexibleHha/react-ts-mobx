import { override, fixBabelImports } from 'customize-cra'
/**
* 
* @param {*} config 
* @param {*} env 
*/
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);