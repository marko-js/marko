// template.marko
const $if_content__api = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.f.get())));
const $if_content__setup = ($scope) => {
	$if_content__api._($scope);
	$if_content__api_label._($scope);
};
const $if_content__api_label = /*@__PURE__*/ _fill_join("a1", 6, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.g)));
const $if = /*@__PURE__*/ _if(0, "<p><!>: <!></p>", "D%c%", $if_content__setup);
const $show = /*@__PURE__*/ _let(7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, true);
}));
const $api = ($scope) => () => $scope.e;
_resume("a0", $api);
