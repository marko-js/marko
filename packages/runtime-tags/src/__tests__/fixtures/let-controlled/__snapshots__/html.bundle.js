// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v__OR__input_w = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	_html(`<p>${_text_mark($scope0_id, "a", x + input.w, $wg__input_v__OR__input_w)}</p>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.w,
		f: _write_if($scope0_reason, 2) && x
	});
}, 1);
