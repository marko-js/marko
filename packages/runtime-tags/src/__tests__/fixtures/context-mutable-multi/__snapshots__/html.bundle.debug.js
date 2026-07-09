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
		const theme = _context_link($scope1_id, "__tests__/tags/theme-provider.marko", "__tests__/template.marko_1_theme/context", "<theme-provider>");
		const accent = _context_get("__tests__/tags/theme-provider.marko", "<theme-provider>");
		_html(`<span>${_escape(theme)}${_el_resume($scope1_id, "#text/0")}</span><em>${accent === "light" ? "gold" : "silver"}${_el_resume($scope1_id, "#text/1")}</em>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
		_resume_branch($scope1_id);
	}) });
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
