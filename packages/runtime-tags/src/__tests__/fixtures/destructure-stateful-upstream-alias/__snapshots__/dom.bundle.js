// tags/store.marko
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

// template.marko
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $store = _var_resume("a0", ($scope, store) => {
	$list($scope, store.list);
	$clear($scope, store.clear);
});
const $for = /* @__PURE__ */ _for_of(3, "<li> </li>", "D l", 0, $for_content__$params);
const $list = ($scope, list) => $for($scope, [list]);
const $clear = /* @__PURE__ */ _const(6, _script("a1", ($scope) => _on($scope.c, "click", $scope.g)));
