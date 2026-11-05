// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	({ content: _content("a1", (input) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		child_default({ content: _content_resume("a0", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_dynamic_tag($scope3_id, "a", input.content, {}, 0, 0, 0);
			_scope($scope3_id, { _: _scope_with_id($scope2_id) });
		}, $scope2_id) });
		_scope($scope2_id, { d: input.content });
	}, $scope0_id) }).content({ content: _content_resume("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`label: ${_text_mark($scope1_id, "a", input.label, $wg__input_label * 2)}`);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2", $wg__input_label);
	}, $scope0_id) });
	_scope($scope0_id, {
		d: input.label,
		e: $wi__input_label && $input_label__closures
	});
}, 1);
