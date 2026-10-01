// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Inner = { content: _content("a0", (input) => {
		const $scope2_id = _scope_id(), $scope2_reason = _scope_reason();
		_write_guard($scope2_reason, 0);
		let open = false;
		_html(`<button>toggle</button>${_el_resume($scope2_id, "a")}`);
		_if(() => {}, $scope2_id, "b");
		_script($scope2_id, "a1");
		_scope($scope2_id, {
			e: input.content,
			f: open
		});
	}, $scope0_id) };
	const Outer = { content: _content("a5", (outer) => {
		const $scope3_id = _scope_id();
		const $Outer_content2__outer_label__closures = /* @__PURE__ */ new Set();
		const $Outer_content2__outer_content__closures = /* @__PURE__ */ new Set();
		const $scope3_reason = _scope_reason(), $wg__outer_label = _write_guard($scope3_reason, 0), $wg__outer_content = _write_guard($scope3_reason, 1), $wi__outer_label = _write_if($scope3_reason, 0), $wi__outer_content = _write_if($scope3_reason, 1);
		Inner.content({ content: _content_resume("a4", () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html(`outer ${_text_resume($scope5_id, "a", outer.label, $wg__outer_label * 2)}: `);
			_dynamic_tag($scope5_id, "b", outer.content, {}, 0, 0, $wg__outer_content);
			_subscribe($wi__outer_content && $Outer_content2__outer_content__closures, _subscribe($wi__outer_label && $Outer_content2__outer_label__closures, _scope($scope5_id, { _: _scope_with_id($scope3_id) }), "a2", $wg__outer_label || $wg__outer_content), "a3", $wg__outer_label || $wg__outer_content);
			$wg__outer_label || $wg__outer_content || _resume_branch($scope5_id);
		}, $scope3_id) });
		_scope($scope3_id, {
			d: outer.label,
			e: outer.content,
			f: $wi__outer_label && $Outer_content2__outer_label__closures,
			g: $wi__outer_content && $Outer_content2__outer_content__closures
		});
	}, $scope0_id) };
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	Outer.content({
		label: input.label,
		content: _content_resume("a7", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`label: ${_text_resume($scope1_id, "a", input.label, $wg__input_label * 2)}`);
			_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a6", $wg__input_label);
			$wg__input_label || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_scope($scope0_id, {
		d: input.label,
		e: $wi__input_label && $input_label__closures,
		a: $wi__input_label && _existing_scope($childScope)
	});
}, 1);
