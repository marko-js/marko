// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_y = ($scope, input_y) => $input_a($scope["#childScope/0"], input_y);
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/0"], input_items);
const $input = ($scope, input) => {
	$input_y($scope, input.y);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__input_a__OR__item = /*@__PURE__*/ _fill_for("__tests__/tags/child.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_1_input_a#0:4_item#3/init", 4, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope.item)), "#text/0");
const $for_content__input_a = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_a__OR__item);
const $for_content__setup = $for_content__input_a;
const $for_content__item__script = _script("__tests__/tags/child.marko_1_item#3", ($scope) => _el_read($scope["#div/1"]).textContent = "s:" + $scope.item);
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	$for_content__input_a__OR__item($scope);
	$for_content__item__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<p> </p><div></div>", "D l ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_a($scope, input.a);
};
const $input_a = /*@__PURE__*/ _const("input_a", $for_content__input_a);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, "b%c", 0, $input);
