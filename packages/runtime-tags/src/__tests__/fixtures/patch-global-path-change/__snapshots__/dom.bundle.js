// template.marko
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", /* @__PURE__ */ _global_if("a0", /* @__PURE__ */ _global_key(6, "o", "x"), 1, 0, ($scope) => _text($scope.a, $scope.$.o.x)));
const $open = _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $global_o_x__OR__$global_k = /*@__PURE__*/ _global_or(4, ($scope) => $global_o_x__OR__$global_k__script($scope), /* @__PURE__ */ _global_closure("a4", /* @__PURE__ */ _global_key(7, "o", "x")), /* @__PURE__ */ _global_closure("a5", /* @__PURE__ */ _global_key(8, "k")));
const $global_o_x__OR__$global_k__script = _global_script("a1", ($scope) => $scope.c.textContent = $scope.$.o.x + $scope.$.k, $global_o_x__OR__$global_k);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.d);
}));
