// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Outer = { content: _content("a3", (input) => {
		const $scope1_id = _scope_id();
		const $Outer_content__label__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wg__input_depth = _write_guard($scope1_reason, 0);
		const Inner = { content: _content("a0", (inner) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_set_scope_reason(_write_guard($scope2_reason, 1) << 1);
			const $childScope = _peek_scope_id();
			Outer.content({
				depth: inner.depth,
				content: inner.content
			});
			_write_if($scope2_reason, 0) && _scope($scope2_id, { a: _existing_scope($childScope) });
		}, $scope1_id) };
		let shown = false;
		const label = "off";
		_html(`<button>${_text_mark($scope1_id, "b", input.depth, $wg__input_depth)}</button>${_el_mark($scope1_id, "a")}`);
		_if(() => {}, $scope1_id, "c");
		_if(() => {
			if (input.depth < 1) {
				const $scope4_id = _scope_id();
				_set_scope_reason($wg__input_depth << 1 | $wg__input_depth << 3);
				const $childScope2 = _peek_scope_id();
				Inner.content({
					depth: input.depth + 1,
					content: _content_resume("a2", () => {
						_scope_reason();
						const $scope5_id = _scope_id();
						_html(`<em>held ${_text_mark($scope5_id, "a", label, 2)}</em>`);
						_subscribe($Outer_content__label__closures, _scope($scope5_id, { _: _scope_with_id($scope4_id) }), "a1");
					}, $scope4_id)
				});
				_scope($scope4_id, {
					_: _scope_with_id($scope1_id),
					a: _write_if($scope1_reason, 0) && _existing_scope($childScope2)
				});
				return 0;
			}
		}, $scope1_id, "d", $wg__input_depth, $wg__input_depth);
		_script($scope1_id, "a4");
		_scope($scope1_id, {
			h: input.content,
			i: shown,
			j: label,
			m: $Outer_content__label__closures
		});
	}, $scope0_id) };
	Outer.content({ depth: 0 });
}, 1);
