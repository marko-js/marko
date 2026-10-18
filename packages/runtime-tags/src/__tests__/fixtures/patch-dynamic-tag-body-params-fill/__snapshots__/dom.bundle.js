// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__content = /*@__PURE__*/ _fill_join("a3", 6, /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.g)));
const $Card_content__if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content__content);
const $Card_content__open = /*@__PURE__*/ _fill_let("a4", 7, ($scope) => $Card_content__if($scope, $scope.h ? 0 : 1));
const $Card_content__setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$Card_content__open($scope, !$scope.h);
}));
const $Card_content__setup = ($scope) => {
	$Card_content__setup__script($scope);
	$Card_content__open($scope, true);
};
const $Card_content__label = ($scope, label) => _text($scope.b, label);
const $Card_content__$params = ($scope, $params2) => {
	$Card_content__label($scope, $params2[0].label);
	$Card_content__content($scope, $params2[0].content);
};
const $Card_content__content = /*@__PURE__*/ _fill_const("a3", 6, $if_content__content);
const $Card_content = _content$1("a0", "<button class=toggle>t</button><p><!><!></p>", " bD%b%", $Card_content__setup, $Card_content__$params);
const $Label_content__input_label = /*@__PURE__*/ _fill_join_closure("a6", 3, /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._.d), 0, "a5"), 0);
const $Label_content = _content$1("a1", "<em> </em>", "D ", $Label_content__input_label);
