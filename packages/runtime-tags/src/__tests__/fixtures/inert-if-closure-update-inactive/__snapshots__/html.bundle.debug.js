// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "#text/0", value));
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0));
	_html(`<button>Update</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { value: _write_if($scope0_reason, 0) && value }, "__tests__/template.marko", 0, { value: "1:6" });
}, 1);
