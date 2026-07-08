// tags/theme-provider.marko
var theme_provider_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let theme = "light";
	_context_provide("b", theme, () => {
		_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	}, $scope0_id);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { f: theme });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	theme_provider_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const theme = _context_link($scope1_id, "b", "a0");
		const accent = _context_get("b");
		_html(`<span>${_escape(theme)}${_el_resume($scope1_id, "a")}</span><em>${accent === "light" ? "gold" : "silver"}${_el_resume($scope1_id, "b")}</em>`);
		writeScope($scope1_id, {});
		_resume_branch($scope1_id);
	}) });
	writeScope($scope0_id, {});
}, 1);
