// tags/frame.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("b0", 0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.d));
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_content);
const $open = _fill_let("b1", 4, ($scope) => $if($scope, $scope.e ? 0 : 1));

// template.marko
const $await_content2__$params = ($scope, $params3) => _text($scope.a, $params3[0]);
const $await_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $await_content2 = /*@__PURE__*/ _await_content(0, "<b> </b>", "D ");
const $frame_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $frame_content__input_q = /*@__PURE__*/ _closure_get_patch("a4", 9, ($scope) => $frame_content__await_promise($scope, $scope._.h), 0, "a8", 0);
const $frame_content__setup = ($scope) => {
	$frame_content__input_q($scope);
	$await_content2($scope);
};
const $frame_content = _content$1("a5", "<!><!><!>", "b%", $frame_content__setup);
const $await_content = /*@__PURE__*/ _await_content(0, "<em> </em>", "D ");
const $inputas_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $inputas_content__input_p = /*@__PURE__*/ _closure_get_patch("a3", 8, ($scope) => $inputas_content__await_promise($scope, $scope._.g), 0, "a7", 0);
const $inputas_content__setup = ($scope) => {
	$inputas_content__input_p($scope);
	$await_content($scope);
};
const $inputas_content = /*@__PURE__*/ _content$1("a2", "<!><!><!>", "b%", $inputas_content__setup);
_content_closures_resume($inputas_content);
const $setup__script = _script("a6", ($scope) => _on($scope.c, "click", function() {}));
