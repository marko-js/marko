// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inner = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					const read = _resume(() => input.label, "__tests__/template.marko_2/read", $scope2_id);
					_html(`<span></span>${_el_resume($scope2_id, "#span/0")}`);
					_script($scope2_id, "__tests__/template.marko_2");
					_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
						read,
						_: _scope_with_id($scope1_id)
					}, "__tests__/template.marko", "3:6", { read: "6:14" }), "__tests__/template.marko_2_input_label#0:5/subscribe");
					_assert_hoist(read);
					return 0;
				}
			}, $scope1_id, "#div/0", 1, $wg__input_inner, $wg__input_inner, "</div>", 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show, $wg__input_show, 0, 1);
	_scope($scope0_id, {
		input_inner: _write_if($scope0_reason, 1) && input.inner,
		input_label: input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_inner: ["input.inner"],
		input_label: ["input.label"]
	});
}, 1);
