exports.min = function min(array) {
    return !array || array.length === 0 ? 0 : array.sort((a, b) => a - b)[0];
};

exports.max = function max(array) {
    return !array || array.length === 0 ? 0 : array.sort((a, b) => b - a)[0];
};

exports.avg = function avg(array) {
    return !array || array.length === 0
        ? 0
        : array.reduce((sum, current) => (sum = sum + current)) / array.length;
};
