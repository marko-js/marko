// tags/gm/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $z__OR__$global_mark = /*@__PURE__*/ _or_patch("__tests__/tags/gm/index.marko_0_z#4_$global_mark#7/setup", 6, ($scope) => _text($scope["#text/0"], $scope.z + _global_read($scope.$global, "mark")));
const $z = /*@__PURE__*/ _const("z", $z__OR__$global_mark);
const $input_v__OR__$global_flag = /*@__PURE__*/ _or_patch("__tests__/tags/gm/index.marko_0_input_v#3_$global_flag#5/setup", 5, ($scope) => $z($scope, $scope.input_v + _global_read($scope.$global, "flag")));
const $input_v = /*@__PURE__*/ _const("input_v", $input_v__OR__$global_flag);
const $global_flag = _fill_global_resume("__tests__/tags/gm/index.marko_0_$global_flag#5/subscribe", $input_v__OR__$global_flag, "flag");
const $global_mark = _fill_global_resume("__tests__/tags/gm/index.marko_0_$global_mark#7/subscribe", $z__OR__$global_mark, "mark");
function $setup$1($scope) {
	$global_flag($scope);
	$global_mark($scope);
}
const $input = ($scope, input) => $input_v($scope, input.v);
var gm_default = /*@__PURE__*/ _template("__tests__/tags/gm/index.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button> </button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& D m`)("D l");
const $count = _let("count/3", ($scope) => {
	$input_v($scope["#childScope/0"], $scope.count);
	_text($scope["#text/2"], $scope.count);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
