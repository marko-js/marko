// template.marko
const $Content_content__n = /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.d, $scope._.h), 0, "a2", 7);
const $Content_content__count = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $Content_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Content_content__count($scope, +$scope.h + 1);
}));
const $Content_content__setup = ($scope) => {
	$Content_content__n($scope);
	$Content_content__count($scope, 0);
	$Content_content__setup__script($scope);
};
const $Content_content__label = ($scope, label) => _text($scope.b, label);
const $Content_content__$params = ($scope, $params2) => $Content_content__label($scope, ($params2?.[0]).label);
const $Content_content = _content_resume("a0", "<em><!> <!> <!></em>", " D%c%c%", $Content_content__setup, $Content_content__$params);
const $n__closure = /*@__PURE__*/ _closure($Content_content__n);
const $n = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.c, $scope.h);
	$n__closure($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.h + 1);
}));
