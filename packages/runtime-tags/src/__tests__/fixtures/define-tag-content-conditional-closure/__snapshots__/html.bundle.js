// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 0), $si__input_label = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	({ content: _content("a0", (input) => {
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
	}, $scope0_id) }).content({ content: _content_resume("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`label: ${_text_resume($scope1_id, "a", input.label, $sg__input_label * 2)}`);
		_subscribe($si__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2", $sg__input_label);
		$sg__input_label || _resume_branch($scope1_id);
	}, $scope0_id) });
	_scope($scope0_id, {
		d: input.label,
		e: $si__input_label && $input_label__closures
	});
}, 1);
