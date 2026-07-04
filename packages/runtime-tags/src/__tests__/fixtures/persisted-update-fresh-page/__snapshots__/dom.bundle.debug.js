// tags/shared-list.marko.update.mjs
const $update$3 = (patch, live) => {
	_update_pair(patch, live);
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_name" in patch) live["input_name"] = patch["input_name"];
	if ("$global" in patch) live["$global"] = patch["$global"];
	if ("$global_data" in patch) live["$global_data"] = patch["$global_data"];
};
var shared_list_marko_update_default = _resume("__tests__/tags/shared-list.marko_0_update", $update$3);

// tags/actions.marko.update.mjs
const $update$2 = (patch, live) => {
	_update_pair(patch, live);
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_id" in patch) live["input_id"] = patch["input_id"];
	if ("productId" in patch) live["productId"] = patch["productId"];
	if ("#childScope/0" in patch) shared_list_marko_update_default(patch["#childScope/0"], live["#childScope/0"]);
	if ("#text/4" in patch) _text(live["#text/4"], patch["#text/4"]);
};
var actions_marko_update_default = _resume("__tests__/tags/actions.marko_0_update", $update$2);

// tags/layout.marko.update.mjs
const $dynamic_update = _update_signal("__tests__/tags/layout.marko_0/update_dynamic_#text/2");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_content" in patch) live["input_content"] = patch["input_content"];
	if ("ConditionalRenderer:#text/2" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", $dynamic_update);
};
var layout_marko_update_default = _resume("__tests__/tags/layout.marko_0_update", $update$1);

