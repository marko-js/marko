// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $a_getter = _hoist($scope0_id, "a2");
	let n = 1;
	const got = _resume(() => $a_getter, "a0", $scope0_id)();
	const a = _resume(() => n, "a1", $scope0_id);
	_html(`<button class=got></button>${_el_mark($scope0_id, "a")}<button class=direct></button>${_el_mark($scope0_id, "b")}<div>${_escape(n)}</div>`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		d: n,
		f: got,
		g: a
	});
}, 1);
