// template.marko
const $template = "<div> </div>";
const $walks = "D l";
const $setup = () => {};
const $value = ($scope, value) => _text($scope["#text/0"], ((input) => value)(2));
const $input = ($scope, input) => $value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
