// template.marko
_shells({
	a0: "a0,",
	a1: "a1,",
	a: "a; ;<main></main>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_useA__OR__input_record = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 4), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("a1", ({ record }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<h4>${_patch_text($scope2_id, "a", record.name)}</h4>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	const Other = { content: _content_resume("a0", ({ record }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<h5>${_patch_text($scope3_id, "a", record.name)}</h5>`);
		_scope($scope3_id, {});
	}, $scope0_id) };
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.useA ? Card : Other, { record: input.record }, 0, 0, $wg__input_useA__OR__input_record, void 0, 1, $scope0_reason, 2);
			_write_if($scope0_reason, 3) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 4);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_patch_write($scope0_id, "wg", Card, 1);
	_patch_write($scope0_id, "wh", Other, 1);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.useA,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.record,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && Card,
		h: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && Other
	}) : (_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va3", input.useA, !_server_guard($scope0_reason, 5)), _client_guard($scope0_reason, 4) && _content_withhold(input.useA), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va4", input.record, !_server_guard($scope0_reason, 6)), _client_guard($scope0_reason, 4) && _content_withhold(input.record));
}, 1);
