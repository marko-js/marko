// tags/item-form.marko.persisted.mjs
const $template$1 = "<form><input type=number class=qty><input type=hidden name=itemId><button class=add>add</button></form>";
const $walks$1 = "D b b l";
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
_static_shells({
	"b1": [$template$1, $walks$1],
	"b": [$template$1, $walks$1]
});
const $qty_seed = _update_signal("b3");
const $_holes$1 = /*@__PURE__*/ _update_scopes({ "Nvalue:b": /*@__PURE__*/ _update_named_attr("b", "value") });
const $construct$1 = ($scope) => {
	_attr_input_value($scope, "a", $scope.h, $scope["Ea"]);
	_construct_effect($scope, $setup__script);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $qty_seed, $patch["h"]);
	$_holes$1($patch, $live);
};
_construct("b1", $construct$1);
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1, $construct$1);

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<input class=title><select class=category><option value=odd>odd</option><option value=even>even</option></select>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b b/${_w0}&%b`)($walks$1);
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $_holes = /*@__PURE__*/ _update_scopes({
	"Nvalue:a": /*@__PURE__*/ _update_controllable("a", _update_input_value),
	"Nvalue:b": /*@__PURE__*/ _update_controllable("b", _update_select_value)
});
const $construct = ($scope) => {
	_construct_child($scope, "c", "b1");
};
const $update2 = ($patch, $live) => {
	$_holes($patch, $live);
	if ("c" in $patch) $merge$1($patch["c"], $live["c"]);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
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
