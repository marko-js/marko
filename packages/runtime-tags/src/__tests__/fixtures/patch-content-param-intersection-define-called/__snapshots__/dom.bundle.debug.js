// template.marko
const $Box_content__walks = "D l";
const $Box_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><button>inc</button>`)($Box_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b b`)($Box_content__walks);
const $Box_content__input_a__OR__x = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_a#0:5_x#3/setup", 4, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope.x));
const $Box_content__input_a = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_a#0:5/subscribe", "input_a/10", $Box_content__input_a__OR__x, 0, "__tests__/template.marko_0_input_a#5/subscribers", 0);
const $Box_content__setup = $Box_content__input_a;
const $Box_content__x = /*@__PURE__*/ _const("x", $Box_content__input_a__OR__x);
const $Box_content__$params = ($scope, $params2) => $Box_content__$temp($scope, $params2[0]);
const $Box_content__$temp = ($scope, $temp) => $Box_content__x($scope, $temp.x);
const $Box_content = _content("__tests__/template.marko_1*content", $Box_content__template, $Box_content__walks, $Box_content__setup, $Box_content__$params);
const $n = _let("n/7", ($scope) => $Box_content__x($scope["#childScope/0"], $scope.n));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_x__OR__Tag = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.Box, ($_) => ({ x: $scope.input_x })));
const $Box = /*@__PURE__*/ _const("Box", $input_x__OR__Tag);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Box_content__setup($scope["#childScope/0"]);
	$n($scope, 0);
	$setup__script($scope);
	$Box($scope, { content: $Box_content($scope) });
}
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__OR__Tag);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_x($scope, input.x);
};
const $input_a__closure = /*@__PURE__*/ _closure($Box_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
