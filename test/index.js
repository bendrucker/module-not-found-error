'use strict'

import test from 'tape'
import notFound from '../'

test((t) => {
  t.equal(notFound('foo').message, `Cannot find module 'foo'`)
  t.end()
})
