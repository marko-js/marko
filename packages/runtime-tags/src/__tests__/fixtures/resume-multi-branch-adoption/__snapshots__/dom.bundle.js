// template.marko
const $if_content__item__script = _script("a0", ($scope) => $signal($scope, 0).onabort = () => $scope._._.b.append(`destroyed ${$scope._.c}`));
const $if_content__item = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	_text($scope.a, $scope._.c);
	$signalReset($scope, 0);
	$if_content__item__script($scope);
});
const $for_content__if = /*@__PURE__*/ _if(0, "<span> </span>", "D l", $if_content__item);
const $for_content__item = /*@__PURE__*/ _const(2, ($scope) => {
	$for_content__if($scope, $scope.c ? 0 : 1);
	$if_content__item($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(2, "<div></div>", " b", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let(3, ($scope) => $for($scope, [$scope.d]));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$items($scope, []);
}));
