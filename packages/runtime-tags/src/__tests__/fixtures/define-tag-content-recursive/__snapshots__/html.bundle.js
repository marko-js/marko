// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	({ content: _content("a4", (input) => {
		const $scope2_id = _scope_id();
		const $Tree_content2__input_depth__closures = /* @__PURE__ */ new Set();
		const $Tree_content2__input_content__closures = /* @__PURE__ */ new Set(), $scope2_reason = _scope_reason(), $wg__input_depth = _write_guard($scope2_reason, 0);
		_write_guard($scope2_reason, 1);
		const $wi__input_depth = _write_if($scope2_reason, 0), $wi__input_content = _write_if($scope2_reason, 1);
		let open = false;
		_html(`<button>${_text_resume($scope2_id, "b", input.depth, $wg__input_depth)}</button>${_el_resume($scope2_id, "a")}`);
		_if(() => {}, $scope2_id, "c");
		_script($scope2_id, "a5");
		_scope($scope2_id, {
			f: input.depth,
			g: input.content,
			h: open,
			i: $wi__input_depth && $Tree_content2__input_depth__closures,
			j: $wi__input_content && $Tree_content2__input_content__closures
		});
	}, $scope0_id) }).content({
		depth: 2,
		content: _content_resume("a7", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`leaf ${_text_resume($scope1_id, "a", input.label, $wg__input_label * 2)}`);
			_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a6", $wg__input_label);
			$wg__input_label || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_scope($scope0_id, {
		d: input.label,
		e: $wi__input_label && $input_label__closures
	});
}, 1);
