// tags/price.marko.persisted.mjs
const $template$1 = "<span class=price>$<!></span>";
const $walks$1 = " Db%l";
const $setup$1 = () => {};
const $input_amount = ($scope, input_amount) => {
	_attr($scope["#span/0"], "title", `$${input_amount.toFixed(2)}`);
	_text($scope["#text/1"], input_amount.toFixed(2));
};
const $input$1 = ($scope, input) => $input_amount($scope, input.amount);
var price_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/price.marko", $template$1, $walks$1, $setup$1, $input$1);
const $_holes$1 = /*@__PURE__*/ _update_scopes({
	"PatchAttr:title:#span/0": /*@__PURE__*/ _update_named_attr("#span/0", "title"),
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1")
});
const _merge$1 = _resume("__tests__/tags/price.marko_0_update", $_holes$1);
_update_content("__tests__/tags/price.marko", _merge$1);
function _patch2$1() {
	return patch(_merge$1);
}

// template.marko.persisted.mjs
const $template = "<h1> </h1><a>specs</a><button> </button><section></section><ul></ul>";
const $walks = "D l b D l b b";
const $for_content__item_price = ($scope, item_price) => $input_amount($scope["#childScope/0"], item_price);
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/1"], item_name);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_price($scope, $params2[0]?.price);
	$for_content__item_name($scope, $params2[0]?.name);
};
const $if_content__input_product_sale_percent = /*@__PURE__*/ _if_closure("#section/4", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_product_sale_percent);
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_product_sale_percent._($scope);
};
const $input_product_featured__OR__expanded = /*@__PURE__*/ _or(16, ($scope) => _attr_class($scope["#section/4"], $scope.expanded && $scope.input_product_featured && "spotlight"));
const $expanded = _var_resume("__tests__/template.marko_0_expanded/var", /*@__PURE__*/ _let_persisted("expanded/15", ($scope) => {
	_text($scope["#text/3"], $scope.expanded ? "Hide" : "Show");
	$input_product_featured__OR__expanded($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope["#button/2"], "click", function() {
	$expanded($scope, !$scope.expanded);
}));
function $setup($scope) {
	$expanded($scope, false);
	$setup__script($scope);
}
const $input_product_name = ($scope, input_product_name) => _text($scope["#text/0"], input_product_name);
const $input_product_slug = ($scope, input_product_slug) => _attr($scope["#a/1"], "href", `/products/${input_product_slug}/specs`);
const $input_product_featured = _var_resume("__tests__/template.marko_0_input_product_featured/var", /*@__PURE__*/ _const_persisted("input_product_featured", $input_product_featured__OR__expanded));
const $if = /*@__PURE__*/ _if("#section/4", "<em>Save <!>%</em>", "Db%l", $if_content__setup);
const $input_product_sale = ($scope, input_product_sale) => {
	$input_product_sale_percent($scope, input_product_sale?.percent);
	if (!updating) $if($scope, input_product_sale ? 0 : 1);
};
const $for = 0;
const $input_related = ($scope, input_related) => {
	if (!updating) $for($scope, [input_related, function(item) {
		return item.id;
	}]);
};
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
const $input_product_sale_percent = /*@__PURE__*/ _const_persisted("input_product_sale_percent", $if_content__input_product_sale_percent);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1") });
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $expanded_seed = _update_signal("__tests__/template.marko_0_expanded/var");
const $input_product_featured_update = _update_signal("__tests__/template.marko_0_input_product_featured/var");
const $_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchAttr:href:#a/1": /*@__PURE__*/ _update_named_attr("#a/1", "href")
});
const $for_update = _update_for_keyed("#ul/5", ($p, $l) => $for_content__update($p, $l));
const $for_content__update = (_patch, _live) => {
	$for_content_holes(_patch, _live);
	if ("#childScope/0" in _patch) _merge$1(_patch["#childScope/0"], _live["#childScope/0"]);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("expanded" in _patch) _update_seed(_live, $expanded_seed, _patch["expanded"]);
	if ("input_product_featured" in _patch) $input_product_featured_update(_live, _patch["input_product_featured"]);
	if ("input_product_sale_percent" in _patch) _live["input_product_sale_percent"] = _patch["input_product_sale_percent"];
	$_holes(_patch, _live);
	if ("ConditionalRenderer:#section/4" in _patch) _update_if(_patch, _live, "ConditionalRenderer:#section/4", "BranchScopes:#section/4", [$if_content_holes]);
	if ("BranchScopes:#ul/5" in _patch) $for_update(_live, [_patch["BranchScopes:#ul/5"], "#LoopKey"]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2() {
	return patch(_merge);
}

// tags/price.marko
const $template$1 = "<span class=price>$<!></span>";
const $walks$1 = " Db%l";
const $setup$1 = () => {};
const $input_amount = ($scope, input_amount) => {
	_attr($scope["#span/0"], "title", `$${input_amount.toFixed(2)}`);
	_text($scope["#text/1"], input_amount.toFixed(2));
};
const $input$1 = ($scope, input) => $input_amount($scope, input.amount);
enableBranchesPersisted();
var price_default = /*@__PURE__*/ _template("__tests__/tags/price.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<h1> </h1><a>specs</a><button> </button><section></section><ul></ul>";
const $walks = "D l b D l b b";
const $for_content__item_price = ($scope, item_price) => $input_amount($scope["#childScope/0"], item_price);
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/1"], item_name);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_price($scope, $params2[0]?.price);
	$for_content__item_name($scope, $params2[0]?.name);
};
const $if_content__input_product_sale_percent = /*@__PURE__*/ _if_closure("#section/4", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_product_sale_percent);
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_product_sale_percent._($scope);
};
const $input_product_featured__OR__expanded = /*@__PURE__*/ _or(16, ($scope) => _attr_class($scope["#section/4"], $scope.expanded && $scope.input_product_featured && "spotlight"));
const $expanded = /*@__PURE__*/ _let_persisted("expanded/15", ($scope) => {
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
const $input_product_featured = /*@__PURE__*/ _const_persisted("input_product_featured", $input_product_featured__OR__expanded);
const $if = /*@__PURE__*/ _if("#section/4", "<em>Save <!>%</em>", "Db%l", $if_content__setup);
const $input_product_sale = ($scope, input_product_sale) => {
	$input_product_sale_percent($scope, input_product_sale?.percent);
	if (!updating) $if($scope, input_product_sale ? 0 : 1);
};
const $for = /*@__PURE__*/ _for_of("#ul/5", /*@__PURE__*/ ((_w0) => `<li>${_w0} <!></li>`)($template$1), /*@__PURE__*/ ((_w0) => `D/${_w0}&b%l`)($walks$1), 0, $for_content__$params);
const $input_related = ($scope, input_related) => {
	if (!updating) $for($scope, [input_related, function(item) {
		return item.id;
	}]);
};
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
const $input_product_sale_percent = /*@__PURE__*/ _const_persisted("input_product_sale_percent", $if_content__input_product_sale_percent);
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
