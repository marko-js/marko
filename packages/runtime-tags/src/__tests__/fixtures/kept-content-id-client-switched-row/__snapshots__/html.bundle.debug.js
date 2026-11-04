// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Other = { content: _content_resume("__tests__/tags/card.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<b>other</b>");
	}, $scope0_id) };
	let c = input.content;
	_html(`<button>switch</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_dynamic_tag($scope0_id, "#text/2", c, {});
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, { Other }, "__tests__/tags/card.marko", 0, { Other: "1:9" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_rows__OR__input_show__OR__input_label = _write_if($scope0_reason, 1), $wg__input_rows = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 4), $wi__input_show = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_show__closures = new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		card_default({ content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					const uid = _id();
					_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_mark($scope3_id, "#text/2", input.label, $wg__input_label)}</label>`);
					$wi__input_rows__OR__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:6"), "__tests__/template.marko_3_input_label#0:5/subscribe", $wg__input_label);
					return 0;
				}
			}, $scope2_id, "#text/0", $wg__input_show, $wg__input_show);
			$wi__input_rows__OR__input_show__OR__input_label && _subscribe($wi__input_show && $input_show__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), "__tests__/template.marko_2_input_show#0:4/subscribe", $wg__input_show);
		}, $scope1_id) });
		$wi__input_rows__OR__input_show__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
	}, "id", $scope0_id, "#text/0", $wg__input_rows, $wg__input_rows);
	$wi__input_rows__OR__input_show__OR__input_label && _scope($scope0_id, {
		input_show: _write_if($scope0_reason, 2) && input.show,
		input_label: _write_if($scope0_reason, 0) && input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_show/6": $wi__input_show && $input_show__closures
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"]
	});
}, 1);
