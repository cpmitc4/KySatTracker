// Changed KYS2 so that if WebGL is detected, we will now get index.js from the correct path in the webapp
function testWebGL() {
  try {
    return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
  } catch(e) {
    return false;
  }}

Modernizr.load([
  {
    test : testWebGL(),
    yep: '/js/index.js',
    nope : '/js/redirects/no_webgl.js'
  }]);
