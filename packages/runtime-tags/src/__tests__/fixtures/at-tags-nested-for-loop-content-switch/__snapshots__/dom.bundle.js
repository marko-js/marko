// tags/tabs.marko
const $for_content__setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$i($scope._, $scope.M);
}));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $i__OR__tabs = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.g[$scope.f].content));
const $i = /*@__PURE__*/ _let(5, $i__OR__tabs);

// template.marko
const $tab_content__count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.d, $scope.g));
const $tab_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$tab_content__count($scope, +$scope.g + 1);
}));
const $tab_content__setup = ($scope) => {
	$tab_content__count($scope, 0);
	$tab_content__setup__script($scope);
};
const $tab_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a1", "<button class=inc><!><!>: <!></button>", " D%b%c%", $tab_content__setup), {
	4($scope) {
		_text($scope.b, $scope.e);
	},
	5($scope) {
		_text($scope.c, $scope.f);
	}
});
_resumed.a1 = $tab_content;
