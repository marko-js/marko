// template.marko
const $if_content2___ = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $if_content2__count = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content2___($scope, $scope._.c));
const $if_content2__setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$if_content2___($scope, $scope.c * 10);
}));
const $if_content2__setup = ($scope) => {
	$if_content2__count._($scope);
	$if_content2__setup__script($scope);
};
const $if_content__count__OR___ = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.e + $scope._._.c));
const $if_content__count = /*@__PURE__*/ _closure_get(3, $if_content__count__OR___, ($scope) => $scope._._, "a0", 2);
const $if_content__setup = ($scope) => {
	$if_content__count($scope);
	$if_content___._($scope);
};
const $if_content___ = /*@__PURE__*/ _if_closure(2, 0, $if_content__count__OR___);
const $for_content__setup = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, +$scope._.c + 1);
}));
const $for_content__if = /*@__PURE__*/ _if(2, "<span> </span>", "D ", $if_content__setup);
const $for_content___ = /*@__PURE__*/ _const(4, ($scope) => {
	_text($scope.b, $scope.e);
	$for_content__if($scope, $scope.e ? 0 : 1);
	$if_content___($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content___($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<button class=inc> </button><!><!>", " D l%", $for_content__setup, $for_content__$params);
const $if = /*@__PURE__*/ _if(1, "<button class=mul> </button>", " D ", $if_content2__setup);
const $count__closure = /*@__PURE__*/ _closure($if_content__count);
const $count = /*@__PURE__*/ _let(2, ($scope) => {
	$for($scope, [[$scope.c]]);
	$if($scope, $scope.c ? 0 : 1);
	$count__closure($scope);
	$if_content2__count($scope);
});
