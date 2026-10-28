// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_dynamic_tag($scope0_id, "#text/2", c, {});
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2), $wg__input_items = _write_guard($scope0_reason, 4), $wi__input_items = _write_if($scope0_reason, 4), $wi__input_show__OR__input_label__OR__input_items = _write_if($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_show__closures = new Set();
	const $input_items__closures = new Set();
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				const uid = _id();
				_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_resume($scope2_id, "#text/2", input.label, $wg__input_label)}</label>`);
				_write_if($scope0_reason, 0) && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), "__tests__/template.marko_2_input_label#0:4/subscribe", $wg__input_label);
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_show, $wg__input_show);
		_for_of(input.items, (item) => {
			const $scope3_id = _scope_id();
			const rid = _id();
			_html(`<input${_attr("id", rid)}><label${_attr("for", rid)}>${_escape(item.id)}</label>`);
			$wi__input_items && _scope($scope3_id, {}, "__tests__/template.marko", "7:4");
		}, "id", $scope1_id, "#text/1", $wg__input_items, $wg__input_items);
		$wi__input_show__OR__input_label__OR__input_items && _subscribe($wi__input_items && $input_items__closures, _subscribe($wi__input_show && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_show#0:3/subscribe", $wg__input_show || $wg__input_items), "__tests__/template.marko_1_input_items#0:5/subscribe", $wg__input_show || $wg__input_items);
		$wg__input_show || $wg__input_items || $wi__input_show__OR__input_label__OR__input_items && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_show__OR__input_label__OR__input_items && _scope($scope0_id, {
		input_label: $wi__input_show && input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_show/6": $wi__input_show && $input_show__closures,
		"ClosureScopes:input_items/8": $wi__input_items && $input_items__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
