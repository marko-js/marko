// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_for_of(["a", "b"], (item, index) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", resolveAfter(item, 1), (value) => {
					const $scope3_id = _scope_id();
					_html(`${_escape(value)}:${_escape(index)}`);
					_scope($scope3_id, {}, "__tests__/template.marko", "7:6");
				});
				_scope($scope2_id, {}, "__tests__/template.marko", "6:4");
				return 0;
			}
		}, $scope1_id, "#text/0");
		_scope($scope1_id, {
			item,
			"#LoopKey": index,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:2", {
			item: "4:6",
			"#LoopKey": "4:12"
		});
	}, 0, $scope0_id, "#text/0", 1, 0);
	_html(`<button>show</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
