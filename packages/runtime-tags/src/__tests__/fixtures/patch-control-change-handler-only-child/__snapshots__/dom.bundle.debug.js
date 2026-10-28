// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/child.marko
const $template = "<p> </p><input><span> </span>";
const $walks = "D l bD l";
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_fill0", "count/6", ($scope) => {
	_attr_input_value($scope, "#input/1", void 0, $valueChange($scope));
	_text($scope["#text/2"], $scope.count);
});
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _attr_input_value_script($scope, "#input/1"));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
const $valueChange = ($scope) => function(v) {
	$count($scope, $scope.count + v.length);
};
_resumed["__tests__/tags/child.marko_0/valueChange"] = $valueChange;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, $setup, $input);
