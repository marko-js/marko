// template.marko
const $else_content__setup = ($scope) => _text($scope.a, $scope._.M);
const $if_content__setup = ($scope) => _text($scope.a, $scope._.M);
const $for_content__if = /*@__PURE__*/ _if(0, "<pre>code <!></pre>", "Db%", $if_content__setup, "<p>text <!></p>", "Db%", $else_content__setup);
const $for_content__item_code = ($scope, item_code) => $for_content__if($scope, item_code ? 0 : 1);
const $for_content__$params = ($scope, $params2) => $for_content__item_code($scope, $params2[0]?.code);
const $for = /*@__PURE__*/ _for_of(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let(4, ($scope) => $for($scope, [$scope.e, "id"]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$items($scope, [...$scope.e.slice(1), $scope.e?.[0]]);
	});
	_on($scope.c, "click", function() {
		$items($scope, $scope.e.map((item) => ({
			...item,
			code: !item.code
		})));
	});
	_on($scope.d, "click", function() {
		$items($scope, $scope.e.slice(1));
	});
});
