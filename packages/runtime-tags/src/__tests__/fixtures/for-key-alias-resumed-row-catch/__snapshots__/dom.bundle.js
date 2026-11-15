// template.marko
function fail() {
	throw new Error("fail");
}
const $catch_content__setup = ($scope) => _text($scope.a, $scope._.M);
const $catch_content = _content("a1", " ", " ", $catch_content__setup);
const $try_content__failing__OR__item = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._._.c ? fail() : $scope._.c));
const $try_content__failing = /*@__PURE__*/ _closure_get(3, $try_content__failing__OR__item, ($scope) => $scope._._, "a0");
const $failing = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__failing));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$failing($scope, true);
}));
