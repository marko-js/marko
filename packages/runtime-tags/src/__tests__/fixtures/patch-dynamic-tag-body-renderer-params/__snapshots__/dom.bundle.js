// tags/host.marko
const $inputnativesectioninputwrap_content__input_label = /*@__PURE__*/ _init_resume("b1", /*@__PURE__*/ _fill_join_closure("b8", 8, /*@__PURE__*/ _closure_get(12, ($scope) => _text($scope.a, $scope._._.i), ($scope) => $scope._._, "b2"), 0));
const $inputnativesectioninputwrap_content = _content$1("b0", "<i> </i>", "D ", $inputnativesectioninputwrap_content__input_label);
_content_resume($inputnativesectioninputwrap_content);
const $if_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_wrap = /*@__PURE__*/ _fill_join("b6", 5, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag$1($scope, $scope._.f)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_wrap);
const $flag = /*@__PURE__*/ _fill_let("b9", 9, ($scope) => $if($scope, $scope.j ? 0 : 1));
const $setup__script = _script("b5", ($scope) => _on($scope.a, "click", function() {
	$flag($scope, !$scope.j);
}));

// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__content = /*@__PURE__*/ _fill_join("a1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $wrap_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__content);
const $wrap_content__open = /*@__PURE__*/ _fill_let("a2", 5, ($scope) => $wrap_content__if($scope, $scope.f ? 0 : 1));
const $wrap_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$wrap_content__open($scope, !$scope.f);
}));
const $wrap_content__setup = ($scope) => {
	$wrap_content__setup__script($scope);
	$wrap_content__open($scope, true);
};
const $wrap_content__$params = ($scope, $params2) => $wrap_content__content($scope, $params2[0].content);
const $wrap_content__content = /*@__PURE__*/ _fill_const("a1", 4, $if_content__content);
const $wrap_content = _content$1("a3", "<button class=toggle>t</button><!><!>", " b%", $wrap_content__setup, $wrap_content__$params);
