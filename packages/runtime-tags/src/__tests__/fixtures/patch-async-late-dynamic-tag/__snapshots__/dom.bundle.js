// tags/frame.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.d)));
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_content);
const $open = _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));

// template.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<em> </em>", "D ");
const $inputas_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $inputas_content__input_p = /*@__PURE__*/ _init_resume("a6", _closure_resume("a14", /*@__PURE__*/ _fill_closure("a9", 6, /*@__PURE__*/ _closure_get(8, ($scope) => $inputas_content__await_promise($scope, $scope._.g)), 0)));
const $inputas_content__setup = ($scope) => {
	$inputas_content__input_p($scope);
	$await_content($scope);
};
const $inputas_content = _content$1("a5", "<!><!><!>", "b%", $inputas_content__setup);
_content_resume($inputas_content);
const $setup__script = _script("a8", ($scope) => _on($scope.c, "click", function() {}));
