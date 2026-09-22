// template.marko
const $Content_content__count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $Content_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Content_content__count($scope, +$scope.g + 1);
}));
const $Content_content__setup = ($scope) => {
	$Content_content__count($scope, 0);
	$Content_content__setup__script($scope);
};
const $Content_content__label = ($scope, label) => _text($scope.b, label);
const $Content_content__$params = ($scope, $params2) => $Content_content__label($scope, ($params2?.[0]).label);
const $Content_content = _content_resume("a0", "<em><!> <!></em>", " D%c%", $Content_content__setup, $Content_content__$params);
const $n = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.h + 1);
}));
