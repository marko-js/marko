// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const d = input.v + "!";
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<p>${_escape(d)} ${_text_resume($scope1_id, "b", input.w, $wg__input_w * 2)}</p>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: input.w,
		g: d,
		h: on
	});
}, 1);
