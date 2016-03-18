'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// import echarts from 'echarts/lib/echarts';

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

var ECharts = (function (_React$Component) {
  _inherits(ECharts, _React$Component);

  _createClass(ECharts, null, [{
    key: 'propTypes',
    value: {
      onInit: _react2['default'].PropTypes.func,
      option: _react2['default'].PropTypes.object,
      notMerge: _react2['default'].PropTypes.bool,
      notRefreshImmediately: _react2['default'].PropTypes.bool,
      style: _react2['default'].PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      notMerge: false,
      notRefreshImmediately: false,
      style: {}
    },
    enumerable: true
  }]);

  function ECharts(props) {
    _classCallCheck(this, ECharts);

    _get(Object.getPrototypeOf(ECharts.prototype), 'constructor', this).call(this, props);
    this.state = {};
  }

  _createClass(ECharts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setOption();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.dispose();
    }
  }, {
    key: 'getInstance',
    value: function getInstance() {
      return this.chart;
    }
  }, {
    key: 'setOption',
    value: function setOption() {
      var _props = this.props;
      var option = _props.option;
      var notMerge = _props.notMerge;
      var notRefreshImmediately = _props.notRefreshImmediately;

      if (option) {
        this.chart.showLoading();
        this.chart.setOption(option, notMerge, notRefreshImmediately);
        this.chart.hideLoading();
      }
    }
  }, {
    key: 'init',
    value: function init() {
      this.chart = _echarts2['default'].init(this.refs.container);
      this.setOption();
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      if (this.chart) {
        this.chart.dispose();
        this.chart = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var option = _props2.option;
      var notMerge = _props2.notMerge;
      var notRefreshImmediately = _props2.notRefreshImmediately;
      var style = _props2.style;

      var other = _objectWithoutProperties(_props2, ['option', 'notMerge', 'notRefreshImmediately', 'style']);

      var newStyle = _extends({
        width: '100%',
        height: '100%'
      }, style);

      return _react2['default'].createElement('div', _extends({ ref: 'container' }, other, { style: newStyle }));
    }
  }]);

  return ECharts;
})(_react2['default'].Component);

exports['default'] = ECharts;
module.exports = exports['default'];