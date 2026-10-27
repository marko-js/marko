// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content__OR__input_label__OR__input_items = /*@__PURE__*/ _fill_join("__tests__/tags/panel.marko_fill2", "input_items", /*@__PURE__*/ _fill_join("__tests__/tags/panel.marko_fill1", "input_label", /*@__PURE__*/ _fill_join("__tests__/tags/panel.marko_fill0", "input_content", /*@__PURE__*/ _or_resume("__tests__/tags/panel.marko_0_input_content#3_input_label#4_input_items#5/init", 6, ($scope) => $dynamicTag($scope, $scope.input_content, ($_) => ({
	label: $scope.input_label,
	items: $scope.input_items
})), 2))));
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__input_label__OR__input_items);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_content__OR__input_label__OR__input_items);
const $input_items$1 = /*@__PURE__*/ _const("input_items", $input_content__OR__input_label__OR__input_items);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_label$1($scope, input.label);
	$input_items$1($scope, input.items);
};
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $if_content2__label = /*@__PURE__*/ _closure_get("label/7", ($scope) => _text($scope["#text/0"], $scope._._.label), ($scope) => $scope._._, "__tests__/template.marko_3_label#1:4/subscribe");
const $if_content2__setup = $if_content2__label;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content2__setup);
const $if_content__label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.label ? 0 : 1));
const $if_content__setup = ($scope) => {
	$if_content__label._($scope);
	$if_content__items._($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#ul/1", "<li> </li>", "D ", 0, $for_content__$params);
const $if_content__items = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.items]));
const $panel_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><ul></ul>", "b%b ", $if_content__setup);
const $panel_content__open = /*@__PURE__*/ _let("open/6", ($scope) => $panel_content__if($scope, $scope.open ? 0 : 1));
const $panel_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$panel_content__open($scope, !$scope.open);
}));
const $panel_content__setup = ($scope) => {
	$panel_content__open($scope, true);
	$panel_content__setup__script($scope);
};
const $panel_content__$params = ($scope, $params2) => {
	$panel_content__label($scope, $params2[0].label);
	$panel_content__items($scope, $params2[0].items);
};
const $panel_content__label__closure = /*@__PURE__*/ _closure($if_content2__label);
const $panel_content__label = /*@__PURE__*/ _const("label", ($scope) => {
	$if_content__label($scope);
	$panel_content__label__closure($scope);
});
const $panel_content__items = /*@__PURE__*/ _const("items", $if_content__items);
const $panel_content = _content("__tests__/template.marko_1*content", "<!><!><button>toggle</button>", "b%b ", $panel_content__setup, $panel_content__$params);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $panel_content($scope));
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/0"], input_items);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
