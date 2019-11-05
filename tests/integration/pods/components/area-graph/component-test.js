import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | area-graph', function() {
  setupComponentTest('area-graph', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`<AreaGraph />`);
    expect(this.$()).to.have.length(1);

    // Template block usage:
    this.render(hbs`
      <AreaGraph>
        template block text
      </AreaGraph>
    `);

    expect(this.$().text().trim()).to.equal('template block text');
  });
});
