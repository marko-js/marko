// template.marko
const $global_a_key = /*@__PURE__*/ _global_key(12, "a");
const $for_content__$global_a = /*@__PURE__*/ _global_for("a2", $global_a_key, 2);
const $global_c_key = /*@__PURE__*/ _global_key(13, "c");
const $for_content__setup = /* @__PURE__ */ _global_or(1, ($scope) => _text($scope.a, $scope.$.a + $scope.$.c), $for_content__$global_a, /* @__PURE__ */ _global_for("a3", $global_c_key, 2));
const $if = /*@__PURE__*/ _if(1, "<b> </b>", "D ", /* @__PURE__ */ _global_or(1, ($scope) => _text($scope.a, $scope.$.a + $scope.$.c), /* @__PURE__ */ _global_if("a0", $global_a_key, 1, 0), /* @__PURE__ */ _global_if("a1", $global_c_key, 1, 0)));
const $for = /*@__PURE__*/ _for_until_unkeyed(2, "<li> </li>", "D ", $for_content__setup);
const $open = _let(8, ($scope) => {
	$if($scope, $scope.i ? 0 : 1);
	$for($scope, [$scope.i ? 1 : 0]);
});
const $global_o_x = /*@__PURE__*/ _global_closure("a11", /* @__PURE__ */ _global_key(15, "o", "x"), ($scope) => $global_o_x__script($scope));
const $global_o_x__script = _global_script("a8", ($scope) => {
	$scope.e.textContent = $scope.$.o.x;
	$scope.e.dataset.runs = String(+($scope.e.dataset.runs || 0) + 1);
}, $global_o_x);
const $global_cspNonce = /*@__PURE__*/ _global_closure("a12", /* @__PURE__ */ _global_key(16, "cspNonce"), ($scope) => $global_cspNonce__script($scope));
const $global_cspNonce__script = _global_script("a7", ($scope) => {
	$scope.f.textContent = $scope.$.cspNonce;
	$scope.f.dataset.runs = String(+($scope.f.dataset.runs || 0) + 1);
}, $global_cspNonce);
const $global2 = /*@__PURE__*/ _global_closure("a13", /* @__PURE__ */ _global_key(11), ($scope) => $global2__script($scope));
const $global2__script = _global_script("a6", ($scope) => {
	$scope.$;
	$scope.g.dataset.runs = String(+($scope.g.dataset.runs || 0) + 1);
}, $global2);
const $global_a__OR__$global_c = /*@__PURE__*/ _global_or(9, ($scope) => $global_a__OR__$global_c__script($scope), /* @__PURE__ */ _global_closure("a14", $global_a_key), /* @__PURE__ */ _global_closure("a15", $global_c_key));
const $global_a__OR__$global_c__script = _global_script("a5", ($scope) => $scope.d.textContent = $scope.$.a + $scope.$.c, $global_a__OR__$global_c);
const $global_o_x__OR__$global_cspNonce = /*@__PURE__*/ _global_or(10, ($scope) => $global_o_x__OR__$global_cspNonce__script($scope), $global_o_x, $global_cspNonce);
const $global_o_x__OR__$global_cspNonce__script = _global_script("a4", ($scope) => {
	$scope.h.textContent = $scope.$.cspNonce + $scope.$.o.x;
	$scope.h.dataset.runs = String(+($scope.h.dataset.runs || 0) + 1);
}, $global_o_x__OR__$global_cspNonce);
const $setup__script = _script("a9", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.i);
}));
