'use strict'

var test = require('tape')
var notFound = require('./')

test(function (t) {
  t.plan(2)
  try {
    require('foo')
  } catch (realErr) {
    var fakeErr = notFound('foo')
    t.equal(fakeErr.message, realErr.message)
    t.equal(fakeErr.code, realErr.code)
  }
})
