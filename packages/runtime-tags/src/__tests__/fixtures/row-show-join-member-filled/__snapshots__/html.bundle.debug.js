// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_id = _write_guard($scope0_reason, 0), $wg__input_id = _write_guard($scope0_reason, 2), $wi__input_id = _write_if($scope0_reason, 2), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_id__closures = new Set();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		const $show = item.on ? input.id : "";
		_show_start($show, $wg__input_items__OR__input_id, $wg__input_items__OR__input_id, "</div>");
		_html("shown");
		_show_end($scope1_id, "#div/0", $show, $wg__input_items__OR__input_id, $wg__input_items__OR__input_id, "</div>");
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			item_on: $wi__input_id && item?.on,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { item_on: ["item.on", "1:6"] });
	}, "k", $scope0_id, "#text/0", $wg__input_items__OR__input_id, $wg__input_items, 0, 0, 1);
	_try($scope0_id, "#text/1", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_text_resume($scope3_id, "#text/0", input.id, $wg__input_id)}</p>`);
		$wi__input_id && _subscribe($input_id__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_id/6": 1
		}, "__tests__/template.marko", "4:2"), "__tests__/template.marko_3_input_id#0:5/subscribe", $wg__input_id);
		$wg__input_id || $wi__input_id && _resume_branch($scope3_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`loading ${_text_resume($scope2_id, "#text/0", input.id, $wg__input_id * 2)}`);
		_subscribe($wi__input_id && $input_id__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), "__tests__/template.marko_2_input_id#0:5/subscribe", $wg__input_id);
		$wg__input_id || _resume_branch($scope2_id);
	}, void 0, "__tests__/template.marko_2*content");
	_scope($scope0_id, {
		input_id: input.id,
		"ClosureScopes:input_id/6": $wi__input_id && $input_id__closures
	}, "__tests__/template.marko", 0, { input_id: ["input.id"] });
}, 1);
