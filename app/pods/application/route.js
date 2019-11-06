import Route from '@ember/routing/route';
import { A } from '@ember/array';
import fetch from 'fetch';

export default Route.extend({
  model() {
    return fetch('data/data-estado.json').then((response) => {
      return A(response.json()).then((result) => {
        return result;
      });
    });
  }
});
