// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// tags/counter.marko
const $c = /*@__PURE__*/ _fill_let("c1", 2, ($scope) => {
	_text($scope.b, $scope.c);
	_return($scope, $scope.c);
});
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, +$scope.c + 1);
}));

// template.marko
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _init_resume("a2", /*@__PURE__*/ _fill_closure("a4", 6, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.g), 0, "a3"), 0));
const $inputonCarddiv_content__setup = ($scope) => {
	$inputonCarddiv_content__input_note($scope);
	$inputonCarddiv_content__v($scope);
};
const $inputonCarddiv_content__v = /*@__PURE__*/ _init_resume("a6", /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.b, $scope._.h)));
const $inputonCarddiv_content = _content$1("a1", "<em><!> <!></em>", "D%c%", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $v = _var_resume("a0", /*@__PURE__*/ _const(7, /* @__PURE__ */ _closure($inputonCarddiv_content__v)));
