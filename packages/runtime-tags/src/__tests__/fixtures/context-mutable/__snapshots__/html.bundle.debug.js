// tags/theme-display.marko
var theme_display_default = _template("__tests__/tags/theme-display.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const theme = _context_link($scope0_id, "__tests__/tags/theme-provider.marko", "__tests__/tags/theme-display.marko_0_theme/context", "<theme-provider>");
	_html(`<span>${_escape(theme)}${_el_resume($scope0_id, "#text/0")}</span>`);
	writeScope($scope0_id, {}, "__tests__/tags/theme-display.marko", 0);
	_resume_branch($scope0_id);
});

// tags/theme-provider.marko
var theme_provider_default = _template("__tests__/tags/theme-provider.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let theme = "light";
	_context_provide("__tests__/tags/theme-provider.marko", theme, () => {
		_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	}, $scope0_id);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/theme-provider.marko_0");
	writeScope($scope0_id, { theme }, "__tests__/tags/theme-provider.marko", 0, { theme: "2:6" });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	theme_provider_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		theme_display_default({});
		_html("<div>static</div>");
	}) });
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
