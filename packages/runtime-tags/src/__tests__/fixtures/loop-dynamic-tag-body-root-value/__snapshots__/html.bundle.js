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
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 2), $wg__input_note = _write_guard($scope0_reason, 4), $wi__input_rows__OR__input_on__OR__input_note = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 3), $wi__input_rows = _write_if($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_label__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope1_id, "a", input.on ? card_default : "div", {}, _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_text_resume($scope2_id, "a", input.note, $wg__input_note)} ${_text_resume($scope2_id, "b", row.label, $wg__input_rows * 2)}</em>`);
			$wi__input_rows__OR__input_on__OR__input_note && _subscribe($wi__input_rows && $for_content__row_label__closures, _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_rows || $wg__input_note), "a2", $wg__input_rows || $wg__input_note);
			$wg__input_rows || $wg__input_note || $wi__input_rows__OR__input_on__OR__input_note && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => [{ f: input.note }, {
			d: row?.label,
			_: $scope($scope0_id)
		}]), 0, $wg__input_on);
		$wi__input_rows__OR__input_on__OR__input_note && _scope($scope1_id, {
			d: _write_if($scope0_reason, 3) && row?.label,
			_: _scope_with_id($scope0_id),
			i: $wi__input_rows && $for_content__row_label__closures
		});
	}, "id", $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_rows, $wg__input_rows, "</main>");
	$wi__input_rows__OR__input_on__OR__input_note && _scope($scope0_id, {
		e: $wi__input_rows && input.on,
		f: _write_if($scope0_reason, 0) && input.note,
		h: $wi__input_note && $input_note__closures
	});
}, 1);
