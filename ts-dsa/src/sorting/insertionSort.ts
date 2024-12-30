/**
 * Insertion Sort Algorithm
 * Sorts an array in ascending order
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} - The sorted array
 */

function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // Current element to be inserted
    let j = i - 1;

    // Shift elements of arr[0..i-1] that are greater than 'key'
    // to one position ahead of the current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Shift the elements to the right
      j--;
    }

    // Insert 'key' to its correct position
    arr[j + 1] = key;
  }

  return arr;
}

// Example usage:
const array: number[] = [12, 11, 13, 5, 6];
console.log("Original array: ", array);
const sortedArray: number[] = insertionSort(array);
console.log("Sorted array: ", sortedArray);
