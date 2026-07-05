// tags/item-form.marko.update.mjs
const $qty_seed = _update_signal("__tests__/tags/item-form.marko_0_qty/var");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("qty" in patch) _update_seed(live, $qty_seed, patch["qty"]);
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_id" in patch) live["input_id"] = patch["input_id"];
	if ("itemId" in patch) live["itemId"] = patch["itemId"];
	if ("UpdateAttr:value:#input/1" in patch) _attr_input_value_default(live, "#input/1", patch["UpdateAttr:value:#input/1"]);
};
var item_form_marko_update_default = _resume("__tests__/tags/item-form.marko_0_update", $update$1);

// template.marko.update.mjs
const $update = (patch, live) => {
	if ("$pattern" in patch) live["$pattern"] = patch["$pattern"];
	if ("id" in patch) live["id"] = patch["id"];
	if ("item" in patch) live["item"] = patch["item"];
	if ("item_title" in patch) live["item_title"] = patch["item_title"];
	if ("item_category" in patch) live["item_category"] = patch["item_category"];
	if ("item_id" in patch) live["item_id"] = patch["item_id"];
	if ("UpdateAttr:value:#input/0" in patch) _attr_input_value_default(live, "#input/0", patch["UpdateAttr:value:#input/0"]);
	if ("UpdateAttr:value:#select/1" in patch) _attr_select_value_default(live, "#select/1", patch["UpdateAttr:value:#select/1"]);
	if ("#childScope/2" in patch) item_form_marko_update_default(patch["#childScope/2"], live["#childScope/2"]);
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

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
const $itemId = /* @__PURE__ */ _const("itemId", ($scope) => _attr_input_value_default($scope, "#input/1", $scope.itemId));
const $input_id = ($scope, input_id) => {
	if (!_updating()) $itemId($scope, input_id);
};
const $qty = /* @__PURE__ */ _let("qty/7", ($scope) => _attr_input_value($scope, "#input/0", $scope.qty, $valueChange($scope)));
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
enableBranches();
var item_form_default = /* @__PURE__ */ _template("__tests__/tags/item-form.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<input class=title><select class=category><option value=odd>odd</option><option value=even>even</option></select>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` b b/${_w0}&`)($walks$1);
const $pattern2 = ($scope, $pattern) => $id($scope, $pattern[0]);
const $item = ($scope, item) => {
	$item_title($scope, item?.title);
	$item_category($scope, item?.category);
	$item_id($scope, item?.id);
};
const $id = ($scope, id) => {
	if (!_updating()) $item($scope, getItem(id));
};
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	if (!_updating()) $pattern2($scope, $scope.$global.item);
}
const $item_title = /* @__PURE__ */ _const("item_title", ($scope) => _attr_input_value_default($scope, "#input/0", $scope.item_title));
const $item_category = /* @__PURE__ */ _const("item_category", ($scope) => _attr_select_value_default($scope, "#select/1", $scope.item_category));
const $item_id = ($scope, item_id) => $input_id($scope["#childScope/2"], item_id);
enableBranches();
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
