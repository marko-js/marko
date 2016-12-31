module.exports = function loadNestedTagHelper(targetProperty, isRepeated) {
    return function(input, parent) {
        // If we are nested tag then we do not have a renderer
        if (isRepeated) {
            var existingArray = parent[targetProperty];
            if (existingArray) {
                existingArray.push(input);
            } else {
                parent[targetProperty] = [input];
            }
        } else {
            parent[targetProperty] = input;
        }
    };
};