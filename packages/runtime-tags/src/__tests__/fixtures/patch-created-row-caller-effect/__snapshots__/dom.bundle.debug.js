// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__input_count__OR__item__script = _script("__tests__/tags/child.marko_1_input_count#0:4_item#2", ($scope) => console.log("row count", $scope.item, $scope._.input_count));
const $for_content__input_count__OR__item = /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_1_input_count#0:4_item#2/init", 3, $for_content__input_count__OR__item__script);
const $for_content__input_count = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_count__OR__item);
const $for_content__setup = $for_content__input_count;
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	_text($scope["#text/0"], $scope.item);
	$for_content__input_count__OR__item($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items$1 = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_count$1($scope, input.count);
};
const $input_count$1 = /*@__PURE__*/ _const("input_count", $for_content__input_count);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $count = _let("count/8", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$input_count$1($scope["#childScope/2"], $scope.count);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_items = ($scope, input_items) => {
	$input_items$1($scope["#childScope/2"], input_items);
	$input_items$1($scope["#childScope/3"], input_items);
};
const $input_count = ($scope, input_count) => $input_count$1($scope["#childScope/3"], input_count);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_count($scope, input.count);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
