// tags/host.marko
const $template = "<div></div>";
const $extra_content__input_label = /*@__PURE__*/ _init_resume("b2", /*@__PURE__*/ _fill_closure("b5", 3, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.d), 0, "b3"), 0));
const $extra_content__setup__script = _script("b1", ($scope) => console.log("child mount"));
const $extra_content__setup = ($scope) => {
	$extra_content__input_label($scope);
	$extra_content__setup__script($scope);
};
const $extra_content = _content$1("b0", "<em> </em>", "D ", $extra_content__setup);
const $extra__script = _script("b4", ($scope) => console.log("parent mount " + typeof $scope.e, document.querySelector("em")?.textContent));
const $extra = /*@__PURE__*/ _const(4, ($scope) => {
	$extra__script($scope);
	_attr_content($scope, "a", $scope.e);
});
function $setup($scope) {
	$extra($scope, { content: $extra_content($scope) });
}
const $input_label__closure = /*@__PURE__*/ _closure($extra_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("b5", 3, $input_label__closure);

// template.marko
const $if_content__input_label = /*@__PURE__*/ _fill_signal("4 a1", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_label($scope.a, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.f);
}));
