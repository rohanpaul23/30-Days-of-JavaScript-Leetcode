/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let i = 0;
    let chunks = []

    while (i < arr.length) {
        chunks.push(arr.slice(i, i + size));
        i += size;
    }
    return chunks;
};
