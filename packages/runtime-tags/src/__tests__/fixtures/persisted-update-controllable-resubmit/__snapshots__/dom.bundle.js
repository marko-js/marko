// tags/order-form.marko.persisted.mjs
const $itemId = _var_resume("b3", /*@__PURE__*/ _const_persisted(8, ($scope) => _attr($scope.c, "value", $scope.i)));
const $qty = _var_resume("b4", /*@__PURE__*/ _let_persisted(9, ($scope) => {
	_attr_input_value($scope, "b", $scope.j, $valueChange($scope));
	_text($scope.d, $scope.j);
}));
const $lastSubmit = _var_resume("b5", /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.e, $scope.k)));
const $setup__script = _script_shared(($scope) => {
	_on($scope.a, "submit", function(e) {
		e.preventDefault();
		$lastSubmit($scope, `${$scope.i} x ${$scope.j}`);
	});
	_attr_input_value_script($scope, "b");
});
function $valueChange($scope) {
	return (_new_qty) => {
		$qty($scope, Number(_new_qty));
	};
}
const $qty_seed = _update_signal("b4");
const $lastSubmit_seed = _update_signal("b5");
const $itemId_update = _update_signal("b3");
const $construct$1 = ($scope) => {
	_attr_input_value($scope, "b", $scope.j, $scope["Eb"]);
	_attr($scope.c, "value", $scope.i);
	_text($scope.d, $scope.j);
	_text($scope.e, $scope.k);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("j" in $patch) _update_seed($live, $qty_seed, $patch["j"]);
	if ("k" in $patch) _update_seed($live, $lastSubmit_seed, $patch["k"]);
	if ("i" in $patch) $itemId_update($live, $patch["i"]);
};
_construct("b1", $construct$1);
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1, $construct$1);

// template.marko.persisted.mjs
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $construct = ($scope) => {
	_construct_child($scope, "b", "b1");
};
const $update2 = ($patch, $live) => {
	$_holes($patch, $live);
	if ("b" in $patch) $merge$1($patch["b"], $live["b"]);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/order-form.marko
const $qty = /*@__PURE__*/ _let_persisted(9, ($scope) => {
	_attr_input_value($scope, "b", $scope.j, $valueChange($scope));
	_text($scope.d, $scope.j);
});
const $lastSubmit = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.e, $scope.k));
const $setup__script = _script_update("b2", ($scope) => {
	_on($scope.a, "submit", function(e) {
		e.preventDefault();
		$lastSubmit($scope, `${$scope.i} x ${$scope.j}`);
	});
	_attr_input_value_script($scope, "b");
});
function $valueChange($scope) {
	return (_new_qty) => {
		$qty($scope, Number(_new_qty));
	};
}
_resume("b0", $valueChange);
