// child.marko
const $template = "<section><!></section>";
const $walks = "D%l";
const $setup = () => {};
const $input_item_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_item_content = $dynamicTag;
const $input = ($scope, input) => $input_item($scope, input.item);
const $input_item = ($scope, input_item) => $input_item_content($scope, input_item?.content);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D%l", 0, $input);

// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_item_content = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_item_content.mjs"));
const $item_content__value_a__OR__value_b = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.value_a + $scope._.value_b));
const $item_content__value_a = /*@__PURE__*/ _closure_get("value_a/6", $item_content__value_a__OR__value_b, 0, "__tests__/template.marko_1_value_a#4/subscribe");
const $item_content__setup = ($scope) => {
	$item_content__value_a($scope);
	$item_content__value_b($scope);
};
const $item_content__value_b = /*@__PURE__*/ _closure_get("value_b/7", $item_content__value_a__OR__value_b, 0, "__tests__/template.marko_1_value_b#5/subscribe");
const $item_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " ", $item_content__setup);
const $value = /*@__PURE__*/ _let("value/3", ($scope) => {
	$value_a($scope, $scope.value?.a);
	$value_b($scope, $scope.value?.b);
});
const $value_a__closure = /*@__PURE__*/ _closure($item_content__value_a);
const $value_a__script = _script("__tests__/template.marko_0_value_a#4", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, {
		a: $scope.value_a + 1,
		b: 1
	});
}));
const $value_a = /*@__PURE__*/ _const("value_a", ($scope) => {
	$value_a__closure($scope);
	$value_a__script($scope);
});
const $value_b__closure = /*@__PURE__*/ _closure($item_content__value_b);
const $value_b = /*@__PURE__*/ _const("value_b", $value_b__closure);
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
	$load_Child_tag_input_item_content($scope["#childScope/2"], $item_content($scope));
	$value($scope, {
		a: 1,
		b: 1
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"D%l",
	$setup
];
