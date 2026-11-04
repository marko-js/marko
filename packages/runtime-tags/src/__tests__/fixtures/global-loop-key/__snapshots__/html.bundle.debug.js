// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 2;
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/0")}<ul>`);
	_for_until(n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(i + ":" + $global$1.x)}</li>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, 0, $scope0_id, "#ul/1", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
