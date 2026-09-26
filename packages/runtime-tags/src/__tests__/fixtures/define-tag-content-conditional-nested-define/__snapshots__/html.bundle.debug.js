// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 0), $si__input_label = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Inner = { content: _content("__tests__/template.marko_2*content", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope2_reason, 0);
		let open = false;
		_html(`<button>toggle</button>${_el_resume($scope2_id, "#button/0")}`);
		_if(() => {
			if (open) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
				_scope($scope4_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope2_id, "#text/1");
		_script($scope2_id, "__tests__/template.marko_2");
		_scope($scope2_id, {
			input_content: input.content,
			open
		}, "__tests__/template.marko", "1:2", {
			input_content: ["input.content", "1:15"],
			open: "2:8"
		});
	}, $scope0_id) };
	const Outer = { content: _content("__tests__/template.marko_3*content", (outer) => {
		const $scope3_id = _scope_id();
		const $Outer_content2__outer_label__closures = new Set();
		const $Outer_content2__outer_content__closures = new Set();
		const $scope3_reason = _scope_reason(), $sg__outer_label = _serialize_guard($scope3_reason, 0), $sg__outer_content = _serialize_guard($scope3_reason, 1), $si__outer_label = _serialize_if($scope3_reason, 0), $si__outer_content = _serialize_if($scope3_reason, 1);
		Inner.content({ content: _content_resume("__tests__/template.marko_5*content", () => {
			const $scope5_reason = _scope_reason();
			const $scope5_id = _scope_id();
			_html(`outer ${_text_resume($scope5_id, "#text/0", outer.label, $sg__outer_label * 2)}: `);
			_dynamic_tag($scope5_id, "#text/1", outer.content, {}, 0, 0, $sg__outer_content);
			_subscribe($si__outer_content && $Outer_content2__outer_content__closures, _subscribe($si__outer_label && $Outer_content2__outer_label__closures, _scope($scope5_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "10:4"), "__tests__/template.marko_5_outer_label#3/subscribe", $sg__outer_label || $sg__outer_content), "__tests__/template.marko_5_outer_content#4/subscribe", $sg__outer_label || $sg__outer_content);
			$sg__outer_label || $sg__outer_content || _resume_branch($scope5_id);
		}, $scope3_id) });
		_scope($scope3_id, {
			outer_label: outer.label,
			outer_content: outer.content,
			"ClosureScopes:outer_label/5": $si__outer_label && $Outer_content2__outer_label__closures,
			"ClosureScopes:outer_content/6": $si__outer_content && $Outer_content2__outer_content__closures
		}, "__tests__/template.marko", "9:2", {
			outer_label: ["outer.label", "9:15"],
			outer_content: ["outer.content", "9:15"]
		});
	}, $scope0_id) };
	_set_serialize_reason($sg__input_label << 1);
	const $childScope = _peek_scope_id();
	Outer.content({
		label: input.label,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`label: ${_text_resume($scope1_id, "#text/0", input.label, $sg__input_label * 2)}`);
			_subscribe($si__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "13:2"), "__tests__/template.marko_1_input_label#3/subscribe", $sg__input_label);
			$sg__input_label || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/4": $si__input_label && $input_label__closures,
		"#childScope/0": $si__input_label && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
