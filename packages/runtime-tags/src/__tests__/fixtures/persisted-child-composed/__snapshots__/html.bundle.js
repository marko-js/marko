// tags/relay/tags/leaf/index.marko
var leaf_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "a", input.text, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</b><i>${_patch_text($scope0_id, "b", input.note, $scope0_owned, 1)}${_el_resume($scope0_id, "b")}</i>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// tags/relay/index.marko
var relay_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: _mask_group($scope0_owned, 1)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	leaf_default({
		text: input.label,
		note: input.qty
	});
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 0, () => [leaf_default]);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: 1
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	relay_default({
		label: input.title,
		qty: count
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, {
		f: count,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1, () => [relay_default]);
