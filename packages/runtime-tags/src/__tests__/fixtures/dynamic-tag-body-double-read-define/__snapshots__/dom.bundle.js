// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__content = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f));
const $Wrap_content__if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content__content);
const $Wrap_content__open = /*@__PURE__*/ _let(6, ($scope) => $Wrap_content__if($scope, $scope.g ? 0 : 1));
const $Wrap_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Wrap_content__open($scope, !$scope.g);
}));
const $Wrap_content__setup = ($scope) => {
	$Wrap_content__open($scope, false);
	$Wrap_content__setup__script($scope);
};
const $Wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $Wrap_content__content = /*@__PURE__*/ _const(5, ($scope) => {
	$Wrap_content__dynamicTag($scope, $scope.f);
	$if_content__content($scope);
});
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__content($scope, $params2[0].content);
const $Wrap_content = _content("a0", "<button class=toggle>t</button><section><!></section><!><!>", " bD%l%", $Wrap_content__setup, $Wrap_content__$params);
const $inputonWrapdiv_content__input_note = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.e), 0, "a3");
const $inputonWrapdiv_content = _content("a2", "<em> </em>", "D ", $inputonWrapdiv_content__input_note);
_content_resume($inputonWrapdiv_content);
