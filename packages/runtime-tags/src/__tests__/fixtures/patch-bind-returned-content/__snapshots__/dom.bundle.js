// tags/child.marko
const $Content_content__input_label = /*@__PURE__*/ _fill_join_closure("b0", 2, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.b, $scope._.c), 0, "b2", 2), 0);
const $Content_content__setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, +$scope._.d + 1);
}));
const $Content_content__setup = ($scope) => {
	$Content_content__input_label($scope);
	$Content_content__count($scope);
	$Content_content__setup__script($scope);
};
const $Content_content__count = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.c, $scope._.d), 0, "b3", 3);
const $Content_content = _content_resume("b0", "<em><!> <!></em>", " D%c%", $Content_content__setup);
const $count = /*@__PURE__*/ _fill_let("b1", 3, /* @__PURE__ */ _closure($Content_content__count));

// template.marko
const $n = /*@__PURE__*/ _let(8, ($scope) => _text($scope.e, $scope.i));
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$n($scope, +$scope.i + 1);
}));
const $content = _var_resume("a0", /* @__PURE__ */ _dynamic_tag(2));
