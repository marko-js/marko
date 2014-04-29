exports.TAG = {
    "attributes": {
        "name": {
            "type": "string",
            "target-property": "NAME"
        }
    }
};

module.exports = function render(input, context) {
    context.write('scanned-e: Hello ' + input.NAME);
};