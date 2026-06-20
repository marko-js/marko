// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_try($scope0_id, "a", _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button id=b>count: <!>${_escape(n)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_subscribe($n__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), {});
	writeScope($scope0_id, {
		b: n,
		Bb: $n__closures
	});
	_resume_branch($scope0_id);
}, 1);
