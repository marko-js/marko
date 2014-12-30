var nextUniqueId = 0;

module.exports = function() {
    return 'wc' + nextUniqueId++;
};