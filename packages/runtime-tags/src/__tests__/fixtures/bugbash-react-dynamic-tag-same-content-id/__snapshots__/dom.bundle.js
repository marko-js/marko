// tags/provider.marko
const $content_content__input_value = /*@__PURE__*/ _closure_get(2, ($scope) => _text($scope.a, $scope._.c));
const $content_content = _content_resume("b0", "<span>v:<!></span>", "Db%l", $content_content__input_value);
const $value__closure = /*@__PURE__*/ _closure($content_content__input_value);
const $value = /*@__PURE__*/ _const(2, $value__closure);

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(4);
const $flag__OR__one__OR__two = /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.h ? $scope.k : $scope.l), 2);
const $flag = /*@__PURE__*/ _let(7, $flag__OR__one__OR__two);
const $b = /*@__PURE__*/ _let(9, ($scope) => $value($scope.c, $scope.j));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.f, "click", function() {
		$flag($scope, !$scope.h);
	});
	_on($scope.g, "click", function() {
		$b($scope, $scope.j + 1);
	});
});
const $one = _var_resume("a2", /*@__PURE__*/ _const(10, $flag__OR__one__OR__two));
const $two = _var_resume("a0", /*@__PURE__*/ _const(11, $flag__OR__one__OR__two));
