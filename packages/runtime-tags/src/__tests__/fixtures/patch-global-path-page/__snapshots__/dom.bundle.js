// template.marko
const $for_content__setup = /* @__PURE__ */ _fill_global_for("a1", 2, ($scope) => _text($scope.a, $scope.$.a + $scope.$.c), "a", "c");
const $if = /*@__PURE__*/ _if(1, "<b> </b>", "D ", /* @__PURE__ */ _fill_global_join("a0", ($scope) => _text($scope.a, $scope.$.a + $scope.$.c), "a", "c"));
const $for = /*@__PURE__*/ _for_until_unkeyed(2, "<li> </li>", "D ", $for_content__setup);
const $open = /*@__PURE__*/ _let(8, ($scope) => {
	$if($scope, $scope.i ? 0 : 1);
	$for($scope, [
		$scope.i ? 1 : 0,
		0,
		1
	]);
});
const $setup__$global_o_x = _fill_global_path_script("a2", ($scope) => {
	$scope.e.textContent = $scope.$.o.x;
	$scope.e.dataset.runs = String(+($scope.e.dataset.runs || 0) + 1);
}, "o", "x");
const $setup__$global_cspNonce = _fill_global_script("a3", ($scope) => {
	$scope.f.textContent = $scope.$.cspNonce;
	$scope.f.dataset.runs = String(+($scope.f.dataset.runs || 0) + 1);
}, "cspNonce");
const $setup__$global = _fill_global_script("a4", ($scope) => {
	$scope.$;
	$scope.g.dataset.runs = String(+($scope.g.dataset.runs || 0) + 1);
}, "");
const $setup__$global_a__OR__$global_c = _fill_global_script("a5", ($scope) => $scope.d.textContent = $scope.$.a + $scope.$.c, "a", "c");
const $setup__$global_o_x__OR__$global_cspNonce = _fill_global_path_script("a6", ($scope) => {
	$scope.h.textContent = $scope.$.cspNonce + $scope.$.o.x;
	$scope.h.dataset.runs = String(+($scope.h.dataset.runs || 0) + 1);
}, "o", "x", 0, "cspNonce");
const $setup__script = _script("a7", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.i);
}));
