// tags/card.marko
const $template$2 = "<a> </a>";
const $walks$2 = " D l";
const $setup$2 = () => {};
const $input_href = ($scope, input_href) => _attr($scope["#a/0"], "href", input_href);
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$1 = ($scope, input) => {
	$input_href($scope, input.href);
	$input_label($scope, input.label);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, 0, $input$1);

// tags/feed-list.marko
const $template$1 = "<ul></ul>";
const $walks$1 = " b";
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
const $for_content__input_data__OR__item_id = /*@__PURE__*/ _fill_join("__tests__/tags/feed-list.marko_fill2", "item_id", /*@__PURE__*/ _fill_join_for("__tests__/tags/feed-list.marko_fill0", "input_data", /*@__PURE__*/ _or(5, ($scope) => $input_href($scope["#childScope/1"], link($scope._.input_data, $scope.item_id))), 0, "#ul/0"));
const $for_content__input_data = /*@__PURE__*/ _for_closure("#ul/0", $for_content__input_data__OR__item_id);
const $for_content__setup__script = _script("__tests__/tags/feed-list.marko_1", ($scope) => _on($scope["#li/0"], "mouseenter", function() {
	$hovered($scope._, $scope.item_id);
}));
const $for_content__setup = ($scope) => {
	$for_content__input_data._($scope);
	$for_content__hovered._($scope);
	$for_content__setup__script($scope);
};
const $for_content__hovered__OR__item_id = /*@__PURE__*/ _fill_join("__tests__/tags/feed-list.marko_fill2", "item_id", /*@__PURE__*/ _or(6, ($scope) => _attr_class_item($scope["#li/0"], "hovered", $scope._.hovered === $scope.item_id)));
const $for_content__hovered = _shell_for_closure("__tests__/tags/feed-list.marko_1_hovered#0:5/init", "#ul/0", $for_content__hovered__OR__item_id);
const $for_content__item_id = /*@__PURE__*/ _fill_const("__tests__/tags/feed-list.marko_fill2", "item_id", ($scope) => {
	$input_label($scope["#childScope/1"], $scope.item_id);
	$for_content__hovered__OR__item_id($scope);
	$for_content__input_data__OR__item_id($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $hovered = /*@__PURE__*/ _fill_let("__tests__/tags/feed-list.marko_fill1", "hovered/5", $for_content__hovered);
function $setup$1($scope) {
	$hovered($scope, undefined);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/0", /*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template$2), /*@__PURE__*/ ((_w0) => ` D/${_w0}&l`)($walks$2), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_data($scope, input.data);
};
const $input_data = /*@__PURE__*/ _fill_const("__tests__/tags/feed-list.marko_fill0", "input_data", $for_content__input_data);
var feed_list_default = /*@__PURE__*/ _template("__tests__/tags/feed-list.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&%c`)(" b");
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_items($scope["#childScope/0"], [{ id: "c" }]);
	$input_data($scope["#childScope/0"], { q: "client" });
};
const $data = ($scope, data) => {
	$input_data($scope["#childScope/1"], data);
	$data_items($scope, data?.items);
};
const $data_items = ($scope, data_items) => $input_items($scope["#childScope/1"], data_items);
const $global_data = /*@__PURE__*/ _fill_global_join("data", "__tests__/template.marko_0_$global_data#6/global", ($scope) => {
	$data($scope, $scope.$global.data);
});
const $if = /*@__PURE__*/ _if("#text/2", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "open/7", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
	$open($scope, false);
	$global_data($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
