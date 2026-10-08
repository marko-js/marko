// tags/card.marko
const $template$1 = "<a> </a>";
const $walks$1 = " D l";
const $setup$1 = () => {};
const $input_href = ($scope, input_href) => _attr($scope["#a/0"], "href", input_href);
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => {
	$input_href($scope, input.href);
	$input_label($scope, input.label);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = "<ul></ul>";
const $walks = " b";
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
const $for_content__data__OR__item_id = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "item_id", /*@__PURE__*/ _or(5, ($scope) => $input_href($scope["#childScope/1"], link($scope._.data, $scope.item_id))));
const $for_content__data = /*@__PURE__*/ _for_closure("#ul/0", $for_content__data__OR__item_id);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#li/0"], "mouseenter", function() {
	$hovered($scope._, $scope.item_id);
}));
const $for_content__setup = ($scope) => {
	$for_content__data._($scope);
	$for_content__hovered._($scope);
	$for_content__setup__script($scope);
};
const $for_content__hovered__OR__item_id = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "item_id", /*@__PURE__*/ _or(6, ($scope) => _attr_class_item($scope["#li/0"], "hovered", $scope._.hovered === $scope.item_id)));
const $for_content__hovered = _shell_for_closure("__tests__/template.marko_1_hovered#0:5/init", "#ul/0", $for_content__hovered__OR__item_id);
const $for_content__item_id = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "item_id", ($scope) => {
	$for_content__hovered__OR__item_id($scope);
	$input_label($scope["#childScope/1"], $scope.item_id);
	$for_content__data__OR__item_id($scope);
}, $for_content__hovered__OR__item_id);
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $data = /*@__PURE__*/ _const("data", ($scope) => {
	$data_items($scope, $scope.data?.items);
	$for_content__data($scope);
});
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/0", /*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template$1), /*@__PURE__*/ ((_w0) => ` D/${_w0}&l`)($walks$1), $for_content__setup, $for_content__$params);
const $data_items = ($scope, data_items) => $for($scope, [data_items]);
const $global_data = /*@__PURE__*/ _fill_global_join("data", "__tests__/template.marko_0_$global_data#4/global", ($scope) => {
	$data($scope, $scope.$global.data);
});
const $hovered = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "hovered/5", $for_content__hovered);
function $setup($scope) {
	$hovered($scope, undefined);
	$global_data($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
