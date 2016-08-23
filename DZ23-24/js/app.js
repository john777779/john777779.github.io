requirejs.config({
  baseUrl: "js",
  paths: {
    'jquery': ['https://code.jquery.com/jquery-1.12.3'],
    'template': ['template']
  },
  shim: {
    'jquery': {
      exports: 'jquery'
    },
    'template': {
      exports: 'template'
    }
  }
});
require(
  [
    'model',
    'view',
    'controller',
    'jquery',
    'template'
  ],
  function(model,view, controller) {

  }
);