// template.marko
const $template = "<div id=a><!>:<!></div><div id=b><!>:<!></div><button id=clear>clear</button><button id=inc>inc</button>";
const $walks = "D%c%lD%c%l b b";
const $fallback3 = ($scope, fallback) => _text($scope["#text/1"], fallback);
const $x__OR__$fallback = /*@__PURE__*/ _or(12, ($scope) => $fallback3($scope, void 0 !== $scope.item ? $scope.item : $scope.x * 10));
const $other3 = ($scope, other) => _text($scope["#text/2"], other);
const $x__OR__$other = /*@__PURE__*/ _or(13, ($scope) => $other3($scope, void 0 !== $scope.$other ? $scope.$other : $scope.x + 100));
const $x = /*@__PURE__*/ _let("x/6", ($scope) => {
	$x__OR__$fallback($scope);
	$x__OR__$other($scope);
});
const $source = /*@__PURE__*/ _let("source/7", ($scope) => {
	$item($scope, $scope.source.item);
	$other2($scope, $scope.source.other);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/4"], "click", function() {
		$source($scope, {});
	});
	_on($scope["#button/5"], "click", function() {
		$x($scope, $scope.x + 1);
	});
});
function $setup($scope) {
	$x($scope, 1);
	$source($scope, {
		item: "i",
		other: "o"
	});
	$setup__script($scope);
}
const $item = /*@__PURE__*/ _const("item", ($scope) => {
	_text($scope["#text/0"], String($scope.item));
	$x__OR__$fallback($scope);
});
const $other2 = /*@__PURE__*/ _const("$other", ($scope) => {
	$raw($scope, $scope.$other);
	$x__OR__$other($scope);
});
const $raw = ($scope) => {
	_text($scope["#text/3"], String($scope.$other));
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
