// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f));
const $Card_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__content);
const $Card_content__label = ($scope, label) => {
	_text($scope.a, label);
	$Card_content__if($scope, label ? 0 : 1);
};
const $Card_content__$params = ($scope, $params2) => {
	$Card_content__content($scope, $params2[0].content);
	$Card_content__label($scope, $params2[0].label);
};
const $Card_content__content = /*@__PURE__*/ _const(5, $if_content__content);
const $Card_content = _content$1("a1", "<p><!><!></p>", "D%b%", 0, $Card_content__$params);
const $Label_content__input_label = /*@__PURE__*/ _init_resume("a4", /*@__PURE__*/ _fill_join_closure("a8", 5, /*@__PURE__*/ _closure_get(11, ($scope) => _text($scope.a, $scope._.f), 0, "a5"), 0));
const $Label_content__setup = ($scope) => {
	$Label_content__input_label($scope);
	$Label_content__n($scope);
};
const $Label_content__n = /*@__PURE__*/ _init_resume("a12", /*@__PURE__*/ _closure_get(14, ($scope) => _text($scope.b, $scope._.j)));
const $Label_content = _content$1("a2", "<em><!> <!></em>", "D%c%", $Label_content__setup);
const $n__closure = /*@__PURE__*/ _closure($Label_content__n);
const $n = /*@__PURE__*/ _let(9, ($scope) => {
	_text($scope.b, $scope.j);
	$n__closure($scope);
});
const $setup__script = _script("a7", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.j + 1);
}));
