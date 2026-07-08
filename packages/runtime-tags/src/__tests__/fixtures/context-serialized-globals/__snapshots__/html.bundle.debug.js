// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = _context_link($scope0_id, "__tests__/template.marko", "__tests__/tags/counter.marko_0_count/context", "../template.marko");
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "#button/0")}<span class=count>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</span>`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	writeScope($scope0_id, { count }, "__tests__/tags/counter.marko", 0, { count: "1:10" });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_context_provide("__tests__/template.marko", count, () => {
		_dynamic_tag($scope0_id, "#text/0", counter_default, {}, 0, 0, 0);
	}, $scope0_id);
	_html(`<button class=log>log</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { "TagVariableChange:#ContextValue": _resume((_new_count) => {
		count = _new_count;
	}, "__tests__/template.marko_0/valueChange", $scope0_id) || void 0 }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
