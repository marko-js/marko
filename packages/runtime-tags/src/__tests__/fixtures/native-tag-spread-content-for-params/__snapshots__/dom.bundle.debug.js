// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__r__script = _script("__tests__/tags/child.marko_1_r#2", ($scope) => _attrs_script($scope, "#div/0"));
const $for_content__r = /*@__PURE__*/ _const("r", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.r);
	$for_content__r__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__r($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<div></div>", " ", 0, $for_content__$params);
const $input_row = ($scope, input_row) => $for($scope, [input_row]);
const $input = ($scope, input) => $input_row($scope, input.row);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>add</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $row_content__i__OR__x = /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/2"], $scope.i + ($scope.x ? 10 : 0)));
const $row_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	_text($scope["#text/1"], typeof $scope.x);
	$row_content__i__OR__x($scope);
});
const $row_content__$params = ($scope, $params3) => $row_content__x($scope, $params3[0]);
const $row_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!>:<!>:<!>", "%c%c%", 0, $row_content__$params), { i($scope) {
	_text($scope["#text/0"], $scope.i);
	$row_content__i__OR__x($scope);
} });
const $list = /*@__PURE__*/ _let("list/2", ($scope) => {
	let $row;
	forOf($scope.list, (i) => {
		$row = attrTags($row, { content: $row_content($scope, { i }) });
	});
	$input_row($scope["#childScope/1"], $row);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$list($scope, [...$scope.list, $scope.list?.length + 1]);
}));
function $setup($scope) {
	$list($scope, [1, 2]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
