// tags/feed-list.marko
const $template$1 = "<ul></ul>";
const $walks$1 = " b";
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
const $for_content__input_data__OR__item_id = /*@__PURE__*/ _fill_join("__tests__/tags/feed-list.marko_fill2", "item_id", /*@__PURE__*/ _fill_join_for("__tests__/tags/feed-list.marko_fill0/unpatched", "input_data", /*@__PURE__*/ _shell_or("__tests__/tags/feed-list.marko_1_input_data#0:4_item_id#5/init", 6, ($scope) => _attr($scope["#a/1"], "href", link($scope._.input_data, $scope.item_id))), "#ul/0"), () => () => {});
const $for_content__input_data = /*@__PURE__*/ _for_closure("#ul/0", $for_content__input_data__OR__item_id);
const $for_content__setup__script = _script("__tests__/tags/feed-list.marko_1", ($scope) => _on($scope["#li/0"], "click", function() {
	$hovered($scope._, $scope.item_id);
}));
const $for_content__setup = ($scope) => {
	$for_content__input_data._($scope);
	$for_content__hovered._($scope);
	$for_content__setup__script($scope);
};
const $for_content__hovered__OR__item_id = /*@__PURE__*/ _fill_join("__tests__/tags/feed-list.marko_fill2", "item_id", /*@__PURE__*/ _or(7, ($scope) => _attr_class_item($scope["#li/0"], "hovered", $scope._.hovered === $scope.item_id)));
const $for_content__hovered = /*@__PURE__*/ _shell_init("__tests__/tags/feed-list.marko_1_hovered#0:5/init", /*@__PURE__*/ _for_closure("#ul/0", $for_content__hovered__OR__item_id));
const $for_content__item_id = /*@__PURE__*/ _fill_const("__tests__/tags/feed-list.marko_fill2", "item_id", ($scope) => {
	$for_content__hovered__OR__item_id($scope);
	_text($scope["#text/2"], $scope.item_id);
	$for_content__input_data__OR__item_id($scope);
}, $for_content__hovered__OR__item_id);
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $hovered = /*@__PURE__*/ _fill_let("__tests__/tags/feed-list.marko_fill1", "hovered/5", $for_content__hovered);
function $setup$1($scope) {
	$hovered($scope, undefined);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/0", "<li><a> </a></li>", " D D ", $for_content__setup, $for_content__$params);
const $input_items$1 = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_data$1($scope, input.data);
};
const $input_data$1 = /*@__PURE__*/ _const("input_data", $for_content__input_data);
var feed_list_default = /*@__PURE__*/ _template("__tests__/tags/feed-list.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=toggle> </button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)(" b");
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "open/7", ($scope) => _text($scope["#text/1"], $scope.open ? "open" : "closed"));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$setup__script($scope);
	$open($scope, false);
}
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/2"], input_items);
const $input_data = ($scope, input_data) => $input_data$1($scope["#childScope/2"], input_data);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_data($scope, input.data);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
