// tags/price-card.marko
var price_card_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let qty = 1;
	_html(`<section><h2>${_escape(input.label + " x1")}${_el_resume($scope0_id, "a")}</h2><button>+</button>${_el_resume($scope0_id, "b")}</section>`);
	_script($scope0_id, "b0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.label,
		f: qty
	}) : _patch_value($scope0_id, "b0", input.label);
	_resume_branch($scope0_id);
});

// tags/promo-tag.marko
var promo_tag_default = _template_persisted("c", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let seen = 0;
	_html(`<aside>${_escape(input.text + " (0)")}${_el_resume($scope0_id, "a")}</aside><button class=promo>seen</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.text,
		f: seen
	}) : _patch_value($scope0_id, "c0", input.text);
	_resume_branch($scope0_id);
});

// tags/site-footer.marko
var site_footer_default = _template_persisted("d", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let frozen = 0;
	_html(`<footer>${_patch_text($scope0_id, "a", input.year + frozen)}${_escape(input.year + frozen)}${_el_resume($scope0_id, "a")}</footer>`);
	$scope0_reason && writeScope($scope0_id, { e: frozen });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "a")}</h1><p${_patch_attr($scope0_id, "b", "title", $global().locale)}${_attr("title", $global().locale)}>${_patch_text($scope0_id, "c", $global().brand)}${_escape($global().brand)}${_el_resume($scope0_id, "c")}</p>${_el_resume($scope0_id, "b")}`);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "d", $childScope);
	price_card_default({ label: input.label });
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "e", $childScope2);
	promo_tag_default({ text: "Sale" });
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	const $childScope3 = _peek_scope_id();
	_patch_child($scope0_id, "f", $childScope3);
	site_footer_default({ year: input.year });
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		d: _existing_scope($childScope),
		e: _existing_scope($childScope2),
		f: _existing_scope($childScope3)
	});
}, 1);
