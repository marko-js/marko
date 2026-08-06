// tags/badge/index.marko
_renderer_shells({ b0: ",`b0;D ;<b> </b>`" });
var badge_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_label = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.label) {
			const $scope1_id = _scope_id();
			_html(`<b>${_patch_text($scope1_id, "a", input.label, $scope0_owned, 0)}${_el_resume($scope1_id, "a")}</b>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_label, $sg__input_label, void 0, void 0, ["b0"]);
	_html(`<i>${_patch_text($scope0_id, "b", input.note, $scope0_owned, 1)}${_el_resume($scope0_id, "b")}</i></div>`);
	$scope0_reason && writeScope($scope0_id, { e: input.label });
});

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({ 1: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	badge_default({
		label: "hi",
		note: input.title
	});
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, {
		g: count,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
