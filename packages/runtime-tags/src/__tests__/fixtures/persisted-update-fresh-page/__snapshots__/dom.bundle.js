// tags/actions.marko
const $list = _var_resume("b0", /*@__PURE__*/ _const_persisted(10, ($scope) => $list_length($scope, $scope.k?.length)));
const $list_length = ($scope, list_length) => _text($scope.f, list_length);
const $added = /*@__PURE__*/ _let_persisted(12, ($scope) => _text($scope.d, $scope.m));
const $setup__script$2 = _script_update("b1", ($scope) => _on($scope.c, "click", function() {
	$added($scope, $scope.m + 1);
	_var_change($scope.a, [...$scope.k, $scope.j]);
}));
enableBranchesPersisted();

// tags/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("c0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
enableBranchesPersisted();

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a9", "loading recommendations…", "b");
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
const $Cart_content__list = _var_resume("a2", /*@__PURE__*/ _const_persisted(4, ($scope) => {
	$Cart_content__products($scope, getProducts?.($scope.e) || []);
	$Cart_content__list__OR__products($scope);
}));
const $Cart_content__if = /*@__PURE__*/ _if(3, "<p class=cart>cart is empty</p>", "b", 0, "<ul class=cart></ul><p class=total>total $<!></p>", " bDb%l", $else_content__setup);
const $Cart_content__entries_length = ($scope, entries_length) => $Cart_content__if($scope, !entries_length ? 0 : 1);
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// tags/shared-list.marko.update.mjs
const $value_seed = _update_signal("d2");
const $input_name_update = _update_signal("d3");
const $update$3 = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $value_seed, patch["d"]);
	if ("c" in patch) $input_name_update(live, patch["c"]);
};
const _merge$3 = _resume("d4", $update$3);

// tags/actions.marko.update.mjs
const $added_seed = _update_signal("b2");
const $productId_update = _update_signal("b3");
const $update$2 = (patch, live) => {
	_update_pair(patch, live);
	if ("m" in patch) _update_seed(live, $added_seed, patch["m"]);
	if ("j" in patch) $productId_update(live, patch["j"]);
	if ("a" in patch) _merge$3(patch["a"], live["a"]);
};
const _merge$2 = _resume("b4", $update$2);

// tags/layout.marko.update.mjs
const $open_seed = _update_signal("c2");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $open_seed, patch["g"]);
	if ("Dc" in patch || "Ac" in patch) _update_dynamic(patch, live, "Dc", "Ac");
};
const _merge$1 = _resume("c3", $update$1);

// template.marko.update.mjs
const $for_update = _update_for_keyed(0, (p, l) => _update_scope(p, l));
const $products_seed = _update_signal("a3");
const $count_seed = _update_signal("a1");
const $await_content__update = (patch, live) => {
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $await_content__update);
};
const $else_content2__update = (patch, live) => {
	_update_scope(patch, live);
	if ("d" in patch) _merge$2(patch["d"], live["d"]);
	if ("Ae" in patch) _update_branch(patch, live, "e", $try_content__update);
};
const $Item_content__update = (patch, live) => {
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("Da" in patch) _update_if(patch, live, "Da", "Aa", [0, $else_content2__update]);
};
const $Cart_content__update = (patch, live) => {
	if ("f" in patch) _update_seed(live, $products_seed, patch["f"]);
	if ("a" in patch) _merge$3(patch["a"], live["a"]);
	if ("Ac" in patch) _update_for(patch["Ac"], live["Ac"], _update_scope);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("c" in patch) _merge$1(patch["c"], live["c"]);
};
_update_content("a6", $Item_content__update);
_update_content("a4", $Cart_content__update);
const _merge = _resume("a11", $update);
function createPatch() {
	return createPatch$1(_merge);
}

// data.js
const getProducts = typeof window === "undefined" ? (ids) => ids.map((id) => ({
	id,
	title: `Product ${id}`,
	price: id * 100 + .5
})) : void 0;

// tags/shared-list.marko
const subsByKey = {};
const $value = /*@__PURE__*/ _let_persisted(3, ($scope) => _return($scope, $scope.d));
const $input_name__script = _script_refresh("d1", ($scope) => {
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
enableBranchesPersisted();
