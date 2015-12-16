import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function () {
    this.render({component: this.routeName});
  },
  model: function () {
    return {
      foo: 'bar'
    };
  }
});
