// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $Note_content__walks = "b%c";
const $Note_content__template = "<!><!><!>";
const $inputonCarddiv_content__setup = ($scope) => {
	$scope.a._ = $scope._;
	$Note_content__setup($scope.a);
	$Note_content__tag_input_label($scope.a, "x");
};
const $inputonCarddiv_content = _content("a3", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Note_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Note_content__walks), $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $if_content__input_note = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.b, $scope._._.e), ($scope) => $scope._._, "a0");
const $if_content__setup = ($scope) => {
	$if_content__input_note($scope);
	$if_content__label._($scope);
};
const $if_content__label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d));
const $Note_content__if = /*@__PURE__*/ _if(0, "<em><!> <!></em>", "D%c%", $if_content__setup);
const $Note_content__input_on = /*@__PURE__*/ _closure_get(5, ($scope) => $Note_content__if($scope, $scope._.d ? 0 : 1), 0, "a2");
const $Note_content__setup = $Note_content__input_on;
const $Note_content__tag_input_label = /*@__PURE__*/ _const(3, $if_content__label);
