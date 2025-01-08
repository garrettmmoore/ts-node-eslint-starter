import { describe, expect, test } from 'vitest';
import { MostCommonElements } from '../../src';
import { Example, Examples } from '../types';

const example1: Example = {
  input: {
    param1: [4, 4, 4, 6, 6, 5, 5, 5],
    param2: 2
  },
  output: {
    result: [4, 5]
  }
};

const example2: Example = {
  input: {
    param1: [7, 7, 7, 8, 8, 9, 9, 9],
    param2: 3
  },
  output: {
    result: [7, 9, 8]
  }
};

const example3: Example = {
  input: {
    param1: [10, 10, 10, 10, 10],
    param2: 1
  },
  output: {
    result: [10]
  }
};

const examples: Examples = {
  solutions: [example1, example2, example3]
};

describe('mostCommonElements', () => {
  examples.solutions.forEach((example: Example) => {
    test(`numbers = [${example.input.param1}] k = ${example.input.param2}`, () => {
      const result = MostCommonElements(
        example.input.param1,
        example.input.param2
      );
      const expected = example.output.result;

      // Sort both result and expected arrays before comparison
      result.sort((a: number, b: number) => a - b);
      expected.sort((a: number, b: number) => a - b);

      expect(result).toStrictEqual(expected);
    });
  });
});
