// template.marko
const $template = "<button>toggle</button><section></section>";
const $walks = " b b";
const $two_content__input_b = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_b", /*@__PURE__*/ _closure_get("input_b/9", ($scope) => _text($scope["#text/0"], $scope._.input_b), 0, "__tests__/template.marko_2_input_b#0:4/subscribe"), 1);
const $two_content__setup = $two_content__input_b;
const $two_content = _content("__tests__/template.marko_2*content", "<strong>two <!></strong>", "Db%", $two_content__setup);
const $one_content__input_b = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_b", /*@__PURE__*/ _closure_get("input_b/9", ($scope) => _text($scope["#text/0"], $scope._.input_b), 0, "__tests__/template.marko_1_input_b#0:4/subscribe"), 0);
const $one_content__setup = $one_content__input_b;
const $one_content = _content("__tests__/template.marko_1*content", "<em>one <!></em>", "Db%", $one_content__setup);
const $mode__OR__one__OR__two = /*@__PURE__*/ _or(8, ($scope) => _attr_content($scope, "#section/1", $scope.mode ? $scope.one : $scope.two), 2);
const $mode = _let("mode/5", $mode__OR__one__OR__two);
const $one = /*@__PURE__*/ _const("one", $mode__OR__one__OR__two);
const $two = /*@__PURE__*/ _const("two", $mode__OR__one__OR__two);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$mode($scope, !$scope.mode);
}));
function $setup($scope) {
	$mode($scope, false);
	$one($scope, { content: $one_content($scope) });
	$two($scope, { content: $two_content($scope) });
	$setup__script($scope);
}
const $input = ($scope, input) => $input_b($scope, input.b);
const $input_b__closure = /*@__PURE__*/ _closure($one_content__input_b, $two_content__input_b);
const $input_b = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_b", $input_b__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
