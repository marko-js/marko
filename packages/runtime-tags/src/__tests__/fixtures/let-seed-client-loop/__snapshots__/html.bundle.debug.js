// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>add</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_until(n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		let x = input.v;
		_html(`<p>${_escape(i)}:${_escape(x)} ${_text_resume($scope1_id, "#text/2", input.w, $wg__input_w * 2)}</p>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, 0, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_v: input.v,
		input_w: input.w,
		n
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_w: ["input.w"],
		n: "1:6"
	});
}, 1);
