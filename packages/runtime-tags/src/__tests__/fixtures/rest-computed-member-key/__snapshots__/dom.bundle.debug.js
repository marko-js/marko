// template.marko
const $template = "<div><!>-<!>-<!>-<!></div><button class=mutate>mutate</button>";
const $walks = "D%c%c%c%l b";
const $o__OR__rest = /*@__PURE__*/ _or(12, ($scope) => _text($scope["#text/1"], $scope.o[$scope.rest] ?? "-"));
const $o__OR__$pattern_b = /*@__PURE__*/ _or(14, ($scope) => _text($scope["#text/2"], $scope.o[$scope.$pattern_b] ?? "-"));
const $o__OR__key_name = /*@__PURE__*/ _or(17, ($scope) => _text($scope["#text/3"], $scope.o[$scope.key_name] ?? "-"));
const $o = /*@__PURE__*/ _let("o/8", ($scope) => {
	$o__OR__rest($scope);
	$o__OR__$pattern_b($scope);
	$o__OR__key_name($scope);
});
const $pattern2 = ($scope, $pattern) => {
	$rest($scope, (({ a, ...rest }) => rest)($pattern));
	_text($scope["#text/0"], $pattern.a);
	$pattern_b($scope, $pattern.b);
};
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$scope.o[$scope.rest] = 1;
	$scope.o[$scope.$pattern_b] = 2;
	$scope.o[$scope.key] = 3;
	$o($scope, { ...$scope.o });
}));
function $setup($scope) {
	$o($scope, {});
	$pattern2($scope, {
		a: 1,
		b: 2,
		c: 3
	});
	$setup__script($scope);
}
const $rest = /*@__PURE__*/ _const("rest", $o__OR__rest);
const $pattern_b = /*@__PURE__*/ _const("$pattern_b", $o__OR__$pattern_b);
const $key = /*@__PURE__*/ _const("key", ($scope) => $key_name($scope, $scope.key?.name));
const $key_name = /*@__PURE__*/ _const("key_name", $o__OR__key_name);
const $input_key = $key;
const $input = ($scope, input) => $input_key($scope, input.key);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
