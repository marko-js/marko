// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = _context_link($scope0_id, "a", "b0");
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "a")}<span class=count>${_escape(count)}${_el_resume($scope0_id, "b")}</span>`);
	_script($scope0_id, "b1");
	writeScope($scope0_id, { c: count });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_context_provide("a", count, () => {
		_dynamic_tag($scope0_id, "a", counter_default, {}, 0, 0, 0);
	}, $scope0_id);
	_html(`<button class=log>log</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { MI: _resume((_new_count) => {
		count = _new_count;
	}, "a0", $scope0_id) || void 0 });
	_resume_branch($scope0_id);
}, 1);
