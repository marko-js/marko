// tags/card.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("b1", 4, $if_content__input_content);
var card_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// template.marko
const $inputinnerCardsection_content__input_note = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_closure("a7", 7, /*@__PURE__*/ _closure_get(11, ($scope) => _text($scope.a, $scope._._._._.h), ($scope) => $scope._._._._, "a2"), 0));
const $inputinnerCardsection_content__setup = ($scope) => {
	$inputinnerCardsection_content__input_note($scope);
	$inputinnerCardsection_content__w($scope);
};
const $inputinnerCardsection_content__w = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _fill_closure("a5", 2, /*@__PURE__*/ _closure_get(12, ($scope) => _text($scope.b, $scope._.c), 0, "a4"), 0));
const $inputinnerCardsection_content = _content$1("a0", "<em><!> <!></em>", "D%c%", $inputinnerCardsection_content__setup);
_content_resume($inputinnerCardsection_content);
const $await_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputinnerCardsection_content);
const $await_content2__input_inner = /*@__PURE__*/ _init_resume("a8", /*@__PURE__*/ _fill_closure("a17", 6, /*@__PURE__*/ _closure_get(10, ($scope) => $await_content2__dynamicTag($scope, $scope._._._.g ? card_default : "section"), ($scope) => $scope._._._, "a9"), 0));
const $await_content2__setup = $await_content2__input_inner;
const $await_content2__$params = ($scope, $params3) => $await_content2__w($scope, $params3[0]);
const $await_content2__w = /*@__PURE__*/ _fill_const("a5", 2, /* @__PURE__ */ _closure($inputinnerCardsection_content__w));
const $await_content2 = /*@__PURE__*/ _await_content(0, "<!><!><!>", "b%", $await_content2__setup);
const $inputouterCarddiv_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $inputouterCarddiv_content__input_w = /*@__PURE__*/ _init_resume("a14", /*@__PURE__*/ _fill_closure("a16", 5, /*@__PURE__*/ _closure_get(9, ($scope) => $inputouterCarddiv_content__await_promise($scope, $scope._._.f), ($scope) => $scope._._, "a15"), 0));
const $inputouterCarddiv_content__setup = ($scope) => {
	$inputouterCarddiv_content__input_w($scope);
	$await_content2($scope);
};
const $inputouterCarddiv_content = _content$1("a6", "<!><!><!>", "b%", $inputouterCarddiv_content__setup);
_content_resume($inputouterCarddiv_content);
