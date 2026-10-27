// tags/card.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
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
const $inputinnerCardsection_content__input_note = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_join_closure("a8", 7, /*@__PURE__*/ _closure_get(11, ($scope) => _text($scope.a, $scope._._._._.h), ($scope) => $scope._._._._, "a2"), 0));
const $inputinnerCardsection_content__setup = ($scope) => {
	$inputinnerCardsection_content__input_note($scope);
	$inputinnerCardsection_content__w($scope);
};
const $inputinnerCardsection_content__w = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _fill_join_closure("a6", 3, /*@__PURE__*/ _closure_get(12, ($scope) => _text($scope.b, $scope._.d), 0, "a4"), 0));
const $inputinnerCardsection_content = _content$1("a0", "<em><!> <!></em>", "D%c%", $inputinnerCardsection_content__setup);
_content_resume($inputinnerCardsection_content);
const $await_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag(1, $inputinnerCardsection_content);
const $await_content2__input_inner = /*@__PURE__*/ _init_resume("a9", /*@__PURE__*/ _fill_join_closure("a18", 6, /*@__PURE__*/ _closure_get(10, ($scope) => $await_content2__dynamicTag($scope, $scope._._._.g ? card_default : "section"), ($scope) => $scope._._._, "a10"), 0));
const $await_content2__setup = $await_content2__input_inner;
const $await_content2__w__closure = /*@__PURE__*/ _closure($inputinnerCardsection_content__w);
const $await_content2__w__script = _script("a5", ($scope) => console.log("w", $scope.d));
const $await_content2__w = /*@__PURE__*/ _fill_const("a6", 3, ($scope) => {
	$await_content2__w__closure($scope);
	_text($scope.a, $scope.d);
	$await_content2__w__script($scope);
}, /*@__PURE__*/ _fill_mark(3, $await_content2__w__closure));
const $await_content2__$params = ($scope, $params3) => $await_content2__w($scope, $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content(0, "<b> </b><!><!>", "D l%", $await_content2__setup);
const $inputouterCarddiv_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $inputouterCarddiv_content__input_w = /*@__PURE__*/ _init_resume("a15", /*@__PURE__*/ _fill_join_closure("a17", 5, /*@__PURE__*/ _closure_get(9, ($scope) => $inputouterCarddiv_content__await_promise($scope, $scope._._.f), ($scope) => $scope._._, "a16"), 0));
const $inputouterCarddiv_content__setup = ($scope) => {
	$inputouterCarddiv_content__input_w($scope);
	$await_content2($scope);
};
const $inputouterCarddiv_content = _content$1("a7", "<!><!><!>", "b%", $inputouterCarddiv_content__setup);
_content_resume($inputouterCarddiv_content);
