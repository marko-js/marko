// tags/shower.marko
const $template$1 = "<button>show</button><output> </output>";
const $walks$1 = " bD l";
const $shown = /*@__PURE__*/ _let("shown/4", ($scope) => _text($scope["#text/1"], $scope.shown));
const $setup__script = _script("__tests__/tags/shower.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$shown($scope, $scope.input.getId());
}));
function $setup$1($scope) {
	$shown($scope, "");
	$setup__script($scope);
}
const $input$1 = /*@__PURE__*/ _const("input");
var shower_default = /*@__PURE__*/ _template("__tests__/tags/shower.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<label> </label><input>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l b/${_w0}&`)($walks$1);
let n = 0;
const $input_name__OR__uid = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "uid", /*@__PURE__*/ _or(10, ($scope) => {
	_attr($scope["#label/0"], "for", `${$scope.uid}-${$scope.input_name}`);
	_attr($scope["#input/2"], "id", `${$scope.uid}-${$scope.input_name}`);
}));
const $uid = /*@__PURE__*/ _let("uid/9", ($scope) => {
	$input$1($scope["#childScope/3"], { getId: $getId($scope) });
	$input_name__OR__uid($scope);
});
function $setup($scope) {
	$setup$1($scope["#childScope/3"]);
	$uid($scope, "u" + ++n);
}
const $input_name = /*@__PURE__*/ _const("input_name", ($scope) => {
	_attr($scope["#input/2"], "name", $scope.input_name);
	$input_name__OR__uid($scope);
});
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _attr_input_value_default($scope, "#input/2", $scope.input_value));
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_label($scope, input.label);
	$input_value($scope, input.value);
};
const $getId = ($scope) => function() {
	return $scope.uid;
};
_resumed["__tests__/template.marko_0/getId"] = $getId;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
