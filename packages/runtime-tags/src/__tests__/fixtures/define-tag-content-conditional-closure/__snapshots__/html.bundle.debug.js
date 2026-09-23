// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 0), $si__input_label = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Box = { content: _content("__tests__/template.marko_2*content", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope2_reason, 0);
		let open = false;
		_html(`<button>toggle</button>${_el_resume($scope2_id, "#button/0")}`);
		_if(() => {
			if (open) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
				_scope($scope3_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope2_id, "#text/1");
		_script($scope2_id, "__tests__/template.marko_2");
		_scope($scope2_id, {
			input_content: input.content,
			open
		}, "__tests__/template.marko", "1:2", {
			input_content: ["input.content", "1:13"],
			open: "2:8"
		});
	}, $scope0_id) };
	Box.content({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`label: ${_text_resume($scope1_id, "#text/0", input.label, $sg__input_label * 2)}`);
		_subscribe($si__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:2"));
		$sg__input_label || _resume_branch($scope1_id);
	}, $scope0_id) });
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label": $si__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
