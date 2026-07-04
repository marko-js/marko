// tags/actions.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<button class=add>added <!> of <!> (<!> in cart)</button>`)("");
const $walks = /* @__PURE__ */ ((_w0) => `0${_w0}& Db%c%c%l`)("");
const $productId = /* @__PURE__ */ _const(9, ($scope) => _text($scope.e, $scope.j));
const $input_id = ($scope, input_id) => {
	if (!_updating()) $productId($scope, input_id);
};
const $list = _var_resume("b0", /* @__PURE__ */ _const(10, ($scope) => $list_length($scope, $scope.k?.length)));
const $list_length = ($scope, list_length) => _text($scope.f, list_length);
const $added = /* @__PURE__ */ _let(12, ($scope) => _text($scope.d, $scope.m));
const $setup__script$2 = _script_update("b1", ($scope) => _on($scope.c, "click", function() {
	$added($scope, $scope.m + 1);
	_var_change($scope.a, [...$scope.k, $scope.j]);
}));
function $setup($scope) {
	_var($scope, 0, $list);
	/* @__PURE__ */ $setup$1($scope.a);
	$input_name($scope.a, "cart");
	$added($scope, 0);
	$setup__script$2($scope);
}
enableBranches();

// tags/layout.marko
const $open = /* @__PURE__ */ _let(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("c0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
enableBranches();

// template.marko
_enable_catch();
const $for_content2__rec_title = ($scope, rec_title) => _text($scope.a, rec_title);
const $for_content2__$params = ($scope, $params4) => $for_content2__rec_title($scope, $params4[0]?.title);
const $await_content__for = /* @__PURE__ */ _for_of(0, "<li> </li>", "D l", 0, $for_content2__$params);
const $await_content__recs = ($scope, recs) => $await_content__for($scope, [recs, function(rec) {
	return rec.id;
}]);
const $await_content__$params = ($scope, $params3) => $await_content__recs($scope, $params3[0]);
const $placeholder_content = _content_resume("a8", "loading recommendations…", "b");
const $await_content = /* @__PURE__ */ _await_content(0, "<ul class=recs></ul>", " b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise(0, $await_content__$params);
const $try_content__product_id = /* @__PURE__ */ _closure_get(5, ($scope) => {
	if (!_updating()) $try_content__await_promise($scope, getRecommendations($scope._._.f));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	if (!_updating()) $try_content__product_id($scope);
	$await_content($scope);
};
const $else_content2__product_image = /* @__PURE__ */ _if_closure(0, 1, ($scope) => _attr($scope.a, "src", $scope._.c));
const $else_content2__try = /* @__PURE__ */ _try(4, "<!><!><!>", "b%c", $try_content__setup);
const $else_content2__setup = ($scope) => {
	if (!_updating()) $else_content2__product_image._($scope);
	if (!_updating()) $else_content2__product_title._($scope);
	if (!_updating()) $else_content2__product_price._($scope);
	if (!_updating()) $else_content2__product_id._($scope);
	$setup($scope.d);
	$else_content2__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $else_content2__product_title = /* @__PURE__ */ _if_closure(0, 1, ($scope) => {
	_attr($scope.a, "alt", $scope._.d);
	_text($scope.b, $scope._.d);
});
const $else_content2__product_price = /* @__PURE__ */ _if_closure(0, 1, ($scope) => _text($scope.c, $scope._.e.toFixed(2)));
const $else_content2__product_id = /* @__PURE__ */ _if_closure(0, 1, ($scope) => $input_id($scope.d, $scope._.f));
const $Item_content__if = /* @__PURE__ */ _if(0, "<h2>not found</h2>", "b", 0, /* @__PURE__ */ ((_w0) => `<img class=thumb><h2 class=title> </h2><div class=price>$<!></div>${_w0}<!><!>`)($template), /* @__PURE__ */ ((_w0) => ` bD lDb%l/${_w0}&%c`)($walks), $else_content2__setup);
const $Item_content__product = ($scope, product) => {
	$Item_content__product_image($scope, product?.image);
	$Item_content__product_title($scope, product?.title);
	$Item_content__product_price($scope, product?.price);
	$Item_content__product_id($scope, product?.id);
	$Item_content__if($scope, !product ? 0 : 1);
};
const $Item_content__$global_productId = /* @__PURE__ */ _closure_get(7, ($scope) => {
	if (!_updating()) $Item_content__product($scope, $scope.$.productId && getProduct($scope.$.productId));
});
const $Item_content__setup = ($scope) => {
	if (!_updating()) $Item_content__$global_productId($scope);
};
const $Item_content__product_image = /* @__PURE__ */ _const(2, $else_content2__product_image);
const $Item_content__product_title = /* @__PURE__ */ _const(3, $else_content2__product_title);
const $Item_content__product_price = /* @__PURE__ */ _const(4, $else_content2__product_price);
const $Item_content__product_id__closure = /* @__PURE__ */ _closure($try_content__product_id);
const $Item_content__product_id = /* @__PURE__ */ _const(5, ($scope) => {
	$else_content2__product_id($scope);
	$Item_content__product_id__closure($scope);
});
const $Item_content = _content_resume("a5", "<!><!><!>", "b%c", $Item_content__setup);
const $for_content__entry_product_title = ($scope, entry_product_title) => _text($scope.a, entry_product_title);
const $for_content__entry_product_price = ($scope, entry_product_price) => _text($scope.b, entry_product_price);
const $for_content__$params = ($scope, $params2) => {
	$for_content__entry_product_title($scope, $params2[0]?.product?.title);
	$for_content__entry_product_price($scope, $params2[0]?.product?.price);
};
const $else_content__for = /* @__PURE__ */ _for_of(0, "<li><!> $<!></li>", "D%c%l", 0, $for_content__$params);
const $else_content__entries = /* @__PURE__ */ _if_closure(2, 1, ($scope) => {
	_text($scope.b, $scope._.g.reduce((sum, e) => sum + e.product.price, 0));
	$else_content__for($scope, [$scope._.g, function(entry) {
		return entry.id;
	}]);
});
const $else_content__setup = $else_content__entries;
const $Cart_content__entries = /* @__PURE__ */ _const(6, ($scope) => {
	$Cart_content__entries_length($scope, $scope.g?.length);
	$else_content__entries($scope);
});
const $Cart_content__list__OR__products = /* @__PURE__ */ _or(5, ($scope) => $Cart_content__entries($scope, $scope.d.map((id) => ({
	product: $scope.e.find((p) => p.id === id),
	id
}))), 1, 1);
const $Cart_content__products = /* @__PURE__ */ _let(4, $Cart_content__list__OR__products);
const $Cart_content__list = _var_resume("a7", /* @__PURE__ */ _const(3, ($scope) => {
	$Cart_content__products($scope, getProducts?.($scope.d) || []);
	$Cart_content__list__OR__products($scope);
}));
const $Cart_content__setup = ($scope) => {
	_var($scope, 0, $Cart_content__list);
	/* @__PURE__ */ $setup$1($scope.a);
	$input_name($scope.a, "cart");
};
const $Cart_content__if = /* @__PURE__ */ _if(2, "<p class=cart>cart is empty</p>", "b", 0, "<ul class=cart></ul><p class=total>total $<!></p>", " bDb%l", $else_content__setup);
const $Cart_content__entries_length = ($scope, entries_length) => $Cart_content__if($scope, !entries_length ? 0 : 1);
const $Cart_content = _content_resume("a6", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!><!>`)(""), /* @__PURE__ */ ((_w0) => `b0${_w0}&%c`)(""), $Cart_content__setup);
const $count = /* @__PURE__ */ _let(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a10", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranches();

// tags/shared-list.marko.update.mjs
const $value_seed = _update_signal("d2");
const $update$3 = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $value_seed, patch["d"]);
	if ("a" in patch) live["a"] = patch["a"];
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
};
var shared_list_marko_update_default = _resume("d3", $update$3);

// tags/actions.marko.update.mjs
const $added_seed = _update_signal("b2");
const $update$2 = (patch, live) => {
	_update_pair(patch, live);
	if ("m" in patch) _update_seed(live, $added_seed, patch["m"]);
	if ("g" in patch) live["g"] = patch["g"];
	if ("h" in patch) live["h"] = patch["h"];
	if ("i" in patch) live["i"] = patch["i"];
	if ("j" in patch) live["j"] = patch["j"];
	if ("a" in patch) shared_list_marko_update_default(patch["a"], live["a"]);
	if ("e" in patch) _text(live["e"], patch["e"]);
};
var actions_marko_update_default = _resume("b3", $update$2);

// tags/layout.marko.update.mjs
const $open_seed = _update_signal("c2");
const $dynamic_update = _update_signal("c1");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $open_seed, patch["g"]);
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("Dc" in patch) _update_dynamic(patch, live, "Dc", "Ac", $dynamic_update);
};
var layout_marko_update_default = _resume("c3", $update$1);

// template.marko.update.mjs
const $for_update = _update_for(0, "a0", (branch, args) => $for_content2__update(args[0], branch));
const $if_update = _update_signal("a1");
const $products_seed = _update_signal("a2");
const $count_seed = _update_signal("a3");
const $for_content2__update = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("a" in patch) _text(live["a"], patch["a"]);
};
const $await_content__update = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $await_content__update);
};
const $else_content2__update = (patch, live) => {
	if ("Nsrc:a" in patch) _attr(live["a"], "src", patch["Nsrc:a"]);
	if ("Nalt:a" in patch) _attr(live["a"], "alt", patch["Nalt:a"]);
	if ("b" in patch) _text(live["b"], patch["b"]);
	if ("c" in patch) _text(live["c"], patch["c"]);
	if ("d" in patch) actions_marko_update_default(patch["d"], live["d"]);
	if ("Ae" in patch) _update_branch(patch, live, "e", $try_content__update);
};
const $Item_content__update = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("Da" in patch) {
		$if_update(live, patch["Da"]);
		const $patchBranch = patch["Aa"], $liveBranch = live["Aa"], $branchMerge = [0, $else_content2__update][patch["Da"]];
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
const $Cart_content__update = (patch, live) => {
	if ("e" in patch) _update_seed(live, $products_seed, patch["e"]);
	if ("a" in patch) shared_list_marko_update_default(patch["a"], live["a"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) live["g"] = patch["g"];
	if ("h" in patch) live["h"] = patch["h"];
	if ("i" in patch) live["i"] = patch["i"];
	if ("c" in patch) layout_marko_update_default(patch["c"], live["c"]);
};
_update_content("a5", $Item_content__update);
_update_content("a6", $Cart_content__update);
var template_marko_update_default = _resume("a4", $update);

// data.js
function getProduct(id) {
	if (typeof window !== "undefined") throw new Error("getProduct is server-only");
	return {
		id,
		title: `Product ${id}`,
		price: id * 100 + .5,
		image: `/images/${id}.svg`
	};
}
function getRecommendations(id) {
	if (typeof window !== "undefined") throw new Error("getRecommendations is server-only");
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
})) : void 0;

// tags/shared-list.marko
const $setup = () => {};
const subsByKey = {};
const $value = /* @__PURE__ */ _let(3, ($scope) => _return($scope, $scope.d));
const $input_name__OR__$global_data__script = _script_update("d1", ($scope) => {
	{
		const subs = subsByKey[$scope.c] ??= /* @__PURE__ */ new Set();
		const sub = () => $value($scope, $scope.$.data[$scope.c]);
		$signal($scope, 0).onabort = () => subs.delete(sub);
		subs.add(sub);
	}
});
const $input_name__OR__$global_data = /* @__PURE__ */ _or(6, ($scope) => {
	$signalReset($scope, 0);
	_return_change($scope, $valueChange($scope));
	$input_name__OR__$global_data__script($scope);
}, 0);
const $input_name = /* @__PURE__ */ _const(2, ($scope) => {
	$value($scope, $scope.$.data[$scope.c]);
	$input_name__OR__$global_data($scope);
});
function $valueChange($scope) {
	return function(next) {
		$scope.$.data[$scope.c] = next;
		subsByKey[$scope.c]?.forEach((cb) => cb());
	};
}
_resume("d0", $valueChange);
enableBranches();
