// tags/shared-list.marko.persisted.mjs
const $value = _var_resume("d3", /*@__PURE__*/ _let_persisted(3, ($scope) => _return($scope, $scope.d)));
const $input_name__script = _script_shared(($scope) => {
	{
		const subs = subsByKey[$scope.c] ??= /* @__PURE__ */ new Set();
		const sub = () => $value($scope, $scope.$.data[$scope.c]);
		$signal($scope, 0).onabort = () => subs.delete(sub);
		subs.add(sub);
	}
});
const $input_name = _var_resume("d4", /*@__PURE__*/ _const_persisted(2, ($scope) => {
	$signalReset($scope, 0);
	_return_change($scope, $valueChange($scope));
	$value($scope, $scope.$.data[$scope.c]);
	$input_name__script($scope);
}));
function $valueChange($scope) {
	return function(next) {
		$scope.$.data[$scope.c] = next;
		subsByKey[$scope.c]?.forEach((cb) => cb());
	};
}
const $value_seed = _update_signal("d3");
const $input_name_update = _update_signal("d4");
const $update2$3 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $value_seed, $patch["d"]);
	if ("c" in $patch) $input_name_update($live, $patch["c"]);
};
const $merge$3 = _resume("d1", $update2$3);
_update_content("d", $merge$3);

// tags/actions.marko.persisted.mjs
const $productId = _var_resume("b3", /*@__PURE__*/ _const_persisted(9, ($scope) => _text($scope.e, $scope.j)));
const $list = _var_resume("b1", /*@__PURE__*/ _const_persisted(10, ($scope) => $list_length($scope, $scope.k?.length)));
const $list_length = ($scope, list_length) => _text($scope.f, list_length);
const $added = _var_resume("b4", /*@__PURE__*/ _let_persisted(12, ($scope) => _text($scope.d, $scope.m)));
const $setup__script$2 = _script_shared(($scope) => _on($scope.c, "click", function() {
	$added($scope, $scope.m + 1);
	_var_change($scope.a, [...$scope.k, $scope.j]);
}));
const $added_seed = _update_signal("b4");
const $productId_update = _update_signal("b3");
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("m" in $patch) _update_seed($live, $added_seed, $patch["m"]);
	if ("j" in $patch) $productId_update($live, $patch["j"]);
	if ("a" in $patch) $merge$3($patch["a"], $live["a"]);
};
const $merge$2 = _resume("b0", $update2$2);
_update_content("b", $merge$2);

