// tags/price.marko
var price_default = _template("__tests__/tags/price.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_amount = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span class=price${_attr("title", _hole_value($scope0_id, "UpdateAttr:title:#span/0", `$${input.amount.toFixed(2)}`, _persisted_reason()))}>$${_sep($sg__input_amount)}${_escape(_hole_value($scope0_id, "UpdateHole:#text/1", input.amount.toFixed(2), _persisted_reason()))}${_el_resume($scope0_id, "#text/1", $sg__input_amount)}</span>${_el_resume($scope0_id, "#span/0", $sg__input_amount)}`);
	$sg__input_amount && writeScope($scope0_id, {}, "__tests__/tags/price.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_product_sale_percent = _serialize_guard($scope0_reason, 3), $sg__input_product_sale = _serialize_guard($scope0_reason, 2), $sg__input_related = _serialize_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let expanded = false;
	_html(`<h1>${_escape(_hole_value($scope0_id, "UpdateHole:#text/0", input.product.name, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</h1><a${_attr("href", _hole_value($scope0_id, "UpdateAttr:href:#a/1", `/products/${input.product.slug}/specs`, _persisted_reason()))}>specs</a>${_el_resume($scope0_id, "#a/1", _serialize_guard($scope0_reason, 1))}<button>${expanded ? "Hide" : "Show"}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}<section${expanded && input.product.featured ? " class=spotlight" : ""}>`);
	_if(() => input.product.sale ? 0 : undefined, $scope0_id, "#section/4", $sg__input_product_sale, 1 | _persisted_reason(), $sg__input_product_sale, "</section>", 1, "__tests__/template.marko_0/update_if_#section/4", [() => {
		const $scope1_id = _scope_id();
		_html(`<em>Save ${_sep($sg__input_product_sale_percent)}${_escape(_hole_value($scope1_id, "UpdateHole:#text/0", input.product.sale.percent, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_product_sale_percent)}%</em>`);
		$sg__input_product_sale && writeScope($scope1_id, { _: $sg__input_product_sale_percent && _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4");
	}]);
	_html("<ul>");
	_for_of(input.related, (item) => {
		const $scope2_id = _scope_id();
		_html("<li>");
		const $childScope = _peek_scope_id();
		_update_child($scope2_id, "UpdateChild:#childScope/0", $childScope);
		_set_serialize_reason($sg__input_related);
		price_default({ amount: item.price });
		_html(` ${_sep($sg__input_related)}${_escape(_hole_value($scope2_id, "UpdateHole:#text/1", item.name, _persisted_reason()))}${_el_resume($scope2_id, "#text/1", $sg__input_related)}</li>`);
		$sg__input_related | _persisted_reason() && writeScope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "11:4");
	}, function(item) {
		return item.id;
	}, $scope0_id, "#ul/5", $sg__input_related, $sg__input_related, $sg__input_related, "</ul>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_product_featured: input.product?.featured,
		input_product_sale_percent: (_serialize_if($scope0_reason, 2) || _update_reason()) && input.product?.sale?.percent,
		expanded: _state_reason() && expanded
	}, "__tests__/template.marko", 0, {
		input_product_featured: ["input.product.featured"],
		input_product_sale_percent: ["input.product.sale.percent"],
		expanded: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
