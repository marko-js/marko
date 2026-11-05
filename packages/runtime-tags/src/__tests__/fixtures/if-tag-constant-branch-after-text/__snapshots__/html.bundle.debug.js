// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $v__closures = new Set();
	let v = "a";
	_html("<p>x ");
	if (false) {
		const $scope3_id = _scope_id();
		_html("<b></b>");
	} else {
		const $scope1_id = _scope_id();
		if (false) {
			const $scope4_id = _scope_id();
			_html("<b></b>");
		} else {
			const $scope2_id = _scope_id();
			_html(_text_mark($scope2_id, "#text/0", v, 2));
			_subscribe($v__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "11:6"), "__tests__/template.marko_2_v#0:2/subscribe");
		}
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:4");
	}
	_html(`</p><button>add</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		v,
		"ClosureScopes:v/3": $v__closures
	}, "__tests__/template.marko", 0, { v: "1:6" });
}, 1);
