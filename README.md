# ember-routable-components-shim
[![Build Status](https://travis-ci.org/mdehoog/ember-routable-components-shim.svg)](https://travis-ci.org/mdehoog/ember-routable-components-shim)

[Ember.js](https://github.com/emberjs/ember.js) currently has initial support for Routable Components; available only for the `canary` version sitting behind a feature flag.

This addon adds exactly the same Routable Component implementation, but supports the `release` and `beta` versions.

## Installation

`ember install ember-routable-components-shim`

## Usage

Create your routable component (instead of a controller). It must be a `isGlimmerComponent`:

```javascript
// components/post.js
import Ember from 'ember';

export default Ember.Component.extend({
  isGlimmerComponent: true,
  componentProperty: 'componentValue'
});
```

```handlebars
{{!-- templates/components/post.hbs --}}
Model property: {{model.modelProperty}}<br/>
Component property: {{componentProperty}}
```

Create a route that renders your routable component:

```javascript
// routes/post.js
import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function () {
    this.render({component: this.routeName}); //or you can explicitly name your component here
  },
  model: function () {
    return {
      modelProperty: 'modelValue'
    };
  }
});
```

Add the route to `router.js` as normal:

```javascript
// router.js
Router.map(function() {
  this.route('post', { path: '/post' });
});
```

Visiting `/post` should now render your routable component.
