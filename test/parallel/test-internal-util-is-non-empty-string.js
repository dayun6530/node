// Flags: --expose-internals
'use strict';

const assert = require('assert');
const { isNonEmptyString } = require('internal/util');

assert.strictEqual(isNonEmptyString('node'), true);
assert.strictEqual(isNonEmptyString(''), false);
assert.strictEqual(isNonEmptyString(1), false);