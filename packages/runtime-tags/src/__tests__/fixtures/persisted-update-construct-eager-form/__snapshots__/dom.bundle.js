// tags/shared-list.marko.persisted.mjs
const $template$2 = "";
const $walks$2 = "";
const $value = _var_resume("c3", /*@__PURE__*/ _let_persisted(3, ($scope) => _return($scope, $scope.d)));
const $input_name__script = _script_shared(($scope) => {
	{
		const subs = subsByKey[$scope.c] ??= /* @__PURE__ */ new Set();
		const sub = () => $value($scope, $scope.$.data[$scope.c]);
		$signal($scope, 0).onabort = () => subs.delete(sub);
		subs.add(sub);
	}
});
const $input_name = _var_resume("c4", /*@__PURE__*/ _const_persisted(2, ($scope) => {
	$signalReset($scope, 0);
	_return_change($scope, $valueChange$1($scope));
	$value($scope, $scope.$.data[$scope.c]);
	$input_name__script($scope);
}));
function $valueChange$1($scope) {
	return function(next) {
		$scope.$.data[$scope.c] = next;
		subsByKey[$scope.c]?.forEach((cb) => cb());
	};
}
_static_shells({
	"c1": ["", ""],
	"c": ["", ""]
});
const $value_seed = _update_signal("c3");
const $input_name_update = _update_signal("c4");
const $construct$2 = ($scope) => {
	_construct_effect($scope, $input_name__script);
};
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $value_seed, $patch["d"]);
	if ("c" in $patch) $input_name_update($live, $patch["c"]);
};
_construct("c1", $construct$2);
const $merge$2 = _resume("c1", $update2$2);
_update_content("c", $merge$2, $construct$2);

// tags/add-form.marko.persisted.mjs
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<!><button class=watch> </button><form class=add><input type=hidden name=productId class=pid><input type=number name=quantity min=1 class=qty><button type=button class=plus>+</button></form>`)("");
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}&%b D l D b b l`)("");
const $cart = _var_resume("b2", /*@__PURE__*/ _const_persisted(12));
const $watched = _var_resume("b4", /*@__PURE__*/ _let_persisted(14, ($scope) => _text($scope.e, $scope.o ? "watching" : "watch")));
const $quantity = _var_resume("b5", /*@__PURE__*/ _let_persisted(15, ($scope) => _attr_input_value($scope, "h", $scope.p, $valueChange($scope))));
const $setup__script$1 = _script_shared(($scope) => {
	_on($scope.d, "click", function() {
		$watched($scope, !$scope.o);
	});
	_on($scope.f, "submit", function() {
		const i = $scope.m.findIndex((item) => item.productId === $scope.n);
		const prev = i !== -1 && $scope.m[i];
		const item = {
			productId: $scope.n,
			quantity: (prev ? prev.quantity : 0) + $scope.p
		};
		_var_change($scope.a, prev ? $scope.m.with(i, item) : [...$scope.m, item]);
	});
	_attr_input_value_script($scope, "h");
	_on($scope.i, "click", function() {
		$quantity($scope, $scope.p + 1);
	});
});
const $productId = _var_resume("b6", /*@__PURE__*/ _const_persisted(13, ($scope) => _attr($scope.g, "value", $scope.n)));
function $valueChange($scope) {
	return (_new_quantity) => {
		$quantity($scope, Number(_new_quantity));
	};
}
_static_shells({
	"b1": [$template$1, $walks$1],
	"b": [$template$1, $walks$1]
});
const $watched_seed = _update_signal("b4");
const $quantity_seed = _update_signal("b5");
const $productId_update = _update_signal("b6");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qe": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("e")) });
const $construct$1 = ($scope) => {
	_construct_child($scope, "a", "c1");
	_var($scope, 0, $cart);
	_attr($scope.g, "value", $scope.n);
	_attr_input_value($scope, "h", $scope.p, $scope["Eh"]);
	_construct_effect($scope, $setup__script$1);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("o" in $patch) _update_seed($live, $watched_seed, $patch["o"]);
	if ("p" in $patch) _update_seed($live, $quantity_seed, $patch["p"]);
	if ("n" in $patch) $productId_update($live, $patch["n"]);
	$_holes($patch, $live);
	if ("a" in $patch) $merge$2($patch["a"], $live["a"]);
};
_construct("b1", $construct$1);
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1, $construct$1);

// template.marko.persisted.mjs
const $Item_content__walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}&%l`)($walks$1), $Item_content__template = /*@__PURE__*/ ((_w0) => `<section class=item><h2 class=title> </h2>${_w0}<!></section>`)($template$1);
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
_static_shells({
	"a5": [$Item_content__template, $Item_content__walks],
	"a3": [$Item_content__template, $Item_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $Item_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a6");
const $Item_content__construct = ($scope) => {
	_construct_child($scope, "b", "b1");
};
const $Item_content__update = ($patch, $live) => {
	$Item_content_holes($patch, $live);
	if ("b" in $patch) $merge$1($patch["b"], $live["b"]);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_construct("a5", $Item_content__construct);
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a2", $noop_update);
_update_content("a3", $Item_content__update, $Item_content__construct);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/add-form.marko
const $cart = _var_resume("b2", /*@__PURE__*/ _const_persisted(12));
const $watched = /*@__PURE__*/ _let_persisted(14, ($scope) => _text($scope.e, $scope.o ? "watching" : "watch"));
const $quantity = /*@__PURE__*/ _let_persisted(15, ($scope) => _attr_input_value($scope, "h", $scope.p, $valueChange($scope)));
const $setup__script$1 = _script_update("b3", ($scope) => {
	_on($scope.d, "click", function() {
		$watched($scope, !$scope.o);
	});
	_on($scope.f, "submit", function() {
		const i = $scope.m.findIndex((item) => item.productId === $scope.n);
		const prev = i !== -1 && $scope.m[i];
		const item = {
			productId: $scope.n,
			quantity: (prev ? prev.quantity : 0) + $scope.p
		};
		_var_change($scope.a, prev ? $scope.m.with(i, item) : [...$scope.m, item]);
	});
	_attr_input_value_script($scope, "h");
	_on($scope.i, "click", function() {
		$quantity($scope, $scope.p + 1);
	});
});
function $valueChange($scope) {
	return (_new_quantity) => {
		$quantity($scope, Number(_new_quantity));
	};
}
_resume("b0", $valueChange);

// template.marko
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));

// tags/shared-list.marko
const subsByKey = {};
const $value = /*@__PURE__*/ _let_persisted(3, ($scope) => _return($scope, $scope.d));
const $input_name__script = _script_refresh("c2", ($scope) => {
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
_resume("c0", $valueChange);
