/* FILTER a dataset by reduction
 *
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _srcFILTER = require('./FILTER');

var _srcFILTER2 = _interopRequireDefault(_srcFILTER);

(0, _tape2['default'])('FILTER', function (t) {
  t.plan(3);
  t.deepEqual((0, _srcFILTER2['default'])([[1], [2]], [true, false], [true, true]), [[1]]);
  t.deepEqual((0, _srcFILTER2['default'])([[1], [2]], [false, true], [true, true]), [[2]]);
  t.deepEqual((0, _srcFILTER2['default'])([[1, 1], [2, 2], [3, 3]], [false, true, true], [true, true, true]), [[2, 2], [3, 3]]);
});
