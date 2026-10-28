// tags/toggle.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _fill_join("b2", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e))));
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_content);
const $input_open = ($scope, input_open) => $if($scope, input_open ? 0 : 1);

// template.marko
const $toggle_content__label = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_join_closure("a3", 1, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.b), 0, "a1"), 0));
const $toggle_content = _content$1("a2", "<p> </p>", "D ", $toggle_content__label);
const $wrapper_content__open = /*@__PURE__*/ _closure_get(7, ($scope) => $input_open($scope.a, $scope._.f), 0, "a6");
const $open = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($wrapper_content__open));
const $setup__script = _script("a8", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
