// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $a_getter = _hoist($scope0_id, "__tests__/template.marko_0_a#6/hoist");
	let n = 1;
	const getA = _resume(() => $a_getter, "__tests__/template.marko_0/getA", $scope0_id);
	const got = getA();
	const a = _resume(() => n, "__tests__/template.marko_0/a", $scope0_id);
	_html(`<button class=got></button>${_el_mark($scope0_id, "#button/0")}<button class=direct></button>${_el_mark($scope0_id, "#button/1")}<div>${_escape(n)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		got,
		a
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		got: "3:8",
		a: "6:8"
	});
	_assert_hoist(a);
}, 1);
