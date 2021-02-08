'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateHyperscript = require('slate-hyperscript');

var _nextSlatePlugin = require('@jswork/next-slate-plugin');

var _nextSlatePlugin2 = _interopRequireDefault(_nextSlatePlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _nextSlatePlugin2.default.define({
  id: 'numbered-list',
  serialize: {
    input: function input(_ref, children) {
      var el = _ref.el;

      var nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'ol') {
        return (0, _slateHyperscript.jsx)('element', { type: 'numbered-list' }, children);
      }
    },
    output: function output(node, children) {
      return '<ol>' + children + '</ol>';
    }
  },
  render: function render(_, _ref2) {
    var attributes = _ref2.attributes,
        children = _ref2.children,
        element = _ref2.element;

    return _react2.default.createElement(
      'ol',
      attributes,
      children
    );
  }
}); /**
     * @usage:
     * Active:
    // https://github.com/ianstormtaylor/slate/blob/master/site/examples/richtext.tsx
    Transforms.setNodes(editor, { type:'list-item' })
    Transforms.wrapNodes(editor, { type: 'numbered-list', children: [] })
    
    Deactive:
    Transforms.unwrapNodes(editor, {
        match: n =>
          ['numbered-list','bulleted-list'].includes(
            !Editor.isEditor(n) && n.type
          ),
        split: true,
      })
    Transforms.setNodes(editor, { type:'paragraph' })
     */