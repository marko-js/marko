// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $a_getter = _hoist($scope0_id, "__tests__/template.marko_0_a#5/hoist");
	let n = 1;
	const obj = { get: _resume_scoped(() => $a_getter, "__tests__/template.marko_0/obj", $scope0_id) };
	const got = obj.get();
	const a = _resume_scoped(() => n, "__tests__/template.marko_0/a", $scope0_id);
	_html(`<button></button>${_el_mark($scope0_id, "#button/0")}<div>${_escape(n)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		got,
		a
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		got: "3:8",
		a: "5:8"
	});
	_assert_hoist(a);
}, 1);
