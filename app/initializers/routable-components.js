import { patchOutletKeyword } from 'ember-routable-components-shim/outlet';
import { patchRoute } from 'ember-routable-components-shim/route';

export function initialize(/* application */) {
  patchOutletKeyword();
  patchRoute();
}

export default {
  name: 'routable-components',
  initialize: initialize
};
