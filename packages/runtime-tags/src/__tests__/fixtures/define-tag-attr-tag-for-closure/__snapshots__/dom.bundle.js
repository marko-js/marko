// template.marko
const $item_content = _content_closures_resume("a2", /*@__PURE__*/ _content("a2", "<div>person: <!></div>", "Db%"), { 2($scope) {
	_text($scope.a, $scope.c);
} });
const $for_content__entry_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params3) => $for_content__entry_content($scope, $params3[0]?.content);
const $if_content__for = /*@__PURE__*/ _for_of(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $if_content__input_item = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__for($scope, [$scope._.f]));
const $Menu_content__if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content__input_item);
const $Menu_content__open = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g ? "collapse" : "expand");
	$Menu_content__if($scope, $scope.g ? 0 : 1);
});
const $Menu_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Menu_content__open($scope, !$scope.g);
}));
