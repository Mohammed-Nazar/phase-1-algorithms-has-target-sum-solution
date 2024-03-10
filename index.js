function hasTargetSum(array, target) {
  // Write your algorithm here
    const numMap = {};

    for (const number of array) {
        const complement = target - number;

        if (numMap[complement]) {
            return true;
        }

        numMap[number] = true;
    }

    return false;
}


/* 
  Write the Big O time complexity of your function here
  O(n) because the hash table allows us to perform constant-time lookups for each element.

*/

/* 
  Add your pseudocode here

  initialize an empty hash table
    loop through array elements
      initalize complement variable that hold target - array element of [i]
        if hash table contains complement
         return true

        if hash table does not contain complement add the complement to the hash table
        end loop

    if there is no pair can be found 
      return false

      end of function
*/

/*
  Add written explanation of your solution here
1. We initialize an empty hash table numMap.
2. We iterate through the array once.
3. For each element array[i], we calculate its complement by subtracting it from the target.
4. If the complement exists in the hash table, it means we've found two elements that sum up to the target, so we return true.
5. If the complement doesn't exist in the hash table, we add the current element array[i] to the hash table.
6. If we finish iterating through the array without finding a pair, we return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
