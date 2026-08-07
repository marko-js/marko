// tags/card/index.marko
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const { label, ...rest } = input;
	_html(`<h2>${_patch_text($scope0_id, "a", label, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h2><p>${_patch_text($scope0_id, "b", JSON.stringify(rest), $scope0_owned, 1)}${_el_resume($scope0_id, "b")}</p>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

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
	card_default({
		label: input.title,
		value: count
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, {
		f: count,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1, () => [card_default]);
