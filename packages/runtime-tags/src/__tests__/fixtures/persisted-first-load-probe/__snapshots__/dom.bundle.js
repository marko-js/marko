// template.marko.persisted.mjs
_enable_catch();
const $qty = _var_resume("a12", /*@__PURE__*/ _let_persisted(9, ($scope) => {
	_attr_input_value($scope, "b", $scope.j, $valueChange($scope));
	_text($scope.d, $scope.j);
}));
const $setup__script = _script_shared(($scope) => {
	_attr_input_value_script($scope, "b");
	_on($scope.c, "click", function() {
		$qty($scope, $scope.j + 1);
	});
});
function $valueChange($scope) {
	return (_new_qty) => {
		$qty($scope, _new_qty);
	};
}
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content_holes($p, $l), "a3");
const $qty_seed = _update_signal("a12");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $await_content__update = ($patch, $live) => {
	if ("Aa" in $patch) $for_update($live, [$patch["Aa"], "M"]);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a4");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("j" in $patch) _update_seed($live, $qty_seed, $patch["j"]);
	$_holes($patch, $live);
	if ("Ae" in $patch) _update_branch($patch, $live, "e", $try_content__update, "a7", "a5");
};
const $noop_update = () => {};
_update_content("a5", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a5", "loading…", "b");
const $qty = /*@__PURE__*/ _let_persisted(9, ($scope) => {
	_attr_input_value($scope, "b", $scope.j, $valueChange($scope));
	_text($scope.d, $scope.j);
});
const $setup__script = _script_update("a8", ($scope) => {
	_attr_input_value_script($scope, "b");
	_on($scope.c, "click", function() {
		$qty($scope, $scope.j + 1);
	});
});
function $valueChange($scope) {
	return (_new_qty) => {
		$qty($scope, _new_qty);
	};
}
_resume("a0", $valueChange);
