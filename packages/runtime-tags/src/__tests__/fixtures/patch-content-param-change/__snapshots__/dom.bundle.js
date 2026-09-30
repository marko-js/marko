// tags/labeler.marko
const $template = "<span> </span>";
const $input_title = /*@__PURE__*/ _const(3, ($scope) => {
	_return($scope, "[" + $scope.d + "]");
	_text($scope.a, $scope.d);
});

// tags/wrapper.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content__OR__n = /*@__PURE__*/ _fill_join("c2", 5, /*@__PURE__*/ _fill_join("c1", 4, /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.e, () => ({ value: $scope.f })))));
const $n = /*@__PURE__*/ _fill_let("c2", 5, $input_content__OR__n);
const $setup__script = _script("c0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.f + 1);
}));

// template.marko
const $wrapper_content__input_suffix__OR__value = /*@__PURE__*/ _or(6, ($scope) => $input_title($scope.a, $scope.f + $scope._.d));
const $wrapper_content__input_suffix = /*@__PURE__*/ _fill_join_closure("a3", 3, _closure_get(4, $wrapper_content__input_suffix__OR__value, 0, "a1"), 0);
const $wrapper_content__setup = ($scope) => {
	$wrapper_content__input_suffix($scope);
	_var($scope, 0, $wrapper_content__label);
};
const $wrapper_content__label = _var_resume("a0", ($scope, label) => _text($scope.c, label));
const $wrapper_content__value = /*@__PURE__*/ _const(5, $wrapper_content__input_suffix__OR__value);
const $wrapper_content__$params = ($scope, $params2) => $wrapper_content__value($scope, ($params2?.[0]).value);
const $wrapper_content = _content("a2", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l"), $wrapper_content__setup, $wrapper_content__$params);
