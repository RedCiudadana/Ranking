import EmberObject, { computed } from '@ember/object';
import { filterBy } from '@ember/object/computed';
import { A } from '@ember/array';

export default EmberObject.extend({
  init() {
    this._super(...arguments);
    // this.set('values', A([]));
  },

  successValues: filterBy('values', 'value', true),

  score: computed('successValues', function() {
    return Math.round((this.successValues.length / this.values.length) * 100);
  })
});
