import Resolver from 'ember-resolver';

export default Resolver.extend({
  // If you want pod route definitions (route.js) to live next to their routable components,
  // this Resolver prepends route/controller names with "components/" during resolution.
  resolveRoute: function (parsedName) {
    const componentsFullName = parsedName.type + ':components/' + parsedName.fullNameWithoutType;
    return this._super(this.parseName(componentsFullName)) || this._super(parsedName);
  },
  resolveController: function (parsedName) {
    const componentsFullName = parsedName.type + ':components/' + parsedName.fullNameWithoutType;
    return this._super(this.parseName(componentsFullName)) || this._super(parsedName);
  }
});
