import React from 'react';

import ECharts from 'react-echarts';
import $ from 'jquery';

import option1 from './option1';
import option2 from './option2';

class Home extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      option: option1,
    };
  }

  componentDidMount() {
    this.flag = true;
    this.toggle();
  }

  toggle() {
    setTimeout(() => {
      this.flag = !this.flag;
      this.setState({
        option: this.flag ? option1 : option2,
      }, () => {
        this.toggle();
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <ECharts
          option={this.state.option}
          notMerge
          style={{ width: $(window).width() + 'px', height: ($(window).height() - 50) + 'px' }}
        />
      </div>
    );
  }
}

export default Home;
