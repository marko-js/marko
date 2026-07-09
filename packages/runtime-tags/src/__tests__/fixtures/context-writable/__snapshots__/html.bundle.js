// tags/add-button.marko
var add_button_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = _context_link($scope0_id, "d", "b0");
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b1");
	writeScope($scope0_id, { b: count });
	_resume_branch($scope0_id);
});

// tags/count-display.marko
var count_display_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=display>${_escape(_context_link($scope0_id, "d", "c0"))}${_el_resume($scope0_id, "a")}</span>`);
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
});

// tags/count-provider.marko
var count_provider_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_context_provide("d", count, () => {
		_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	}, $scope0_id);
	_html(`<div class=provider-count>${_escape(count)}${_el_resume($scope0_id, "b")}</div>`);
	writeScope($scope0_id, { MI: _resume((_new_count) => {
		count = _new_count;
	}, "d0", $scope0_id) || void 0 });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	count_provider_default({ content: _content("a0", () => {
		_scope_reason();
		_scope_id();
		add_button_default({});
		count_display_default({});
	}) });
	writeScope($scope0_id, {});
}, 1);
