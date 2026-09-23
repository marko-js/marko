// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 0), $si__input_label = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Inner = { content: _content("a0", (input) => {
		const $scope2_id = _scope_id();
		_serialize_guard(_scope_reason(), 0);
		let open = false;
		_html(`<button>toggle</button>${_el_resume($scope2_id, "a")}`);
		_if(() => {}, $scope2_id, "b");
		_script($scope2_id, "a1");
		_scope($scope2_id, {
			e: input.content,
			f: open
		});
	}, $scope0_id) };
	const Outer = { content: _content("a3", (outer) => {
		const $scope3_id = _scope_id();
		const $Outer_content2__outer_label__closures = /* @__PURE__ */ new Set();
		const $Outer_content2__outer_content__closures = /* @__PURE__ */ new Set();
		const $scope3_reason = _scope_reason(), $sg__outer_label = _serialize_guard($scope3_reason, 0), $sg__outer_content = _serialize_guard($scope3_reason, 1), $si__outer_label = _serialize_if($scope3_reason, 0), $si__outer_content = _serialize_if($scope3_reason, 1);
		Inner.content({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html(`outer ${_text_resume($scope5_id, "a", outer.label, $sg__outer_label * 2)}: `);
			_dynamic_tag($scope5_id, "b", outer.content, {}, 0, 0, $sg__outer_content);
			_subscribe($si__outer_content && $Outer_content2__outer_content__closures, _subscribe($si__outer_label && $Outer_content2__outer_label__closures, _scope($scope5_id, { _: _scope_with_id($scope3_id) })));
			$sg__outer_label || $sg__outer_content || _resume_branch($scope5_id);
		}, $scope3_id) });
		_scope($scope3_id, {
			d: outer.label,
			e: outer.content,
			f: $si__outer_label && $Outer_content2__outer_label__closures,
			g: $si__outer_content && $Outer_content2__outer_content__closures
		});
	}, $scope0_id) };
	_set_serialize_reason($sg__input_label << 1);
	const $childScope = _peek_scope_id();
	Outer.content({
		label: input.label,
		content: _content_resume("a4", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`label: ${_text_resume($scope1_id, "a", input.label, $sg__input_label * 2)}`);
			_subscribe($si__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
			$sg__input_label || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_scope($scope0_id, {
		d: input.label,
		e: $si__input_label && $input_label__closures,
		a: $si__input_label && _existing_scope($childScope)
	});
}, 1);
