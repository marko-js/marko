// template.marko
const $template = "<div><!>-<!>-<!></div><button class=mutate>mutate</button>";
const $walks = "D%c%c%l b";
const $o__OR__rest = /*@__PURE__*/ _or(8, ($scope) => _text($scope["#text/1"], $scope.o[$scope.rest] ?? "-"));
const $o__OR__$pattern_b = /*@__PURE__*/ _or(10, ($scope) => _text($scope["#text/2"], $scope.o[$scope.$pattern_b] ?? "-"));
const $o = /*@__PURE__*/ _let("o/4", ($scope) => {
	$o__OR__rest($scope);
	$o__OR__$pattern_b($scope);
});
const $pattern2 = ($scope, $pattern) => {
	$rest($scope, (({ a, ...rest }) => rest)($pattern));
	$a($scope, $pattern.a);
	$pattern_b($scope, $pattern.b);
};
function $setup($scope) {
	$o($scope, {});
	$pattern2($scope, {
		a: 1,
		b: 2,
		c: 3
	});
}
const $rest__OR__$pattern_b__script = _script("__tests__/template.marko_0_rest#7_$pattern_b#9", ($scope) => _on($scope["#button/3"], "click", function() {
	$scope.o[$scope.rest] = 1;
	$scope.o[$scope.$pattern_b] = 2;
	$o($scope, { ...$scope.o });
}));
const $rest__OR__$pattern_b = /*@__PURE__*/ _or(11, $rest__OR__$pattern_b__script);
const $rest = /*@__PURE__*/ _const("rest", ($scope) => {
	$o__OR__rest($scope);
	$rest__OR__$pattern_b($scope);
});
const $a = ($scope, a) => _text($scope["#text/0"], a);
const $pattern_b = /*@__PURE__*/ _const("$pattern_b", ($scope) => {
	$o__OR__$pattern_b($scope);
	$rest__OR__$pattern_b($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
