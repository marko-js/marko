// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
				$wi__input_items__OR__input_show && _scope($scope2_id, { _: _write_if($scope0_reason, 4) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/1", $wg__input_items__OR__input_show, $wg__input_show, 0, 0, 1);
		$wi__input_items__OR__input_show && _scope($scope1_id, {
			"#LoopKey": $wi__input_show && item?.key,
			uid: $wi__input_show && uid,
			_: $wi__input_show && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", {
			"#LoopKey": ["item.key", "1:6"],
			uid: "2:7"
		});
	}, "key", $scope0_id, "#text/0", $wg__input_items__OR__input_show, $wg__input_items);
	const Field = { content: _content_resume("__tests__/template.marko_3*content", ({ show }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__show = _write_guard($scope3_reason, 0), $wi__show = _write_if($scope3_reason, 0);
		const uid = _id();
		_html(`<input${_attr("id", uid)}>`);
		_if(() => {
			if (show) {
				const $scope4_id = _scope_id();
				_html(`<label${_attr("for", uid)}>field</label>`);
				$wi__show && _scope($scope4_id, {}, "__tests__/template.marko", "9:4");
				return 0;
			}
		}, $scope3_id, "#text/1", $wg__show, $wg__show, 0, 0, 1);
		$wi__show && _scope($scope3_id, { uid }, "__tests__/template.marko", "6:2", { uid: "7:7" });
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/1", input.on ? Field : null, { show: input.show }, 0, 0, $wg__input_show__OR__input_on);
	_dynamic_tag($scope0_id, "#text/2", input.on ? Field : null, { show: input.show }, 0, 0, $wg__input_show__OR__input_on);
	_for_of(input.rows, (row) => {
		const $scope5_id = _scope_id();
		card_default({ content: _content("__tests__/template.marko_6*content", () => {
			const $scope6_reason = _scope_reason();
			const $scope6_id = _scope_id();
			const uid = _id();
			_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_escape(row.id)}</label>`);
			$wi__input_rows && _scope($scope6_id, { _: _scope_with_id($scope5_id) }, "__tests__/template.marko", "14:4");
			$wi__input_rows && _resume_branch($scope6_id);
		}, $scope5_id) });
		$wi__input_rows && _scope($scope5_id, {}, "__tests__/template.marko", "13:2");
	}, "id", $scope0_id, "#text/3", $wg__input_rows, $wg__input_rows);
	_write_if($scope0_reason, 3) && _scope($scope0_id, {
		input_show: _write_if($scope0_reason, 1) && input.show,
		input_on: $wi__input_show && input.on,
		Field: _write_if($scope0_reason, 2) && Field
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_on: ["input.on"],
		Field: "6:9"
	});
}, 1);
