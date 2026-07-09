// tags/theme-display.marko
var theme_display_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=display>${_escape(_context_link($scope0_id, "c", "b0"))}${_el_resume($scope0_id, "a")}</span>`);
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
});

// tags/theme-provider.marko
var theme_provider_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_context_provide("c", "light", () => {
		_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	}, $scope0_id);
	_html(`<button class=change>change</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	theme_provider_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button class=show>show</button>${_el_resume($scope1_id, "a")}`);
		_if(() => {}, $scope1_id, "b");
		_script($scope1_id, "a0");
		writeScope($scope1_id, {});
		_resume_branch($scope1_id);
	}) });
	writeScope($scope0_id, {});
}, 1);
