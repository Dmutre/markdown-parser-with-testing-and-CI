const markdownValidator = require('./markdown.validator');
const { describe, expect, test } = require('@jest/globals');
const { escapeCases, markdownCases } = require('../utils/cases');
const { markups } = require('../utils/tags');

const validator = new markdownValidator();

describe('Checking nesting with different cases', () => {
  test('Invalid situation with nested tags', () => {
    const text = '**_lala_**';
    expect(() => validator.validateNesting(text, markdownCases)).toThrow()
  });

  test('Correct situation with nested tags', () => {
    const text = 'lala';
    expect(() => validator.validateNesting(text, markdownCases)).not.toThrow();
  });
});

describe('Validating unpaired tokens', () => {
  test('Invalid situation', () => {
    const text = '<b>lala</b> **another lalala';
    expect(() => validator.validateUnpaired(text, markups)).toThrow();
  })

  test('Correct situation', () => {
    const text = '<b>lala</b>';
    expect(() => validator.validateUnpaired(text, markups)).not.toThrow();
  })
});