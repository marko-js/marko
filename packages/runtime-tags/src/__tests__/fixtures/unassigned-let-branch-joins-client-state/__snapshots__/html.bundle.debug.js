// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = input.show;
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show && n < 2) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", input.w, $wg__input_w)}</p>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_w: input.w,
		show,
		n
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		show: "1:6",
		n: "2:6"
	});
}, 1);