// template.marko.update.mjs
const $for_update = _update_for("#ul/0", "__tests__/template.marko_8_content/update", (branch, args) => $for_content__update(args[0], branch));
const $if_update = _update_signal("__tests__/template.marko_2/update_if_#text/0");
const $for_content__update = (patch, live) => {
	if ("$params3" in patch) live["$params3"] = patch["$params3"];
	if ("rec" in patch) live["rec"] = patch["rec"];
	if ("rec_title" in patch) live["rec_title"] = patch["rec_title"];
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
};
const $await_content__update = (patch, live) => {
	if ("$params2" in patch) live["$params2"] = patch["$params2"];
	if ("recs" in patch) live["recs"] = patch["recs"];
	if ("BranchScopes:#ul/0" in patch) $for_update(live, [patch["BranchScopes:#ul/0"], "#LoopKey"]);
};
const $try_content__update = (patch, live) => {
	if ("BranchScopes:#text/0" in patch) _update_branch(patch, live, "#text/0", $await_content__update);
};
const $else_content__update = (patch, live) => {
	if ("UpdateAttr:src:#img/0" in patch) _attr(live["#img/0"], "src", patch["UpdateAttr:src:#img/0"]);
	if ("UpdateAttr:alt:#img/0" in patch) _attr(live["#img/0"], "alt", patch["UpdateAttr:alt:#img/0"]);
	if ("#text/1" in patch) _text(live["#text/1"], patch["#text/1"]);
	if ("#text/2" in patch) _text(live["#text/2"], patch["#text/2"]);
	if ("#childScope/3" in patch) actions_marko_update_default(patch["#childScope/3"], live["#childScope/3"]);
	if ("BranchScopes:#text/4" in patch) _update_branch(patch, live, "#text/4", $try_content__update);
};
const $Item_content__update = (patch, live) => {
	if ("product" in patch) live["product"] = patch["product"];
	if ("product_image" in patch) live["product_image"] = patch["product_image"];
	if ("product_title" in patch) live["product_title"] = patch["product_title"];
	if ("product_price" in patch) live["product_price"] = patch["product_price"];
	if ("product_id" in patch) live["product_id"] = patch["product_id"];
	if ("ConditionalRenderer:#text/0" in patch) {
		$if_update(live, patch["ConditionalRenderer:#text/0"]);
		const $patchBranch = patch["BranchScopes:#text/0"], $liveBranch = _update_flush_fresh(live["BranchScopes:#text/0"]), $branchMerge = [0, $else_content__update][patch["ConditionalRenderer:#text/0"]];
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("Cart" in patch) live["Cart"] = patch["Cart"];
	if ("Item" in patch) live["Item"] = patch["Item"];
	if ("$global" in patch) live["$global"] = patch["$global"];
	if ("$global_productId" in patch) live["$global_productId"] = patch["$global_productId"];
	if ("$global_view" in patch) live["$global_view"] = patch["$global_view"];
	if ("#childScope/2" in patch) layout_marko_update_default(patch["#childScope/2"], live["#childScope/2"]);
};
_update_content("__tests__/template.marko_2_content", $Item_content__update);
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

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

// tags/shared-list.marko
const $template$3 = "";
const $walks$3 = "";
const $setup$3 = () => {};
const subsByKey = {};
const $value = /* @__PURE__ */ _let("value/3", ($scope) => _return($scope, $scope.value));
const $input_name__OR__$global_data__script = _script_update("__tests__/tags/shared-list.marko_0_input_name_$global_data", ($scope) => {
	{
		const subs = subsByKey[$scope.input_name] ??= new Set();
		const sub = () => $value($scope, $scope.$global.data[$scope.input_name]);
		$signal($scope, 0).onabort = () => subs.delete(sub);
		subs.add(sub);
	}
});
const $input_name__OR__$global_data = /* @__PURE__ */ _or(6, ($scope) => {
	$signalReset($scope, 0);
	_return_change($scope, $valueChange($scope));
	$input_name__OR__$global_data__script($scope);
}, 0);
const $input_name = /* @__PURE__ */ _const("input_name", ($scope) => {
	$value($scope, $scope.$global.data[$scope.input_name]);
	$input_name__OR__$global_data($scope);
});
const $input$2 = ($scope, input) => $input_name($scope, input.name);
function $valueChange($scope) {
	return function(next) {
		$scope.$global.data[$scope.input_name] = next;
		subsByKey[$scope.input_name]?.forEach((cb) => cb());
	};
}
_resume("__tests__/tags/shared-list.marko_0/valueChange", $valueChange);
var shared_list_default = /* @__PURE__ */ _template("__tests__/tags/shared-list.marko", "", "", $setup$3, $input$2);

// tags/actions.marko
const $template$2 = /* @__PURE__ */ ((_w0) => `${_w0}<button class=add>added <!> of <!> (<!> in cart)</button>`)("");
const $walks$2 = /* @__PURE__ */ ((_w0) => `0${_w0}& Db%c%c%l`)("");
const $productId = /* @__PURE__ */ _const("productId", ($scope) => _text($scope["#text/4"], $scope.productId));
const $input_id = ($scope, input_id) => {
	if (!_updating()) $productId($scope, input_id);
};
const $list = _var_resume("__tests__/tags/actions.marko_0_list/var", /* @__PURE__ */ _const("list", ($scope) => $list_length($scope, $scope.list?.length)));
const $list_length = ($scope, list_length) => _text($scope["#text/5"], list_length);
const $added = /* @__PURE__ */ _let("added/12", ($scope) => _text($scope["#text/3"], $scope.added));
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
var actions_default = /* @__PURE__ */ _template("__tests__/tags/actions.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/layout.marko
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/2");
const $open = /* @__PURE__ */ _let("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "collapse" : "expand"));
const $setup__script$1 = _script_update("__tests__/tags/layout.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $dynamicTag = _var_resume("__tests__/tags/layout.marko_0/update_dynamic_#text/2", /* @__PURE__ */ _dynamic_tag("#text/2"));
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_default = /* @__PURE__ */ _template("__tests__/tags/layout.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
_enable_catch();
const $for_content__rec_title = ($scope, rec_title) => _text($scope["#text/0"], rec_title);
const $for_content__$params = ($scope, $params3) => $for_content__rec_title($scope, $params3[0]?.title);
const $for_content_content = _resume("__tests__/template.marko_8_content/update", [
	"<li> </li>",
	"D l",
	0
]);
const $await_content__for = /* @__PURE__ */ _for_of("#ul/0", $for_content_content[0], $for_content_content[1], $for_content_content[2], $for_content__$params);
const $await_content__recs = ($scope, recs) => $await_content__for($scope, [recs, function(rec) {
	return rec.id;
}]);
const $await_content__$params = ($scope, $params2) => $await_content__recs($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_6_content", "loading recommendations…", "b");
const $await_content = /* @__PURE__ */ _await_content("#text/0", "<ul class=recs></ul>", " b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $try_content__product_id = /* @__PURE__ */ _closure_get("product_id", ($scope) => {
	if (!_updating()) $try_content__await_promise($scope, getRecommendations($scope._._.product_id));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	if (!_updating()) $try_content__product_id($scope);
	$await_content($scope);
};
const $else_content__product_image = /* @__PURE__ */ _if_closure("#text/0", 1, ($scope) => _attr($scope["#img/0"], "src", $scope._.product_image));
const $else_content__try = /* @__PURE__ */ _try("#text/4", "<!><!><!>", "b%c", $try_content__setup);
const $else_content__setup = ($scope) => {
	if (!_updating()) $else_content__product_image._($scope);
	if (!_updating()) $else_content__product_title._($scope);
	if (!_updating()) $else_content__product_price._($scope);
	if (!_updating()) $else_content__product_id._($scope);
	$setup$2($scope["#childScope/3"]);
	$else_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $else_content__product_title = /* @__PURE__ */ _if_closure("#text/0", 1, ($scope) => {
	_attr($scope["#img/0"], "alt", $scope._.product_title);
	_text($scope["#text/1"], $scope._.product_title);
});
const $else_content__product_price = /* @__PURE__ */ _if_closure("#text/0", 1, ($scope) => _text($scope["#text/2"], $scope._.product_price.toFixed(2)));
const $else_content__product_id = /* @__PURE__ */ _if_closure("#text/0", 1, ($scope) => $input_id($scope["#childScope/3"], $scope._.product_id));
const $Item_content__if = _var_resume("__tests__/template.marko_2/update_if_#text/0", /* @__PURE__ */ _if("#text/0", "<h2>not found</h2>", "b", 0, /* @__PURE__ */ ((_w0) => `<img class=thumb><h2 class=title> </h2><div class=price>$<!></div>${_w0}<!><!>`)($template$2), /* @__PURE__ */ ((_w0) => ` bD lDb%l/${_w0}&%c`)($walks$2), $else_content__setup));
const $Item_content__product = ($scope, product) => {
	$Item_content__product_image($scope, product?.image);
	$Item_content__product_title($scope, product?.title);
	$Item_content__product_price($scope, product?.price);
	$Item_content__product_id($scope, product?.id);
	$Item_content__if($scope, !product ? 0 : 1);
};
const $Item_content__$global_productId = /* @__PURE__ */ _closure_get("$global_productId", ($scope) => {
	if (!_updating()) $Item_content__product($scope, $scope.$global.productId && getProduct($scope.$global.productId));
});
const $Item_content__setup = ($scope) => {
	if (!_updating()) $Item_content__$global_productId($scope);
};
const $Item_content__product_image = /* @__PURE__ */ _const("product_image", $else_content__product_image);
const $Item_content__product_title = /* @__PURE__ */ _const("product_title", $else_content__product_title);
const $Item_content__product_price = /* @__PURE__ */ _const("product_price", $else_content__product_price);
const $Item_content__product_id__closure = /* @__PURE__ */ _closure($try_content__product_id);
const $Item_content__product_id = /* @__PURE__ */ _const("product_id", ($scope) => {
	$else_content__product_id($scope);
	$Item_content__product_id__closure($scope);
});
const $Item_content = _content_resume("__tests__/template.marko_2_content", "<!><!><!>", "b%c", $Item_content__setup);
const $Cart_content = _content_resume("__tests__/template.marko_1_content", "<p class=cart>cart is empty</p>", "b");
const $count = /* @__PURE__ */ _let("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $Cart__OR__Item__OR__$global_view = /* @__PURE__ */ _or(9, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "item" ? $scope.Item : $scope.Cart));
const $Cart = /* @__PURE__ */ _const("Cart", $Cart__OR__Item__OR__$global_view);
const $Item = /* @__PURE__ */ _const("Item", $Cart__OR__Item__OR__$global_view);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!_updating()) $Cart($scope, { content: $Cart_content($scope) });
	if (!_updating()) $Item($scope, { content: $Item_content($scope) });
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
