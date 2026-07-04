// tags/price.marko.update.mjs
const $update$1 = (patch, live) => {
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_amount" in patch) live["input_amount"] = patch["input_amount"];
	if ("UpdateAttr:title:#span/0" in patch) _attr(live["#span/0"], "title", patch["UpdateAttr:title:#span/0"]);
	if ("#text/1" in patch) _text(live["#text/1"], patch["#text/1"]);
};
var price_marko_update_default = _resume("__tests__/tags/price.marko_0_update", $update$1);

// template.marko.update.mjs
const $input_product_featured_update = _update_signal("__tests__/template.marko_0_input_product_featured/var");
const $if_update = _update_signal("__tests__/template.marko_0/update_if_#section/4");
const $for_update = _update_for("#ul/5", "__tests__/template.marko_2_content/update", (branch, args) => $for_content__update(args[0], branch));
const $for_content__update = (patch, live) => {
	if ("$params2" in patch) live["$params2"] = patch["$params2"];
	if ("item" in patch) live["item"] = patch["item"];
	if ("item_price" in patch) live["item_price"] = patch["item_price"];
	if ("item_name" in patch) live["item_name"] = patch["item_name"];
	if ("#childScope/0" in patch) price_marko_update_default(patch["#childScope/0"], live["#childScope/0"]);
	if ("#text/1" in patch) _text(live["#text/1"], patch["#text/1"]);
};
const $if_content__update = (patch, live) => {
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_product" in patch) live["input_product"] = patch["input_product"];
	if ("input_product_name" in patch) live["input_product_name"] = patch["input_product_name"];
	if ("input_product_slug" in patch) live["input_product_slug"] = patch["input_product_slug"];
	if ("input_product_featured" in patch) $input_product_featured_update(live, patch["input_product_featured"]);
	if ("input_product_sale" in patch) live["input_product_sale"] = patch["input_product_sale"];
	if ("input_product_sale_percent" in patch) live["input_product_sale_percent"] = patch["input_product_sale_percent"];
	if ("input_related" in patch) live["input_related"] = patch["input_related"];
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
	if ("UpdateAttr:href:#a/1" in patch) _attr(live["#a/1"], "href", patch["UpdateAttr:href:#a/1"]);
	if ("ConditionalRenderer:#section/4" in patch) {
		$if_update(live, patch["ConditionalRenderer:#section/4"]);
		const $patchBranch = patch["BranchScopes:#section/4"], $liveBranch = _update_flush_fresh(live["BranchScopes:#section/4"]), $branchMerge = $if_content__update;
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
	if ("BranchScopes:#ul/5" in patch) $for_update(live, [patch["BranchScopes:#ul/5"], "#LoopKey"]);
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// tags/price.marko
const $template$1 = "<span class=price>$<!></span>";
const $walks$1 = " Db%l";
const $setup$1 = () => {};
const $input_amount = ($scope, input_amount) => {
	_attr($scope["#span/0"], "title", `$${input_amount.toFixed(2)}`);
	_text($scope["#text/1"], input_amount.toFixed(2));
};
const $input$1 = ($scope, input) => $input_amount($scope, input.amount);
var price_default = /* @__PURE__ */ _template("__tests__/tags/price.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<h1> </h1><a>specs</a><button> </button><section></section><ul></ul>";
const $walks = "D l b D l b b";
const $for_content__setup = ($scope) => {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $for_content__item_price = ($scope, item_price) => $input_amount($scope["#childScope/0"], item_price);
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/1"], item_name);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_price($scope, $params2[0]?.price);
	$for_content__item_name($scope, $params2[0]?.name);
};
const $if_content__input_product_sale_percent = /* @__PURE__ */ _if_closure("#section/4", 0, ($scope) => _text($scope["#text/0"], $scope._.input_product_sale_percent));
const $if_content__setup = ($scope) => {
	if (!_updating()) $if_content__input_product_sale_percent._($scope);
};
const $input_product_featured__OR__expanded = /* @__PURE__ */ _or(16, ($scope) => _attr_class($scope["#section/4"], $scope.expanded && $scope.input_product_featured && "spotlight"));
const $expanded = /* @__PURE__ */ _let("expanded/15", ($scope) => {
	_text($scope["#text/3"], $scope.expanded ? "Hide" : "Show");
	$input_product_featured__OR__expanded($scope);
});
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$expanded($scope, !$scope.expanded);
}));
function $setup($scope) {
	$expanded($scope, false);
	$setup__script($scope);
}
const $input_product_name = ($scope, input_product_name) => _text($scope["#text/0"], input_product_name);
const $input_product_slug = ($scope, input_product_slug) => _attr($scope["#a/1"], "href", `/products/${input_product_slug}/specs`);
const $input_product_featured = _var_resume("__tests__/template.marko_0_input_product_featured/var", /* @__PURE__ */ _const("input_product_featured", $input_product_featured__OR__expanded));
const $if = _var_resume("__tests__/template.marko_0/update_if_#section/4", /* @__PURE__ */ _if("#section/4", "<em>Save <!>%</em>", "Db%l", $if_content__setup));
const $input_product_sale = ($scope, input_product_sale) => {
	$input_product_sale_percent($scope, input_product_sale?.percent);
	$if($scope, input_product_sale ? 0 : 1);
};
const $for_content_content = _resume("__tests__/template.marko_2_content/update", [
	/* @__PURE__ */ ((_w0) => `<li>${_w0} <!></li>`)($template$1),
	/* @__PURE__ */ ((_w0) => `D/${_w0}&b%l`)($walks$1),
	$for_content__setup
]);
const $for = /* @__PURE__ */ _for_of("#ul/5", $for_content_content[0], $for_content_content[1], $for_content_content[2], $for_content__$params);
const $input_related = ($scope, input_related) => $for($scope, [input_related, function(item) {
	return item.id;
}]);
const $input = ($scope, input) => {
	$input_product($scope, input.product);
	$input_related($scope, input.related);
};
const $input_product = ($scope, input_product) => {
	$input_product_name($scope, input_product?.name);
	$input_product_slug($scope, input_product?.slug);
	$input_product_featured($scope, input_product?.featured);
	$input_product_sale($scope, input_product?.sale);
};
const $input_product_sale_percent = /* @__PURE__ */ _const("input_product_sale_percent", $if_content__input_product_sale_percent);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
