// tags/child/index.marko
const $template$1 = "<div> </div>";
const $walks$1 = " D l";
const $setup$1 = () => {};
const $input_class = ($scope, input_class) => _attr_class($scope["#div/0"], input_class);
const $input_value = ($scope, input_value) => _text($scope["#text/1"], input_value);
const $input = ($scope, input) => {
	$input_class($scope, input.class);
	$input_value($scope, input.value);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$input_class($scope["#childScope/0"], "c");
	$input_value($scope["#childScope/0"], "d");
	({
		class: "a",
		value: "b"
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
