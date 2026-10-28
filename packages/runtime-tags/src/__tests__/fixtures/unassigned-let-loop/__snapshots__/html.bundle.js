// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let xs = input.items;
	_for_of(xs, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_escape(x)} ${_text_resume($scope1_id, "b", input.w, $wg__input_w * 2)}</p>`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", $wg__input_w, 0, 0, 0, 1);
}, 1);
