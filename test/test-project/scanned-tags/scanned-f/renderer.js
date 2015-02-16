/*
TAG = {
    "attributes": {
        "name": {
            "type": "string",
            "target-property": "NAME"
        }
    }
}
*/

module.exports = function render(input, out) {
    out.write('scanned-f: Hello ' + input.NAME);
};