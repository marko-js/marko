// template.marko
const $global_a_key = /*@__PURE__*/ _global_key("a");
const $for_content__$global_a = /*@__PURE__*/ _global_for($global_a_key, 2, "a2");
const $global_c_key = /*@__PURE__*/ _global_key("c");
const $for_content__setup = /* @__PURE__ */ _global_or(($scope) => _text($scope.a, $scope.$.a + $scope.$.c), $for_content__$global_a, /* @__PURE__ */ _global_for($global_c_key, 2, "a3"));
const $if = /*@__PURE__*/ _if(1, "<b> </b>", "D ", /* @__PURE__ */ _global_or(($scope) => _text($scope.a, $scope.$.a + $scope.$.c), /* @__PURE__ */ _global_if($global_a_key, 1, 0, "a0"), /* @__PURE__ */ _global_if($global_c_key, 1, 0, "a1")));
const $for = /*@__PURE__*/ _for_until_unkeyed(2, "<li> </li>", "D ", $for_content__setup);
const $open = _let(8, ($scope) => {
	$if($scope, $scope.i ? 0 : 1);
	$for($scope, [$scope.i ? 1 : 0]);
});
const $global_a__OR__$global_c = _global_script("a5", ($scope) => $scope.d.textContent = $scope.$.a + $scope.$.c, /* @__PURE__ */ _global_closure($global_a_key), /* @__PURE__ */ _global_closure($global_c_key));
const $global_o_x = /*@__PURE__*/ _global_closure(/* @__PURE__ */ _global_key("o", "x"));
const $global_o_x__script = _global_script("a8", ($scope) => {
	$scope.e.textContent = $scope.$.o.x;
	$scope.e.dataset.runs = String(+($scope.e.dataset.runs || 0) + 1);
}, $global_o_x);
const $global_cspNonce = /*@__PURE__*/ _global_closure(/* @__PURE__ */ _global_key("cspNonce"));
const $global_cspNonce__script = _global_script("a7", ($scope) => {
	$scope.f.textContent = $scope.$.cspNonce;
	$scope.f.dataset.runs = String(+($scope.f.dataset.runs || 0) + 1);
}, $global_cspNonce);
const $global_o_x__OR__$global_cspNonce = _global_script("a4", ($scope) => {
	$scope.h.textContent = $scope.$.cspNonce + $scope.$.o.x;
	$scope.h.dataset.runs = String(+($scope.h.dataset.runs || 0) + 1);
}, $global_o_x, $global_cspNonce);
const $setup__script = _script("a9", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.i);
}));
const $global2__script = _global_script("a6", ($scope) => {
	$scope.$;
	$scope.g.dataset.runs = String(+($scope.g.dataset.runs || 0) + 1);
}, /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key()));
