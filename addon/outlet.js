import Ember from 'ember';
var require = Ember.__loader.require;
var OutletKeyword = require('ember-htmlbars/keywords/outlet').default;
var ViewNodeManager = require('ember-htmlbars/node-managers/view-node-manager').default;

export function patchOutletKeyword() {
  var baseRender = OutletKeyword.render;
  OutletKeyword.render = function (renderNode, env, scope, params, hash, template, inverse, visitor) {
    let state = renderNode.getState();
    let owner = env.owner;
    let parentView = env.view;
    let outletState = state.outletState;
    let toRender = outletState.render;

    let componentName = toRender.name;
    let Component = owner._lookupFactory(`component:${componentName}`);
    let layout = owner.lookup(`template:components/${componentName}`);

    if (!(Component || layout)) {
      //routable component or template not found, use base implementation
      return baseRender(...arguments);
    }

    let options = {
      component: Component || Ember.Component.create(),
      layout: layout
    };
    let attrs = {
      model: Ember.get(toRender.controller, 'model'),
      target: Ember.get(toRender.controller, 'target')
    };

    if (state.manager) {
      state.manager.destroy();
      state.manager = null;
    }

    let nodeManager = ViewNodeManager.create(renderNode, env, attrs, options, parentView, null, null, template);
    state.manager = nodeManager;

    nodeManager.render(env, hash, visitor);
  };
}
