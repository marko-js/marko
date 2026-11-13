// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/0"], input_b);
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/0"], input_items);
const $input = ($scope, input) => {
	$input_b($scope, input.b);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/list.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__sel__OR__item_id = /*@__PURE__*/ _or_patch("__tests__/tags/list.marko_2_sel#0:5_item_id#4/setup", 5, ($scope) => _attr_class_item($scope["#button/0"], "on", $scope.item_id === $scope._._.sel));
const $for_content__sel = /*@__PURE__*/ _closure_get_patch("__tests__/tags/list.marko_2_sel#0:5/subscribe", "sel/7", $for_content__sel__OR__item_id, ($scope) => $scope._._);
const $for_content__setup__script = _script("__tests__/tags/list.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$sel($scope._._, $scope.item_id);
}));
const $for_content__setup = ($scope) => {
	$for_content__sel($scope);
	$for_content__setup__script($scope);
};
const $for_content__item_id = /*@__PURE__*/ _const("item_id", ($scope) => {
	$for_content__sel__OR__item_id($scope);
	_text($scope["#text/1"], $scope.item_id);
});
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button> </button>", " D ", $for_content__setup, $for_content__$params);
const $if_content__input_items = /*@__PURE__*/ _if_closure_patch("__tests__/tags/list.marko_1_input_items#0:4/setup", "#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.input_items]));
const $if_content__setup = $if_content__input_items;
const $sel__closure = /*@__PURE__*/ _closure($for_content__sel);
const $sel = /*@__PURE__*/ _fill_let("__tests__/tags/list.marko_0_sel#5/fill", "sel/5", $sel__closure);
function $setup($scope) {
	$sel($scope, "");
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_b = ($scope, input_b) => $if($scope, input_b ? 0 : 1);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_b($scope, input.b);
};
const $input_items = /*@__PURE__*/ _const("input_items", $if_content__input_items);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template, "b%c", $setup, $input);
