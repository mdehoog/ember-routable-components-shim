# ember-routable-components-shim
[![Build Status](https://travis-ci.org/mdehoog/ember-routable-components-shim.svg)](https://travis-ci.org/mdehoog/ember-routable-components-shim) [![Ember Observer Score](http://emberobserver.com/badges/ember-routable-components-shim.svg)](http://emberobserver.com/addons/ember-routable-components-shim)

This addon adds support for routable components to Ember.js.

All controllers can be replaced with routable components. Routable components do not retain state between transitions. The route's `model` attribute is available to the component, and actions not handled by the component will bubble up to the route.

Supports Ember.js version 2.7 and greater. If you need support for 2.6 and below, use [v0.0.2](https://github.com/mdehoog/ember-routable-components-shim/tree/v0.0.2) (see instructions on that tag).

## Installation

`ember install ember-routable-components-shim`

## Usage

Create your routable component (instead of a controller):

```javascript
// components/post.js
import Ember from 'ember';

export default Ember.Component.extend({
  componentProperty: 'componentValue'
});
```

```handlebars
{{!-- templates/components/post.hbs --}}
Model property: {{model.modelProperty}}<br/>
Component property: {{componentProperty}}
```

Create a route:

```javascript
// routes/post.js
import Ember from 'ember';

export default Ember.Route.extend({
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

## Usage with pods

If you use pods, you can keep each route and routable component/template in the same directory. Use the resolver included in this addon instead of the default:

```javascript
// resolver.js
import Resolver from 'ember-routable-components-shim/resolver';

export default Resolver;
```

Create your route and routable component:

```javascript
// pods/components/post/route.js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {
      modelProperty: 'modelValue'
    };
  }
});
```

```javascript
// pods/components/post/component.js
import Ember from 'ember';

export default Ember.Component.extend({
  componentProperty: 'componentValue'
});
```

```handlebars
{{!-- pods/components/post/template.hbs --}}
Model property: {{model.modelProperty}}<br/>
Component property: {{componentProperty}}
```

Add the route to `router.js`:

```javascript
// router.js
Router.map(function() {
  this.route('post', { path: '/post' });
});
```

Visiting `/post` should now render your routable component.
