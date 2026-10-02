// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $getLabel_getter = _hoist($scope0_id, "__tests__/template.marko_0_getLabel#2:0/hoist");
	_if(() => {
		if (input.a) {
			const $scope2_id = _scope_id();
			const getLabel = _resume(() => "a", "__tests__/template.marko_2/getLabel");
			_scope($scope2_id, { getLabel }, "__tests__/template.marko", "1:2", { getLabel: "2:10" });
			_assert_hoist(getLabel);
			return 0;
		} else {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<button>${_text_resume($scope1_id, "#text/1", count)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_dynamic_tag($scope1_id, "#text/2", input.dyn, { count }, _content_resume("__tests__/template.marko_3*content", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				if ($getLabel_getter) {
					const $scope4_id = _scope_id();
					_html("y");
				}
				_scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:6");
			}, $scope1_id));
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				count,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "4:2", { count: "5:8" });
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_a);
	_scope($scope0_id, { input_dyn: input.dyn }, "__tests__/template.marko", 0, { input_dyn: ["input.dyn"] });
}, 1);
