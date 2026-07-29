// tags/shared-list.marko.persisted.mjs
const $template$3 = "";
const $walks$3 = "";
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
_static_shells({
	"d1": ["", ""],
	"d": ["", ""]
});
const $value_seed = _update_signal("d3");
const $input_name_update = _update_signal("d4");
const $construct$3 = ($scope) => {
	_construct_effect($scope, $input_name__script);
};
const $update2$3 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $value_seed, $patch["d"]);
	if ("c" in $patch) $input_name_update($live, $patch["c"]);
};
_construct("d1", $construct$3);
const $merge$3 = _resume("d1", $update2$3);
_update_content("d", $merge$3, $construct$3);

// tags/actions.marko.persisted.mjs
const $template$2 = /*@__PURE__*/ ((_w0) => `${_w0}<!><button class=add>added <!> of <!> (<!> in cart)</button>`)("");
const $walks$2 = /*@__PURE__*/ ((_w0) => `0${_w0}&%b Db%c%c%l`)("");
const $productId = _var_resume("b3", /*@__PURE__*/ _const_persisted(10, ($scope) => _text($scope.f, $scope.k)));
const $list = _var_resume("b1", /*@__PURE__*/ _const_persisted(11, ($scope) => $list_length($scope, $scope.l?.length)));
const $list_length = ($scope, list_length) => _text($scope.g, list_length);
const $added = _var_resume("b4", /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.e, $scope.n)));
const $setup__script$2 = _script_shared(($scope) => _on($scope.d, "click", function() {
	$added($scope, $scope.n + 1);
	_var_change($scope.a, [...$scope.l, $scope.k]);
}));
_static_shells({
	"b0": [$template$2, $walks$2],
	"b": [$template$2, $walks$2]
});
const $added_seed = _update_signal("b4");
const $productId_update = _update_signal("b3");
const $_holes$1 = /*@__PURE__*/ _update_scopes({ "Qg": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("g")) });
const $construct$2 = ($scope) => {
	_construct_child($scope, "a", "d1");
	_var($scope, 0, $list);
	_text($scope.e, $scope.n);
	_text($scope.f, $scope.k);
	_construct_effect($scope, $setup__script$2);
};
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $added_seed, $patch["n"]);
	if ("k" in $patch) $productId_update($live, $patch["k"]);
	$_holes$1($patch, $live);
	if ("a" in $patch) $merge$3($patch["a"], $live["a"]);
};
_construct("b0", $construct$2);
const $merge$2 = _resume("b0", $update2$2);
_update_content("b", $merge$2, $construct$2);

// tags/layout.marko.persisted.mjs
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $open = _var_resume("c3", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand")));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
_static_shells({
	"c1": [$template$1, $walks$1],
	"c": [$template$1, $walks$1]
});
const $open_seed = _update_signal("c3");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("b")) });
const $construct$1 = ($scope) => {
	_construct_effect($scope, $setup__script$1);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $open_seed, $patch["g"]);
	$_holes($patch, $live);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_construct("c1", $construct$1);
const $merge$1 = _resume("c1", $update2$1);
_update_content("c", $merge$1, $construct$1);

