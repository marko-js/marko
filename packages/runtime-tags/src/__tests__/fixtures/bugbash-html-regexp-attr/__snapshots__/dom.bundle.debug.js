// template.marko
const $template = "<div id=a></div>";
const $walks = " b";
const $setup = () => {};
const $input_re = ($scope, input_re) => _attr($scope["#div/0"], "data-match", input_re);
const $input = ($scope, input) => $input_re($scope, input.re);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
