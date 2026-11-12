// template.marko
const $global_o_key = /*@__PURE__*/ _global_key("o", "x");
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", /* @__PURE__ */ _global_if($global_o_key, 1, 0, "a0", ($scope) => _text($scope.a, $scope.$.o.x)));
const $open = _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $global_o_x__OR__$global_k = _global_script("a1", ($scope) => $scope.c.textContent = $scope.$.o.x + $scope.$.k, /* @__PURE__ */ _global_closure($global_o_key), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("k")));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.d);
}));
