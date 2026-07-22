// tags/shared-list.marko.persisted.mjs
const $template$3 = "";
const $walks$3 = "";
const $setup$3 = () => {};
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
	_return_change($scope, $valueChange($scope));
	$value($scope, $scope.$global.data[$scope.input_name]);
	$input_name__script($scope);
}));
const $input$2 = ($scope, input) => $input_name($scope, input.name);
function $valueChange($scope) {
	return function(next) {
		$scope.$global.data[$scope.input_name] = next;
		subsByKey[$scope.input_name]?.forEach((cb) => cb());
	};
}
var shared_list_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/shared-list.marko", "", "", $setup$3, $input$2);
const $value_seed = _update_signal("__tests__/tags/shared-list.marko_0_value/var");
const $input_name_update = _update_signal("__tests__/tags/shared-list.marko_0_input_name/var");
const $update2$3 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("value" in $patch) _update_seed($live, $value_seed, $patch["value"]);
	if ("input_name" in $patch) $input_name_update($live, $patch["input_name"]);
};
const $merge$3 = _resume("__tests__/tags/shared-list.marko_0_update", $update2$3);
_update_content("__tests__/tags/shared-list.marko", $merge$3);
function $patch2$3($fail) {
	return patch($merge$3, $fail);
}

// tags/actions.marko.persisted.mjs
const $template$2 = /*@__PURE__*/ ((_w0) => `${_w0}<button class=add>added <!> of <!> (<!> in cart)</button>`)("");
const $walks$2 = /*@__PURE__*/ ((_w0) => `0${_w0}& Db%c%c%l`)("");
const $productId = _var_resume("__tests__/tags/actions.marko_0_productId/var", /*@__PURE__*/ _const_persisted("productId", ($scope) => _text($scope["#text/4"], $scope.productId)));
const $input_id = ($scope, input_id) => {
	if (!updating) $productId($scope, input_id);
};
const $list = _var_resume("__tests__/tags/actions.marko_0_list/var", /*@__PURE__*/ _const_persisted("list", ($scope) => $list_length($scope, $scope.list?.length)));
const $list_length = ($scope, list_length) => _text($scope["#text/5"], list_length);
const $added = _var_resume("__tests__/tags/actions.marko_0_added/var", /*@__PURE__*/ _let_persisted("added/12", ($scope) => _text($scope["#text/3"], $scope.added)));
const $setup__script$2 = _script_shared(($scope) => _on($scope["#button/2"], "click", function() {
	$added($scope, $scope.added + 1);
	_var_change($scope["#childScope/0"], [...$scope.list, $scope.productId], "list");
}));
function $setup$2($scope) {
	_var($scope, "#childScope/0", $list);
	/* @__PURE__ */ $setup$3($scope["#childScope/0"]);
	$input_name($scope["#childScope/0"], "cart");
	$added($scope, 0);
	$setup__script$2($scope);
}
const $input$1 = ($scope, input) => $input_id($scope, input.id);
var actions_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/actions.marko", $template$2, $walks$2, $setup$2, $input$1);
const $added_seed = _update_signal("__tests__/tags/actions.marko_0_added/var");
const $productId_update = _update_signal("__tests__/tags/actions.marko_0_productId/var");
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("added" in $patch) _update_seed($live, $added_seed, $patch["added"]);
	if ("productId" in $patch) $productId_update($live, $patch["productId"]);
	if ("#childScope/0" in $patch) $merge$3($patch["#childScope/0"], $live["#childScope/0"]);
};
const $merge$2 = _resume("__tests__/tags/actions.marko_0_update", $update2$2);
_update_content("__tests__/tags/actions.marko", $merge$2);
function $patch2$2($fail) {
	return patch($merge$2, $fail);
}

