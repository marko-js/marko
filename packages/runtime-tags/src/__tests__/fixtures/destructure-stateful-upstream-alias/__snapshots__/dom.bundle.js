// tags/store.marko
const $list = /*@__PURE__*/ _let(3, ($scope) => _return($scope, {
	list: $scope.d,
	listChange: $_return($scope),
	clear: $_return2($scope)
}));
const $_return2 = ($scope) => function() {
	$list($scope, []);
};
const $_return = ($scope) => function(v) {
	$list($scope, v);
};
_resumed.b1 = $_return2;
_resumed.b0 = $_return;

// template.marko
const $for_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $store = _var_resume("a0", ($scope, store) => {
	$for($scope, [store.list]);
	$clear($scope, store.clear);
});
const $for = /*@__PURE__*/ _for_of_unkeyed(3, "<li> </li>", "D ", 0, $for_content__$params);
const $clear__script = _script("a1", ($scope) => _on($scope.c, "click", $scope.g));
const $clear = /*@__PURE__*/ _const(6, $clear__script);
