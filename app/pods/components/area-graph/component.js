import Component from '@ember/component';


class ComponentAreaGraph extends Component {
  tagName = 'div';
  classNames = ['block', 'w-100'];

  init() {
    super.init(...arguments);
    this.percentage = parseInt(this.score);
    this.yesPecentage = Math.round(this.percentage / parseInt(this.maxScore) * 100);
    this.noPercentage = 100 - this.yesPecentage;
  }
}

export default ComponentAreaGraph;
