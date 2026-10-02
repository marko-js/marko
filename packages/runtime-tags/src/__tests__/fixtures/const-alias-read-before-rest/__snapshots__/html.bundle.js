// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_button_id = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.button.id, $wg__input_button_id)}</div>`);
	_if(() => {
		if (input.button.id) {
			const $scope1_id = _scope_id();
			_html("<b></b>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", $wg__input_button_id, $wg__input_button_id, 0, 0, 1);
	const { label, ...rest } = input.button;
	_html(`<span${_attrs(rest, "c", $scope0_id, "span")}>${_text_resume($scope0_id, "d", label, _write_guard($scope0_reason, 1))}</span>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
