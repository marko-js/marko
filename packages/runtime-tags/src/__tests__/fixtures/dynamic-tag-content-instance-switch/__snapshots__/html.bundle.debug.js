// tags/provider.marko
var provider_default = _template("__tests__/tags/provider.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = input.n;
	_html(`<button class=bump>bump</button>${_el_resume($scope0_id, "#button/0")}`);
	const body = { content: _content_resume("__tests__/tags/provider.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<div>value ${_text_resume($scope1_id, "#text/0", count, 2)}</div>`);
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/provider.marko", "3:2"));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const $return = body;
	_script($scope0_id, "__tests__/tags/provider.marko_0");
	writeScope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/tags/provider.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = provider_default({ n: 1 });
	let b = provider_default({ n: 2 });
	let sel = 0;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/4")}`);
	_dynamic_tag($scope0_id, "#text/5", sel ? b : a, {});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		a,
		b,
		sel
	}, "__tests__/template.marko", 0, {
		a: "1:11",
		b: "2:11",
		sel: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
