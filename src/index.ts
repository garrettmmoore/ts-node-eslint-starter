/**
 * Most Common Elements
 *
 * Given an array of integers numbers and a number k, find the k most frequent
 * numbers in the array. Here, k represents the number of elements that should
 * be returned, which are the ones that appear the most frequently. The order of
 * the result does not matter.
 */
export function MostCommonElements(numbers: number[], k: number): number[] {
  const frequencyMap = new Map<number, number>();

  // Count the frequency of each element in numbers array
  numbers.forEach((num) => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  });

  // Create an array of buckets where the index represents the frequency
  const buckets: number[][] = Array(numbers.length + 1)
    .fill(null)
    .map(() => []);

  // Place numbers into the corresponding bucket based on their frequency
  frequencyMap.forEach((value, key) => {
    buckets[value].push(key);
  });

  const result: number[] = [];

  // Iterate from the highest frequency bucket to the lowest
  for (let i = buckets.length - 1; i >= 0 && k > 0; i--) {
    if (buckets[i].length > 0) {
      for (const num of buckets[i]) {
        result.push(num);
        k--;
        if (k === 0) break;
      }
    }
  }

  return result;
}

console.log(
  'Program ran successfully.\nExample test results. Expected: [4, 5], Received: ',
  MostCommonElements([4, 4, 4, 6, 6, 5, 5, 5], 2)
);
