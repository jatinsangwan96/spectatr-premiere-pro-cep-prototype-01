import {CEP_Config} from 'vite-cep-plugin';
import {version} from './package.json';

const config: CEP_Config = {
    version,
    id: 'com.spectatr.premierepro.prototype01.cep',
    displayName: 'Spectatr',
    symlink: 'local',
    port: 3000,
    servePort: 5000,
    startingDebugPort: 8860,
    extensionManifestVersion: 6.0,
    requiredRuntimeVersion: 9.0,
    hosts: [{name: 'PPRO', version: '[12.0.0]'}],
    type: 'Panel',
    iconDarkNormal: './src/assets/light-icon.png',
    iconNormal: './src/assets/dark-icon.png',
    iconDarkNormalRollOver: './src/assets/light-icon.png',
    iconNormalRollOver: './src/assets/dark-icon.png',
    parameters: ['--v=0', '--enable-nodejs', '--mixed-context'],
    width: 500,
    height: 550,

    panels: [
        {
            mainPath: './main/index.html',
            name: 'main',
            panelDisplayName: 'Spectatr',
            autoVisible: true,
            width: 400,
            height: 600,
        },
    ],
    build: {
        jsxBin: 'off',
        sourceMap: true,
    },
    zxp: {
        country: 'IN',
        province: 'HR',
        org: 'Spectatr',
        password: 'spectatr@123',
        tsa: 'http://timestamp.digicert.com/',
        sourceMap: false,
        jsxBin: 'off',
    },
    installModules: [],
    copyAssets: [],
    copyZipAssets: [],
};
export default config;
