// tags/icon.marko
const $template$2 = "<svg viewBox=\"0 0 1 1\"><title></title></svg>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_name = ($scope, input_name) => _text_content($scope["#title/0"], input_name);
const $input$2 = ($scope, input) => $input_name($scope, input.name);
var icon_default = /*@__PURE__*/ _template("__tests__/tags/icon.marko", $template$2, "D l", 0, $input$2);

// tags/navx.marko
const $template$1 = "<nav></nav><main></main>";
const $walks$1 = " b b";
const $setup$1 = ($_) => {};
const $if_content__input_page$1 = /*@__PURE__*/ _init_resume("__tests__/tags/navx.marko_2_input_page#0:6/init", /*@__PURE__*/ _if_closure("#main/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_page)));
const $if_content__setup$1 = $if_content__input_page$1;
const $for_content__active = ($scope, active) => _attr_class_item($scope["#a/0"], "active", active);
const $for_content__input_path__OR__item_href = /*@__PURE__*/ _fill_join_for("__tests__/tags/navx.marko_fill0/unpatched", "input_path", /*@__PURE__*/ _or_resume("__tests__/tags/navx.marko_1_input_path#0:5_item_href#5/init", 6, ($scope) => $for_content__active($scope, $scope.item_href === $scope._.input_path)), "#nav/0");
const $for_content__input_path = /*@__PURE__*/ _for_closure("#nav/0", $for_content__input_path__OR__item_href);
const $for_content__setup = $for_content__input_path;
const $for_content__item_href = /*@__PURE__*/ _const("item_href", ($scope) => {
	_attr($scope["#a/0"], "href", $scope.item_href);
	$for_content__input_path__OR__item_href($scope);
});
const $for_content__item_icon = ($scope, item_icon) => $input_name($scope["#childScope/1"], item_icon);
const $for_content__item_label = ($scope, item_label) => _text($scope["#text/2"], item_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_href($scope, $params2[0]?.href);
	$for_content__item_icon($scope, $params2[0]?.icon);
	$for_content__item_label($scope, $params2[0]?.label);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#nav/0", /*@__PURE__*/ ((_w0) => `<a class=link>${_w0}<span> </span></a>`)($template$2), /*@__PURE__*/ ((_w0) => ` D/${_w0}&D m`)("D l"), $for_content__setup, $for_content__$params);
const $input_items$1 = ($scope, input_items) => $for($scope, [input_items]);
const $if$1 = /*@__PURE__*/ _if("#main/1", "<p> </p>", "D ", $if_content__setup$1);
const $input_page$1 = /*@__PURE__*/ _const("input_page", ($scope) => {
	$if$1($scope, $scope.input_page ? 0 : 1);
	$if_content__input_page$1($scope);
});
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_path($scope, input.path);
	$input_page$1($scope, input.page);
};
const $input_path = /*@__PURE__*/ _const("input_path", $for_content__input_path);
var navx_default = /*@__PURE__*/ _template("__tests__/tags/navx.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<!><!><button class=p>p</button>";
const $walks = "b%b b";
const $if_content__input_items = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_items#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_items", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_items$1($scope["#childScope/0"], $scope._.input_items))));
const $if_content__setup = ($scope) => {
	$if_content__input_items._($scope);
	$if_content__input_page._($scope);
	$if_content__path._($scope);
};
const $if_content__input_page = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_page#0:6/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_page", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_page$1($scope["#childScope/0"], $scope._.input_page))));
const $if_content__path = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_path#0:7/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_path($scope["#childScope/0"], $scope._.path)));
const $path = /*@__PURE__*/ _let("path/7", $if_content__path);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$path($scope, $scope.path === "/a" ? "/b" : "/a");
}));
function $setup($scope) {
	$path($scope, "/a");
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_items($scope, input.items);
	$input_page($scope, input.page);
};
const $input_items = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_items", $if_content__input_items);
const $input_page = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_page", $if_content__input_page);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
