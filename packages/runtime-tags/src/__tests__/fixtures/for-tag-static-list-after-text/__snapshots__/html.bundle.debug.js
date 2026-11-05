// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<p>x");
	_for_of([1], (i) => {
		const $scope1_id = _scope_id();
		_html(_text_mark($scope1_id, "#text/0", n, 2));
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:6");
	}, 0, $scope0_id, "#text/0", 1, 0);
	_html(`</p><button>inc</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
