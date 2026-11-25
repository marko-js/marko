// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $a_getter = _hoist($scope0_id, "a2");
	let n = 1;
	const got = { get: _resume_scoped(() => $a_getter, "a0", $scope0_id) }.get();
	const a = _resume_scoped(() => n, "a1", $scope0_id);
	_html(`<button></button>${_el_mark($scope0_id, "a")}<div>${_escape(n)}</div>`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		c: n,
		e: got,
		f: a
	});
}, 1);
