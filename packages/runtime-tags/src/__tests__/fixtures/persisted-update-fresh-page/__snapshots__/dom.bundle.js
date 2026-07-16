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
const $placeholder_content = _content_resume("a12", "loading recommendations…", "b");
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
const $Cart_content__list = _var_resume("a16", /*@__PURE__*/ _const_persisted(4, ($scope) => {
	$Cart_content__products($scope, getProducts?.($scope.e) || []);
	$Cart_content__list__OR__products($scope);
}));
const $Cart_content__if = /*@__PURE__*/ _if(3, "<p class=cart>cart is empty</p>", "b", 0, "<ul class=cart></ul><p class=total>total $<!></p>", " bDb%l", $else_content__setup);
const $Cart_content__entries_length = ($scope, entries_length) => $Cart_content__if($scope, !entries_length ? 0 : 1);
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a17", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));

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
const $update2$3 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $value_seed, _patch["d"]);
	if ("c" in _patch) $input_name_update(_live, _patch["c"]);
};
const _merge$3 = _resume("d1", $update2$3);
_update_content("d", _merge$3);

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
const $update2$2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("m" in _patch) _update_seed(_live, $added_seed, _patch["m"]);
	if ("j" in _patch) $productId_update(_live, _patch["j"]);
	if ("a" in _patch) _merge$3(_patch["a"], _live["a"]);
};
const _merge$2 = _resume("b0", $update2$2);
_update_content("b", _merge$2);

// tags/layout.marko.persisted.mjs
const $open = _var_resume("c3", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand")));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
const $open_seed = _update_signal("c3");
const $update2$1 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $open_seed, _patch["g"]);
	if ("Dc" in _patch || "Ac" in _patch) _update_dynamic(_patch, _live, "Dc", "Ac");
};
const _merge$1 = _resume("c1", $update2$1);
_update_content("c", _merge$1);

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
const $Cart_content__products = _var_resume("a18", /*@__PURE__*/ _let_persisted(5, $Cart_content__list__OR__products));
const $Cart_content__list = _var_resume("a16", /*@__PURE__*/ _const_persisted(4, ($scope) => {
	$Cart_content__products($scope, getProducts?.($scope.e) || []);
	$Cart_content__list__OR__products($scope);
}));
const $Cart_content__if = /*@__PURE__*/ _if(3, "<p class=cart>cart is empty</p>", "b", 0, "<ul class=cart></ul><p class=total>total $<!></p>", " bDb%l", $else_content__setup);
const $Cart_content__entries_length = ($scope, entries_length) => $Cart_content__if($scope, !entries_length ? 0 : 1);
const $count = _var_resume("a19", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $for_content3_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content3_holes($p, $l));
const $else_content2_holes = /*@__PURE__*/ _update_scopes({
	"Nsrc:a": /*@__PURE__*/ _update_named_attr("a", "src"),
	"Nalt:a": /*@__PURE__*/ _update_named_attr("a", "alt"),
	"Qb": /*@__PURE__*/ _update_text("b"),
	"Qc": /*@__PURE__*/ _update_text("c")
});
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Nclass:a": /*@__PURE__*/ _update_attr("a", _attr_class),
	"Ndata-tag:a": /*@__PURE__*/ _update_named_attr("a", "data-tag"),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $products_seed = _update_signal("a18");
const $count_seed = _update_signal("a19");
const $await_content__update = (_patch, _live) => {
	if ("Aa" in _patch) $for_update(_live, [_patch["Aa"], "M"]);
};
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content__update);
};
const $else_content2__update = (_patch, _live) => {
	$else_content2_holes(_patch, _live);
	if ("d" in _patch) _merge$2(_patch["d"], _live["d"]);
	if ("Ae" in _patch) _update_branch(_patch, _live, "e", $try_content__update);
};
const $Item_content__update = (_patch, _live) => {
	if ("c" in _patch) _live["c"] = _patch["c"];
	if ("d" in _patch) _live["d"] = _patch["d"];
	if ("e" in _patch) _live["e"] = _patch["e"];
	if ("f" in _patch) _live["f"] = _patch["f"];
	if ("Da" in _patch) _update_if(_patch, _live, "Da", "Aa", [0, $else_content2__update]);
};
const $Cart_content__update = (_patch, _live) => {
	if ("f" in _patch) _update_seed(_live, $products_seed, _patch["f"]);
	if ("a" in _patch) _merge$3(_patch["a"], _live["a"]);
	if ("Ac" in _patch) _update_for(_patch["Ac"], _live["Ac"], $for_content_holes);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("c" in _patch) _merge$1(_patch["c"], _live["c"]);
};
const $noop_update = () => {};
_update_content("a12", $noop_update);
_update_content("a8", $Item_content__update);
_update_content("a3", $Cart_content__update);
const _merge = _resume("a15", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
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
