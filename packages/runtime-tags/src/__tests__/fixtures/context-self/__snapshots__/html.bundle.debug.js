// tags/labeled-region.marko
var labeled_region_default = _template("__tests__/tags/labeled-region.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_context_provide("__tests__/tags/labeled-region.marko", input.label, () => {
		_html(`<button${_attr_class(`toggle-${input.label}`)}>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
		_if(() => {
			if (open) {
				const $scope1_id = _scope_id();
				_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
				const label = _context_link($scope1_id, "__tests__/tags/labeled-region.marko", "__tests__/tags/labeled-region.marko_1_label/context", "<labeled-region>");
				_html(`<div class=region-label>${_escape(label)}${_el_resume($scope1_id, "#text/1")}</div>`);
				writeScope($scope1_id, {}, "__tests__/tags/labeled-region.marko", "10:4");
				return 0;
			}
		}, $scope0_id, "#text/1");
	}, $scope0_id);
	_script($scope0_id, "__tests__/tags/labeled-region.marko_0");
	writeScope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/labeled-region.marko", 0, {
		input_content: ["input.content"],
		open: "5:6"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	labeled_region_default({
		label: "outer",
		content: _content_resume("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			labeled_region_default({
				label: "inner",
				content: _content_resume("__tests__/template.marko_2_content", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_html("<span>content</span>");
				}, $scope1_id)
			});
			writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
		}, $scope0_id)
	});
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
