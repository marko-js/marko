// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $getLabel_getter = _hoist($scope0_id, "__tests__/template.marko_0_getLabel#1:0/hoist");
	_if(() => {
		if (input.a) {
			const $scope1_id = _scope_id();
			const getLabel = _resume(() => "a", "__tests__/template.marko_1/getLabel");
			_scope($scope1_id, { getLabel }, "__tests__/template.marko", "1:2", { getLabel: "2:10" });
			_assert_hoist(getLabel);
			return 0;
		} else {
			const $scope2_id = _scope_id();
			let label = "none";
			_html(`<button>${_text_resume($scope2_id, "#text/1", label)}</button>${_el_resume($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_a);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
