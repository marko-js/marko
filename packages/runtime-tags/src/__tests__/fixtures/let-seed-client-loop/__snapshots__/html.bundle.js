// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>add</button>${_el_resume($scope0_id, "a")}`);
	_for_until(n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		let x = input.v;
		_html(`<p>${_escape(i)}:${_escape(x)} ${_text_resume($scope1_id, "c", input.w, $wg__input_w * 2)}</p>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.v,
		f: input.w,
		g: n
	});
}, 1);
