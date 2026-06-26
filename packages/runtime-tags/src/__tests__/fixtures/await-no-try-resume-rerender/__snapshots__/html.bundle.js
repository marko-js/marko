// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button id=a>A</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "b", resolveAfter(n, 0), (v) => {
		const $scope1_id = _scope_id();
		_html(`<div id=out>done <!>${_escape(n)}${_el_resume($scope1_id, "a")}</div>`);
		_subscribe($n__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	});
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: n,
		Bc: $n__closures
	});
	_resume_branch($scope0_id);
}, 1);
