/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashmap = new Map();

    for (const str of strs) {
        const sortStr = str.split("").sort().join();
        const seen = hashmap.get(sortStr)
        if (seen) {
            // if seen before, add value to map
            seen.push(str);
            hashmap.set(sortStr, seen);
        }

        else hashmap.set(sortStr, [str]);
    }
    return Array.from(hashmap.values());
};
