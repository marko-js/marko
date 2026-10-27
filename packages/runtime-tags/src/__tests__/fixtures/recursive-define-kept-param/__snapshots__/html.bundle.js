// tags/keeper.marko
var keeper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Level = { content: _content("a3", ({ n, label, content }) => {
		const $scope1_id = _scope_id();
		const $Level_content__n__closures = /* @__PURE__ */ new Set();
		const $Level_content__label__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wg__n = _write_guard($scope1_reason, 1), $wg__label = _write_guard($scope1_reason, 2), $wg__n__OR__label = _write_guard($scope1_reason, 0), $wg__content = _write_guard($scope1_reason, 3), $wi__n = _write_if($scope1_reason, 1), $wi__label = _write_if($scope1_reason, 2);
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__n__OR__label << 1 | $wg__n << 3 | $wg__label << 5);
				const $childScope = _peek_scope_id();
				Level.content({
					n: n - 1,
					label,
					content: _content_resume("a2", () => {
						_scope_reason();
						const $scope3_id = _scope_id();
						_html(`<em>${_text_resume($scope3_id, "a", n, $wg__n)}:${_text_resume($scope3_id, "b", label, $wg__label * 2)}</em>`);
						_subscribe($wi__label && $Level_content__label__closures, _subscribe($wi__n && $Level_content__n__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0", $wg__n || $wg__label), "a1", $wg__n || $wg__label);
						$wg__n || $wg__label || _resume_branch($scope3_id);
					}, $scope2_id)
				});
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _write_if($scope1_reason, 0) && _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "a", $wg__n__OR__label, $wg__n);
		_set_scope_reason($wg__content << 1);
		const $childScope2 = _peek_scope_id();
		keeper_default({ content });
		_scope($scope1_id, {
			e: n,
			f: label,
			h: $wi__n && $Level_content__n__closures,
			i: $wi__label && $Level_content__label__closures,
			b: _write_if($scope1_reason, 3) && _existing_scope($childScope2)
		});
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason($wg__input_label << 1 | $wg__input_label << 5);
	const $childScope3 = _peek_scope_id();
	Level.content({
		n: 2,
		label: input.label
	});
	_html("</main>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope3) });
}, 1);