// tags/layout.marko.persisted.mjs
const $open = _var_resume("c3", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand")));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
const $open_seed = _update_signal("c3");
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $open_seed, $patch["g"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
const $merge$1 = _resume("c1", $update2$1);
_update_content("c", $merge$1);

// template.marko.persisted.mjs
_enable_catch();
const $for_content2__entry_product_title = ($scope, entry_product_title) => _text($scope.a, entry_product_title);
const $for_content2__entry_product_price = ($scope, entry_product_price) => _text($scope.b, entry_product_price);
const $for_content2__$params = ($scope, $params3) => {
	$for_content2__entry_product_title($scope, $params3[0]?.product?.title);
	$for_content2__entry_product_price($scope, $params3[0]?.product?.price);
};
const $else_content__for = /*@__PURE__*/ _for_of(0, "<li><!> $<!></li>", "D%c%l", 0, $for_content2__$params);
const $else_content__entries = /*@__PURE__*/ _if_closure(3, 1, ($scope) => {
	_text($scope.b, $scope._.h.reduce((sum, e) => sum + e.product.price, 0));
	$else_content__for($scope, [$scope._.h, function(entry) {
		return entry.id;
	}]);
});
const $else_content__setup = $else_content__entries;
const $Cart_content__entries = /*@__PURE__*/ _const_persisted(7, ($scope) => {
	$Cart_content__entries_length($scope, $scope.h?.length);
	$else_content__entries($scope);
});
const $Cart_content__list__OR__products = /*@__PURE__*/ _or(6, ($scope) => $Cart_content__entries($scope, $scope.e.map((id) => ({
	product: $scope.f.find((p) => p.id === id),
	id
}))), 1, 1);
const $Cart_content__products = _var_resume("a24", /*@__PURE__*/ _let_persisted(5, $Cart_content__list__OR__products));
const $Cart_content__list = _var_resume("a3", /*@__PURE__*/ _const_persisted(4, ($scope) => {
	$Cart_content__products($scope, getProducts?.($scope.e) || []);
	$Cart_content__list__OR__products($scope);
}));
const $Cart_content__if = /*@__PURE__*/ _if(3, "<p class=cart>cart is empty</p>", "b", 0, "<ul class=cart></ul><p class=total>total $<!></p>", " bDb%l", $else_content__setup);
const $Cart_content__entries_length = ($scope, entries_length) => $Cart_content__if($scope, !entries_length ? 0 : 1);
const $count = _var_resume("a25", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $else_content2_holes = /*@__PURE__*/ _update_scopes({
	"Nsrc:a": /*@__PURE__*/ _update_named_attr("a", "src"),
	"Nalt:a": /*@__PURE__*/ _update_named_attr("a", "alt"),
	"Qb": /*@__PURE__*/ _update_text("b"),
	"Qc": /*@__PURE__*/ _update_text("c")
});
const $products_seed = _update_signal("a24");
const $count_seed = _update_signal("a25");
const $await_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_region("a")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a6");
};
const $else_content2__update = ($patch, $live) => {
	$else_content2_holes($patch, $live);
	if ("d" in $patch) $merge$2($patch["d"], $live["d"]);
	if ("Ae" in $patch) _update_branch($patch, $live, "e", $try_content__update, "a9", "a7");
};
const $Item_content__update = ($patch, $live) => {
	if ("c" in $patch) $live["c"] = $patch["c"];
	if ("d" in $patch) $live["d"] = $patch["d"];
	if ("e" in $patch) $live["e"] = $patch["e"];
	if ("f" in $patch) $live["f"] = $patch["f"];
	if ("Da" in $patch) _update_if($patch, $live, "Da", "Aa", [0, $else_content2__update], ["a11", "a10"]);
};
const $Cart_content__update = ($patch, $live) => {
	if ("f" in $patch) _update_seed($live, $products_seed, $patch["f"]);
	if ("a" in $patch) $merge$3($patch["a"], $live["a"]);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("c" in $patch) $merge$1($patch["c"], $live["c"]);
};
const $noop_update = () => {};
_update_content("a7", $noop_update);
_update_content("a12", $Item_content__update);
_update_content("a5", $Cart_content__update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/actions.marko
const $list = _var_resume("b1", /*@__PURE__*/ _const_persisted(10, ($scope) => $list_length($scope, $scope.k?.length)));
const $list_length = ($scope, list_length) => _text($scope.f, list_length);
const $added = /*@__PURE__*/ _let_persisted(12, ($scope) => _text($scope.d, $scope.m));
const $setup__script$2 = _script_update("b2", ($scope) => _on($scope.c, "click", function() {
	$added($scope, $scope.m + 1);
	_var_change($scope.a, [...$scope.k, $scope.j]);
}));

// tags/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("c2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a7", "loading recommendations…", "b");
const $for_content2__entry_product_title = ($scope, entry_product_title) => _text($scope.a, entry_product_title);
const $for_content2__entry_product_price = ($scope, entry_product_price) => _text($scope.b, entry_product_price);
const $for_content2__$params = ($scope, $params3) => {
	$for_content2__entry_product_title($scope, $params3[0]?.product?.title);
	$for_content2__entry_product_price($scope, $params3[0]?.product?.price);
};
const $else_content__for = /*@__PURE__*/ _for_of(0, "<li><!> $<!></li>", "D%c%l", 0, $for_content2__$params);
const $else_content__entries = /*@__PURE__*/ _if_closure(3, 1, ($scope) => {
	_text($scope.b, $scope._.h.reduce((sum, e) => sum + e.product.price, 0));
	$else_content__for($scope, [$scope._.h, function(entry) {
		return entry.id;
	}]);
});
const $else_content__setup = $else_content__entries;
const $Cart_content__entries = /*@__PURE__*/ _const_persisted(7, ($scope) => {
	$Cart_content__entries_length($scope, $scope.h?.length);
	$else_content__entries($scope);
});
const $Cart_content__list__OR__products = /*@__PURE__*/ _or(6, ($scope) => $Cart_content__entries($scope, $scope.e.map((id) => ({
	product: $scope.f.find((p) => p.id === id),
	id
}))), 1, 1);
const $Cart_content__products = /*@__PURE__*/ _let_persisted(5, $Cart_content__list__OR__products);
const $Cart_content__list = _var_resume("a3", /*@__PURE__*/ _const_persisted(4, ($scope) => {
	$Cart_content__products($scope, getProducts?.($scope.e) || []);
	$Cart_content__list__OR__products($scope);
}));
const $Cart_content__if = /*@__PURE__*/ _if(3, "<p class=cart>cart is empty</p>", "b", 0, "<ul class=cart></ul><p class=total>total $<!></p>", " bDb%l", $else_content__setup);
const $Cart_content__entries_length = ($scope, entries_length) => $Cart_content__if($scope, !entries_length ? 0 : 1);
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a13", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));

// data.js
const getProducts = typeof window === "undefined" ? (ids) => ids.map((id) => ({
	id,
	title: `Product ${id}`,
	price: id * 100 + .5
})) : void 0;

// tags/shared-list.marko
const subsByKey = {};
const $value = /*@__PURE__*/ _let_persisted(3, ($scope) => _return($scope, $scope.d));
const $input_name__script = _script_refresh("d2", ($scope) => {
	{
		const subs = subsByKey[$scope.c] ??= /* @__PURE__ */ new Set();
		const sub = () => $value($scope, $scope.$.data[$scope.c]);
		$signal($scope, 0).onabort = () => subs.delete(sub);
		subs.add(sub);
	}
});
function $valueChange($scope) {
	return function(next) {
		$scope.$.data[$scope.c] = next;
		subsByKey[$scope.c]?.forEach((cb) => cb());
	};
}
_resume("d0", $valueChange);
