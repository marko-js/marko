// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<div${_signal_read_error() ? " class=live" : ""}></div><input${_attr_input_checked($scope1_id, "#input/1", _signal_read_error())} type=checkbox><input${_attrs({
				type: "checkbox",
				...input.attrs,
				checked: _signal_read_error()
			}, "#input/2", $scope1_id, "input")}>${_el_mark($scope1_id, "#input/2")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_attrs#0:4");
			_scope($scope1_id, {}, "__tests__/template.marko", "2:2", {
				"ControlledHandler:#input/2": ["...input.attrs", "5:29"],
				"EventAttributes:#input/2": ["...input.attrs", "5:29"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button></button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { input_attrs: input.attrs }, "__tests__/template.marko", 0, { input_attrs: ["input.attrs"] });
}, 1);
