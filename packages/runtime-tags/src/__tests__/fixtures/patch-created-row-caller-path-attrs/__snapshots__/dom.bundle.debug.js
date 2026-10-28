// tags/navlist.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__active = ($scope, active) => _attr_class_item($scope["#a/0"], "active", active);
const $for_content__input_path__OR__item_href = /*@__PURE__*/ _fill_join_for("__tests__/tags/navlist.marko_fill0/unpatched", "input_path", /*@__PURE__*/ _or_resume("__tests__/tags/navlist.marko_1_input_path#0:4_item_href#4/init", 5, ($scope) => $for_content__active($scope, $scope.item_href === $scope._.input_path)), "#text/0");
const $for_content__input_path = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_path__OR__item_href);
const $for_content__setup = $for_content__input_path;
const $for_content__item_href = /*@__PURE__*/ _const("item_href", ($scope) => {
	_attr($scope["#a/0"], "href", $scope.item_href);
	$for_content__input_path__OR__item_href($scope);
});
const $for_content__item_label = ($scope, item_label) => _text($scope["#text/1"], item_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_href($scope, $params2[0]?.href);
	$for_content__item_label($scope, $params2[0]?.label);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<a class=link> </a>", " D ", $for_content__setup, $for_content__$params);
const $input_items$1 = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_path($scope, input.path);
};
const $input_path = /*@__PURE__*/ _const("input_path", $for_content__input_path);
var navlist_default = /*@__PURE__*/ _template("__tests__/tags/navlist.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<!><!><button class=p>p</button>";
const $walks = "b%b b";
const $if_content__input_items = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_items#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_items", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_items$1($scope["#childScope/0"], $scope._.input_items))));
const $if_content__setup = ($scope) => {
	$if_content__input_items._($scope);
	$if_content__path._($scope);
};
const $if_content__path = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_path#0:6/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_path($scope["#childScope/0"], $scope._.path)));
const $path = _let("path/6", $if_content__path);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$path($scope, $scope.path === "/a" ? "/b" : "/a");
}));
function $setup($scope) {
	$path($scope, "/a");
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_items($scope, input.items);
};
const $input_items = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_items", $if_content__input_items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
