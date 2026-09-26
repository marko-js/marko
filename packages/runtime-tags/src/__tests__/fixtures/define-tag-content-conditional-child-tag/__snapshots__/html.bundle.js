// tags/child.marko
var child_default = _template("b", (input) => {
	_serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 0), $si__input_label = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	({ content: _content("a2", (input) => {
		const $scope2_id = _scope_id();
		const $Box_content2__input_content__closures = /* @__PURE__ */ new Set();
		const $scope2_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope2_reason, 0), $si__input_content = _serialize_if($scope2_reason, 0);
		child_default({ content: _content_resume("a1", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_dynamic_tag($scope3_id, "a", input.content, {}, 0, 0, $sg__input_content);
			_subscribe($si__input_content && $Box_content2__input_content__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0", $sg__input_content);
			$sg__input_content || _resume_branch($scope3_id);
		}, $scope2_id) });
		_scope($scope2_id, {
			d: input.content,
			f: $si__input_content && $Box_content2__input_content__closures
		});
	}, $scope0_id) }).content({ content: _content_resume("a4", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`label: ${_text_resume($scope1_id, "a", input.label, $sg__input_label * 2)}`);
		_subscribe($si__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3", $sg__input_label);
		$sg__input_label || _resume_branch($scope1_id);
	}, $scope0_id) });
	_scope($scope0_id, {
		d: input.label,
		e: $si__input_label && $input_label__closures
	});
}, 1);
