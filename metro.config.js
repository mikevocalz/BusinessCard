// metro.config.js

// Learn more: https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

module.exports = (async () => {
  const config = getDefaultConfig(__dirname);

  const { transformer} = config;

  config.transformer={
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer/expo'),
  }

  // Add custom asset extensions
  config.resolver.assetExts.push(
    'obj',
    'mtl',
    'mp3',
    'JPG',
    'vrx',
    'hdr',
    'gltf',
    'glb',
    'bin',
    'pte',
    'arobject',
    'gif'
  );

  config.resolver.unstable_enablePackageExports = true;

  // Enable NativeWind
  return withNativeWind(config, { input: './global.css' });
})();