// tags/layout.marko.persisted.mjs
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $open = _var_resume("__tests__/tags/layout.marko_0_open/var", /*@__PURE__*/ _let_persisted("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "collapse" : "expand")));
const $setup__script$1 = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, $walks$1, $setup$1, $input);
const $open_seed = _update_signal("__tests__/tags/layout.marko_0_open/var");
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("open" in $patch) _update_seed($live, $open_seed, $patch["open"]);
	if ("ConditionalRenderer:#text/2" in $patch || "BranchScopes:#text/2" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
const $merge$1 = _resume("__tests__/tags/layout.marko_0_update", $update2$1);
_update_content("__tests__/tags/layout.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
_enable_catch();
const $for_content3__rec_title = ($scope, rec_title) => _text($scope["#text/0"], rec_title);
const $for_content3__$params = ($scope, $params5) => $for_content3__rec_title($scope, $params5[0]?.title);
const $await_content__for = 0;
const $await_content__recs = ($scope, recs) => {
	if (!updating) $await_content__for($scope, [recs, function(rec) {
		return rec.id;
	}]);
};
const $await_content__$params = ($scope, $params4) => $await_content__recs($scope, $params4[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_10_content", "loading recommendations…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<ul class=recs></ul>", " b");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__product_id = /*@__PURE__*/ _closure_get("product_id", ($scope) => {
	if (!updating) {
		$try_content__await_promise($scope, getRecommendations($scope._._.product_id));
	}
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__product_id($scope);
	$await_content($scope);
};
const $else_content2__product_image = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => {
	if (!updating) {
		_attr($scope["#img/0"], "src", $scope._.product_image);
	}
});
const $else_content2__try = /*@__PURE__*/ _try("#text/4", "<!><!><!>", "b%c", $try_content__setup);
const $else_content2__setup = ($scope) => {
	if (!updating) $else_content2__product_image._($scope);
	if (!updating) $else_content2__product_title._($scope);
	if (!updating) $else_content2__product_price._($scope);
	if (!updating) $else_content2__product_id._($scope);
	$setup$2($scope["#childScope/3"]);
	$else_content2__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $else_content2__product_title = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => {
	if (!updating) {
		_attr($scope["#img/0"], "alt", $scope._.product_title);
		_text($scope["#text/1"], $scope._.product_title);
	}
});
const $else_content2__product_price = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => {
	if (!updating) {
		_text($scope["#text/2"], $scope._.product_price.toFixed(2));
	}
});
const $else_content2__product_id = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => {
	if (!updating) {
		$input_id($scope["#childScope/3"], $scope._.product_id);
	}
});
const $Item_content__if = /*@__PURE__*/ _if("#text/0", "<h2>not found</h2>", "b", 0, /*@__PURE__*/ ((_w0) => `<img class=thumb><h2 class=title> </h2><div class=price>$<!></div>${_w0}<!><!>`)($template$2), /*@__PURE__*/ ((_w0) => ` bD lDb%l/${_w0}&%c`)($walks$2), $else_content2__setup);
const $Item_content__product = ($scope, product) => {
	$Item_content__product_image($scope, product?.image);
	$Item_content__product_title($scope, product?.title);
	$Item_content__product_price($scope, product?.price);
	$Item_content__product_id($scope, product?.id);
	if (!updating) $Item_content__if($scope, !product ? 0 : 1);
};
const $Item_content__product_image = /*@__PURE__*/ _const_persisted("product_image", $else_content2__product_image);
const $Item_content__product_title = /*@__PURE__*/ _const_persisted("product_title", $else_content2__product_title);
const $Item_content__product_price = /*@__PURE__*/ _const_persisted("product_price", $else_content2__product_price);
const $Item_content__product_id__closure = /*@__PURE__*/ _closure($try_content__product_id);
const $Item_content__product_id = /*@__PURE__*/ _const_persisted("product_id", ($scope) => {
	$else_content2__product_id($scope);
	$Item_content__product_id__closure($scope);
});
const $Item_content__setup = ($scope) => {
	if (!updating) $Item_content__product($scope, $scope.$global.productId && getProduct($scope.$global.productId));
};
const $Item_content = /*@__PURE__*/ _content("__tests__/template.marko_6_content", "<!><!><!>", "b%c", $Item_content__setup);
const $for_content2__entry_product_title = ($scope, entry_product_title) => _text($scope["#text/0"], entry_product_title);
const $for_content2__entry_product_price = ($scope, entry_product_price) => _text($scope["#text/1"], entry_product_price);
const $for_content2__$params = ($scope, $params3) => {
	$for_content2__entry_product_title($scope, $params3[0]?.product?.title);
	$for_content2__entry_product_price($scope, $params3[0]?.product?.price);
};
const $for_content__label = ($scope, label) => _text($scope["#text/1"], label);
const $for_content__tag = ($scope, tag) => {
	_attr_class($scope["#b/0"], tag === $scope.$global.tag && "on");
	_attr($scope["#b/0"], "data-tag", tag);
	if (!updating) $for_content__label($scope, tag.toUpperCase());
};
const $for_content__$params = ($scope, $params2) => $for_content__tag($scope, $params2[0]);
const $else_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><!> $<!></li>", "D%c%l", 0, $for_content2__$params);
const $else_content__entries = /*@__PURE__*/ _if_closure("#text/3", 1, ($scope) => {
	_text($scope["#text/1"], $scope._.entries.reduce((sum, e) => sum + e.product.price, 0));
	if (!updating) $else_content__for($scope, [$scope._.entries, function(entry) {
		return entry.id;
	}]);
});
const $else_content__setup = $else_content__entries;
const $Cart_content__entries = /*@__PURE__*/ _const_persisted("entries", ($scope) => {
	$Cart_content__entries_length($scope, $scope.entries?.length);
	$else_content__entries($scope);
});
const $Cart_content__list__OR__products = /*@__PURE__*/ _or(6, ($scope) => $Cart_content__entries($scope, $scope.list.map((id) => ({
	product: $scope.products.find((p) => p.id === id),
	id
}))), 1, "#scopeOffset/1");
const $Cart_content__products = _var_resume("__tests__/template.marko_1_products/var", /*@__PURE__*/ _let_persisted("products/5", $Cart_content__list__OR__products));
const $Cart_content__list = _var_resume("__tests__/template.marko_1_list/var", /*@__PURE__*/ _const_persisted("list", ($scope) => {
	$Cart_content__products($scope, getProducts?.($scope.list) || []);
	$Cart_content__list__OR__products($scope);
}));
const $Cart_content__for = 0;
const $Cart_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $Cart_content__list);
	/* @__PURE__ */ $setup$3($scope["#childScope/0"]);
	$input_name($scope["#childScope/0"], "cart");
	if (!updating) $Cart_content__for($scope, [getTags?.()]);
};
const $Cart_content__if = /*@__PURE__*/ _if("#text/3", "<p class=cart>cart is empty</p>", "b", 0, "<ul class=cart></ul><p class=total>total $<!></p>", " bDb%l", $else_content__setup);
const $Cart_content__entries_length = ($scope, entries_length) => $Cart_content__if($scope, !entries_length ? 0 : 1);
const $Cart_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", /*@__PURE__*/ ((_w0) => `${_w0}<nav class=tags></nav><!><!>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}& b%c`)(""), $Cart_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $Cart__OR__Item = /*@__PURE__*/ _or(6, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "item" ? $scope.Item : $scope.Cart));
const $Cart = /*@__PURE__*/ _const_persisted("Cart", $Cart__OR__Item);
const $Item = /*@__PURE__*/ _const_persisted("Item", $Cart__OR__Item);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Cart($scope, { content: $Cart_content($scope) });
	if (!updating) $Item($scope, { content: $Item_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $else_content2_holes = /*@__PURE__*/ _update_scopes({
	"PatchAttr:src:#img/0": /*@__PURE__*/ _update_named_attr("#img/0", "src"),
	"PatchAttr:alt:#img/0": /*@__PURE__*/ _update_named_attr("#img/0", "alt"),
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2")
});
const $products_seed = _update_signal("__tests__/template.marko_1_products/var");
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $await_content__update = ($patch, $live) => {
	if ("ConditionalRenderer:#ul/0" in $patch) _update_region("#ul/0")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content__update, "__tests__/template.marko_11_update");
};
const $else_content2__update = ($patch, $live) => {
	$else_content2_holes($patch, $live);
	if ("#childScope/3" in $patch) $merge$2($patch["#childScope/3"], $live["#childScope/3"]);
	if ("BranchScopes:#text/4" in $patch) _update_branch($patch, $live, "#text/4", $try_content__update, "__tests__/template.marko_8_update", "__tests__/template.marko_10_content");
};
const $Item_content__update = ($patch, $live) => {
	if ("product_image" in $patch) $live["product_image"] = $patch["product_image"];
	if ("product_title" in $patch) $live["product_title"] = $patch["product_title"];
	if ("product_price" in $patch) $live["product_price"] = $patch["product_price"];
	if ("product_id" in $patch) $live["product_id"] = $patch["product_id"];
	if ("ConditionalRenderer:#text/0" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0", [0, $else_content2__update], ["__tests__/template.marko_9_update", "__tests__/template.marko_7_update"]);
};
const $else_content__update = ($patch, $live) => {
	if ("ConditionalRenderer:#ul/0" in $patch) _update_region("#ul/0")($patch, $live);
};
const $Cart_content__update = ($patch, $live) => {
	if ("products" in $patch) _update_seed($live, $products_seed, $patch["products"]);
	if ("#childScope/0" in $patch) $merge$3($patch["#childScope/0"], $live["#childScope/0"]);
	if ("ConditionalRenderer:#nav/2" in $patch) _update_region("#nav/2")($patch, $live);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("#childScope/2" in $patch) $merge$1($patch["#childScope/2"], $live["#childScope/2"]);
};
const $noop_update = () => {};
_update_content("__tests__/template.marko_10_content", $noop_update);
_update_content("__tests__/template.marko_6_content", $Item_content__update);
_update_content("__tests__/template.marko_1_content", $Cart_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
function getProduct(id) {
	if (typeof window !== "undefined") {
		throw new Error("getProduct is server-only");
	}
	return {
		id,
		title: `Product ${id}`,
		price: id * 100 + .5,
		image: `/images/${id}.svg`
	};
}
function getRecommendations(id) {
	if (typeof window !== "undefined") {
		throw new Error("getRecommendations is server-only");
	}
	return resolveAfter([{
		id: id + 1,
		title: `Product ${id + 1}`
	}, {
		id: id + 2,
		title: `Product ${id + 2}`
	}], 1);
}
const getProducts = typeof window === "undefined" ? (ids) => ids.map((id) => ({
	id,
	title: `Product ${id}`,
	price: id * 100 + .5
})) : undefined;
const getTags = typeof window === "undefined" ? () => [
	"all",
	"dev",
	"news"
] : undefined;

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

// tags/actions.marko
const $template$2 = /*@__PURE__*/ ((_w0) => `${_w0}<button class=add>added <!> of <!> (<!> in cart)</button>`)("");
const $walks$2 = /*@__PURE__*/ ((_w0) => `0${_w0}& Db%c%c%l`)("");
const $productId = /*@__PURE__*/ _const_persisted("productId", ($scope) => _text($scope["#text/4"], $scope.productId));
const $input_id = ($scope, input_id) => {
	if (!updating) $productId($scope, input_id);
};
const $list = _var_resume("__tests__/tags/actions.marko_0_list/var", /*@__PURE__*/ _const_persisted("list", ($scope) => $list_length($scope, $scope.list?.length)));
const $list_length = ($scope, list_length) => _text($scope["#text/5"], list_length);
const $added = /*@__PURE__*/ _let_persisted("added/12", ($scope) => _text($scope["#text/3"], $scope.added));
const $setup__script$2 = _script_update("__tests__/tags/actions.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$added($scope, $scope.added + 1);
	_var_change($scope["#childScope/0"], [...$scope.list, $scope.productId], "list");
}));
function $setup$2($scope) {
	_var($scope, "#childScope/0", $list);
	/* @__PURE__ */ $setup$3($scope["#childScope/0"]);
	$input_name($scope["#childScope/0"], "cart");
	$added($scope, 0);
	$setup__script$2($scope);
}
const $input$1 = ($scope, input) => $input_id($scope, input.id);
var actions_default = /*@__PURE__*/ _template("__tests__/tags/actions.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/layout.marko
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $open = /*@__PURE__*/ _let_persisted("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "collapse" : "expand"));
const $setup__script$1 = _script_update("__tests__/tags/layout.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
_enable_catch();
const $for_content3__rec_title = ($scope, rec_title) => _text($scope["#text/0"], rec_title);
const $for_content3__$params = ($scope, $params5) => $for_content3__rec_title($scope, $params5[0]?.title);
const $await_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D l", 0, $for_content3__$params);
const $await_content__recs = ($scope, recs) => {
	if (!updating) $await_content__for($scope, [recs, function(rec) {
		return rec.id;
	}]);
};
const $await_content__$params = ($scope, $params4) => $await_content__recs($scope, $params4[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_10_content", "loading recommendations…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<ul class=recs></ul>", " b");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__product_id = /*@__PURE__*/ _closure_get("product_id", ($scope) => {
	if (!updating) {
		$try_content__await_promise($scope, getRecommendations($scope._._.product_id));
	}
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__product_id($scope);
	$await_content($scope);
};
const $else_content2__product_image = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => {
	if (!updating) {
		_attr($scope["#img/0"], "src", $scope._.product_image);
	}
});
const $else_content2__try = /*@__PURE__*/ _try("#text/4", "<!><!><!>", "b%c", $try_content__setup);
const $else_content2__setup = ($scope) => {
	if (!updating) $else_content2__product_image._($scope);
	if (!updating) $else_content2__product_title._($scope);
	if (!updating) $else_content2__product_price._($scope);
	if (!updating) $else_content2__product_id._($scope);
	$setup$2($scope["#childScope/3"]);
	$else_content2__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $else_content2__product_title = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => {
	if (!updating) {
		_attr($scope["#img/0"], "alt", $scope._.product_title);
		_text($scope["#text/1"], $scope._.product_title);
	}
});
const $else_content2__product_price = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => {
	if (!updating) {
		_text($scope["#text/2"], $scope._.product_price.toFixed(2));
	}
});
const $else_content2__product_id = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => {
	if (!updating) {
		$input_id($scope["#childScope/3"], $scope._.product_id);
	}
});
const $Item_content__if = /*@__PURE__*/ _if("#text/0", "<h2>not found</h2>", "b", 0, /*@__PURE__*/ ((_w0) => `<img class=thumb><h2 class=title> </h2><div class=price>$<!></div>${_w0}<!><!>`)($template$2), /*@__PURE__*/ ((_w0) => ` bD lDb%l/${_w0}&%c`)($walks$2), $else_content2__setup);
const $Item_content__product = ($scope, product) => {
	$Item_content__product_image($scope, product?.image);
	$Item_content__product_title($scope, product?.title);
	$Item_content__product_price($scope, product?.price);
	$Item_content__product_id($scope, product?.id);
	if (!updating) $Item_content__if($scope, !product ? 0 : 1);
};
const $Item_content__product_image = /*@__PURE__*/ _const_persisted("product_image", $else_content2__product_image);
const $Item_content__product_title = /*@__PURE__*/ _const_persisted("product_title", $else_content2__product_title);
const $Item_content__product_price = /*@__PURE__*/ _const_persisted("product_price", $else_content2__product_price);
const $Item_content__product_id__closure = /*@__PURE__*/ _closure($try_content__product_id);
const $Item_content__product_id = /*@__PURE__*/ _const_persisted("product_id", ($scope) => {
	$else_content2__product_id($scope);
	$Item_content__product_id__closure($scope);
});
const $Item_content__setup = ($scope) => {
	if (!updating) $Item_content__product($scope, $scope.$global.productId && getProduct($scope.$global.productId));
};
const $Item_content = /*@__PURE__*/ _content("__tests__/template.marko_6_content", "<!><!><!>", "b%c", $Item_content__setup);
const $for_content2__entry_product_title = ($scope, entry_product_title) => _text($scope["#text/0"], entry_product_title);
const $for_content2__entry_product_price = ($scope, entry_product_price) => _text($scope["#text/1"], entry_product_price);
const $for_content2__$params = ($scope, $params3) => {
	$for_content2__entry_product_title($scope, $params3[0]?.product?.title);
	$for_content2__entry_product_price($scope, $params3[0]?.product?.price);
};
const $for_content__label = ($scope, label) => _text($scope["#text/1"], label);
const $for_content__tag = ($scope, tag) => {
	_attr_class($scope["#b/0"], tag === $scope.$global.tag && "on");
	_attr($scope["#b/0"], "data-tag", tag);
	if (!updating) $for_content__label($scope, tag.toUpperCase());
};
const $for_content__$params = ($scope, $params2) => $for_content__tag($scope, $params2[0]);
const $else_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><!> $<!></li>", "D%c%l", 0, $for_content2__$params);
const $else_content__entries = /*@__PURE__*/ _if_closure("#text/3", 1, ($scope) => {
	_text($scope["#text/1"], $scope._.entries.reduce((sum, e) => sum + e.product.price, 0));
	if (!updating) $else_content__for($scope, [$scope._.entries, function(entry) {
		return entry.id;
	}]);
});
const $else_content__setup = $else_content__entries;
const $Cart_content__entries = /*@__PURE__*/ _const_persisted("entries", ($scope) => {
	$Cart_content__entries_length($scope, $scope.entries?.length);
	$else_content__entries($scope);
});
const $Cart_content__list__OR__products = /*@__PURE__*/ _or(6, ($scope) => $Cart_content__entries($scope, $scope.list.map((id) => ({
	product: $scope.products.find((p) => p.id === id),
	id
}))), 1, "#scopeOffset/1");
const $Cart_content__products = /*@__PURE__*/ _let_persisted("products/5", $Cart_content__list__OR__products);
const $Cart_content__list = _var_resume("__tests__/template.marko_1_list/var", /*@__PURE__*/ _const_persisted("list", ($scope) => {
	$Cart_content__products($scope, getProducts?.($scope.list) || []);
	$Cart_content__list__OR__products($scope);
}));
const $Cart_content__for = /*@__PURE__*/ _for_of("#nav/2", "<b> </b>", " D l", 0, $for_content__$params);
const $Cart_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $Cart_content__list);
	/* @__PURE__ */ $setup$3($scope["#childScope/0"]);
	$input_name($scope["#childScope/0"], "cart");
	if (!updating) $Cart_content__for($scope, [getTags?.()]);
};
const $Cart_content__if = /*@__PURE__*/ _if("#text/3", "<p class=cart>cart is empty</p>", "b", 0, "<ul class=cart></ul><p class=total>total $<!></p>", " bDb%l", $else_content__setup);
const $Cart_content__entries_length = ($scope, entries_length) => $Cart_content__if($scope, !entries_length ? 0 : 1);
const $Cart_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", /*@__PURE__*/ ((_w0) => `${_w0}<nav class=tags></nav><!><!>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}& b%c`)(""), $Cart_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $Cart__OR__Item = /*@__PURE__*/ _or(6, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "item" ? $scope.Item : $scope.Cart));
const $Cart = /*@__PURE__*/ _const_persisted("Cart", $Cart__OR__Item);
const $Item = /*@__PURE__*/ _const_persisted("Item", $Cart__OR__Item);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Cart($scope, { content: $Cart_content($scope) });
	if (!updating) $Item($scope, { content: $Item_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
