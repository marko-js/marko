// tags/host.marko
const $inputnativesectioninputwrap_content__input_label = /*@__PURE__*/ _closure_get(12, ($scope) => _text($scope.a, $scope._._.i), ($scope) => $scope._._, "b1");
const $inputnativesectioninputwrap_content = _content("b0", "<i> </i>", "D ", $inputnativesectioninputwrap_content__input_label);
_content_resume($inputnativesectioninputwrap_content);
const $if_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_wrap = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag$1($scope, $scope._.f));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_wrap);
const $flag = /*@__PURE__*/ _let(9, ($scope) => $if($scope, $scope.j ? 0 : 1));
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$flag($scope, !$scope.j);
}));

// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $wrap_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__content);
const $wrap_content__open = /*@__PURE__*/ _let(5, ($scope) => $wrap_content__if($scope, $scope.f ? 0 : 1));
const $wrap_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$wrap_content__open($scope, !$scope.f);
}));
const $wrap_content__setup = ($scope) => {
	$wrap_content__open($scope, true);
	$wrap_content__setup__script($scope);
};
const $wrap_content__$params = ($scope, $params2) => $wrap_content__content($scope, $params2[0].content);
const $wrap_content__content = /*@__PURE__*/ _const(4, $if_content__content);
const $wrap_content = _content("a1", "<button class=toggle>t</button><!><!>", " b%", $wrap_content__setup, $wrap_content__$params);
