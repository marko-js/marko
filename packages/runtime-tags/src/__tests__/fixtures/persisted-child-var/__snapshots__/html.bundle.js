// tags/price-card.marko
var price_card_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let qty = 1;
	_html(`<div><h2>${_escape(input.label + " x1")}${_el_resume($scope0_id, "a")}</h2><button class=bump>+</button>${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "b0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.label,
		f: qty
	}) : _patch_value($scope0_id, "b0", input.label);
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let card = price_card_default({ label: input.label });
	_patch_child($scope0_id, "a", $childScope);
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<main><h1>${_patch_text($scope0_id, "c", input.title)}${_el_resume($scope0_id, "c")}</h1><button class=read>read</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && writeScope($scope0_id, {
		i: card,
		a: _existing_scope($childScope)
	});
}, 1);
