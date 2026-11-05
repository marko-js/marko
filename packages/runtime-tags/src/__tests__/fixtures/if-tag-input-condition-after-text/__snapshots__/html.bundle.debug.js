// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let v = "a";
	_html("<p>x");
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_html(`${_text_mark($scope1_id, "#text/0", v, 2)}<b></b>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:6");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0));
	_html(`</p><button>add</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { v }, "__tests__/template.marko", 0, { v: "1:6" });
}, 1);
