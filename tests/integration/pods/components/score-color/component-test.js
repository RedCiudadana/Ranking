import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | score-color', function() {
  setupComponentTest('score-color', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`<ScoreColor />`);
    expect(this.$()).to.have.length(1);

    // Template block usage:
    this.render(hbs`
      <ScoreColor>
        template block text
      </ScoreColor>
    `);

    expect(this.$().text().trim()).to.equal('template block text');
  });
});
