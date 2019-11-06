import Component from '@ember/component';
import utils from 'ranking/utils';

export default class ScoreColorComponent extends Component {
  tagName = 'span';

  classNameBindings = ['scoreColorClass'];

  init() {
    super.init(...arguments);
    this.percentage = 100 - parseInt(this.score);
    // green(120) to red(0)
    this.set('color', utils.percentageToHsl(this.percentage, 120, 0));
    this.set('scoreColorClass', `hls-${this.percentage}`);
  }
}
