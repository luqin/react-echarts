import React from 'react';
// import echarts from 'echarts/lib/echarts';
import echarts from 'echarts';

class ECharts extends React.Component {

  static propTypes = {
    onInit: React.PropTypes.func,
    option: React.PropTypes.object,
    notMerge: React.PropTypes.bool,
    notRefreshImmediately: React.PropTypes.bool,
    style: React.PropTypes.object,
  };

  static defaultProps = {
    notMerge: false,
    notRefreshImmediately: false,
    style: {},
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    this.setOption();
  }

  componentWillUnmount() {
    this.dispose();
  }

  getInstance() {
    return this.chart;
  }

  setOption() {
    let {
      option,
      notMerge,
      notRefreshImmediately,
      } = this.props;
    if (option) {
      this.chart.showLoading();
      this.chart.setOption(option, notMerge, notRefreshImmediately);
      this.chart.hideLoading();
    }
  }

  init() {
    this.chart = echarts.init(this.refs.container);
    this.setOption();
  }

  dispose() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  }

  render() {
    let {
      option,
      notMerge,
      notRefreshImmediately,
      style,
      ...other,
      } = this.props;

    let newStyle = Object.assign({
      width: '100%',
      height: '100%',
    }, style);

    return (
      <div ref="container" {...other} style={newStyle}></div>
    );
  }
}

export default ECharts;
