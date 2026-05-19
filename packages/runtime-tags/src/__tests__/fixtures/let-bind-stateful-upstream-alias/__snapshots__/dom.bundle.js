// total: 7262 (min) 3348 (brotli)
// tags/store.marko: 182 (min) 112 (brotli)
const $list$1 = /* @__PURE__ */ _let(3, ($scope) => _return($scope, {
	list: $scope.d,
	listChange: $_return($scope),
	clear: $_return2($scope)
}));
function $_return2($scope) {
	return function() {
		$list$1($scope, []);
	};
}
function $_return($scope) {
	return function(v) {
		$list$1($scope, v);
	};
}
_resume("b1", $_return2);
_resume("b0", $_return);

// template.marko: 293 (min) 199 (brotli)
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $store = _var_resume("a0", ($scope, store) => {
	$store_list($scope, store?.list);
	$store_listChange($scope, store?.listChange);
	$store_clear($scope, store?.clear);
});
const $for = /* @__PURE__ */ _for_of(3, "<li> </li>", "D l", 0, $for_content__$params);
const $list = /* @__PURE__ */ _let(9, ($scope) => $for($scope, [$scope.j]));
const $store_list__OR__store_listChange = /* @__PURE__ */ _or(7, ($scope) => $list($scope, $scope.f, $scope.g), 1, 1);
const $store_list = /* @__PURE__ */ _const(5, $store_list__OR__store_listChange);
const $store_listChange = /* @__PURE__ */ _const(6, $store_list__OR__store_listChange);
const $store_clear = /* @__PURE__ */ _const(8, _script("a1", ($scope) => _on($scope.c, "click", $scope.i)));
