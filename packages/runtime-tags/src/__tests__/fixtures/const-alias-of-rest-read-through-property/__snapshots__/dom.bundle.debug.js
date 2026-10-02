// template.marko
const $template = "<div><!> <!></div>";
const $walks = "D%c%l";
const $setup = () => {};
const $pattern2 = ($scope, $pattern) => {
	$a($scope, $pattern.a);
	$pattern_b($scope, $pattern.b);
};
const $a = ($scope, a) => _text($scope["#text/0"], a);
const $pattern_b = ($scope, $pattern_b) => _text($scope["#text/1"], $pattern_b);
const $input_obj = $pattern2;
const $input = ($scope, input) => $input_obj($scope, input.obj);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
