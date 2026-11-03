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

// tags/level.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wg__input_n__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_content = _write_guard($scope0_reason, 3), $wi__input_n = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.n) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_n__OR__input_label << 1 | $wg__input_n << 3 | $wg__input_label << 5);
			const $childScope = _peek_scope_id();
			$content({
				n: input.n - 1,
				label: input.label,
				content: _content_resume("c2", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_html(`<em>${_text_resume($scope2_id, "a", input.n, $wg__input_n)}:${_text_resume($scope2_id, "b", input.label, $wg__input_label * 2)}</em>`);
					_subscribe($wi__input_label && $input_label__closures, _subscribe($wi__input_n && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "c0", $wg__input_n || $wg__input_label), "c1", $wg__input_n || $wg__input_label);
					$wg__input_n || $wg__input_label || _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _write_if($scope0_reason, 0) && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_n__OR__input_label, $wg__input_n);
	_set_scope_reason($wg__input_content << 1);
	const $childScope2 = _peek_scope_id();
	keeper_default({ content: input.content });
	_scope($scope0_id, {
		e: input.n,
		f: input.label,
		h: $wi__input_n && $input_n__closures,
		i: $wi__input_label && $input_label__closures,
		b: _write_if($scope0_reason, 3) && _existing_scope($childScope2)
	});
};
var level_default = _template("c", $content);

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason($wg__input_label << 1 | $wg__input_label << 5);
	const $childScope = _peek_scope_id();
	level_default({
		n: 2,
		label: input.label
	});
	_html("</main>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
