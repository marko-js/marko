// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const b = { value: input.x };
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<i>${_text_mark($scope1_id, "#text/0", JSON.stringify(b), $wg__input_x)}</i>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		open,
		b
	}, "__tests__/template.marko", 0, {
		open: "1:6",
		b: "2:8"
	});
}, 1);
