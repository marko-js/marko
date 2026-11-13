// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__input_row = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__dynamicTag($scope, $scope._.input_row), 5);
const $for_content__setup = $for_content__input_row;
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_row($scope, input.row);
};
const $input_row = /*@__PURE__*/ _const("input_row", $for_content__input_row);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<div>${_w0}</div><button>inc</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l b`)("b%c");
const $row_content__n = /*@__PURE__*/ _closure_get("n/4", ($scope) => _text($scope["#text/0"], $scope._.n), 0, "__tests__/template.marko_1_n#0:3/subscribe");
const $row_content__setup = $row_content__n;
const $row_content = _content_resume("__tests__/template.marko_1*content", " ", " ", $row_content__setup);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $input_items($scope["#childScope/0"], $scope.items));
const $n__closure = /*@__PURE__*/ _closure($row_content__n);
const $n = /*@__PURE__*/ _let("n/3", $n__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
	$items($scope, [...$scope.items, $scope.items.length + 1]);
}));
function $setup($scope) {
	$input_row($scope["#childScope/0"], attrTag({ content: $row_content($scope) }));
	$items($scope, [1, 2]);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
