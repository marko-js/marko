// tags/price-card.marko
var price_card_default = _template_persisted("__tests__/tags/price-card.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let qty = 1;
	_html(`<div><h2>${_escape(input.label + " x" + qty)}${_el_resume($scope0_id, "#text/0")}</h2><button class=bump>+</button>${_el_resume($scope0_id, "#button/1")}</div>`);
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

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	let card = price_card_default({ label: input.label });
	_patch_child($scope0_id, "#childScope/0", $childScope);
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_card/var");
	_html(`<main><h1>${_patch_text($scope0_id, "#text/2", input.title, $scope0_owned, 1)}${_el_resume($scope0_id, "#text/2")}</h1><button class=read>read</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		card,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { card: "1:13" });
}, 1);
