
# require-all-for-angular-modules

  Requires all `*-for-angular` modules, so we know they have all registered themselves to angular, without specifying each one separately.

  This is useful when you have a bunch of AngularJS modules which adhere to these rules:

  * packaged as a [component](https://github.com/component/component)
  * registers its `angular.module` directly when the user does `require("that-module")`<br/>
    (i.e. no exported function which the user is required to call)
  * named `*-for-angular` to identify itself as adhering to these rules

## Installation

    $ component install hugojosefson/require-all-for-angular-modules

## API

  Call this after `<script src="angular.js"/>` and `<script src="build/build.js"/>`, but before document ready:

    require("require-all-for-angular-modules")();

  Then you don't have to specify each module more than in your `component.json`'s dependencies and of course in each `angular.module` declaration's dependency array. No specific `<script/>` tag nor separate `require()` for each!

## License

  MIT
