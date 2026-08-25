// tags/menu.marko
const $if_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content2__input_content = /*@__PURE__*/ _closure_get(7, ($scope) => $if_content2__dynamicTag($scope, $scope._._.f), ($scope) => $scope._._);
const $if_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content2__input_content);
const $if_content__input_content = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__if($scope, $scope._.f ? 0 : 1));
const $if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g ? "collapse" : "expand");
	$if($scope, $scope.g ? 0 : 1);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const PEOPLE = [
	"alice",
	"bob",
	"carol"
];
const $for_content__person = ($scope, person) => _text($scope.a, person);
const $for_content__$params = ($scope, $params2) => $for_content__person($scope, $params2[0]);
const $menu_content__for = /*@__PURE__*/ _for_of(0, "<div>person: <!></div>", "Db%", 0, $for_content__$params);
const $menu_content__setup = ($scope) => $menu_content__for($scope, [PEOPLE]);
const $menu_content = _content_resume("a0", "<!><!><!>", "b%", $menu_content__setup);
