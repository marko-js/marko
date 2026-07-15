// tags/item-form.marko
const $qty = /*@__PURE__*/ _let_persisted(7, ($scope) => _attr_input_value($scope, "a", $scope.h, $valueChange($scope)));
const $setup__script = _script_update("b1", ($scope) => {
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
enableBranchesPersisted();

// template.marko
enableBranchesPersisted();

// tags/item-form.marko.update.mjs
const $qty_seed = _update_signal("b2");
const $update$1 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("h" in _patch) _update_seed(_live, $qty_seed, _patch["h"]);
	_update_scope(_patch, _live);
};
const _merge$1 = _resume("b3", $update$1);
_update_content("b", _merge$1);

// template.marko.update.mjs
const $update = (_patch, _live) => {
	_update_scope(_patch, _live);
	if ("c" in _patch) _merge$1(_patch["c"], _live["c"]);
};
const _merge = _resume("a0", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
