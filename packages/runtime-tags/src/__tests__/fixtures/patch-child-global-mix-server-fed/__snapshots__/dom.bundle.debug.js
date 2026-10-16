// tags/gm/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $z = /*@__PURE__*/ _const("z");
const $input_v__OR__$global_flag = /*@__PURE__*/ _fill_global_join("flag", "__tests__/tags/gm/index.marko_0_input_v#3_$global_flag#6", ($scope) => $z($scope, $scope.input_v + _global_read($scope.$global, "flag")));
const $z__OR__$global_mark = /*@__PURE__*/ _fill_global_join("mark", "__tests__/tags/gm/index.marko_0_z#4_$global_mark#7", ($scope) => _text($scope["#text/0"], $scope.z + _global_read($scope.$global, "mark")));
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => {
	$input_v__OR__$global_flag($scope);
	$z__OR__$global_mark($scope);
});
const $input = ($scope, input) => $input_v($scope, input.v);
var gm_default = /*@__PURE__*/ _template("__tests__/tags/gm/index.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button> </button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& D m`)("D l");
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/3", ($scope) => _text($scope["#text/2"], $scope.count));
const $global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/template.marko_0_$global_brand#5", ($scope) => $input_v($scope["#childScope/0"], $scope.$global.brand));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
	$global_brand($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
