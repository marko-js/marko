// template.marko
const $catch_content__err = ($scope, err) => _text($scope.a, err);
const $catch_content = _content("a3", " ", " ", 0, $catch_content__err);
const $try_content__clickCount__script = _script("a0", ($scope) => $scope._.a.textContent = $scope._.c);
const $try_content__clickCount = /*@__PURE__*/ _closure_get(3, ($scope) => {
	_text($scope.b, (() => {
		if ($scope._.c > 1) throw new Error("ERROR!");
	})());
	$try_content__clickCount__script($scope);
}, 0, "a2");
const $try_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$clickCount($scope._, +$scope._.c + 1);
}));
const $clickCount = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__clickCount));
