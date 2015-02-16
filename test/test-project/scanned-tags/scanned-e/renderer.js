exports.TAG = {
    "attributes": {
        "name": {
            "type": "string",
            "target-property": "NAME"
        }
    }
};

module.exports = function render(input, out) {
    out.write('scanned-e: Hello ' + input.NAME);
};