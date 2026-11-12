// template.marko
const $global_a_key = /*@__PURE__*/ _global_key(12, "a");
const $for_content__$global_a = /*@__PURE__*/ _global_for("a2", $global_a_key, 2);
const $global_c_key = /*@__PURE__*/ _global_key(13, "c");
const $for_content__$global_c = /*@__PURE__*/ _global_for("a3", $global_c_key, 2);
const $for_content__$global_a__OR__$global_c = /*@__PURE__*/ _global_or(1, ($scope) => _text($scope.a, $scope.$.a + $scope.$.c), $for_content__$global_a, $for_content__$global_c);
const $for_content__setup = ($scope) => {
	$for_content__$global_a($scope);
	$for_content__$global_c($scope);
	$for_content__$global_a__OR__$global_c($scope);
};
const $if_content__$global_a = /*@__PURE__*/ _global_if("a0", $global_a_key, 1, 0);
const $if_content__$global_c = /*@__PURE__*/ _global_if("a1", $global_c_key, 1, 0);
const $if_content__$global_a__OR__$global_c = /*@__PURE__*/ _global_or(1, ($scope) => _text($scope.a, $scope.$.a + $scope.$.c), $if_content__$global_a, $if_content__$global_c);
const $if_content__setup = ($scope) => {
	$if_content__$global_a($scope);
	$if_content__$global_c($scope);
	$if_content__$global_a__OR__$global_c($scope);
};
const $if = /*@__PURE__*/ _if(1, "<b> </b>", "D ", $if_content__setup);
const $for = /*@__PURE__*/ _for_until_unkeyed(2, "<li> </li>", "D ", $for_content__setup);
const $open = _let(8, ($scope) => {
	$if($scope, $scope.i ? 0 : 1);
	$for($scope, [$scope.i ? 1 : 0]);
});
const $global_o_x_key = /*@__PURE__*/ _global_key(15, "o", "x");
const $global_o_x__script = _script("a8", ($scope) => {
	$global_o_x.r($scope);
	$scope.e.textContent = $scope.$.o.x;
	$scope.e.dataset.runs = String(+($scope.e.dataset.runs || 0) + 1);
});
const $global_o_x = /*@__PURE__*/ _global_closure("a11", $global_o_x_key, $global_o_x__script);
const $global_cspNonce_key = /*@__PURE__*/ _global_key(16, "cspNonce");
const $global_cspNonce__script = _script("a7", ($scope) => {
	$global_cspNonce.r($scope);
	$scope.f.textContent = $scope.$.cspNonce;
	$scope.f.dataset.runs = String(+($scope.f.dataset.runs || 0) + 1);
});
const $global_cspNonce = /*@__PURE__*/ _global_closure("a12", $global_cspNonce_key, $global_cspNonce__script);
const $global_key = /*@__PURE__*/ _global_key(11);
const $global2__script = _script("a6", ($scope) => {
	$global2.r($scope);
	$scope.$;
	$scope.g.dataset.runs = String(+($scope.g.dataset.runs || 0) + 1);
});
const $global2 = /*@__PURE__*/ _global_closure("a13", $global_key, $global2__script);
const $global_a = /*@__PURE__*/ _global_closure("a14", $global_a_key);
const $global_c = /*@__PURE__*/ _global_closure("a15", $global_c_key);
const $global_a__OR__$global_c__script = _script("a5", ($scope) => {
	$global_a__OR__$global_c.r($scope);
	$scope.d.textContent = $scope.$.a + $scope.$.c;
});
const $global_a__OR__$global_c = /*@__PURE__*/ _global_or(9, $global_a__OR__$global_c__script, $global_a, $global_c);
const $global_o_x__OR__$global_cspNonce__script = _script("a4", ($scope) => {
	$global_o_x__OR__$global_cspNonce.r($scope);
	$scope.h.textContent = $scope.$.cspNonce + $scope.$.o.x;
	$scope.h.dataset.runs = String(+($scope.h.dataset.runs || 0) + 1);
});
const $global_o_x__OR__$global_cspNonce = /*@__PURE__*/ _global_or(10, $global_o_x__OR__$global_cspNonce__script, $global_o_x, $global_cspNonce);
const $setup__script = _script("a9", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.i);
}));
