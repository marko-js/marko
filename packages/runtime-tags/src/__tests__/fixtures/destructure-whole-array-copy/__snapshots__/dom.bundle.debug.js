// template.marko
const $template = "<div> </div>";
const $walks = "D l";
const $setup = () => {};
const $all = ($scope, $pattern) => _text($scope["#text/0"], $pattern.join("+"));
const $pattern2 = $all;
const $input_list = $pattern2;
const $input = ($scope, input) => $input_list($scope, input.list);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
