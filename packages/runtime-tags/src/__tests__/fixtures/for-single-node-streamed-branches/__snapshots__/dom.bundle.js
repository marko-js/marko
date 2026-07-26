// template.marko
const $for_content3__item = ($scope, item) => _text($scope.a, item);
const $for_content3__$params = ($scope, $params6) => $for_content3__item($scope, $params6[0]);
const $for_content2__item = ($scope, item) => _text($scope.a, item);
const $for_content2__$params = ($scope, $params4) => $for_content2__item($scope, $params4[0]);
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $await_content2__for = /*@__PURE__*/ _for_of(0, "<em> </em>", "D l", 0, $for_content3__$params);
const $await_content2__hide__OR__tail = /*@__PURE__*/ _or(3, ($scope) => $await_content2__for($scope, [$scope._.j ? [] : $scope.c]));
const $await_content2__hide = /*@__PURE__*/ _closure_get(11, $await_content2__hide__OR__tail);
const $await_content__for = /*@__PURE__*/ _for_of(0, "<b> </b>", "D l", 0, $for_content2__$params);
const $await_content__hide__OR__mid = /*@__PURE__*/ _or(3, ($scope) => $await_content__for($scope, [$scope._.j ? [] : $scope.c]));
const $await_content__hide = /*@__PURE__*/ _closure_get(11, $await_content__hide__OR__mid);
const $for = /*@__PURE__*/ _for_of(1, "<i> </i>", "D l", 0, $for_content__$params);
const $input_head__OR__hide = /*@__PURE__*/ _or(10, ($scope) => $for($scope, [$scope.j ? [] : $scope.g]));
const $hide__closure = /*@__PURE__*/ _closure($await_content__hide, $await_content2__hide);
const $hide = /*@__PURE__*/ _let(9, ($scope) => {
	$input_head__OR__hide($scope);
	$hide__closure($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$hide($scope, !$scope.j);
}));
