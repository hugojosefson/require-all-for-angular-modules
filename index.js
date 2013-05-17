module.exports = requireAllForAngularModules;

function requireAllForAngularModules() {
  for (var moduleName in require.modules ) {
    if (require.modules.hasOwnKey(moduleName)) {
      if (/-for-angular$/.test(moduleName)) {
        require(moduleName);
      }
    }
  }
}
