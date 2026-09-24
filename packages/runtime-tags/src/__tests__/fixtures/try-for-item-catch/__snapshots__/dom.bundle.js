// template.marko
const $catch_content__err = ($scope, err) => _text($scope.a, err);
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content = _content_resume("a1", " ", " ", 0, $catch_content__$params);
const $for_content__clickCount = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.a, (() => {
	if ($scope._._.c > 1) throw new Error("ERROR!");
})()), ($scope) => $scope._._, "a0", 2);
const $try_content__clickCount = /*@__PURE__*/ _closure_get(3, _script("a3", ($scope) => $scope._.a.textContent = $scope._.c), 0, "a5", 2);
const $try_content__setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$clickCount($scope._, +$scope._.c + 1);
}));
const $clickCount = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__clickCount, $for_content__clickCount));
