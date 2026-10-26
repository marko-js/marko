// template.marko
_shells({
	a1: "a1;D ;<h5> </h5>",
	a0: "a0;D ;<h4> </h4>",
	a: "a !; ;<main></main>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_useA__OR__input_record = _write_guard($scope0_reason, 2), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 4), $cg__input_record = _client_guard($scope0_reason, 6), $cg__input_useA = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("a0", ({ record }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		const $scope2_page = _page_render();
		_html(`<h4>${_patch_text($scope2_id, "a", record.name)}</h4>`);
		$scope2_page && _scope($scope2_id, {});
	}, $scope0_id) };
	const Other = { content: _content_resume("a1", ({ record }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		const $scope3_page = _page_render();
		_html(`<h5>${_patch_text($scope3_id, "a", record.name)}</h5>`);
		$scope3_page && _scope($scope3_id, {});
	}, $scope0_id) };
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.useA ? Card : Other, { record: input.record }, 0, 0, $wg__input_useA__OR__input_record, void 0, 1, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a2");
			$scope0_page && _write_if($scope0_reason, 3) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 4);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5)) && input.useA,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.record,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6)) && Card,
		h: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6)) && Other
	}) : (_filled_guard($scope0_reason, 5) && ($cg__input_show || $cg__input_record) && _patch_fill($scope0_id, "va4", input.useA, !_server_guard($scope0_reason, 5)), ($cg__input_show || $cg__input_record) && _content_withhold(input.useA), _filled_guard($scope0_reason, 6) && ($cg__input_show || $cg__input_useA) && _patch_fill($scope0_id, "va5", input.record, !_server_guard($scope0_reason, 6)), ($cg__input_show || $cg__input_useA) && _content_withhold(input.record));
}, 1);
