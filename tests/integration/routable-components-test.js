import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | routable-components');

test('Check that routable component is rendered', function(assert) {
  visit('/test?hello=world');

  andThen(function() {
    assert.equal(currentURL(), '/test?hello=world');
    assert.equal(find('div#test-content').text(), 'bar world boo');
  });
});
