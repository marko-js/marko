// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<p>");
	_for_of([1, 2], (i) => {
		const $scope1_id = _scope_id();
		_html(`${_text_mark($scope1_id, "a", n, 2)} x`);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, 0);
	_html(`</p><button>inc</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: n });
}, 1);
