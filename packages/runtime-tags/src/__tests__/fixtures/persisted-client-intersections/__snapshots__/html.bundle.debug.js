// tags/price-card.marko
var price_card_default = _template_persisted("__tests__/tags/price-card.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let qty = 1;
	_html(`<section><h2>${_escape(input.label + " x" + qty)}${_el_resume($scope0_id, "#text/0")}</h2><button>+</button>${_el_resume($scope0_id, "#button/1")}</section>`);
	_script($scope0_id, "__tests__/tags/price-card.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_label: input.label,
		qty
	}, "__tests__/tags/price-card.marko", 0, {
		input_label: ["input.label"],
		qty: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/tags/price-card.marko0", input.label);
	_resume_branch($scope0_id);
});

// tags/promo-tag.marko
var promo_tag_default = _template_persisted("__tests__/tags/promo-tag.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let seen = 0;
	_html(`<aside>${_escape(input.text + " (" + seen + ")")}${_el_resume($scope0_id, "#text/0")}</aside><button class=promo>seen</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/promo-tag.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_text: input.text,
		seen
	}, "__tests__/tags/promo-tag.marko", 0, {
		input_text: ["input.text"],
		seen: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/tags/promo-tag.marko0", input.text);
	_resume_branch($scope0_id);
});

// tags/site-footer.marko
var site_footer_default = _template_persisted("__tests__/tags/site-footer.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let frozen = 0;
	_html(`<footer>${_patch_text($scope0_id, "#text/0", input.year + frozen, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</footer>`);
	$scope0_reason && writeScope($scope0_id, { frozen }, "__tests__/tags/site-footer.marko", 0, { frozen: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1><p${_patch_attr($scope0_id, "#p/1", "title", $global().locale)}>${_patch_text($scope0_id, "#text/2", $global().brand)}${_el_resume($scope0_id, "#text/2")}</p>${_el_resume($scope0_id, "#p/1")}`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/3", $childScope);
	price_card_default({ label: input.label });
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/4", $childScope2);
	promo_tag_default({ text: "Sale" });
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
	const $childScope3 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/5", $childScope3);
	site_footer_default({ year: input.year });
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		"#childScope/3": _existing_scope($childScope),
		"#childScope/4": _existing_scope($childScope2),
		"#childScope/5": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0);
}, 1);
