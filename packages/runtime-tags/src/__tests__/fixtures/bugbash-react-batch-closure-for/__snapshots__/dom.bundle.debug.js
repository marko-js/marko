// template.marko
const $template = "<div></div><button id=both>both</button><button id=count>count</button>";
const $walks = " b b b";
const $for_content__count = /*@__PURE__*/ _for_closure("#div/0", ($scope) => _text($scope["#text/1"], $scope._.count));
const $for_content__setup = $for_content__count;
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $count = /*@__PURE__*/ _let("count/3", $for_content__count);
const $for = /*@__PURE__*/ _for_of("#div/0", "<span><!>:<!></span>", "D%c%l", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/4", ($scope) => $for($scope, [$scope.items, (item) => item]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$count($scope, $scope.count + 1);
		$items($scope, [4, ...$scope.items.slice(0, 2).reverse()]);
	});
	_on($scope["#button/2"], "click", function() {
		$count($scope, $scope.count + 1);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$items($scope, [
		1,
		2,
		3
	]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
