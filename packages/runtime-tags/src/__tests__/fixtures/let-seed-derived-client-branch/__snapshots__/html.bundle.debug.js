// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const d = input.v + "!";
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			let x = d;
			_html(`<p>${_escape(x)} ${_text_resume($scope1_id, "#text/1", input.w, $wg__input_w * 2)}</p>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_w: input.w,
		d,
		on
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		d: "1:8",
		on: "2:6"
	});
}, 1);
