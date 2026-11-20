// template.marko
const $Child_content2__v = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d), 0, "a3");
const $Child_content2 = _content("a4", "<em> </em>", "D ", $Child_content2__v);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $Child_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $Child_content__x = /*@__PURE__*/ _let(5, ($scope) => {
	_return($scope, $scope.f ? "on" : "off");
	$Child_content__if($scope, $scope.f ? 0 : 1);
});
const $Child_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Child_content__x($scope, !$scope.f);
}));
const $v = _var_resume("a2", /*@__PURE__*/ _const(3, /* @__PURE__ */ _closure($Child_content2__v)));
