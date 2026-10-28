// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
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
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 2), $wg__input_suffix = _write_guard($scope0_reason, 4), $wi__input_rows__OR__input_wrap__OR__input_suffix = _write_if($scope0_reason, 1), $wg__input_wrap = _write_guard($scope0_reason, 3), $wi__input_rows = _write_if($scope0_reason, 2), $wi__input_suffix = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_label__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope1_id, "a", input.wrap ? card_default : "div", {}, _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<b>${_text_resume($scope2_id, "a", row.label, $wg__input_rows)}${_text_resume($scope2_id, "b", input.suffix, $wg__input_suffix * 2)}</b>`);
			$wi__input_rows__OR__input_wrap__OR__input_suffix && _subscribe($wi__input_rows && $for_content__row_label__closures, _subscribe($wi__input_suffix && $input_suffix__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_rows || $wg__input_suffix), "a2", $wg__input_rows || $wg__input_suffix);
			$wg__input_rows || $wg__input_suffix || $wi__input_rows__OR__input_wrap__OR__input_suffix && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => [{ f: input.suffix }, {
			d: row?.label,
			_: $scope($scope0_id)
		}]), 0, $wg__input_wrap);
		$wi__input_rows__OR__input_wrap__OR__input_suffix && _scope($scope1_id, {
			d: _write_if($scope0_reason, 3) && row?.label,
			_: _scope_with_id($scope0_id),
			i: $wi__input_rows && $for_content__row_label__closures
		});
	}, "id", $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_rows);
	$wi__input_rows__OR__input_wrap__OR__input_suffix && _scope($scope0_id, {
		e: $wi__input_rows && input.wrap,
		f: _write_if($scope0_reason, 0) && input.suffix,
		h: $wi__input_suffix && $input_suffix__closures
	});
}, 1);
