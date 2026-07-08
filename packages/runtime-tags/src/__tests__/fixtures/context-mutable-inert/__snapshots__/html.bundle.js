// tags/inert-log.marko
var inert_log_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_context_get("c");
	_html("<div>inert</div>");
});

// tags/theme-provider.marko
var theme_provider_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let theme = "light";
	_context_provide("c", theme, () => {
		_html(`<span>${_escape(theme)}${_el_resume($scope0_id, "a")}</span>`);
		_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	}, $scope0_id);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "c0");
	writeScope($scope0_id, { g: theme });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	theme_provider_default({ content: _content("a0", () => {
		_scope_reason();
		_scope_id();
		inert_log_default({});
	}) });
	writeScope($scope0_id, {});
}, 1);
