// template.marko
const $template = "<div><!> <!></div>";
const $walks = "D%c%l";
const $setup = ($_) => {};
const $pattern2 = ($scope, $pattern) => {
	_text($scope["#text/0"], $pattern.a);
	_text($scope["#text/1"], $pattern.b);
};
const $input_obj = $pattern2;
const $input = ($scope, input) => $input_obj($scope, input.obj);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
