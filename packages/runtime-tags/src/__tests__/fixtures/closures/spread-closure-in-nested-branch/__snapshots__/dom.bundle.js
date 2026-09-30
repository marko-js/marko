// template.marko
const $if_content2__attrs__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $if_content2__setup = /* @__PURE__ */ _if_closure(2, 0, ($scope) => {
	_attrs_content($scope, "a", $scope._.e);
	$if_content2__attrs__script($scope);
});
const $if_content__item__script = _script("a0", ($scope) => _attrs_script($scope, "a"));
const $for_content__if = /*@__PURE__*/ _if(0, "<div></div>", " ", /* @__PURE__ */ _if_closure(0, 0, ($scope) => {
	_attrs_content($scope, "a", $scope._.c);
	$if_content__item__script($scope);
}));
const $for_content__show = /*@__PURE__*/ _for_closure(1, ($scope) => $for_content__if($scope, $scope._.d ? 0 : 1));
const $if = /*@__PURE__*/ _if(2, "<span></span>", " ", $if_content2__setup);
const $show = /*@__PURE__*/ _let(3, ($scope) => {
	$if($scope, $scope.d ? 0 : 1);
	$for_content__show($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.d);
}));
