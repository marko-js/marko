// tags/static-child.marko
const $template$2 = "<span>static</span>";
const $walks$2 = "b";
const $setup$2 = () => {};
var static_child_default = /*@__PURE__*/ _template("__tests__/tags/static-child.marko", $template$2, "b");

// tags/label-child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_item_label = ($scope, input_item_label) => _text($scope["#text/0"], input_item_label);
const $input = ($scope, input) => $input_item($scope, input.item);
const $input_item = ($scope, input_item) => $input_item_label($scope, input_item?.label);
var label_child_default = /*@__PURE__*/ _template("__tests__/tags/label-child.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `${_w0}${_w1}${_w2}${_w3}<span> </span><button class=inc>inc</button>`)($template$2, $template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `/${_w0}&/${_w1}&/${_w2}&/${_w3}&D l b`)("b", "D l", "D l", "D l");
const $n = /*@__PURE__*/ _let("n/6", ($scope) => {
	let $item;
	if ($scope.n) {
		$item = attrTag({ label: "if" });
	}
	$input_item($scope["#childScope/2"], $item);
});
const $m = /*@__PURE__*/ _let("m/7", ($scope) => _text($scope["#text/4"], $scope.m));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/5"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$input_item_label($scope["#childScope/1"], "item");
	let $item2;
	forTo(1, 0, 1, (i) => {
		$item2 = attrTags($item2, { label: `for ${i}` });
	});
	$input_item($scope["#childScope/3"], $item2);
	$n($scope, 1);
	$m($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
