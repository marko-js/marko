// tags/icon.marko
const $template$1 = "<svg viewBox=\"0 0 1 1\"><title></title></svg>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_name = ($scope, input_name) => _text_content($scope["#title/0"], input_name);
const $input$1 = ($scope, input) => $input_name($scope, input.name);
var icon_default = /*@__PURE__*/ _template("__tests__/tags/icon.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<nav></nav><main></main>";
const $walks = " b b";
const $setup = ($_) => {};
const $if_content__input_page = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_input_page#0:6/setup", "#main/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_page));
const $if_content__setup = $if_content__input_page;
const $for_content__input_path__OR__item_href = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_path#0:5_item_href#5/setup", 6, ($scope) => _attr_class_item($scope["#a/0"], "active", $scope.item_href === $scope._.input_path));
const $for_content__input_path = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_input_path#0:5/setup", "#nav/0", $for_content__input_path__OR__item_href, 7);
const $for_content__setup = $for_content__input_path;
const $for_content__item_href = /*@__PURE__*/ _const("item_href", ($scope) => {
	_attr($scope["#a/0"], "href", $scope.item_href);
	$for_content__input_path__OR__item_href($scope);
});
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_href($scope, $params2[0]?.href);
	$input_name($scope["#childScope/1"], $params2[0]?.icon);
	_text($scope["#text/2"], $params2[0]?.label);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#nav/0", /*@__PURE__*/ ((_w0) => `<a class=link>${_w0}<span> </span></a>`)($template$1), /*@__PURE__*/ ((_w0) => ` D/${_w0}&D m`)("D l"), $for_content__setup, $for_content__$params);
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
