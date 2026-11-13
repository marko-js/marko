// tags/wrap.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f));
const $if_content__setup = $if_content__input_content;
const $input__script = _script("c0", ($scope) => _attrs_script($scope, "a"));
const $input = /*@__PURE__*/ _const(3, ($scope) => {
	_attrs_content($scope, "a", $scope.d);
	$if($scope, $scope.d.show ? 0 : 1);
	$input_content($scope, $scope.d.content);
	$input__script($scope);
});
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $input_content = /*@__PURE__*/ _const(5, $if_content__input_content);

// tags/outer.marko
const $wrap_content__input_value = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "b0");
const $wrap_content = _content("b1", " ", " ", $wrap_content__input_value);
const $input_show = ($scope, input_show) => $input($scope.a, {
	show: input_show,
	content: $wrap_content($scope)
});
const $input_value__closure = /*@__PURE__*/ _closure($wrap_content__input_value);
const $input_value = /*@__PURE__*/ _const(4, $input_value__closure);

// template.marko
const $x = /*@__PURE__*/ _let(2, ($scope) => {
	$input_value($scope.a, $scope.c);
	$input_show($scope.a, $scope.c > 1);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$x($scope, +$scope.c + 1);
}));
