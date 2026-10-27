// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const fmt = _resume(() => input.a + ":" + input.b, "__tests__/template.marko_0/fmt", $scope0_id);
	let open = false;
	_html("<main>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", fmt(), $wg__input_a__OR__input_b)}</p>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_a: input.a,
		input_b: input.b,
		fmt,
		open
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		fmt: "1:8",
		open: "2:6"
	});
}, 1);
