// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $i2pdiv_content__i = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "i", /*@__PURE__*/ _closure_get("i/7", ($scope) => _text($scope["#text/0"], $scope._.i), 0, "__tests__/template.marko_2_i#1:2/subscribe"), 0);
const $i2pdiv_content__setup = $i2pdiv_content__i;
const $i2pdiv_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", " ", " ", $i2pdiv_content__setup);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $i2pdiv_content);
const $for_content__count__OR__i = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "i", /*@__PURE__*/ _or(3, ($scope) => $for_content__dynamicTag($scope, $scope.i % 2 ? "p" : "div", ($_) => ({ "data-n": $scope._.count }))));
const $for_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_count#0:5/init", /*@__PURE__*/ _for_closure("#text/0", $for_content__count__OR__i));
const $for_content__setup = $for_content__count;
const $for_content__i__closure = /*@__PURE__*/ _closure($i2pdiv_content__i);
const $for_content__i = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "i", ($scope) => {
	$for_content__count__OR__i($scope);
	$for_content__i__closure($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $count = _let("count/5", $for_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
