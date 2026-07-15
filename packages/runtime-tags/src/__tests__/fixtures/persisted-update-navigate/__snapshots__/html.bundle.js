// tags/price.marko
var price_default = _template("b", (input) => {
	const $sg__input_amount = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html(`<span class=price${_attr("title", _hole_value($scope0_id, "Ntitle:a", `$${input.amount.toFixed(2)}`, _persisted_reason()))}>$${_sep($sg__input_amount)}${_escape(_hole_value($scope0_id, "Qb", input.amount.toFixed(2), _persisted_reason()))}${_el_resume($scope0_id, "b", $sg__input_amount)}</span>${_el_resume($scope0_id, "a", $sg__input_amount)}`);
	$sg__input_amount && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_product_sale_percent = _serialize_guard($scope0_reason, 3), $sg__input_product_sale = _serialize_guard($scope0_reason, 2), $sg__input_related = _serialize_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let expanded = false;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.product.name, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</h1><a${_attr("href", _hole_value($scope0_id, "Nhref:b", `/products/${input.product.slug}/specs`, _persisted_reason()))}>specs</a>${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 1))}<button>Show${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}<section>`);
	_if(() => input.product.sale ? 0 : void 0, $scope0_id, "e", $sg__input_product_sale, 1 | _persisted_reason(), $sg__input_product_sale, "</section>", 1, "a1", [() => {
		const $scope1_id = _scope_id();
		_html(`<em>Save ${_sep($sg__input_product_sale_percent)}${_escape(_hole_value($scope1_id, "Qa", input.product.sale.percent, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_product_sale_percent)}%</em>`);
		$sg__input_product_sale && writeScope($scope1_id, { _: $sg__input_product_sale_percent && _scope_with_id($scope0_id) });
	}]);
	_html("<ul>");
	_for_of(input.related, (item) => {
		const $scope2_id = _scope_id();
		_html("<li>");
		const $childScope = _peek_scope_id();
		_update_child($scope2_id, "Sa", $childScope);
		_set_serialize_reason($sg__input_related);
		price_default({ amount: item.price });
		_html(` ${_sep($sg__input_related)}${_escape(_hole_value($scope2_id, "Qb", item.name, _persisted_reason()))}${_el_resume($scope2_id, "b", $sg__input_related)}</li>`);
		$sg__input_related | _persisted_reason() && writeScope($scope2_id, { a: _existing_scope($childScope) });
	}, function(item) {
		return item.id;
	}, $scope0_id, "f", $sg__input_related, $sg__input_related, $sg__input_related, "</ul>", 1, "a2");
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		l: input.product?.featured,
		n: (_serialize_if($scope0_reason, 2) || _patch_reason()) && input.product?.sale?.percent,
		p: _state_reason() && expanded
	});
	_resume_branch($scope0_id);
}, 1);
