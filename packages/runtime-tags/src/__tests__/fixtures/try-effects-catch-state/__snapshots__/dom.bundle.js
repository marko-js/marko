// total: 7016 (min) 3156 (brotli)
// template.marko: 293 (min) 187 (brotli)
_enable_catch();
const $catch_content__err = ($scope, err) => _text($scope.a, err);
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content = _content_resume("a0", " ", " b", 0, $catch_content__$params);
const $try_content__clickCount__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$clickCount($scope._, $scope._.c + 1);
	});
	$scope._.a.textContent = $scope._.c;
});
const $try_content__clickCount = /* @__PURE__ */ _closure_get(2, ($scope) => {
	_text($scope.b, (() => {
		if ($scope._.c > 1) throw new Error("ERROR!");
	})());
	$try_content__clickCount__script($scope);
});
const $clickCount = /* @__PURE__ */ _let(2, /* @__PURE__ */ _closure($try_content__clickCount));
