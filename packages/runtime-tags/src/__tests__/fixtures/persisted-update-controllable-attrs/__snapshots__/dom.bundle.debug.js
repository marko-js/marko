// tags/item-form.marko.persisted.mjs
const $template$1 = "<form><input type=number class=qty><input type=hidden name=itemId><button class=add>add</button></form>";
const $walks$1 = "D b b l";
const $itemId = ($scope, itemId) => _attr($scope["#input/1"], "value", itemId);
const $input_id = ($scope, input_id) => {
	if (!updating) $itemId($scope, input_id);
};
const $qty = _var_resume("__tests__/tags/item-form.marko_0_qty/var", /*@__PURE__*/ _let_persisted("qty/7", ($scope) => _attr_input_value($scope, "#input/0", $scope.qty, $valueChange($scope))));
const $setup__script = _script_shared(($scope) => {
	_attr_input_value_script($scope, "#input/0");
	_on($scope["#button/2"], "click", function() {
		$qty($scope, $scope.qty + 1);
	});
});
function $setup$1($scope) {
	$qty($scope, 1);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_id($scope, input.id);
function $valueChange($scope) {
	return (_new_qty) => {
		$qty($scope, Number(_new_qty));
	};
}
var item_form_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/item-form.marko", $template$1, $walks$1, $setup$1, $input);
const $qty_seed = _update_signal("__tests__/tags/item-form.marko_0_qty/var");
const $_holes$1 = /*@__PURE__*/ _update_scopes({ "PatchAttr:value:#input/1": /*@__PURE__*/ _update_named_attr("#input/1", "value") });
const $update2$1 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("qty" in _patch) _update_seed(_live, $qty_seed, _patch["qty"]);
	$_holes$1(_patch, _live);
};
const _merge$1 = _resume("__tests__/tags/item-form.marko_0_update", $update2$1);
_update_content("__tests__/tags/item-form.marko", _merge$1);
function _patch2$1() {
	return patch(_merge$1);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<input class=title><select class=category><option value=odd>odd</option><option value=even>even</option></select>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b b/${_w0}&`)($walks$1);
const $pattern2 = ($scope, $pattern) => $id($scope, $pattern[0]);
const $item = ($scope, item) => {
	$item_title($scope, item?.title);
	$item_category($scope, item?.category);
	$item_id($scope, item?.id);
};
const $id = ($scope, id) => {
	if (!updating) $item($scope, getItem(id));
};
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	if (!updating) $pattern2($scope, $scope.$global.item);
}
const $item_title = /*@__PURE__*/ _const_persisted("item_title", ($scope) => _attr_input_value_default($scope, "#input/0", $scope.item_title));
const $item_category = /*@__PURE__*/ _const_persisted("item_category", ($scope) => _attr_select_value_default($scope, "#select/1", $scope.item_category));
const $item_id = ($scope, item_id) => $input_id($scope["#childScope/2"], item_id);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $_holes = /*@__PURE__*/ _update_scopes({
	"PatchAttr:value:#input/0": /*@__PURE__*/ _update_controllable("#input/0", _attr_input_value_default),
	"PatchAttr:value:#select/1": /*@__PURE__*/ _update_controllable("#select/1", _attr_select_value_default)
});
const $update2 = (_patch, _live) => {
	$_holes(_patch, _live);
	if ("#childScope/2" in _patch) _merge$1(_patch["#childScope/2"], _live["#childScope/2"]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2() {
	return patch(_merge);
}

// data.js
function getItem(id) {
	if (typeof window !== "undefined") {
		throw new Error("getItem is server-only");
	}
	return {
		id,
		title: `Item ${id}`,
		category: id % 2 ? "odd" : "even"
	};
}

// tags/item-form.marko
const $template$1 = "<form><input type=number class=qty><input type=hidden name=itemId><button class=add>add</button></form>";
const $walks$1 = "D b b l";
const $itemId = ($scope, itemId) => _attr($scope["#input/1"], "value", itemId);
const $input_id = ($scope, input_id) => {
	if (!updating) $itemId($scope, input_id);
};
const $qty = /*@__PURE__*/ _let_persisted("qty/7", ($scope) => _attr_input_value($scope, "#input/0", $scope.qty, $valueChange($scope)));
const $setup__script = _script_update("__tests__/tags/item-form.marko_0", ($scope) => {
	_attr_input_value_script($scope, "#input/0");
	_on($scope["#button/2"], "click", function() {
		$qty($scope, $scope.qty + 1);
	});
});
function $setup$1($scope) {
	$qty($scope, 1);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_id($scope, input.id);
function $valueChange($scope) {
	return (_new_qty) => {
		$qty($scope, Number(_new_qty));
	};
}
_resume("__tests__/tags/item-form.marko_0/valueChange", $valueChange);
enableBranchesPersisted();
var item_form_default = /*@__PURE__*/ _template("__tests__/tags/item-form.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<input class=title><select class=category><option value=odd>odd</option><option value=even>even</option></select>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b b/${_w0}&`)($walks$1);
const $pattern2 = ($scope, $pattern) => $id($scope, $pattern[0]);
const $item = ($scope, item) => {
	$item_title($scope, item?.title);
	$item_category($scope, item?.category);
	$item_id($scope, item?.id);
};
const $id = ($scope, id) => {
	if (!updating) $item($scope, getItem(id));
};
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	if (!updating) $pattern2($scope, $scope.$global.item);
}
const $item_title = /*@__PURE__*/ _const_persisted("item_title", ($scope) => _attr_input_value_default($scope, "#input/0", $scope.item_title));
const $item_category = /*@__PURE__*/ _const_persisted("item_category", ($scope) => _attr_select_value_default($scope, "#select/1", $scope.item_category));
const $item_id = ($scope, item_id) => $input_id($scope["#childScope/2"], item_id);
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
