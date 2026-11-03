// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_for_to(input.n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<button class=r>x</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			"#LoopKey": i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { "#LoopKey": "2:6" });
	}, 0, $scope0_id, "#text/0", $wg__input_n, $wg__input_n, 0, 0, 1);
	_html(`<p>${_text_resume($scope0_id, "#text/1", count)}</p>`);
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
