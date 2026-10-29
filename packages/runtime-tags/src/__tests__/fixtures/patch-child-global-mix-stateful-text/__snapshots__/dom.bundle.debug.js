// tags/gm/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $z__$global_mark = /*@__PURE__*/ _fill_global_join("__tests__/tags/gm/index.marko_0_z#4_$global_mark#7", ($scope) => _text($scope["#text/0"], $scope.z + _global_read($scope.$global, "mark")), "mark");
const $z = /*@__PURE__*/ _const("z", $z__$global_mark);
const $input_v__$global_flag = /*@__PURE__*/ _fill_global_join("__tests__/tags/gm/index.marko_0_input_v#3_$global_flag#5", ($scope) => $z($scope, $scope.input_v + _global_read($scope.$global, "flag")), "flag");
const $input_v = /*@__PURE__*/ _const("input_v", $input_v__$global_flag);
const $input = ($scope, input) => $input_v($scope, input.v);
var gm_default = /*@__PURE__*/ _template("__tests__/tags/gm/index.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__setup = ($scope) => $input_v($scope["#childScope/0"], "a");
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $open = _let("open/2", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
