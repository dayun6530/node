'use strict';

const assert = require('assert');
const { isNonEmptyString } = require('node:util');

assert.strictEqual(isNonEmptyString('node'), true);
assert.strictEqual(isNonEmptyString(''), false);
assert.strictEqual(isNonEmptyString(1), false);