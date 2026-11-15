// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_for_of([{ id: "x" }, { id: "y" }], ({ id }) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html(_escape(id));
				_scope($scope2_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/0");
		_scope($scope1_id, {
			"#LoopKey": id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { "#LoopKey": "2:8" });
	}, "id", $scope0_id, "#text/0", 1, 0);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
