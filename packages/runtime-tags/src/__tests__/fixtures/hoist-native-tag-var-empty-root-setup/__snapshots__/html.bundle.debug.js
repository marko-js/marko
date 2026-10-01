// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wg__input_editable = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div>shown</div>${_el_resume($scope1_id, "#div/0")}`);
			_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, $wg__input_show, 0, 1);
	_if(() => {
		if (input.editable) {
			const $scope2_id = _scope_id();
			_html(`<button>click</button>${_el_resume($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_editable, $wg__input_editable, $wg__input_editable, 0, 1);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
