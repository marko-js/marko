// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<span> </span>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_suffix($scope["#childScope/0"], "a");
}
const $input_x = ($scope, input_x) => _text($scope["#text/1"], input_x);
const $input = ($scope, input) => $input_x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/child.marko
const $Label_content__walks = "D l";
const $Label_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<button>+</button>${_w0}`)($Label_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($Label_content__walks);
const $Label_content__input_suffix__OR__n = /*@__PURE__*/ _or_patch("__tests__/tags/child.marko_1_input_suffix#0:4_n#3/setup", 4, ($scope) => _text($scope["#text/0"], $scope.n + $scope._.input_suffix));
const $Label_content__input_suffix = /*@__PURE__*/ _closure_get_patch("__tests__/tags/child.marko_1_input_suffix#0:4/subscribe", "input_suffix/6", $Label_content__input_suffix__OR__n);
const $Label_content__setup = $Label_content__input_suffix;
const $Label_content__n = /*@__PURE__*/ _const("n", $Label_content__input_suffix__OR__n);
const $Label_content__$params = ($scope, $params2) => $Label_content__$temp($scope, $params2[0]);
const $Label_content__$temp = ($scope, $temp) => $Label_content__n($scope, $temp.n);
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_0_count#5/fill", "count/5", ($scope) => $Label_content__n($scope["#childScope/1"], $scope.count));
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$scope["#childScope/1"]._ = $scope;
	$Label_content__setup($scope["#childScope/1"]);
	$setup__script($scope);
	$count($scope, 0);
}
const $input = ($scope, input) => $input_suffix($scope, input.suffix);
const $input_suffix__closure = /*@__PURE__*/ _closure($Label_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _const("input_suffix", $input_suffix__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, $setup, $input);
