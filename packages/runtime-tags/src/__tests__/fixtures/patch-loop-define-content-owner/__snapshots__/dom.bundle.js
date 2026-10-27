// template.marko
const $Card_content__walks = "D%b%l";
const $Card_content__template = "<p><!><!></p>";
const $rowcardCardspan_content__row_label = /*@__PURE__*/ _init_resume("a10", /*@__PURE__*/ _fill_join_closure("a14", 7, /*@__PURE__*/ _closure_get(13, ($scope) => _text($scope.a, $scope._.h), 0, "a11"), 2));
const $rowcardCardspan_content__setup = ($scope) => {
	$rowcardCardspan_content__row_label($scope);
	$rowcardCardspan_content__n($scope);
};
const $rowcardCardspan_content__n = /*@__PURE__*/ _init_resume("a18", /*@__PURE__*/ _closure_get(15, ($scope) => _text($scope.b, $scope._.l)));
const $rowcardCardspan_content = _content$1("a1", "<b><!> <!></b>", "D%c%", $rowcardCardspan_content__setup);
_content_resume($rowcardCardspan_content);
const $Card_content2__n = /*@__PURE__*/ _init_resume("a20", /*@__PURE__*/ _closure_get(15, ($scope) => _text($scope.b, $scope._.l)));
const $Label_content__row_label = /*@__PURE__*/ _init_resume("a7", /*@__PURE__*/ _fill_join_closure("a14", 7, /*@__PURE__*/ _closure_get(13, ($scope) => _text($scope.a, $scope._.h), 0, "a8"), 0));
const $Label_content__setup = ($scope) => {
	$Label_content__row_label($scope);
	$Label_content__n($scope);
};
const $Label_content__n = /*@__PURE__*/ _init_resume("a22", /*@__PURE__*/ _closure_get(15, ($scope) => _text($scope.b, $scope._.l)));
const $Label_content = _content$1("a3", "<em><!> <!></em>", "D%c%", $Label_content__setup);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f));
const $if_content__setup = $if_content__content;
const $for_content__n__closure = /*@__PURE__*/ _closure($Label_content__n, $Card_content2__n, $rowcardCardspan_content__n);
const $for_content__n = /*@__PURE__*/ _fill_let("a16", 11, ($scope) => {
	_text($scope.b, $scope.l);
	$for_content__n__closure($scope);
});
const $for_content__setup__script = _script("a13", ($scope) => _on($scope.a, "click", function() {
	$for_content__n($scope, +$scope.l + 1);
}));
const $Card_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $Card_content__label = ($scope, label) => {
	_text($scope.a, label);
	$Card_content__if($scope, label ? 0 : 1);
};
const $Card_content__tag_input_content = /*@__PURE__*/ _const(5, $if_content__content);
const $Card_content__$params = ($scope, $params2) => $Card_content__$temp($scope, $params2[0]);
const $Card_content__$temp = ($scope, $temp) => {
	$Card_content__tag_input_content($scope, $temp.content);
	$Card_content__label($scope, $temp.label);
};
const $Card_content = _content$1("a4", $Card_content__template, $Card_content__walks, 0, $Card_content__$params);
