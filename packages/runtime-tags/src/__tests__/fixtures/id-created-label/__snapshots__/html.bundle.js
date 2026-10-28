// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 5), $wi__input_show = _write_if($scope0_reason, 5), $wi__input_items__OR__input_show = _write_if($scope0_reason, 0), $wg__input_items__OR__input_show = _write_guard($scope0_reason, 0), $wg__input_show__OR__input_on = _write_guard($scope0_reason, 2), $wi__input_rows = _write_if($scope0_reason, 6), $wg__input_rows = _write_guard($scope0_reason, 6), $wg__input_items = _write_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const uid = _id();
		_html(`<input${_attr("id", uid)}>`);
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<label${_attr("for", uid)}>${_escape(item.key)}</label>`);
				$wi__input_items__OR__input_show && _scope($scope2_id, { _: _write_if($scope0_reason, 4) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "b", $wg__input_items__OR__input_show, $wg__input_show, 0, 0, 1);
		$wi__input_items__OR__input_show && _scope($scope1_id, {
			M: $wi__input_show && item?.key,
			d: $wi__input_show && uid,
			_: $wi__input_show && _scope_with_id($scope0_id)
		});
	}, "key", $scope0_id, "a", $wg__input_items__OR__input_show, $wg__input_items);
	const Field = { content: _content_resume("a0", ({ show }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__show = _write_guard($scope3_reason, 0), $wi__show = _write_if($scope3_reason, 0);
		const uid = _id();
		_html(`<input${_attr("id", uid)}>`);
		_if(() => {
			if (show) {
				const $scope4_id = _scope_id();
				_html(`<label${_attr("for", uid)}>field</label>`);
				$wi__show && _scope($scope4_id, {});
				return 0;
			}
		}, $scope3_id, "b", $wg__show, $wg__show, 0, 0, 1);
		$wi__show && _scope($scope3_id, { f: uid });
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "b", input.on ? Field : null, { show: input.show }, 0, 0, $wg__input_show__OR__input_on);
	_dynamic_tag($scope0_id, "c", input.on ? Field : null, { show: input.show }, 0, 0, $wg__input_show__OR__input_on);
	_for_of(input.rows, (row) => {
		const $scope5_id = _scope_id();
		card_default({ content: _content("a1", () => {
			_scope_reason();
			const $scope6_id = _scope_id();
			const uid = _id();
			_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_escape(row.id)}</label>`);
			$wi__input_rows && _scope($scope6_id, { _: _scope_with_id($scope5_id) });
			$wi__input_rows && _resume_branch($scope6_id);
		}, $scope5_id) });
		$wi__input_rows && _scope($scope5_id, {});
	}, "id", $scope0_id, "d", $wg__input_rows, $wg__input_rows);
	_write_if($scope0_reason, 3) && _scope($scope0_id, {
		h: _write_if($scope0_reason, 1) && input.show,
		i: $wi__input_show && input.on,
		k: _write_if($scope0_reason, 2) && Field
	});
}, 1);
