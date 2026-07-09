// tags/labeled-region.marko
var labeled_region_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_context_provide("b", input.label, () => {
		_html(`<button${_attr_class(`toggle-${input.label}`)}>toggle</button>${_el_resume($scope0_id, "a")}`);
		_if(() => {
			{
				const $scope1_id = _scope_id();
				_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
				_html(`<div class=region-label>${_escape(_context_link($scope1_id, "b", "b0"))}${_el_resume($scope1_id, "b")}</div>`);
				writeScope($scope1_id, {});
				return 0;
			}
		}, $scope0_id, "b");
	}, $scope0_id);
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		f: input.content,
		g: open
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	labeled_region_default({
		label: "outer",
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			labeled_region_default({
				label: "inner",
				content: _content_resume("a0", () => {
					_scope_reason();
					_scope_id();
					_html("<span>content</span>");
				}, $scope1_id)
			});
			writeScope($scope1_id, {});
		}, $scope0_id)
	});
	writeScope($scope0_id, {});
}, 1);
