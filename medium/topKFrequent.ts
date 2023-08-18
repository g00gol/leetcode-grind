/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Create an empty hash map to store the frequency of each element in the array
    let hm = {};
    // Create an empty array to store the elements based on their frequency
    const freq = Array.from({ length: nums.length + 1 }, () => 0);
    // Iterate through the input array and add the frequency of each element to the hash map
    for (const num of nums) {
        hm[num] = (hm[num] || 0) + 1;
    }
    // Iterate through the hash map and add the elements to the frequency array based on their frequency
    for (const key in hm) {
        freq[hm[key]] = (freq[hm[key]] || []).concat(key);
    }
    // Create an empty array to store the top k frequent elements
    let ans = [];
    // Iterate through the frequency array from the highest frequency to the lowest
    for (let j = freq.length - 1; j >= 0; j--) {
        // If the current frequency array is not empty, add the elements to the ans array
        // and decrement k until k is 0 or the frequency array is empty
        for (let i = 0; i < freq[j].length && k > 0; i++) {
            ans.push(Number(freq[j][i]));
            k--;
        }
    }
    return ans;
};
