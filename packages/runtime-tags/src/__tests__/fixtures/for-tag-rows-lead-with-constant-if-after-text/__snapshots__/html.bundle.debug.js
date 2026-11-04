// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	_html("<p>x");
	forOf([1, 2], (i) => {
		const $scope1_id = _scope_id();
		if (false) {
			const $scope3_id = _scope_id();
			_html("<b></b>");
		} else {
			const $scope2_id = _scope_id();
			_html(_text_mark($scope2_id, "#text/0", n, 2));
			_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:43"), "__tests__/template.marko_2_n#0:2/subscribe");
		}
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:6");
	});
	_html(`</p><button>inc</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"ClosureScopes:n/3": $n__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
