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
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("h" in patch) _update_seed(live, $qty_seed, patch["h"]);
	_update_scope(patch, live);
};
var item_form_marko_update_default = _resume("b3", $update$1);

// template.marko.update.mjs
const $update = (patch, live) => {
	_update_scope(patch, live);
	if ("c" in patch) item_form_marko_update_default(patch["c"], live["c"]);
};
var template_marko_update_default = _resume("a0", $update);
