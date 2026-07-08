// tags/theme-display.marko
var theme_display_default = _template("__tests__/tags/theme-display.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const theme = _context_link($scope0_id, "__tests__/tags/theme-provider.marko", "__tests__/tags/theme-display.marko_0_theme/context", "<theme-provider>");
	_html(`<span class=display>${_escape(theme)}${_el_resume($scope0_id, "#text/0")}</span>`);
	writeScope($scope0_id, {}, "__tests__/tags/theme-display.marko", 0);
	_resume_branch($scope0_id);
});

// tags/theme-provider.marko
var theme_provider_default = _template("__tests__/tags/theme-provider.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let theme = `light-${input.id}`;
	_context_provide("__tests__/tags/theme-provider.marko", theme, () => {
		_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	}, $scope0_id);
	_html(`<button${_attr_class(`change-${input.id}`)}>change</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/theme-provider.marko_0_input_id");
	writeScope($scope0_id, { input_id: input.id }, "__tests__/tags/theme-provider.marko", 0, { input_id: ["input.id"] });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_for_of([0, 1], (id) => {
		const $scope1_id = _scope_id();
		theme_provider_default({
			id,
			content: _content("__tests__/template.marko_2_content", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				let show = false;
				_html(`<button${_attr_class(`show-${id}`)}>show</button>${_el_resume($scope2_id, "#button/0")}`);
				_if(() => {
					if (show) {
						const $scope3_id = _scope_id();
						theme_display_default({});
						writeScope($scope3_id, {}, "__tests__/template.marko", "7:6");
						return 0;
					}
				}, $scope2_id, "#text/1");
				_script($scope2_id, "__tests__/template.marko_2");
				writeScope($scope2_id, {}, "__tests__/template.marko", "4:4");
				_resume_branch($scope2_id);
			})
		});
		writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, (id) => id, $scope0_id, "#text/0", 1, 0, 0);
}, 1);
