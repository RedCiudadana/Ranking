import { modifier } from 'ember-modifier';
import tippy from 'tippy.js';

export default modifier(function addTippy(element, [tip]/* , hash */) {
  tippy(element, {
    content: tip,
  });
});
