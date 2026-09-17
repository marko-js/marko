// template.marko
const $template = "<div> </div>";
const $walks = "D l";
function track(value) {
	return value;
}
function $setup($scope) {
	(class {
		static made = track(3);
	});
	({ [track(4)]() {} });
	(class {
		[track(5)] = 1;
	});
	(() => track(2))();
}
const $input_a = ($scope, input_a) => {
	$input_a_b($scope, input_a?.b);
	track(input_a);
};
const $input_a_b = ($scope, input_a_b) => _text($scope["#text/0"], input_a_b);
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup, $input);
