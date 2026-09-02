// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const extra = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.title, void 0, $scope0_owned, 0)}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_html(`<main><div${_patch_attrs(input.attrs, "a", $scope0_id, "div", void 0, $scope0_owned, 1)}>`);
	_patch_dynamic_tag($scope0_id, "a", extra, 0, 0, 0, 0, 0, 0);
	_attr_content("a", $scope0_id, extra, void 0, 1);
	_html(`</div>${_el_resume($scope0_id, "a")}<section`);
	_patch_attrs_content({
		...input.attrs,
		content: extra
	}, "b", $scope0_id, "section", void 0, void 0, $scope0_owned, 1);
	_html(`</section>${_el_resume($scope0_id, "b")}<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	$scope0_reason ? _scope($scope0_id, {
		g: input.title,
		i: count,
		j: extra,
		l: $input_title__closures
	}) : _owned_guard($scope0_owned, 0) && _content_withheld("a0") && _patch_value($scope0_id, "a0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
