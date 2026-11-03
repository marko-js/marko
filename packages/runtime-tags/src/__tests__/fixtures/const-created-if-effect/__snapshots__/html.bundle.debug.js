// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const y = input.label + "!";
			_html(`<p>${_text_resume($scope1_id, "#text/0", y + n)}</p>`);
			_script($scope1_id, "__tests__/template.marko_1_y#1");
			_scope($scope1_id, {
				y,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "3:2", { y: "4:10" });
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: _write_if($scope0_reason, 0) && input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	});
}, 1);
