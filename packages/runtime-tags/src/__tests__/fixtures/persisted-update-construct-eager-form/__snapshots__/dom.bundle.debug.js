// tags/shared-list.marko.persisted.mjs
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = () => {};
const $value = _var_resume("__tests__/tags/shared-list.marko_0_value/var", /*@__PURE__*/ _let_persisted("value/3", ($scope) => _return($scope, $scope.value)));
const $input_name__script = _script_shared(($scope) => {
	{
		const subs = subsByKey[$scope.input_name] ??= new Set();
		const sub = () => $value($scope, $scope.$global.data[$scope.input_name]);
		$signal($scope, 0).onabort = () => subs.delete(sub);
		subs.add(sub);
	}
});
const $input_name = _var_resume("__tests__/tags/shared-list.marko_0_input_name/var", /*@__PURE__*/ _const_persisted("input_name", ($scope) => {
	$signalReset($scope, 0);
	_return_change($scope, $valueChange$1($scope));
	$value($scope, $scope.$global.data[$scope.input_name]);
	$input_name__script($scope);
}));
const $input$2 = ($scope, input) => $input_name($scope, input.name);
function $valueChange$1($scope) {
	return function(next) {
		$scope.$global.data[$scope.input_name] = next;
		subsByKey[$scope.input_name]?.forEach((cb) => cb());
	};
}
var shared_list_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/shared-list.marko", "", "", $setup$2, $input$2);
const $value_seed = _update_signal("__tests__/tags/shared-list.marko_0_value/var");
const $input_name_update = _update_signal("__tests__/tags/shared-list.marko_0_input_name/var");
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("value" in $patch) _update_seed($live, $value_seed, $patch["value"]);
	if ("input_name" in $patch) $input_name_update($live, $patch["input_name"]);
};
const $merge$2 = _resume("__tests__/tags/shared-list.marko_0_update", $update2$2);
_update_content("__tests__/tags/shared-list.marko", $merge$2);
function $patch2$2($fail) {
	return patch($merge$2, $fail);
}

