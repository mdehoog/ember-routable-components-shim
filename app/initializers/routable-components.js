import { patchOutletKeyword } from 'ember-routable-components-shim/outlet';

export function initialize(/* application */) {
  patchOutletKeyword();
}

export default {
  name: 'routable-components',
  initialize: initialize
};
