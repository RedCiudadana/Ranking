import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
  model({ id }) {
    return A(this.modelFor('application')).filter((item) => item.No === id);
  }
});
