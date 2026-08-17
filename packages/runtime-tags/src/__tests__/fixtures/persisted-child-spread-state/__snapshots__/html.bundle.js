// tags/badge.marko
var badge_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<b class=badge>${_patch_text($scope0_id, "a", input.label, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</b>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// tags/card.marko
var card_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<div class=card><h2>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h2><p>${_patch_text($scope0_id, "b", input.note, $scope0_owned, 1)}${_el_resume($scope0_id, "b")}</p><button class=t>show${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "c0", open, 1);
	$scope0_reason && writeScope($scope0_id, { i: open });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_set_serialize_reason(30);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope2);
	card_default({
		...input.props,
		note: "off"
	});
	_html(`<button id=o>o</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		g: input.props,
		h: on,
		j: input.badge?.label,
		b: _existing_scope($childScope2)
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.props), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a1", input.badge?.label));
	_resume_branch($scope0_id);
}, 1, () => [badge_default, card_default]);
