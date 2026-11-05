// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let v = "a";
	_html("<p>x");
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_html(`${_text_mark($scope1_id, "a", v, 2)}<b></b>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0));
	_html(`</p><button>add</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: v });
}, 1);
