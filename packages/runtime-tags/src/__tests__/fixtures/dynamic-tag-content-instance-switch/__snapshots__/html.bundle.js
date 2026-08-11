// tags/provider.marko
var provider_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = input.n;
	_html(`<button class=bump>bump</button>${_el_resume($scope0_id, "a")}`);
	const $return = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<div>value <!>${_escape(count)}${_el_resume($scope1_id, "a")}</div>`);
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		e: count,
		g: $count__closures
	});
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = provider_default({ n: 1 });
	let b = provider_default({ n: 2 });
	let sel = 0;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "e")}`);
	_dynamic_tag($scope0_id, "f", a, {});
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		g: a,
		h: b,
		i: sel
	});
	_resume_branch($scope0_id);
}, 1);
