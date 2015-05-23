'use strict'

import extend from 'xtend/mutable'

export default function createNotFoundError (path) {
  return extend(new Error(`Cannot find module '${path}'`), {
    code: 'MODULE_NOT_FOUND'
  })
}
