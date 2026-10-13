// template.marko
const $for_content__x = ($scope, x) => _text($scope.a, x);
const $for_content__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "a0", ($scope) => {
	_text($scope.b, $scope.$.brand);
});
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $for_content__setup = ($scope) => $for_content__$global_brand($scope);
const $if_content__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "a1", ($scope) => {
	_text($scope.a, $scope.$.brand);
});
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed(1, "<i><!><!></i>", "D%b%", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => {
	$if_content__for($scope, [[1, 2]]);
	$if_content__$global_brand($scope);
};
const $if = /*@__PURE__*/ _if(1, "<em> </em><!><!>", "D l%", $if_content__setup);
const $on = /*@__PURE__*/ _fill_let("a3", 2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.c);
}));
