// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of([1], (i) => {
		const $scope1_id = _scope_id();
		let y = 0;
		_html(_text_mark($scope1_id, "#text/0", input.p1 + y, 2));
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			y: _write_if($scope0_reason, 0) && y,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { y: "2:8" });
	}, 0, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), 0);
	_script($scope0_id, "__tests__/template.marko_0_input_p1#3", 0);
	_scope($scope0_id, { input_p1: input.p1 }, "__tests__/template.marko", 0, { input_p1: ["input.p1"] });
}, 1);
