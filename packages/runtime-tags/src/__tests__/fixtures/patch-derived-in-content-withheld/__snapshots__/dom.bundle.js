// tags/toggle.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _shell_init("b1", /*@__PURE__*/ _fill_join("b2", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e))));
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_content);
const $input_open = ($scope, input_open) => $if($scope, input_open ? 0 : 1);

// template.marko
const $toggle_content__label = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.b), 0, "a2");
const $toggle_content = _content$1("a0", "<p> </p>", "D ", $toggle_content__label);
const $wrapper_content__label = /*@__PURE__*/ _const(1, /* @__PURE__ */ _closure($toggle_content__label));
const $wrapper_content__input_label = _closure_resume("a8", /*@__PURE__*/ _fill_join_closure("a4", 4, /*@__PURE__*/ _closure_get(6, ($scope) => $wrapper_content__label($scope, $scope._.e)), 0));
const $wrapper_content__open = /*@__PURE__*/ _shell_init("a9", /*@__PURE__*/ _closure_get(7, ($scope) => $input_open($scope.a, $scope._.f)));
const $open = /*@__PURE__*/ _fill_let("a5", 5, /* @__PURE__ */ _closure($wrapper_content__open));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
