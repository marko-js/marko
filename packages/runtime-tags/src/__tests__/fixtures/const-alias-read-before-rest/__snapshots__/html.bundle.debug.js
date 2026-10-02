// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_button_id = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.button.id, $wg__input_button_id)}</div>`);
	_if(() => {
		if (input.button.id) {
			const $scope1_id = _scope_id();
			_html("<b></b>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_button_id, $wg__input_button_id, 0, 0, 1);
	const { label, ...rest } = input.button;
	_html(`<span${_attrs(rest, "#span/2", $scope0_id, "span")}>${_text_resume($scope0_id, "#text/3", label, _write_guard($scope0_reason, 1))}</span>${_el_resume($scope0_id, "#span/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_rest#9");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "EventAttributes:#span/2": ["...rest", "7:10"] });
}, 1);
