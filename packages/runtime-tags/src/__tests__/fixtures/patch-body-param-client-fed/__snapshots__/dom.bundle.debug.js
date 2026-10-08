// tags/card.marko
const $template$2 = "<a> </a>";
const $walks$2 = " D l";
const $setup$2 = () => {};
const $input_href = ($scope, input_href) => _attr($scope["#a/0"], "href", input_href);
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$2 = ($scope, input) => {
	$input_href($scope, input.href);
	$input_label($scope, input.label);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, 0, $input$2);

// tags/list.marko
const $template$1 = "<button>add</button><button>rename</button><ul></ul>";
const $walks$1 = " b b b";
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__input_row__OR__item_id__OR__item_label = /*@__PURE__*/ _fill_join_for("__tests__/tags/list.marko_fill0", "input_row", /*@__PURE__*/ _or(5, ($scope) => $for_content__dynamicTag($scope, $scope._.input_row, () => ({
	id: $scope.item_id,
	label: $scope.item_label
})), 2), 0, "#ul/2");
const $for_content__input_row = /*@__PURE__*/ _for_closure("#ul/2", $for_content__input_row__OR__item_id__OR__item_label);
const $for_content__setup = $for_content__input_row;
const $for_content__item_id = /*@__PURE__*/ _const("item_id", $for_content__input_row__OR__item_id__OR__item_label);
const $for_content__item_label = /*@__PURE__*/ _const("item_label", $for_content__input_row__OR__item_id__OR__item_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_id($scope, $params2[0]?.id);
	$for_content__item_label($scope, $params2[0]?.label);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/2", "<li><!></li>", "D%", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _fill_let("__tests__/tags/list.marko_fill1", "items/6", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/tags/list.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$items($scope, [...$scope.items, {
			id: String($scope.items.length + 1),
			label: "new"
		}]);
	});
	_on($scope["#button/1"], "click", function() {
		$items($scope, $scope.items.map((item) => ({
			id: item.id + "x",
			label: item.label + "!"
		})));
	});
});
function $setup$1($scope) {
	$setup__script($scope);
	$items($scope, [{
		id: "1",
		label: "one"
	}]);
}
const $input$1 = ($scope, input) => $input_row($scope, input.row);
const $input_row = /*@__PURE__*/ _fill_const("__tests__/tags/list.marko_fill0", "input_row", $for_content__input_row);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($walks$1);
const $row_content__r_label = ($scope, r_label) => $input_label($scope["#childScope/0"], r_label);
const $row_content__r_id = ($scope, r_id) => $input_href($scope["#childScope/0"], `/x/${r_id}`);
const $row_content__$params = ($scope, $params2) => {
	$row_content__r_label($scope, $params2[0]?.label);
	$row_content__r_id($scope, $params2[0]?.id);
};
const $row_content = _content("__tests__/template.marko_1*content", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), 0, $row_content__$params);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_row($scope["#childScope/0"], attrTag({ content: $row_content($scope) }));
}
const $input_title = ($scope, input_title) => _text($scope["#text/1"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
