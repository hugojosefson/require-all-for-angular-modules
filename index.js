module.exports = requireAllForAngularModules;

function requireAllForAngularModules() {
  var require = window.require;
  var modules = require.modules;
  for (var moduleName in modules ) {
    if (modules.hasOwnProperty(moduleName)) {
      if (/-for-angular(\/index.js)?$/.test(moduleName)) {
        require(moduleName);
      }
    }
  }
}
