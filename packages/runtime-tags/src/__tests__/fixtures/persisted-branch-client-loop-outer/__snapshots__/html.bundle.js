// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let expand = false;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", item, $scope0_owned, 0)}${_el_resume($scope1_id, "a")}`);
		if ($scope0_reason) _if(() => {}, $scope1_id, "b", 1, 1, 1, 0, 1);
		_html("</li>");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason ? writeScope($scope0_id, {
		f: input.note,
		g: expand,
		h: $input_note__closures
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.note);
	_resume_branch($scope0_id);
}, 1, 0);
