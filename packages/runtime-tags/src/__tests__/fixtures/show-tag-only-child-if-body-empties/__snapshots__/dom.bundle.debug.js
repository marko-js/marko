// template.marko
const $template = "<p><!></p>";
const $walks = " D%l";
const $setup = ($_) => {};
const $if = /*@__PURE__*/ _if("#text/1", 0, 0, 0, "hello");
const $show = /*@__PURE__*/ _show("#p/0");
const $input_on = ($scope, input_on) => {
	$if($scope, input_on ? 0 : 1);
	$show($scope, input_on);
};
const $input = ($scope, input) => $input_on($scope, input.on);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
