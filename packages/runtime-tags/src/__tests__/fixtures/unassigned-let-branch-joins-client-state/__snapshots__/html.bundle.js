// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = input.show;
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (show && true) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.w, $wg__input_w)}</p>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: input.w,
		h: show,
		i: n
	});
}, 1);
