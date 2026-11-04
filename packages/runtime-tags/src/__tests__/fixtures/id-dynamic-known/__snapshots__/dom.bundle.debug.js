// tags/labeled.marko
const $template$2 = "<label> </label><input>";
const $walks$2 = " D l b";
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
function $setup$2($scope) {
	$uid($scope, _id($scope));
}
const $input_name$1 = ($scope, input_name) => _text($scope["#text/1"], input_name);
const $input$2 = ($scope, input) => $input_name$1($scope, input.name);
var labeled_default = /*@__PURE__*/ _template("__tests__/tags/labeled.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/plain.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_name = ($scope, input_name) => _text($scope["#text/0"], input_name);
const $input$1 = ($scope, input) => $input_name($scope, input.name);
var plain_default = /*@__PURE__*/ _template("__tests__/tags/plain.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><!><!><!>";
const $walks = "b%b%b%c";
const $setup = ($_) => {};
const $itemonPlainnull_content__item_key = /*@__PURE__*/ _closure_get("item_key/6", ($scope) => _text($scope["#text/1"], $scope._.item_key), 0, "__tests__/template.marko_5_item_key#4:4/subscribe");
const $itemonPlainnull_content__nullId = ($scope, nullId) => {
	_attr($scope["#label/0"], "for", nullId);
	_attr($scope["#input/2"], "id", nullId);
};
const $itemonPlainnull_content__setup = ($scope) => {
	$itemonPlainnull_content__item_key($scope);
	$itemonPlainnull_content__nullId($scope, _id($scope));
};
const $itemonPlainnull_content = /*@__PURE__*/ _content("__tests__/template.marko_5*content", "<label> </label><input>", " D l ", $itemonPlainnull_content__setup);
const $for_content3__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $itemonPlainnull_content);
const $for_content3__item_on__OR__item_key = /*@__PURE__*/ _or(5, ($scope) => $for_content3__dynamicTag($scope, $scope.item_on ? plain_default : null, ($_) => ({ name: $scope.item_key })));
const $for_content3__item_on = /*@__PURE__*/ _const("item_on", $for_content3__item_on__OR__item_key);
const $for_content3__item_key__closure = /*@__PURE__*/ _closure($itemonPlainnull_content__item_key);
const $for_content3__item_key = /*@__PURE__*/ _const("item_key", ($scope) => {
	$for_content3__item_on__OR__item_key($scope);
	$for_content3__item_key__closure($scope);
});
const $for_content3__$params = ($scope, $params4) => {
	$for_content3__item_on($scope, $params4[0]?.on);
	$for_content3__item_key($scope, $params4[0]?.key);
};
const $itemonpdiv_content__item_key = /*@__PURE__*/ _closure_get("item_key/5", ($scope) => _text($scope["#text/1"], $scope._.item_key), 0, "__tests__/template.marko_3_item_key#2:4/subscribe");
const $itemonpdiv_content__bodyId = ($scope, bodyId) => {
	_attr($scope["#label/0"], "for", bodyId);
	_attr($scope["#input/2"], "id", bodyId);
};
const $itemonpdiv_content__setup = ($scope) => {
	$itemonpdiv_content__item_key($scope);
	$itemonpdiv_content__bodyId($scope, _id($scope));
};
const $itemonpdiv_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<label> </label><input>", " D l ", $itemonpdiv_content__setup);
const $for_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $itemonpdiv_content);
const $for_content2__item_on = ($scope, item_on) => $for_content2__dynamicTag($scope, item_on ? "p" : "div");
const $for_content2__$params = ($scope, $params3) => {
	$for_content2__item_on($scope, $params3[0]?.on);
	$for_content2__item_key($scope, $params3[0]?.key);
};
const $for_content2__item_key__closure = /*@__PURE__*/ _closure($itemonpdiv_content__item_key);
const $for_content2__item_key = /*@__PURE__*/ _const("item_key", $for_content2__item_key__closure);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_on__OR__item_key = /*@__PURE__*/ _or(5, ($scope) => $for_content__dynamicTag($scope, $scope.item_on ? labeled_default : plain_default, ($_) => ({ name: $scope.item_key })));
const $for_content__item_on = /*@__PURE__*/ _const("item_on", $for_content__item_on__OR__item_key);
const $for_content__item_key = /*@__PURE__*/ _const("item_key", $for_content__item_on__OR__item_key);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_on($scope, $params2[0]?.on);
	$for_content__item_key($scope, $params2[0]?.key);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", 0, $for_content2__$params);
const $for3 = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<!><!><!>", "b%", 0, $for_content3__$params);
const $input_items = ($scope, input_items) => {
	$for($scope, [input_items]);
	$for2($scope, [input_items]);
	$for3($scope, [input_items]);
};
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