// tags/add-form.marko.persisted.mjs
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<button class=watch> </button><form class=add><input type=hidden name=productId class=pid><input type=number name=quantity min=1 class=qty><button type=button class=plus>+</button></form>`)("");
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}& D l D b b l`)("");
const $cart = _var_resume("__tests__/tags/add-form.marko_0_cart/var", /*@__PURE__*/ _const_persisted("cart"));
const $watched = _var_resume("__tests__/tags/add-form.marko_0_watched/var", /*@__PURE__*/ _let_persisted("watched/13", ($scope) => _text($scope["#text/3"], $scope.watched ? "watching" : "watch")));
const $quantity = _var_resume("__tests__/tags/add-form.marko_0_quantity/var", /*@__PURE__*/ _let_persisted("quantity/14", ($scope) => _attr_input_value($scope, "#input/6", $scope.quantity, $valueChange($scope))));
const $setup__script$1 = _script_shared(($scope) => {
	_on($scope["#button/2"], "click", function() {
		$watched($scope, !$scope.watched);
	});
	_on($scope["#form/4"], "submit", function() {
		const i = $scope.cart.findIndex((item) => item.productId === $scope.productId);
		const prev = i !== -1 && $scope.cart[i];
		const item = {
			productId: $scope.productId,
			quantity: (prev ? prev.quantity : 0) + $scope.quantity
		};
		_var_change($scope["#childScope/0"], prev ? $scope.cart.with(i, item) : [...$scope.cart, item], "cart");
	});
	_attr_input_value_script($scope, "#input/6");
	_on($scope["#button/7"], "click", function() {
		$quantity($scope, $scope.quantity + 1);
	});
});
function $setup$1($scope) {
	_var($scope, "#childScope/0", $cart);
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
	$input_name($scope["#childScope/0"], "cart");
	$watched($scope, false);
	$quantity($scope, 1);
	$setup__script$1($scope);
}
const $productId = _var_resume("__tests__/tags/add-form.marko_0_productId/var", /*@__PURE__*/ _const_persisted("productId", ($scope) => _attr($scope["#input/5"], "value", $scope.productId)));
const $input_productId$1 = ($scope, input_productId) => {
	if (!updating) $productId($scope, input_productId);
};
const $input$1 = ($scope, input) => $input_productId$1($scope, input.productId);
function $valueChange($scope) {
	return (_new_quantity) => {
		$quantity($scope, Number(_new_quantity));
	};
}
var add_form_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/add-form.marko", $template$1, $walks$1, $setup$1, $input$1);
const $watched_seed = _update_signal("__tests__/tags/add-form.marko_0_watched/var");
const $quantity_seed = _update_signal("__tests__/tags/add-form.marko_0_quantity/var");
const $productId_update = _update_signal("__tests__/tags/add-form.marko_0_productId/var");
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("watched" in $patch) _update_seed($live, $watched_seed, $patch["watched"]);
	if ("quantity" in $patch) _update_seed($live, $quantity_seed, $patch["quantity"]);
	if ("productId" in $patch) $productId_update($live, $patch["productId"]);
	if ("#childScope/0" in $patch) $merge$2($patch["#childScope/0"], $live["#childScope/0"]);
};
const $merge$1 = _resume("__tests__/tags/add-form.marko_0_update", $update2$1);
_update_content("__tests__/tags/add-form.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p class=home>welcome home</p>", "b");
const $Item_content__product = ($scope, product) => {
	$Item_content__product_title($scope, product?.title);
	$Item_content__product_id($scope, product?.id);
};
const $Item_content__input_productId = /*@__PURE__*/ _closure_get("input_productId", ($scope) => {
	if (!updating) {
		$Item_content__product($scope, getServerProduct?.($scope._.input_productId));
	}
});
const $Item_content__setup = ($scope) => {
	if (!updating) $Item_content__input_productId($scope);
	$setup$1($scope["#childScope/1"]);
};
const $Item_content__product_title = ($scope, product_title) => _text($scope["#text/0"], product_title);
const $Item_content__product_id = ($scope, product_id) => $input_productId$1($scope["#childScope/1"], product_id);
const $Item_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", /*@__PURE__*/ ((_w0) => `<section class=item><h2 class=title> </h2>${_w0}</section>`)($template$1), /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)($walks$1), $Item_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Home__OR__Item = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.$global.view === "item" ? $scope.Item : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Item);
const $Item = /*@__PURE__*/ _const_persisted("Item", $Home__OR__Item);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Item($scope, { content: $Item_content($scope) });
	$setup__script($scope);
}
const $input = ($scope, input) => $input_productId($scope, input.productId);
const $input_productId__closure = /*@__PURE__*/ _closure($Item_content__input_productId);
const $input_productId = /*@__PURE__*/ _const_persisted("input_productId", $input_productId__closure);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $Item_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $Item_content__update = ($patch, $live) => {
	$Item_content_holes($patch, $live);
	if ("#childScope/1" in $patch) $merge$1($patch["#childScope/1"], $live["#childScope/1"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#text/2" in $patch || "BranchScopes:#text/2" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_content", $noop_update);
_update_content("__tests__/template.marko_1_content", $Item_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
const getServerProduct = typeof window === "undefined" ? (id) => ({
	id,
	title: `Product ${id}`
}) : undefined;

// tags/shared-list.marko
const $template = "";
const $walks = "";
const $setup = () => {};
const subsByKey = {};
const $value = /*@__PURE__*/ _let_persisted("value/3", ($scope) => _return($scope, $scope.value));
const $input_name__script = _script_refresh("__tests__/tags/shared-list.marko_0_input_name", ($scope) => {
	{
		const subs = subsByKey[$scope.input_name] ??= new Set();
		const sub = () => $value($scope, $scope.$global.data[$scope.input_name]);
		$signal($scope, 0).onabort = () => subs.delete(sub);
		subs.add(sub);
	}
});
const $input_name = /*@__PURE__*/ _const_persisted("input_name", ($scope) => {
	$signalReset($scope, 0);
	_return_change($scope, $valueChange($scope));
	$value($scope, $scope.$global.data[$scope.input_name]);
	$input_name__script($scope);
});
const $input = ($scope, input) => $input_name($scope, input.name);
function $valueChange($scope) {
	return function(next) {
		$scope.$global.data[$scope.input_name] = next;
		subsByKey[$scope.input_name]?.forEach((cb) => cb());
	};
}
_resume("__tests__/tags/shared-list.marko_0/valueChange", $valueChange);
var shared_list_default = /*@__PURE__*/ _template("__tests__/tags/shared-list.marko", "", "", $setup, $input);

// tags/add-form.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<button class=watch> </button><form class=add><input type=hidden name=productId class=pid><input type=number name=quantity min=1 class=qty><button type=button class=plus>+</button></form>`)("");
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}& D l D b b l`)("");
const $cart = _var_resume("__tests__/tags/add-form.marko_0_cart/var", /*@__PURE__*/ _const_persisted("cart"));
const $watched = /*@__PURE__*/ _let_persisted("watched/13", ($scope) => _text($scope["#text/3"], $scope.watched ? "watching" : "watch"));
const $quantity = /*@__PURE__*/ _let_persisted("quantity/14", ($scope) => _attr_input_value($scope, "#input/6", $scope.quantity, $valueChange($scope)));
const $setup__script$1 = _script_update("__tests__/tags/add-form.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$watched($scope, !$scope.watched);
	});
	_on($scope["#form/4"], "submit", function() {
		const i = $scope.cart.findIndex((item) => item.productId === $scope.productId);
		const prev = i !== -1 && $scope.cart[i];
		const item = {
			productId: $scope.productId,
			quantity: (prev ? prev.quantity : 0) + $scope.quantity
		};
		_var_change($scope["#childScope/0"], prev ? $scope.cart.with(i, item) : [...$scope.cart, item], "cart");
	});
	_attr_input_value_script($scope, "#input/6");
	_on($scope["#button/7"], "click", function() {
		$quantity($scope, $scope.quantity + 1);
	});
});
function $setup$1($scope) {
	_var($scope, "#childScope/0", $cart);
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
	$input_name($scope["#childScope/0"], "cart");
	$watched($scope, false);
	$quantity($scope, 1);
	$setup__script$1($scope);
}
const $productId = /*@__PURE__*/ _const_persisted("productId", ($scope) => _attr($scope["#input/5"], "value", $scope.productId));
const $input_productId$1 = ($scope, input_productId) => {
	if (!updating) $productId($scope, input_productId);
};
const $input$1 = ($scope, input) => $input_productId$1($scope, input.productId);
function $valueChange($scope) {
	return (_new_quantity) => {
		$quantity($scope, Number(_new_quantity));
	};
}
_resume("__tests__/tags/add-form.marko_0/valueChange", $valueChange);
var add_form_default = /*@__PURE__*/ _template("__tests__/tags/add-form.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p class=home>welcome home</p>", "b");
const $Item_content__product = ($scope, product) => {
	$Item_content__product_title($scope, product?.title);
	$Item_content__product_id($scope, product?.id);
};
const $Item_content__input_productId = /*@__PURE__*/ _closure_get("input_productId", ($scope) => {
	if (!updating) {
		$Item_content__product($scope, getServerProduct?.($scope._.input_productId));
	}
});
const $Item_content__setup = ($scope) => {
	if (!updating) $Item_content__input_productId($scope);
	$setup$1($scope["#childScope/1"]);
};
const $Item_content__product_title = ($scope, product_title) => _text($scope["#text/0"], product_title);
const $Item_content__product_id = ($scope, product_id) => $input_productId$1($scope["#childScope/1"], product_id);
const $Item_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", /*@__PURE__*/ ((_w0) => `<section class=item><h2 class=title> </h2>${_w0}</section>`)($template$1), /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)($walks$1), $Item_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Home__OR__Item = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.$global.view === "item" ? $scope.Item : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Item);
const $Item = /*@__PURE__*/ _const_persisted("Item", $Home__OR__Item);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Item($scope, { content: $Item_content($scope) });
	$setup__script($scope);
}
const $input = ($scope, input) => $input_productId($scope, input.productId);
const $input_productId__closure = /*@__PURE__*/ _closure($Item_content__input_productId);
const $input_productId = /*@__PURE__*/ _const_persisted("input_productId", $input_productId__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
