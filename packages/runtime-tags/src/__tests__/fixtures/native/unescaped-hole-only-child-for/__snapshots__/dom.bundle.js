// template.marko
const $for_content__x = ($scope, x) => _html($scope, x, "a");
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!>", "%", 0, $for_content__$params);
const $list = /*@__PURE__*/ _let(3, ($scope) => $for($scope, [$scope.d]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$list($scope, [`<b>${$scope.d?.length}</b><i>${$scope.d?.length}</i>`, ...$scope.d]);
	});
	_on($scope.c, "click", function() {
		$list($scope, []);
	});
});
