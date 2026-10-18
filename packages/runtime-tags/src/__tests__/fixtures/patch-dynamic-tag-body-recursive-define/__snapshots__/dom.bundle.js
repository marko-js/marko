// tags/card.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag$1($scope, $scope._.e)));
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
const $Tree_content__walks = "D l%c";
const $Tree_content__template = "<em> </em><!><!>";
const $inputonCarddiv_content__depth = /*@__PURE__*/ _closure_get(7, ($scope) => $Tree_content__tag_input_depth($scope.a, $scope._._.e - 1), ($scope) => $scope._._, "a2");
const $inputonCarddiv_content__setup = ($scope) => {
	$inputonCarddiv_content__depth($scope);
	$scope.a._ = $scope._._._;
	$Tree_content__setup($scope.a);
};
const $inputonCarddiv_content = _content$1("a0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content__walks), $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputonCarddiv_content);
const $if_content__input_on = _closure_resume("a3", /*@__PURE__*/ _fill_join_closure("a7", 4, /*@__PURE__*/ _closure_get(6, ($scope) => $if_content__dynamicTag($scope, $scope._._.e ? card_default : "div"), ($scope) => $scope._._), 0));
const $if_content__setup = $if_content__input_on;
const $Tree_content__input_note = /*@__PURE__*/ _fill_join_closure("a6", 3, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.d), 0, "a5"), 0);
const $Tree_content__setup = $Tree_content__input_note;
const $Tree_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $Tree_content__tag_input_depth__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__depth);
const $Tree_content__tag_input_depth = /*@__PURE__*/ _const(4, ($scope) => {
	$Tree_content__tag_input_depth__closure($scope);
	$Tree_content__if($scope, $scope.e ? 0 : 1);
});
