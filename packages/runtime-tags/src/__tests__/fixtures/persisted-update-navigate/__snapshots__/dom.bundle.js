// tags/price.marko
const $template = "<span class=price>$<!></span>";
const $walks = "Db%l";
const $setup = () => {};
const $input_amount = ($scope, input_amount) => _text($scope.a, input_amount.toFixed(2));

// template.marko
const $for_content__setup = ($scope) => {
	/* @__PURE__ */ $setup($scope.a);
};
const $for_content__item_price = ($scope, item_price) => $input_amount($scope.a, item_price);
const $for_content__item_name = ($scope, item_name) => _text($scope.b, item_name);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_price($scope, $params2[0]?.price);
	$for_content__item_name($scope, $params2[0]?.name);
};
const $if_content__input_product_sale_percent = /* @__PURE__ */ _if_closure(4, 0, ($scope) => _text($scope.a, $scope._.n));
const $if_content__setup = $if_content__input_product_sale_percent;
const $input_product_featured__OR__expanded = /* @__PURE__ */ _or(16, ($scope) => _attr_class($scope.e, $scope.p && $scope.l && "spotlight"));
const $expanded = /* @__PURE__ */ _let(15, ($scope) => {
	_text($scope.d, $scope.p ? "Hide" : "Show");
	$input_product_featured__OR__expanded($scope);
});
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$expanded($scope, !$scope.p);
}));
const $input_product_featured = _var_resume("a2", /* @__PURE__ */ _const(11, $input_product_featured__OR__expanded));
const $if = _var_resume("a0", /* @__PURE__ */ _if(4, "<em>Save <!>%</em>", "Db%l", $if_content__setup));
const $for_content_content = _resume("a1", [
	/* @__PURE__ */ ((_w0) => `<li>${_w0} <!></li>`)($template),
	/* @__PURE__ */ ((_w0) => `D/${_w0}&b%l`)($walks),
	$for_content__setup
]);
const $for = /* @__PURE__ */ _for_of(5, $for_content_content[0], $for_content_content[1], $for_content_content[2], $for_content__$params);

// tags/price.marko.update.mjs
const $update$1 = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("a" in patch) _text(live["a"], patch["a"]);
};
var price_marko_update_default = _resume("b0", $update$1);

// template.marko.update.mjs
const $input_product_featured_update = _update_signal("a2");
const $if_update = _update_signal("a0");
const $for_update = _update_for(5, "a1", (branch, args) => $for_content__update(args[0], branch));
const $for_content__update = (patch, live) => {
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("a" in patch) price_marko_update_default(patch["a"], live["a"]);
	if ("b" in patch) _text(live["b"], patch["b"]);
};
const $if_content__update = (patch, live) => {
	if ("a" in patch) _text(live["a"], patch["a"]);
};
const $update = (patch, live) => {
	if ("g" in patch) live["g"] = patch["g"];
	if ("h" in patch) live["h"] = patch["h"];
	if ("i" in patch) live["i"] = patch["i"];
	if ("j" in patch) live["j"] = patch["j"];
	if ("k" in patch) live["k"] = patch["k"];
	if ("l" in patch) $input_product_featured_update(live, patch["l"]);
	if ("m" in patch) live["m"] = patch["m"];
	if ("n" in patch) live["n"] = patch["n"];
	if ("o" in patch) live["o"] = patch["o"];
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("Nhref:b" in patch) _attr(live["b"], "href", patch["Nhref:b"]);
	if ("De" in patch) {
		$if_update(live, patch["De"]);
		const $patchBranch = patch["Ae"], $liveBranch = live["Ae"], $branchMerge = $if_content__update;
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
	if ("Af" in patch) $for_update(live, [patch["Af"], "M"]);
};
var template_marko_update_default = _resume("a3", $update);
