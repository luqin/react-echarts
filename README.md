# react-echarts

[ECharts](https://github.com/ecomfe/echarts) Components for React

[![NPM version][npm-badge]][npm] [![Build Status][travis-ci-image]][travis-ci-url]

[![Dependency Status][deps-badge]][deps]
[![devDependency Status][dev-deps-badge]][dev-deps]
[![peerDependency Status][peer-deps-badge]][peer-deps]

## Installation

```sh
npm install react-echarts --save
```

## Usage

```js
import ECharts from 'react-echarts';

<ECharts option={this.state.option} />
```

## Examples

https://github.com/luqin/react-echarts/tree/master/examples

## Props

Name|Type|Default|Description
---|---|---|---
option|object||ECharts图表的配置项和数据
notMerge|boolean|false|可选，是否不跟之前设置的option进行合并，默认为false，即合并。
notRefreshImmediately|boolean|false|可选，在设置完option后是否不立即刷新画布，默认为false，即立即刷新。

[npm-badge]: http://badge.fury.io/js/react-echarts.svg
[npm]: https://www.npmjs.com/package/react-echarts

[deps-badge]: https://david-dm.org/luqin/react-echarts.svg
[deps]: https://david-dm.org/luqin/react-echarts

[dev-deps-badge]: https://david-dm.org/luqin/react-echarts/dev-status.svg
[dev-deps]: https://david-dm.org/luqin/react-echarts#info=devDependencies

[peer-deps-badge]: https://david-dm.org/luqin/react-echarts/peer-status.svg
[peer-deps]: https://david-dm.org/luqin/react-echarts#info=peerDependencies 

[travis-ci-image]: https://travis-ci.org/luqin/react-echarts.svg
[travis-ci-url]: https://travis-ci.org/luqin/react-echarts
