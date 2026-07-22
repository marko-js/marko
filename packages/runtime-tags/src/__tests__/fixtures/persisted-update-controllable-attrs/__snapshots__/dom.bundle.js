// tags/item-form.marko.persisted.mjs
const $qty = _var_resume("b3", /*@__PURE__*/ _let_persisted(7, ($scope) => _attr_input_value($scope, "a", $scope.h, $valueChange($scope))));
const $setup__script = _script_shared(($scope) => {
	_attr_input_value_script($scope, "a");
	_on($scope.c, "click", function() {
		$qty($scope, $scope.h + 1);
	});
});
function $valueChange($scope) {
	return (_new_qty) => {
		$qty($scope, Number(_new_qty));
	};
}
const $qty_seed = _update_signal("b3");
const $_holes$1 = /*@__PURE__*/ _update_scopes({ "Nvalue:b": /*@__PURE__*/ _update_named_attr("b", "value") });
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $qty_seed, $patch["h"]);
	$_holes$1($patch, $live);
};
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $_holes = /*@__PURE__*/ _update_scopes({
	"Nvalue:a": /*@__PURE__*/ _update_controllable("a", _update_input_value),
	"Nvalue:b": /*@__PURE__*/ _update_controllable("b", _update_select_value)
});
const $update2 = ($patch, $live) => {
	$_holes($patch, $live);
	if ("c" in $patch) $merge$1($patch["c"], $live["c"]);
};
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/item-form.marko
const $qty = /*@__PURE__*/ _let_persisted(7, ($scope) => _attr_input_value($scope, "a", $scope.h, $valueChange($scope)));
const $setup__script = _script_update("b2", ($scope) => {
	_attr_input_value_script($scope, "a");
	_on($scope.c, "click", function() {
		$qty($scope, $scope.h + 1);
	});
});
function $valueChange($scope) {
	return (_new_qty) => {
		$qty($scope, Number(_new_qty));
	};
}
_resume("b0", $valueChange);
