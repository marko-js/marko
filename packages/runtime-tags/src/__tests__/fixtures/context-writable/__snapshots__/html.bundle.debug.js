// tags/add-button.marko
var add_button_default = _template("__tests__/tags/add-button.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = _context_link($scope0_id, "__tests__/tags/count-provider.marko", "__tests__/tags/add-button.marko_0_count/context", "<count-provider>");
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/add-button.marko_0");
	writeScope($scope0_id, { count }, "__tests__/tags/add-button.marko", 0, { count: "1:10" });
	_resume_branch($scope0_id);
});

// tags/count-display.marko
var count_display_default = _template("__tests__/tags/count-display.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = _context_link($scope0_id, "__tests__/tags/count-provider.marko", "__tests__/tags/count-display.marko_0_count/context", "<count-provider>");
	_html(`<span class=display>${_escape(count)}${_el_resume($scope0_id, "#text/0")}</span>`);
	writeScope($scope0_id, {}, "__tests__/tags/count-display.marko", 0);
	_resume_branch($scope0_id);
});

// tags/count-provider.marko
var count_provider_default = _template("__tests__/tags/count-provider.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_context_provide("__tests__/tags/count-provider.marko", count, () => {
		_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	}, $scope0_id);
	_html(`<div class=provider-count>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</div>`);
	writeScope($scope0_id, { "TagVariableChange:#ContextValue": _resume((_new_count) => {
		count = _new_count;
	}, "__tests__/tags/count-provider.marko_0/valueChange", $scope0_id) || void 0 }, "__tests__/tags/count-provider.marko", 0);
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	count_provider_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		add_button_default({});
		count_display_default({});
	}) });
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
