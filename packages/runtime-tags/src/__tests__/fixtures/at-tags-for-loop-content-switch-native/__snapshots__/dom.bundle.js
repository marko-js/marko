// tags/tabs.marko
const $for_content__setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$i($scope._, $scope.M);
}));
const $i__OR__tabs__script = _script("b1", ($scope) => _attrs_script($scope, "b"));
const $i__OR__tabs = /*@__PURE__*/ _or(7, ($scope) => {
	_attrs_content($scope, "b", $scope.g[$scope.f]);
	$i__OR__tabs__script($scope);
});
const $i = /*@__PURE__*/ _let(5, $i__OR__tabs);

// template.marko
const $tab_content__count = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e));
const $tab_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$tab_content__count($scope, +$scope.e + 1);
}));
const $tab_content__setup = ($scope) => {
	$tab_content__count($scope, 0);
	$tab_content__setup__script($scope);
};
const $tab_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a1", "<button class=inc><!>: <!></button>", " D%c%", $tab_content__setup), { 3($scope) {
	_text($scope.b, $scope.d);
} });
_resumed.a1 = $tab_content;
