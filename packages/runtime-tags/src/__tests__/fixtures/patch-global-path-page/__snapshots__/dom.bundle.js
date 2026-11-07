// template.marko
const $for_content__$global_a__OR__$global_c = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope.$.a + $scope.$.c));
const $for_content__$global_a = /*@__PURE__*/ _for_closure_patch("a14", 2, $for_content__$global_a__OR__$global_c, 11);
const $for_content__setup = ($scope) => {
	$for_content__$global_a._($scope);
	$for_content__$global_c._($scope);
};
const $for_content__$global_c = /*@__PURE__*/ _for_closure_patch("a15", 2, $for_content__$global_a__OR__$global_c, 12);
const $if_content__$global_a__OR__$global_c = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope.$.a + $scope.$.c));
const $if_content__$global_a = /*@__PURE__*/ _if_closure_patch("a16", 1, 0, $if_content__$global_a__OR__$global_c);
const $if_content__setup = ($scope) => {
	$if_content__$global_a._($scope);
	$if_content__$global_c._($scope);
};
const $if_content__$global_c = /*@__PURE__*/ _if_closure_patch("a17", 1, 0, $if_content__$global_a__OR__$global_c);
const $if = /*@__PURE__*/ _if(1, "<b> </b>", "D ", $if_content__setup);
const $for = /*@__PURE__*/ _for_until_unkeyed(2, "<li> </li>", "D ", $for_content__setup);
const $open = _let(8, ($scope) => {
	$if($scope, $scope.i ? 0 : 1);
	$for($scope, [$scope.i ? 1 : 0]);
});
const $global_o_x__OR__$global_cspNonce__script = _script("a5", ($scope) => {
	$scope.h.textContent = $scope.$.cspNonce + $scope.$.o.x;
	$scope.h.dataset.runs = String(+($scope.h.dataset.runs || 0) + 1);
});
const $global_o_x__OR__$global_cspNonce = /*@__PURE__*/ _or_patch("a12", 10, $global_o_x__OR__$global_cspNonce__script);
const $global_o_x__script = _script("a9", ($scope) => {
	$scope.e.textContent = $scope.$.o.x;
	$scope.e.dataset.runs = String(+($scope.e.dataset.runs || 0) + 1);
});
const $global_o_x = _fill_global_path("a3", ($scope) => {
	$global_o_x__OR__$global_cspNonce($scope);
	$global_o_x__script($scope);
}, "o", "x");
const $global_cspNonce__script = _script("a8", ($scope) => {
	$scope.f.textContent = $scope.$.cspNonce;
	$scope.f.dataset.runs = String(+($scope.f.dataset.runs || 0) + 1);
});
const $global_cspNonce = _fill_global("a4", ($scope) => {
	$global_o_x__OR__$global_cspNonce($scope);
	$global_cspNonce__script($scope);
}, "cspNonce");
const $global2__script = _script("a7", ($scope) => {
	$scope.$;
	$scope.g.dataset.runs = String(+($scope.g.dataset.runs || 0) + 1);
});
const $global2 = _fill_global("a0", $global2__script, "");
const $global_a__OR__$global_c__script = _script("a6", ($scope) => $scope.d.textContent = $scope.$.a + $scope.$.c);
const $global_a__OR__$global_c = /*@__PURE__*/ _or_patch("a11", 9, $global_a__OR__$global_c__script);
const $global_a = _fill_global("a1", ($scope) => {
	$global_a__OR__$global_c($scope);
	$if_content__$global_a($scope);
	$for_content__$global_a($scope);
}, "a");
const $global_c = _fill_global("a2", ($scope) => {
	$global_a__OR__$global_c($scope);
	$if_content__$global_c($scope);
	$for_content__$global_c($scope);
}, "c");
const $setup__script = _script("a10", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.i);
}));
