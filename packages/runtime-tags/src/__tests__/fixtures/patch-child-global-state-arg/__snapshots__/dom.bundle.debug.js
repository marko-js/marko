// tags/label-text.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_v = ($scope, input_v) => _text($scope["#text/0"], input_v);
const $input = ($scope, input) => $input_v($scope, input.v);
var label_text_default = /*@__PURE__*/ _template("__tests__/tags/label-text.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)("D l");
const $global_suffix_key = /*@__PURE__*/ _global_key("$global_suffix/6", "suffix");
const $global_suffix = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_suffix#5/subscribe", $global_suffix_key);
const $count__OR__$global_suffix = /*@__PURE__*/ _global_or(4, ($scope) => $input_v($scope["#childScope/0"], $scope.count + _global_read($scope.$global, "suffix")), $global_suffix);
const $count = _let("count/3", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$count__OR__$global_suffix($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$global_suffix($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