// template.marko.persisted.mjs
const $Cart_content__walks = /*@__PURE__*/ ((_w0) => `0${_w0}&%b b%c`)(""), $Cart_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><nav class=tags></nav><!><!>`)(""), $else_content__walks = " bDb%l", $else_content__template = "<ul class=cart></ul><p class=total>total $<!></p>", $if_content__walks = "b", $if_content__template = "<p class=cart>cart is empty</p>", $for_content2__walks = "D%c%l", $for_content2__template = "<li><!> $<!></li>", $Item_content__walks = "b%c", $Item_content__template = "<!><!><!>", $else_content2__walks = /*@__PURE__*/ ((_w0) => ` bD lDb%l/${_w0}&%b%c`)($walks$2), $else_content2__template = /*@__PURE__*/ ((_w0) => `<img class=thumb><h2 class=title> </h2><div class=price>$<!></div>${_w0}<!><!><!>`)($template$2), $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $if_content2__walks = "b", $if_content2__template = "<h2>not found</h2>", $await_content__walks = " b", $await_content__template = "<ul class=recs></ul>";
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)($walks$1);
_enable_catch();
const $for_content2__entry_product_title = ($scope, entry_product_title) => _text($scope.a, entry_product_title);
const $for_content2__entry_product_price = ($scope, entry_product_price) => _text($scope.b, entry_product_price);
const $for_content2__$params = ($scope, $params3) => {
	$for_content2__entry_product_title($scope, $params3[0]?.product?.title);
	$for_content2__entry_product_price($scope, $params3[0]?.product?.price);
};
const $else_content__for = /*@__PURE__*/ _for_of(0, $for_content2__template, $for_content2__walks, 0, $for_content2__$params);
const $else_content__entries = /*@__PURE__*/ _if_closure(4, 1, ($scope) => {
	_text($scope.b, $scope._.i.reduce((sum, e) => sum + e.product.price, 0));
	$else_content__for($scope, [$scope._.i, function(entry) {
		return entry.id;
	}]);
});
const $else_content__setup = $else_content__entries;
const $Cart_content__entries = /*@__PURE__*/ _const_persisted(8, ($scope) => {
	$Cart_content__entries_length($scope, $scope.i?.length);
	$else_content__entries($scope);
});
const $Cart_content__list__OR__products = /*@__PURE__*/ _or(7, ($scope) => $Cart_content__entries($scope, $scope.f.map((id) => ({
	product: $scope.g.find((p) => p.id === id),
	id
}))), 1, 1);
const $Cart_content__products = _var_resume("a27", /*@__PURE__*/ _let_persisted(6, $Cart_content__list__OR__products));
const $Cart_content__list = _var_resume("a3", /*@__PURE__*/ _const_persisted(5, ($scope) => {
	$Cart_content__products($scope, getProducts?.($scope.f) || []);
	$Cart_content__list__OR__products($scope);
}));
const $Cart_content__if = /*@__PURE__*/ _if(4, $if_content__template, $if_content__walks, 0, $else_content__template, $else_content__walks, $else_content__setup);
const $Cart_content__entries_length = ($scope, entries_length) => $Cart_content__if($scope, !entries_length ? 0 : 1);
const $count = _var_resume("a28", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a10": [$await_content__template, $await_content__walks],
	"a19": [$await_content__template, $await_content__walks],
	"a15": [$if_content2__template, $if_content2__walks],
	"a20": [$if_content2__template, $if_content2__walks],
	"a13": [$try_content__template, $try_content__walks],
	"a12": [$try_content__template, $try_content__walks],
	"a14": [$else_content2__template, $else_content2__walks],
	"a21": [$else_content2__template, $else_content2__walks],
	"a22": [$Item_content__template, $Item_content__walks],
	"a17": [$Item_content__template, $Item_content__walks],
	"a5": [$for_content2__template, $for_content2__walks],
	"a23": [$for_content2__template, $for_content2__walks],
	"a7": [$if_content__template, $if_content__walks],
	"a24": [$if_content__template, $if_content__walks],
	"a6": [$else_content__template, $else_content__walks],
	"a25": [$else_content__template, $else_content__walks],
	"a26": [$Cart_content__template, $Cart_content__walks],
	"a8": [$Cart_content__template, $Cart_content__walks],
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $else_content2_holes = /*@__PURE__*/ _update_scopes({
	"Nsrc:a": /*@__PURE__*/ _update_named_attr("a", "src"),
	"Nalt:a": /*@__PURE__*/ _update_named_attr("a", "alt"),
	"Qb": /*@__PURE__*/ _update_text("b"),
	"Qc": /*@__PURE__*/ _update_text("c")
});
const $for_content2_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("a")),
	"Qb": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("b"))
});
const $else_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("b")) });
const $products_seed = _update_signal("a27");
const $count_seed = _update_signal("a28");
const $await_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_region("a")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a10");
};
const $else_content2__construct = ($scope) => {
	_attr($scope.a, "src", $scope._.c);
	_attr($scope.a, "alt", $scope._.d);
	_text($scope.b, $scope._.d);
	_construct_child($scope, "d", "b0");
};
const $else_content2__update = ($patch, $live) => {
	$else_content2_holes($patch, $live);
	if ("d" in $patch) $merge$2($patch["d"], $live["d"]);
	if ("Af" in $patch) _update_branch($patch, $live, "f", $try_content__update, "a13", "a11");
};
const $Item_content__update = ($patch, $live) => {
	if ("c" in $patch) $live["c"] = $patch["c"];
	if ("d" in $patch) $live["d"] = $patch["d"];
	if ("e" in $patch) $live["e"] = $patch["e"];
	if ("f" in $patch) $live["f"] = $patch["f"];
	if ("Da" in $patch) _update_if($patch, $live, "Da", "Aa", [0, $else_content2__update], ["a15", "a14"]);
};
const $else_content__update = ($patch, $live) => {
	$else_content_holes($patch, $live);
	if ("Aa" in $patch) _update_for($patch["Aa"], $live["Aa"], $for_content2_holes, $live, "Aa", "a5");
};
const $Cart_content__construct = ($scope) => {
	_construct_child($scope, "a", "d1");
	_var($scope, 0, $Cart_content__list);
	if ("De" in $scope) _update_if($scope, $scope, "De", "Ae", [0, $else_content__update], ["a7", "a6"]);
};
const $Cart_content__update = ($patch, $live) => {
	if ("g" in $patch) _update_seed($live, $products_seed, $patch["g"]);
	if ("a" in $patch) $merge$3($patch["a"], $live["a"]);
	if ("Dd" in $patch) _update_region("d")($patch, $live);
	if ("Ae" in $patch) _update_if_state($patch, $live, "De", "Ae", [0, $else_content__update]);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.e);
	_construct_child($scope, "c", "c1");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("e" in $patch) _update_seed($live, $count_seed, $patch["e"]);
	if ("c" in $patch) $merge$1($patch["c"], $live["c"]);
};
_construct("a14", $else_content2__construct);
_construct("a26", $Cart_content__construct);
_construct("a2", $construct);
const $noop_update = () => {};
_update_content("a29", $noop_update);
_update_content("a10", $await_content__update);
_update_content("a11", $noop_update);
_update_content("a15", $noop_update);
_update_content("a13", $try_content__update);
_update_content("a14", $else_content2__update);
_update_content("a17", $Item_content__update);
_update_content("a5", $for_content2_holes);
_update_content("a7", $noop_update);
_update_content("a30", $noop_update);
_update_content("a6", $else_content__update);
_update_content("a8", $Cart_content__update, $Cart_content__construct);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/actions.marko
const $list = _var_resume("b1", /*@__PURE__*/ _const_persisted(11, ($scope) => $list_length($scope, $scope.l?.length)));
const $list_length = ($scope, list_length) => _text($scope.g, list_length);
const $added = /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.e, $scope.n));
const $setup__script$2 = _script_update("b2", ($scope) => _on($scope.d, "click", function() {
	$added($scope, $scope.n + 1);
	_var_change($scope.a, [...$scope.l, $scope.k]);
}));

// tags/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("c2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a11", "loading recommendations…");
const $for_content2__entry_product_title = ($scope, entry_product_title) => _text($scope.a, entry_product_title);
const $for_content2__entry_product_price = ($scope, entry_product_price) => _text($scope.b, entry_product_price);
const $for_content2__$params = ($scope, $params3) => {
	$for_content2__entry_product_title($scope, $params3[0]?.product?.title);
	$for_content2__entry_product_price($scope, $params3[0]?.product?.price);
};
const $else_content__for = /*@__PURE__*/ _for_of(0, "<li><!> $<!></li>", "D%c%", 0, $for_content2__$params);
const $else_content__entries = /*@__PURE__*/ _if_closure(4, 1, ($scope) => {
	_text($scope.b, $scope._.i.reduce((sum, e) => sum + e.product.price, 0));
	$else_content__for($scope, [$scope._.i, function(entry) {
		return entry.id;
	}]);
});
const $else_content__setup = $else_content__entries;
const $Cart_content__entries = /*@__PURE__*/ _const_persisted(8, ($scope) => {
	$Cart_content__entries_length($scope, $scope.i?.length);
	$else_content__entries($scope);
});
const $Cart_content__list__OR__products = /*@__PURE__*/ _or(7, ($scope) => $Cart_content__entries($scope, $scope.f.map((id) => ({
	product: $scope.g.find((p) => p.id === id),
	id
}))), 1, 1);
const $Cart_content__products = /*@__PURE__*/ _let_persisted(6, $Cart_content__list__OR__products);
const $Cart_content__list = _var_resume("a3", /*@__PURE__*/ _const_persisted(5, ($scope) => {
	$Cart_content__products($scope, getProducts?.($scope.f) || []);
	$Cart_content__list__OR__products($scope);
}));
const $Cart_content__if = /*@__PURE__*/ _if(4, "<p class=cart>cart is empty</p>", 0, 0, "<ul class=cart></ul><p class=total>total $<!></p>", " bDb%", $else_content__setup);
const $Cart_content__entries_length = ($scope, entries_length) => $Cart_content__if($scope, !entries_length ? 0 : 1);
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a18", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
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
