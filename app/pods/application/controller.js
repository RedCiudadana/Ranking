import Controller from '@ember/controller';
import RowRanking from 'ranking/entity/row-ranking';

class ApplicationController extends Controller {
  init() {
    super.init(...arguments);
    this.ranking = [
      RowRanking.create({
        values: [
          {
            label: 'Label 1',
            value: false
          },
          {
            label: 'Label 2',
            value: true
          },
          {
            label: 'Label 3',
            value: true
          }
        ]
      }),
      RowRanking.create({
        values: [
          {
            label: 'Label 1',
            value: false
          },
          {
            label: 'Label 2',
            value: false
          },
          {
            label: 'Label 3',
            value: true
          }
        ]
      })
    ];
  }
}

export default ApplicationController;
