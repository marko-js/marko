// template.marko
const $if_content__value = /* @__PURE__ */ _if_closure(3, 0, ($scope) => _text($scope.a, $scope._.e));
const $if = /* @__PURE__ */ _if(3, "<span> </span>", "D l", $if_content__value);
const $value__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, $scope.e + 1);
}));
const $value = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$if($scope, $scope.e ? 0 : 1);
	$if_content__value($scope);
	$value__script($scope);
});
