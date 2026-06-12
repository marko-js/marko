// template.marko
const $template = "<div><!> selected <!></div><button id=update>update</button><button id=reselect>reselect</button>";
const $walks = "D%c%l b b";
const $selected = ($scope, selected) => _text($scope["#text/1"], selected);
const $index__OR__filtered = /* @__PURE__ */ _or(9, ($scope) => $selected($scope, $scope.filtered[$scope.index]));
const $filtered = /* @__PURE__ */ _const("filtered", ($scope) => {
	_text($scope["#text/0"], $scope.filtered.join(" "));
	$index__OR__filtered($scope);
});
const $items__OR__min__OR__max = /* @__PURE__ */ _or(11, ($scope) => $filtered($scope, $scope.items.filter((item) => item >= $scope.min && item <= $scope.max)), 2);
const $items = /* @__PURE__ */ _let("items/4", $items__OR__min__OR__max);
const $min = /* @__PURE__ */ _let("min/5", $items__OR__min__OR__max);
const $max = /* @__PURE__ */ _let("max/6", $items__OR__min__OR__max);
const $index = /* @__PURE__ */ _let("index/7", $index__OR__filtered);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$min($scope, 2);
		$max($scope, 3);
		$index($scope, 1);
	});
	_on($scope["#button/3"], "click", function() {
		$index($scope, 0);
	});
});
function $setup($scope) {
	$items($scope, [
		1,
		2,
		3,
		4
	]);
	$min($scope, 0);
	$max($scope, 4);
	$index($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
