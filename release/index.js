'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = createNotFoundError;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _xtendMutable = require('xtend/mutable');

var _xtendMutable2 = _interopRequireDefault(_xtendMutable);

'use strict';

function createNotFoundError(path) {
  return _xtendMutable2['default'](new Error('Cannot find module \'' + path + '\''), {
    code: 'MODULE_NOT_FOUND'
  });
}

module.exports = exports['default'];