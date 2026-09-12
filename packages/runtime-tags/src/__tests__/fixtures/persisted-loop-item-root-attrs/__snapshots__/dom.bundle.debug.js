// tags/icon.marko
const $template$1 = "<svg viewBox=\"0 0 1 1\"><title></title></svg>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_name = ($scope, input_name) => _text_content($scope["#title/0"], input_name);
const $input$1 = ($scope, input) => $input_name($scope, input.name);
var icon_default = /*@__PURE__*/ _template("__tests__/tags/icon.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<nav></nav><main></main>";
const $walks = " b b";
const $setup = () => {};
const $if_content__input_page = /*@__PURE__*/ _if_closure("#main/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_page));
const $if_content__setup = $if_content__input_page;
const $for_content__active = ($scope, active) => _attr_class_item($scope["#a/0"], "active", active);
const $for_content__input_path__OR__item_href = /*@__PURE__*/ _or(6, ($scope) => $for_content__active($scope, $scope.item_href === $scope._.input_path));
const $for_content__input_path = /*@__PURE__*/ _for_closure("#nav/0", $for_content__input_path__OR__item_href);
const $for_content__setup = $for_content__input_path;
const $for_content__item_href = /*@__PURE__*/ _const("item_href", ($scope) => {
	$for_content__input_path__OR__item_href($scope);
	_attr($scope["#a/0"], "href", $scope.item_href);
});
const $for_content__item_icon = ($scope, item_icon) => $input_name($scope["#childScope/1"], item_icon);
const $for_content__item_label = ($scope, item_label) => _text($scope["#text/2"], item_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_href($scope, $params2[0]?.href);
	$for_content__item_icon($scope, $params2[0]?.icon);
	$for_content__item_label($scope, $params2[0]?.label);
};
const $for = /*@__PURE__*/ _for_of("#nav/0", /*@__PURE__*/ ((_w0) => `<a class=link>${_w0}<span> </span></a>`)($template$1), /*@__PURE__*/ ((_w0) => ` D/${_w0}&D m`)("D l"), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $if = /*@__PURE__*/ _if("#main/1", "<p> </p>", "D ", $if_content__setup);
const $input_page = /*@__PURE__*/ _const("input_page", ($scope) => {
	$if($scope, $scope.input_page ? 0 : 1);
	$if_content__input_page($scope);
});
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_path($scope, input.path);
	$input_page($scope, input.page);
};
const $input_path = /*@__PURE__*/ _const("input_path", $for_content__input_path);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
