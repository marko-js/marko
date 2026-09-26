// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show__OR__input_editable = _serialize_guard($scope0_reason, 0), $sg__input_editable = _serialize_guard($scope0_reason, 2), $sg__input_show = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div>shown</div>${_el_resume($scope1_id, "#div/0")}`);
			_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show__OR__input_editable, 0, 1);
	_if(() => {
		if (input.editable) {
			const $scope2_id = _scope_id();
			_html(`<button>click</button>${_el_resume($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $sg__input_editable, $sg__input_editable, $sg__input_show__OR__input_editable, 0, 1);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
