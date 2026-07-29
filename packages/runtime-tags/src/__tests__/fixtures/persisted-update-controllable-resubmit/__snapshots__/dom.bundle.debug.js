// tags/order-form.marko.persisted.mjs
const $template$1 = "<form class=order><input type=number class=qty><input type=hidden name=itemId class=item><button class=buy>buy</button></form><p class=mirror>adding <!> to cart</p><output class=last> </output>";
const $walks$1 = " D b lDb%lD l";
const $itemId = _var_resume("__tests__/tags/order-form.marko_0_itemId/var", /*@__PURE__*/ _const_persisted("itemId", ($scope) => _attr($scope["#input/2"], "value", $scope.itemId)));
const $input_id$1 = ($scope, input_id) => {
	if (!updating) $itemId($scope, input_id);
};
const $qty = _var_resume("__tests__/tags/order-form.marko_0_qty/var", /*@__PURE__*/ _let_persisted("qty/9", ($scope) => {
	_attr_input_value($scope, "#input/1", $scope.qty, $valueChange($scope));
	_text($scope["#text/3"], $scope.qty);
}));
const $lastSubmit = _var_resume("__tests__/tags/order-form.marko_0_lastSubmit/var", /*@__PURE__*/ _let_persisted("lastSubmit/10", ($scope) => _text($scope["#text/4"], $scope.lastSubmit)));
const $setup__script = _script_shared(($scope) => {
	_on($scope["#form/0"], "submit", function(e) {
		e.preventDefault();
		$lastSubmit($scope, `${$scope.itemId} x ${$scope.qty}`);
	});
	_attr_input_value_script($scope, "#input/1");
});
function $setup$1($scope) {
	$qty($scope, 1);
	$lastSubmit($scope, "none");
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_id$1($scope, input.id);
function $valueChange($scope) {
	return (_new_qty) => {
		$qty($scope, Number(_new_qty));
	};
}
var order_form_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/order-form.marko", $template$1, $walks$1, $setup$1, $input$1);
_static_shells({
	"__tests__/tags/order-form.marko_0_update": [$template$1, $walks$1],
	"__tests__/tags/order-form.marko": [$template$1, $walks$1]
});
const $qty_seed = _update_signal("__tests__/tags/order-form.marko_0_qty/var");
const $lastSubmit_seed = _update_signal("__tests__/tags/order-form.marko_0_lastSubmit/var");
const $itemId_update = _update_signal("__tests__/tags/order-form.marko_0_itemId/var");
const $construct$1 = ($scope) => {
	_attr_input_value($scope, "#input/1", $scope.qty, $scope["ControlledHandler:#input/1"]);
	_attr($scope["#input/2"], "value", $scope.itemId);
	_text($scope["#text/3"], $scope.qty);
	_text($scope["#text/4"], $scope.lastSubmit);
	_construct_effect($scope, $setup__script);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("qty" in $patch) _update_seed($live, $qty_seed, $patch["qty"]);
	if ("lastSubmit" in $patch) _update_seed($live, $lastSubmit_seed, $patch["lastSubmit"]);
	if ("itemId" in $patch) $itemId_update($live, $patch["itemId"]);
};
_construct("__tests__/tags/order-form.marko_0_update", $construct$1);
const $merge$1 = _resume("__tests__/tags/order-form.marko_0_update", $update2$1);
_update_content("__tests__/tags/order-form.marko", $merge$1, $construct$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<h1 class=name> </h1>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D l/${_w0}&%b`)($walks$1);
const $input_name = ($scope, input_name) => _text($scope["#text/0"], input_name);
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
}
const $input_id = ($scope, input_id) => $input_id$1($scope["#childScope/1"], input_id);
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_id($scope, input.id);
};
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $construct = ($scope) => {
	_construct_child($scope, "#childScope/1", "__tests__/tags/order-form.marko_0_update");
};
const $update2 = ($patch, $live) => {
	$_holes($patch, $live);
	if ("#childScope/1" in $patch) $merge$1($patch["#childScope/1"], $live["#childScope/1"]);
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/order-form.marko
const $template$1 = "<form class=order><input type=number class=qty><input type=hidden name=itemId class=item><button class=buy>buy</button></form><p class=mirror>adding <!> to cart</p><output class=last> </output>";
const $walks$1 = " D b lDb%lD l";
const $itemId = /*@__PURE__*/ _const_persisted("itemId", ($scope) => _attr($scope["#input/2"], "value", $scope.itemId));
const $input_id$1 = ($scope, input_id) => {
	if (!updating) $itemId($scope, input_id);
};
const $qty = /*@__PURE__*/ _let_persisted("qty/9", ($scope) => {
	_attr_input_value($scope, "#input/1", $scope.qty, $valueChange($scope));
	_text($scope["#text/3"], $scope.qty);
});
const $lastSubmit = /*@__PURE__*/ _let_persisted("lastSubmit/10", ($scope) => _text($scope["#text/4"], $scope.lastSubmit));
const $setup__script = _script_update("__tests__/tags/order-form.marko_0", ($scope) => {
	_on($scope["#form/0"], "submit", function(e) {
		e.preventDefault();
		$lastSubmit($scope, `${$scope.itemId} x ${$scope.qty}`);
	});
	_attr_input_value_script($scope, "#input/1");
});
function $setup$1($scope) {
	$qty($scope, 1);
	$lastSubmit($scope, "none");
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_id$1($scope, input.id);
function $valueChange($scope) {
	return (_new_qty) => {
		$qty($scope, Number(_new_qty));
	};
}
_resume("__tests__/tags/order-form.marko_0/valueChange", $valueChange);
var order_form_default = /*@__PURE__*/ _template("__tests__/tags/order-form.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<h1 class=name> </h1>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D l/${_w0}&%b`)($walks$1);
const $input_name = ($scope, input_name) => _text($scope["#text/0"], input_name);
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
}
const $input_id = ($scope, input_id) => $input_id$1($scope["#childScope/1"], input_id);
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_id($scope, input.id);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
