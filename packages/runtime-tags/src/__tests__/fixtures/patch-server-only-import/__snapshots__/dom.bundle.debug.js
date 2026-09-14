// server-only.js
if (typeof window !== "undefined") throw new Error("server-only module loaded in the browser");
const config = { hosts: "a,b" };

// template.marko
const $template = "<html><head><meta name=hosts></head><body><p> </p></body></html>";
const $walks = "E lE n";
const $setup = () => {};
const $input_msg = ($scope, input_msg) => _text($scope["#text/1"], input_msg);
const $input = ($scope, input) => $input_msg($scope, input.msg);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
