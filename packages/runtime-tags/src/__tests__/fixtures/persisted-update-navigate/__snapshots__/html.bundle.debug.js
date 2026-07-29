// tags/price.marko
var price_default = _template("__tests__/tags/price.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_amount = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span class=price${_attr("title", `$${input.amount.toFixed(2)}`)}>$${_sep($sg__input_amount)}${_escape(input.amount.toFixed(2))}${_el_resume($scope0_id, "#text/1", $sg__input_amount)}</span>${_el_resume($scope0_id, "#span/0", $sg__input_amount)}`);
	$sg__input_amount && writeScope($scope0_id, {}, "__tests__/tags/price.marko", 0);
});
_renderer_shells({ "__tests__/tags/price.marko_0_update": ["<span class=price>$<!></span>", " Db%l"] });

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_product_sale_percent = _serialize_guard($scope0_reason, 3), $sg__input_product_sale = _serialize_guard($scope0_reason, 2), $sg__input_related = _serialize_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let expanded = false;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.product.name, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</h1><a${_attr("href", _hole_value($scope0_id, "PatchAttr:href:#a/1", `/products/${input.product.slug}/specs`, _persisted_reason()))}>specs</a>${_el_resume($scope0_id, "#a/1", _serialize_guard($scope0_reason, 1))}<button>${_escape(_hole_value($scope0_id, "PatchHole:#text/3", expanded ? "Hide" : "Show", _state_reason()))}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}<section${_attr_class(_hole_value($scope0_id, "PatchAttr:class:#section/4", expanded && input.product.featured && "spotlight", _state_reason()))}>`);
	_if(() => input.product.sale ? 0 : undefined, $scope0_id, "#section/4", $sg__input_product_sale, 1 | _persisted_reason(), $sg__input_product_sale, "</section>", 1, "__tests__/template.marko_0/update_if_#section/4", [() => {
		const $scope1_id = _scope_id();
		_html(`<em>Save ${_sep($sg__input_product_sale_percent)}${_escape(input.product.sale.percent)}${_el_resume($scope1_id, "#text/0", $sg__input_product_sale_percent)}%</em>`);
		$sg__input_product_sale && writeScope($scope1_id, { _: $sg__input_product_sale_percent && _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4");
	}], [0], "__tests__/template.marko_r0");
	_html("<ul>");
	_region(() => {
		forOf(input.related, (item) => {
			const $scope2_id = _scope_id();
			_html("<li>");
			_set_serialize_reason($sg__input_related);
			const $childScope = _peek_scope_id();
			price_default({ amount: item.price });
			_html(` ${_sep($sg__input_related)}${_escape(item.name)}${_el_resume($scope2_id, "#text/2", $sg__input_related)}</li>`);
			$sg__input_related && writeScope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "11:4");
		});
	}, $scope0_id, "#ul/5", "__tests__/template.marko_r1");
	_html(`</ul>${_el_resume($scope0_id, "#ul/5", $sg__input_related)}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_product_featured: input.product?.featured,
		input_product_sale_percent: (_serialize_if($scope0_reason, 2) || _patch_reason()) && input.product?.sale?.percent,
		expanded: _seed_fill(_state_reason() && expanded)
	}, "__tests__/template.marko", 0, {
		input_product_featured: ["input.product.featured"],
		input_product_sale_percent: ["input.product.sale.percent"],
		expanded: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<h1> </h1><a>specs</a><button> </button><section></section><ul></ul>", "D l b D l b b"],
	"__tests__/template.marko": ["<h1> </h1><a>specs</a><button> </button><section></section><ul></ul>", "D l b D l b b"]
});
