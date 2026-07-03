// tags/price.marko
var price_default = _template("b", (input) => {
	const $sg__input_amount = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html(`<span class=price${_attr("title", _hole_value($scope0_id, "Ntitle:a", `$${input.amount.toFixed(2)}`, $sg__input_amount))}>$${_sep($sg__input_amount)}${_escape(_hole_value($scope0_id, "b", input.amount.toFixed(2), $sg__input_amount))}${_el_resume($scope0_id, "b", $sg__input_amount)}</span>${_el_resume($scope0_id, "a", $sg__input_amount)}`);
	$sg__input_amount && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_product_name = _serialize_guard($scope0_reason, 0), $sg__input_product_slug = _serialize_guard($scope0_reason, 1), $sg__input_product_sale_percent = _serialize_guard($scope0_reason, 3), $sg__input_product_sale = _serialize_guard($scope0_reason, 2), $sg__input_related = _serialize_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let expanded = false;
	_html(`<h1>${_escape(_hole_value($scope0_id, "a", input.product.name, $sg__input_product_name))}${_el_resume($scope0_id, "a", $sg__input_product_name)}</h1><a${_attr("href", _hole_value($scope0_id, "Nhref:b", `/products/${input.product.slug}/specs`, $sg__input_product_slug))}>specs</a>${_el_resume($scope0_id, "b", $sg__input_product_slug)}<button>Show${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}<section>`);
	_if(() => {
		if (input.product.sale) {
			const $scope1_id = _scope_id();
			_html(`<em>Save ${_sep($sg__input_product_sale_percent)}${_escape(_hole_value($scope1_id, "a", input.product.sale.percent, $sg__input_product_sale_percent))}${_el_resume($scope1_id, "a", $sg__input_product_sale_percent)}%</em>`);
			$sg__input_product_sale && writeScope($scope1_id, { _: $sg__input_product_sale_percent && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "e", $sg__input_product_sale, 1, $sg__input_product_sale, "</section>", 1);
	_html("<ul>");
	_for_of(input.related, (item) => {
		const $scope2_id = _scope_id();
		_html("<li>");
		const $childScope = _peek_scope_id();
		_set_serialize_reason($sg__input_related);
		price_default({ amount: item.price });
		_html(` ${_sep($sg__input_related)}${_escape(_hole_value($scope2_id, "b", item.name, $sg__input_related))}${_el_resume($scope2_id, "b", $sg__input_related)}</li>`);
		($sg__input_related || _persisted_reason()) && writeScope($scope2_id, { a: _existing_scope($childScope) });
	}, function(item) {
		return item.id;
	}, $scope0_id, "f", $sg__input_related, $sg__input_related, $sg__input_related, "</ul>", 1);
	_script($scope0_id, "a4");
	writeScope($scope0_id, {
		l: input.product?.featured,
		n: _serialize_if($scope0_reason, 2) && input.product?.sale?.percent,
		p: expanded
	});
	_resume_branch($scope0_id);
}, 1);
